const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'biyaano_secret_key_2026_architects';

// Admin credentials
const ADMIN_USER = process.env.ADMIN_USER || 'admin';
const ADMIN_PASS = process.env.ADMIN_PASS || 'biyaano2026';

// CORS: allow Vercel frontend + localhost dev
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || '';
app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (e.g. curl, mobile apps)
    if (!origin) return callback(null, true);
    // Allow localhost dev
    if (origin.startsWith('http://localhost') || origin.startsWith('http://192.168')) {
      return callback(null, true);
    }
    // Allow any *.vercel.app domain, or the explicitly set ALLOWED_ORIGIN
    if (origin.endsWith('.vercel.app') || (ALLOWED_ORIGIN && origin === ALLOWED_ORIGIN)) {
      return callback(null, true);
    }
    callback(new Error(`CORS: origin ${origin} not allowed`));
  },
  credentials: true,
}));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));


// Database path
const DB_FILE = path.join(__dirname, 'data', 'projects.json');
const UPLOAD_DIR = path.join(__dirname, '..', 'public', 'projects', 'uploads');

// Ensure upload directory exists
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOAD_DIR);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname) || '.jpg';
    const cleanBasename = path.basename(file.originalname, ext).replace(/[^a-zA-Z0-9]/g, '_');
    cb(null, `${cleanBasename}-${uniqueSuffix}${ext}`);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 25 * 1024 * 1024 } // 25MB max file size
});

// Helper functions for Database
function readDB() {
  try {
    if (!fs.existsSync(DB_FILE)) {
      return { projects: [], projects360: [] };
    }
    const data = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading database file:', error);
    return { projects: [], projects360: [] };
  }
}

function writeDB(data) {
  try {
    const dir = path.dirname(DB_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error('Error writing database file:', error);
    return false;
  }
}

// Auth Middleware
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Access denied. No token provided.' });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid or expired token.' });
    req.user = user;
    next();
  });
}

// --- API ENDPOINTS ---

// 1. Admin Login
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;
  if (username === ADMIN_USER && password === ADMIN_PASS) {
    const token = jwt.sign({ username, role: 'admin' }, JWT_SECRET, { expiresIn: '7d' });
    return res.json({ success: true, token, username });
  }
  return res.status(401).json({ success: false, error: 'Invalid username or password' });
});

// 2. Verify Admin Token
app.get('/api/admin/verify', authenticateToken, (req, res) => {
  res.json({ valid: true, user: req.user });
});

// 3. Get All Projects (Standard + 360 Tours)
app.get('/api/projects', (req, res) => {
  const db = readDB();
  res.json(db);
});

// 4. File Upload Endpoint
app.post('/api/upload', authenticateToken, upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  const fileUrl = `/projects/uploads/${req.file.filename}`;
  res.json({ success: true, url: fileUrl });
});

// 5. Create Project (Standard or 360)
app.post('/api/projects', authenticateToken, (req, res) => {
  const { projectType, project } = req.body; // projectType: 'standard' | '360'
  if (!project || !project.title) {
    return res.status(400).json({ error: 'Project details and title are required.' });
  }

  const db = readDB();
  const collectionKey = projectType === '360' ? 'projects360' : 'projects';
  
  // Assign ID if missing
  if (!project.id) {
    project.id = project.title.toLowerCase().replace(/[^a-z0-9]/g, '-') + '-' + Date.now();
  }

  db[collectionKey] = [project, ...(db[collectionKey] || [])];
  
  if (writeDB(db)) {
    return res.json({ success: true, project, db });
  } else {
    return res.status(500).json({ error: 'Failed to save project.' });
  }
});

// 6. Update Project
app.put('/api/projects/:id', authenticateToken, (req, res) => {
  const { id } = req.params;
  const { projectType, project } = req.body; // projectType: 'standard' | '360'
  const db = readDB();
  
  const targetKey = projectType === '360' ? 'projects360' : 'projects';
  const otherKey = projectType === '360' ? 'projects' : 'projects360';

  // Check if project exists in target or other key (in case type changed)
  let foundInTarget = db[targetKey].findIndex(p => p.id === id);
  let foundInOther = db[otherKey].findIndex(p => p.id === id);

  if (foundInTarget !== -1) {
    db[targetKey][foundInTarget] = { ...db[targetKey][foundInTarget], ...project, id };
  } else if (foundInOther !== -1) {
    // Moved type
    db[otherKey].splice(foundInOther, 1);
    db[targetKey].unshift({ ...project, id });
  } else {
    // If not found anywhere, push to target
    db[targetKey].unshift({ ...project, id });
  }

  if (writeDB(db)) {
    return res.json({ success: true, project: { ...project, id }, db });
  } else {
    return res.status(500).json({ error: 'Failed to update project.' });
  }
});

// 7. Delete Project
app.delete('/api/projects/:id', authenticateToken, (req, res) => {
  const { id } = req.params;
  const db = readDB();

  db.projects = db.projects.filter(p => p.id !== id);
  db.projects360 = db.projects360.filter(p => p.id !== id);

  if (writeDB(db)) {
    return res.json({ success: true, db });
  } else {
    return res.status(500).json({ error: 'Failed to delete project.' });
  }
});

// Serve uploads statically
app.use('/projects/uploads', express.static(UPLOAD_DIR));

// Serve React production build statically
const DIST_DIR = path.join(__dirname, '..', 'dist');
if (fs.existsSync(DIST_DIR)) {
  app.use(express.static(DIST_DIR));
  app.use((req, res, next) => {
    if (!req.path.startsWith('/api')) {
      return res.sendFile(path.join(DIST_DIR, 'index.html'));
    }
    next();
  });
}

if (process.env.NODE_ENV !== 'production' || require.main === module) {
  app.listen(PORT, () => {
    console.log(`Biyaano Backend Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;
