import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import VirtualTours360 from "./components/VirtualTours360";
import Clients from "./components/Clients";
import Lightbox from "./components/Lightbox";
import About from "./components/About";
import TeamMembers from "./components/TeamMembers";
import Contact from "./components/Contact";
import ExportModal from "./components/ExportModal";
import AdminLogin from "./components/admin/AdminLogin";
import AdminDashboard from "./components/admin/AdminDashboard";
import { useProjects } from "./hooks/useProjects";
import { ProjectItem } from "./types";
import { Instagram, Youtube, Lock } from "lucide-react";
import TiktokIcon from "./components/TiktokIcon";

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isAdminView, setIsAdminView] = useState(false);
  const [adminToken, setAdminToken] = useState<string | null>(() => {
    const token = localStorage.getItem("biyaano_admin_token");
    if (!token || token === "null" || token === "undefined" || token.trim() === "") return null;
    return token;
  });
  const [adminUsername, setAdminUsername] = useState<string>(() => {
    return localStorage.getItem("biyaano_admin_user") || "admin";
  });

  const {
    projects,
    projects360,
    isBackendConnected,
    fetchProjects,
    addProject,
    updateProject,
    deleteProject,
    uploadImage,
  } = useProjects();

  // Sync hash changes (#admin) with isAdminView
  useEffect(() => {
    const handleHashChange = () => {
      setIsAdminView(window.location.hash === "#admin");
    };

    setIsAdminView(window.location.hash === "#admin");
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Smooth scroll configuration for standard hash links
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!target) return;
      const targetId = target.getAttribute("href");
      if (!targetId || targetId === "#") return;
      if (targetId === "#admin") {
        e.preventDefault();
        window.location.hash = "#admin";
        setIsAdminView(true);
        return;
      }
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // Handle Lightbox cycles
  const handlePrevProject = () => {
    if (!selectedProject) return;
    const currentIndex = (projects || []).findIndex((p) => p.id === selectedProject.id);
    if (currentIndex !== -1 && projects.length > 0) {
      const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
      setSelectedProject(projects[prevIndex]);
    }
  };

  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = (projects || []).findIndex((p) => p.id === selectedProject.id);
    if (currentIndex !== -1 && projects.length > 0) {
      const nextIndex = (currentIndex + 1) % projects.length;
      setSelectedProject(projects[nextIndex]);
    }
  };

  const handleLoginSuccess = (token: string, username: string) => {
    setAdminToken(token);
    setAdminUsername(username);
    setIsAdminView(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("biyaano_admin_token");
    localStorage.removeItem("biyaano_admin_user");
    setAdminToken(null);
    setIsAdminView(false);
    window.location.hash = "";
  };

  const openAdmin = () => {
    window.location.hash = "#admin";
    setIsAdminView(true);
  };

  // Render Admin View if active
  if (isAdminView) {
    if (!adminToken) {
      return (
        <div className="bg-[#030303] min-h-screen text-white font-sans selection:bg-[#C58E5C] selection:text-black flex items-center justify-center relative p-4">
          <div className="absolute inset-0 draft-grid opacity-[0.05] pointer-events-none" />
          <AdminLogin
            onLoginSuccess={handleLoginSuccess}
            onClose={() => {
              setIsAdminView(false);
              window.location.hash = "";
            }}
          />
        </div>
      );
    }

    return (
      <div className="bg-[#030303] min-h-screen text-white font-sans selection:bg-[#C58E5C] selection:text-black antialiased relative overflow-x-hidden">
        <AdminDashboard
          token={adminToken}
          username={adminUsername}
          projects={projects || []}
          projects360={projects360 || []}
          isBackendConnected={isBackendConnected}
          onLogout={handleLogout}
          onAddProject={async (type, proj) => {
            await addProject(type, proj, adminToken);
          }}
          onUpdateProject={async (type, proj) => {
            await updateProject(type, proj, adminToken);
          }}
          onDeleteProject={async (id) => {
            await deleteProject(id, adminToken);
          }}
          onUploadImage={async (file) => {
            return await uploadImage(file, adminToken);
          }}
          onRefresh={fetchProjects}
          onBackToSite={() => {
            setIsAdminView(false);
            window.location.hash = "";
          }}
        />
      </div>
    );
  }

  return (
    <div className="bg-[#030303] min-h-screen text-white font-sans selection:bg-[#C58E5C] selection:text-black antialiased relative overflow-x-hidden">
      {/* 1. Sticky Nav bar */}
      <Navbar
        onOpenExport={() => setIsExportOpen(true)}
        onOpenAdmin={openAdmin}
      />

      {/* 2. Hero viewport */}
      <Hero />

      {/* 3. Services Column Grid */}
      <Services />

      {/* Featured Clients Carousel */}
      <Clients />

      {/* 4. Filterable Projects Gallery */}
      <Projects
        projects={projects}
        onSelectProject={(project) => setSelectedProject(project)}
      />

      {/* 4b. Dedicated 360° Virtual Tours Section */}
      <VirtualTours360 projects360={projects360} />

      {/* 5. About Strip */}
      <About />

      {/* 6. Team Members */}
      <TeamMembers />

      {/* 7. Clean Interactive Form Column */}
      <Contact />

      {/* Footer Branding line */}
      <footer className="bg-transparent py-8 border-t border-[#332211] text-xs text-gray-600 uppercase tracking-widest">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
            <img src="/logo.png" alt="Biyaano Architects" className="w-[120px] h-auto drop-shadow-sm opacity-80" />
            <span>© 2026 Biyaano Architects</span>
            <div className="flex gap-4 border-t sm:border-t-0 sm:border-l border-[#222] pt-4 sm:pt-0 sm:pl-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gold transition-colors duration-300"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gold transition-colors duration-300"
                title="TikTok"
              >
                <TiktokIcon className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gold transition-colors duration-300"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-gold transition-colors duration-300">
              Home
            </a>
            <a href="#services" className="hover:text-gold transition-colors duration-300">
              Expertise
            </a>
            <a href="#projects" className="hover:text-gold transition-colors duration-300">
              Spaces
            </a>
            <a href="#tours360" className="hover:text-gold transition-colors duration-300">
              360 Tours
            </a>
            <button
              onClick={openAdmin}
              className="text-[#C58E5C] hover:text-white transition-colors duration-300 font-semibold flex items-center gap-1 cursor-pointer"
            >
              <Lock className="w-3 h-3" />
              <span>Admin</span>
            </button>
          </div>
        </div>
      </footer>

      {/* Luxurious Image Lightbox Frame */}
      <Lightbox
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onPrev={handlePrevProject}
        onNext={handleNextProject}
      />

      {/* Floating Single-file Export ledger */}
      <ExportModal isOpen={isExportOpen} onClose={() => setIsExportOpen(false)} />
    </div>
  );
}
