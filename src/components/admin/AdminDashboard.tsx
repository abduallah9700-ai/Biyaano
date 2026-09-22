import { useState } from "react";
import { 
  Plus, Edit3, Trash2, LogOut, 
  Search, ShieldCheck, ArrowLeft, RefreshCw, LayoutGrid, Box,
  AlertCircle
} from "lucide-react";
import { ProjectItem } from "../../types";
import ProjectFormModal from "./ProjectFormModal";

interface AdminDashboardProps {
  token: string;
  username: string;
  projects: ProjectItem[];
  projects360: ProjectItem[];
  isBackendConnected: boolean;
  onLogout: () => void;
  onAddProject: (projectType: 'standard' | '360', project: ProjectItem) => Promise<void>;
  onUpdateProject: (projectType: 'standard' | '360', project: ProjectItem) => Promise<void>;
  onDeleteProject: (id: string) => Promise<void>;
  onUploadImage: (file: File) => Promise<string>;
  onRefresh: () => void;
  onBackToSite: () => void;
}

export default function AdminDashboard({
  username,
  projects,
  projects360,
  isBackendConnected,
  onLogout,
  onAddProject,
  onUpdateProject,
  onDeleteProject,
  onUploadImage,
  onRefresh,
  onBackToSite,
}: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<'standard' | '360'>('standard');
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<ProjectItem | null>(null);
  
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentList = activeTab === 'standard' ? projects : projects360;

  // Filter projects by search and category
  const filteredProjects = (currentList || []).filter((p) => {
    if (!p) return false;
    const title = p.title || "";
    const subtitle = p.subtitle || "";
    const location = p.location || "";
    const details = p.details || "";
    const query = (searchQuery || "").toLowerCase();

    const matchesSearch =
      title.toLowerCase().includes(query) ||
      subtitle.toLowerCase().includes(query) ||
      location.toLowerCase().includes(query) ||
      details.toLowerCase().includes(query);

    const matchesCategory = selectedCategory === "ALL" || p.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleOpenAddModal = () => {
    setEditingProject(null);
    setIsFormOpen(true);
  };

  const handleOpenEditModal = (project: ProjectItem) => {
    setEditingProject(project);
    setIsFormOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!deletingId) return;
    setIsDeleting(true);
    try {
      await onDeleteProject(deletingId);
      setDeletingId(null);
    } catch (err) {
      console.error("Delete failed:", err);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleSaveProject = async (type: 'standard' | '360', project: ProjectItem) => {
    if (editingProject) {
      await onUpdateProject(type, project);
    } else {
      await onAddProject(type, project);
    }
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-[#C58E5C] selection:text-black">
      {/* Top Header Navigation */}
      <header className="sticky top-0 z-40 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#221810]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={onBackToSite}
              className="p-2 rounded-xl bg-[#141414] border border-[#262626] hover:border-[#C58E5C] text-gray-400 hover:text-white transition-all group"
              title="Return to Public Website"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </button>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-serif font-light tracking-wide text-white">
                  Biyaano <span className="text-[#C58E5C] font-semibold italic">Admin Dashboard</span>
                </h1>
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider border ${
                  isBackendConnected 
                    ? 'bg-emerald-950/60 text-emerald-400 border-emerald-800/60'
                    : 'bg-amber-950/60 text-amber-400 border-amber-800/60'
                }`}>
                  {isBackendConnected ? "Live Backend Sync" : "Local Data Mode"}
                </span>
              </div>
              <p className="text-xs text-gray-400">
                Logged in as <span className="text-[#C58E5C] font-mono">{username}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onRefresh}
              className="p-2.5 rounded-xl bg-[#141414] border border-[#262626] hover:border-[#C58E5C] text-gray-300 hover:text-[#C58E5C] text-xs font-medium flex items-center gap-2 transition-all"
              title="Reload project data from server"
            >
              <RefreshCw className="w-4 h-4" />
              <span className="hidden sm:inline">Refresh Data</span>
            </button>

            <button
              onClick={handleOpenAddModal}
              className="py-2.5 px-5 rounded-xl bg-[#C58E5C] hover:bg-[#b07b49] text-black font-semibold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg shadow-[#C58E5C]/20"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Project</span>
            </button>

            <button
              onClick={onLogout}
              className="p-2.5 rounded-xl bg-[#1c1212] border border-red-900/40 hover:bg-red-950/60 text-red-400 hover:text-red-300 text-xs font-medium flex items-center gap-2 transition-all"
              title="Log out from dashboard"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        
        {/* Metric Cards Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-[#221810] flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 font-medium">Standard Projects</p>
              <p className="text-3xl font-serif text-[#C58E5C] mt-2 font-semibold">{(projects || []).length}</p>
            </div>
            <div className="p-4 rounded-xl bg-[#18120c] border border-[#C58E5C]/30 text-[#C58E5C]">
              <LayoutGrid className="w-6 h-6" />
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-[#221810] flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 font-medium">360° Virtual Tours</p>
              <p className="text-3xl font-serif text-[#C58E5C] mt-2 font-semibold">{(projects360 || []).length}</p>
            </div>
            <div className="p-4 rounded-xl bg-[#18120c] border border-[#C58E5C]/30 text-[#C58E5C]">
              <Box className="w-6 h-6" />
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-[#221810] flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 font-medium">Total Portfolio Items</p>
              <p className="text-3xl font-serif text-white mt-2 font-semibold">
                {(projects || []).length + (projects360 || []).length}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#141414] border border-[#333] text-gray-300">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
            </div>
          </div>
        </div>

        {/* Tab & Filter Bar */}
        <div className="p-4 rounded-2xl bg-[#0a0a0a] border border-[#221810] flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Section Tabs */}
          <div className="flex bg-[#141414] p-1.5 rounded-xl border border-[#262626] w-full md:w-auto">
            <button
              onClick={() => setActiveTab('standard')}
              className={`flex-1 md:flex-none py-2.5 px-6 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                activeTab === 'standard'
                  ? 'bg-[#C58E5C] text-black shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span>Standard Projects ({(projects || []).length})</span>
            </button>

            <button
              onClick={() => setActiveTab('360')}
              className={`flex-1 md:flex-none py-2.5 px-6 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                activeTab === '360'
                  ? 'bg-[#C58E5C] text-black shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Box className="w-4 h-4" />
              <span>360° Virtual Tours ({(projects360 || []).length})</span>
            </button>
          </div>

          {/* Search Input & Category Filter */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects..."
                className="w-full bg-[#141414] border border-[#262626] focus:border-[#C58E5C] text-white text-xs rounded-xl pl-9 pr-4 py-2.5 outline-none"
              />
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full sm:w-auto bg-[#141414] border border-[#262626] focus:border-[#C58E5C] text-white text-xs rounded-xl px-4 py-2.5 outline-none"
            >
              <option value="ALL">All Categories</option>
              <option value="Architectural Design">Architectural Design</option>
              <option value="Interior & Exterior Design">Interior & Exterior Design</option>
              <option value="Interior Design">Interior Design</option>
              <option value="Landscape Design">Landscape Design</option>
            </select>
          </div>
        </div>

        {/* Project Cards Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-[#0a0a0a] border border-[#221810] rounded-2xl overflow-hidden shadow-xl hover:border-[#C58E5C]/60 transition-all duration-300 flex flex-col"
              >
                {/* Thumbnail Image Container */}
                <div className="relative aspect-[16/10] bg-black overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/logo.png';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex justify-between items-center pointer-events-none">
                    <span className="px-2.5 py-1 bg-black/80 backdrop-blur-md rounded-lg text-[10px] uppercase font-bold text-[#C58E5C] border border-[#C58E5C]/30">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-1 bg-black/80 backdrop-blur-md rounded-lg text-[10px] font-mono text-gray-300 border border-[#333]">
                      {project.year}
                    </span>
                  </div>

                  {project.externalLink && (
                    <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-[#C58E5C] text-black font-bold text-[10px] uppercase tracking-wider rounded-lg flex items-center gap-1 shadow-md">
                      <Box className="w-3 h-3" />
                      <span>360° Virtual Tour</span>
                    </div>
                  )}
                </div>

                {/* Card Info */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-serif font-medium text-white group-hover:text-[#C58E5C] transition-colors">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="text-xs text-[#C58E5C]/80 mt-1 italic font-serif">
                        {project.subtitle}
                      </p>
                    )}
                    <p className="text-xs text-gray-400 mt-2 line-clamp-3 leading-relaxed">
                      {project.details}
                    </p>
                  </div>

                  {/* Additional Metadata */}
                  <div className="pt-3 border-t border-[#1f1610] text-[11px] text-gray-500 flex justify-between items-center">
                    <span>Location: {project.location}</span>
                    <span>Photos: {project.images?.length || 1}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleOpenEditModal(project)}
                      className="py-2.5 px-3 rounded-xl bg-[#141414] hover:bg-[#1f1710] border border-[#2b2b2b] hover:border-[#C58E5C] text-gray-200 hover:text-[#C58E5C] text-xs font-medium flex items-center justify-center gap-1.5 transition-all"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>Edit & Photos</span>
                    </button>

                    <button
                      onClick={() => setDeletingId(project.id)}
                      className="py-2.5 px-3 rounded-xl bg-[#171010] hover:bg-red-950/50 border border-red-900/30 hover:border-red-700 text-red-400 hover:text-red-300 text-xs font-medium flex items-center justify-center gap-1.5 transition-all"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center bg-[#0a0a0a] border border-[#221810] rounded-2xl p-8 space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#18120c] border border-[#C58E5C]/30 text-[#C58E5C] mx-auto flex items-center justify-center">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-serif text-white">No projects found matching criteria</h3>
            <p className="text-xs text-gray-400 max-w-sm mx-auto">
              Try adjusting your search terms or filter selections, or create a new project.
            </p>
            <button
              onClick={handleOpenAddModal}
              className="py-2.5 px-6 rounded-xl bg-[#C58E5C] hover:bg-[#b07b49] text-black font-semibold text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-all shadow-lg"
            >
              <Plus className="w-4 h-4" />
              <span>Create New Project</span>
            </button>
          </div>
        )}
      </main>

      {/* Add / Edit Project Modal */}
      <ProjectFormModal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSave={handleSaveProject}
        onUploadImage={onUploadImage}
        initialProject={editingProject}
        defaultType={activeTab}
      />

      {/* Delete Confirmation Modal */}
      {deletingId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="w-full max-w-md bg-[#0e0e0e] border border-red-900/40 rounded-2xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center gap-3 text-red-400">
              <AlertCircle className="w-6 h-6" />
              <h3 className="text-lg font-serif font-medium text-white">Confirm Deletion</h3>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              Are you sure you want to delete project <code className="text-[#C58E5C] font-mono">{deletingId}</code>? This action cannot be undone.
            </p>
            <div className="pt-4 flex justify-end gap-3 border-t border-[#222]">
              <button
                onClick={() => setDeletingId(null)}
                className="py-2.5 px-4 rounded-xl border border-[#333] hover:border-[#555] text-xs font-medium uppercase text-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                disabled={isDeleting}
                className="py-2.5 px-5 rounded-xl bg-red-800 hover:bg-red-700 text-white text-xs font-semibold uppercase flex items-center gap-2 transition-all disabled:opacity-50"
              >
                {isDeleting ? (
                  <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Trash2 className="w-4 h-4" />
                    <span>Delete Project</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
