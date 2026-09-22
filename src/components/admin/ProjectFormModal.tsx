import { useState, useEffect } from "react";
import { X, Upload, Image as ImageIcon, Plus, Trash2, Check, ExternalLink, Sparkles } from "lucide-react";
import { ProjectItem } from "../../types";

interface ProjectFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (projectType: 'standard' | '360', project: ProjectItem) => Promise<void>;
  onUploadImage: (file: File) => Promise<string>;
  initialProject?: ProjectItem | null;
  defaultType?: 'standard' | '360';
}

const CATEGORIES = [
  "Architectural Design",
  "Interior & Exterior Design",
  "Interior Design",
  "Landscape Design",
  "MEP Design",
  "3D Visualization",
];

export default function ProjectFormModal({
  isOpen,
  onClose,
  onSave,
  onUploadImage,
  initialProject,
  defaultType = 'standard',
}: ProjectFormModalProps) {
  const [projectType, setProjectType] = useState<'standard' | '360'>(defaultType);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [imageUrl, setImageUrl] = useState("");
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [location, setLocation] = useState("Mogadishu, SO");
  const [details, setDetails] = useState("");
  const [externalLink, setExternalLink] = useState("");
  const [images, setImages] = useState<string[]>([]);
  
  const [uploadingThumbnail, setUploadingThumbnail] = useState(false);
  const [uploadingGallery, setUploadingGallery] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (initialProject) {
      setTitle(initialProject.title || "");
      setSubtitle(initialProject.subtitle || "");
      setCategory(initialProject.category || CATEGORIES[0]);
      setImageUrl(initialProject.imageUrl || "");
      setYear(initialProject.year || new Date().getFullYear().toString());
      setLocation(initialProject.location || "Mogadishu, SO");
      setDetails(initialProject.details || "");
      setExternalLink(initialProject.externalLink || "");
      setImages(initialProject.images || (initialProject.imageUrl ? [initialProject.imageUrl] : []));
      setProjectType(initialProject.externalLink ? '360' : defaultType);
    } else {
      setTitle("");
      setSubtitle("");
      setCategory(CATEGORIES[0]);
      setImageUrl("");
      setYear(new Date().getFullYear().toString());
      setLocation("Mogadishu, SO");
      setDetails("");
      setExternalLink("");
      setImages([]);
      setProjectType(defaultType);
    }
    setError(null);
  }, [initialProject, defaultType, isOpen]);

  if (!isOpen) return null;

  // Handle main thumbnail upload
  const handleThumbnailUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingThumbnail(true);
    setError(null);
    try {
      const url = await onUploadImage(file);
      setImageUrl(url);
      if (!images.includes(url)) {
        setImages((prev) => [url, ...prev]);
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to upload thumbnail image.");
    } finally {
      setUploadingThumbnail(false);
    }
  };

  // Handle gallery image upload
  const handleGalleryUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    setUploadingGallery(true);
    setError(null);
    try {
      const uploadedUrls: string[] = [];
      for (const file of files) {
        const url = await onUploadImage(file);
        uploadedUrls.push(url);
      }
      setImages((prev) => [...prev, ...uploadedUrls]);
      // If thumbnail is empty, default to first uploaded image
      if (!imageUrl && uploadedUrls.length > 0) {
        setImageUrl(uploadedUrls[0]);
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to upload gallery images.");
    } finally {
      setUploadingGallery(false);
    }
  };

  const handleRemoveGalleryImage = (indexToRemove: number) => {
    const removedUrl = images[indexToRemove];
    const newImages = images.filter((_, idx) => idx !== indexToRemove);
    setImages(newImages);

    // If removed image was thumbnail, fallback to first image in remaining list
    if (imageUrl === removedUrl) {
      setImageUrl(newImages[0] || "");
    }
  };

  const handleSetAsThumbnail = (url: string) => {
    setImageUrl(url);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Project title is required.");
      return;
    }
    if (!imageUrl) {
      setError("A project thumbnail photo is required. Please upload or select an image.");
      return;
    }

    setSaving(true);
    setError(null);

    const updatedProject: ProjectItem = {
      id: initialProject?.id || title.toLowerCase().replace(/[^a-z0-9]/g, '-') + '-' + Date.now(),
      title: title.trim(),
      subtitle: subtitle.trim(),
      category,
      imageUrl,
      year: year.trim(),
      location: location.trim(),
      details: details.trim(),
      images: images.length > 0 ? images : [imageUrl],
      externalLink: projectType === '360' ? externalLink.trim() : undefined,
    };

    try {
      await onSave(projectType, updatedProject);
      onClose();
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to save project.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#0d0d0d] border border-[#332211] rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Header Strip */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#221810] bg-[#121212]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#1c150c] border border-[#C58E5C]/30 text-[#C58E5C]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-serif font-medium text-white">
                {initialProject ? "Edit Project Details & Photos" : "Create New Architectural Project"}
              </h3>
              <p className="text-xs text-gray-400">
                {initialProject ? `ID: ${initialProject.id}` : "Add a new showcase entry to Biyaano portfolio"}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#222] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6 max-h-[80vh] overflow-y-auto custom-scrollbar">
          {error && (
            <div className="p-4 rounded-xl bg-red-950/40 border border-red-800/50 text-red-300 text-sm">
              {error}
            </div>
          )}

          {/* Project Type Selector */}
          <div className="p-4 rounded-xl bg-[#141414] border border-[#222]">
            <label className="block text-xs uppercase tracking-wider text-gray-400 mb-3 font-semibold">
              Project Category Type
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setProjectType('standard')}
                className={`py-3 px-4 rounded-xl text-sm font-medium border flex items-center justify-center gap-2 transition-all ${
                  projectType === 'standard'
                    ? 'bg-[#C58E5C] text-black border-[#C58E5C] font-semibold'
                    : 'bg-[#1a1a1a] text-gray-300 border-[#2b2b2b] hover:border-[#444]'
                }`}
              >
                <ImageIcon className="w-4 h-4" />
                <span>Standard Portfolio Project</span>
              </button>

              <button
                type="button"
                onClick={() => setProjectType('360')}
                className={`py-3 px-4 rounded-xl text-sm font-medium border flex items-center justify-center gap-2 transition-all ${
                  projectType === '360'
                    ? 'bg-[#C58E5C] text-black border-[#C58E5C] font-semibold'
                    : 'bg-[#1a1a1a] text-gray-300 border-[#2b2b2b] hover:border-[#444]'
                }`}
              >
                <ExternalLink className="w-4 h-4" />
                <span>360° Virtual Tour Project</span>
              </button>
            </div>
          </div>

          {/* Basic Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2 font-medium">
                Project Title *
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Marina Villa Project"
                className="w-full bg-[#141414] border border-[#262626] focus:border-[#C58E5C] text-white text-sm rounded-xl px-4 py-3 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2 font-medium">
                Subtitle / Tagline
              </label>
              <input
                type="text"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                placeholder="e.g. A Heritage-Modern Fusion Residence"
                className="w-full bg-[#141414] border border-[#262626] focus:border-[#C58E5C] text-white text-sm rounded-xl px-4 py-3 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2 font-medium">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-[#141414] border border-[#262626] focus:border-[#C58E5C] text-white text-sm rounded-xl px-4 py-3 outline-none"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat} className="bg-[#141414] text-white">
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2 font-medium">
                Year & Location
              </label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  placeholder="2026"
                  className="w-full bg-[#141414] border border-[#262626] focus:border-[#C58E5C] text-white text-sm rounded-xl px-3 py-3 outline-none"
                />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Mogadishu, SO"
                  className="w-full bg-[#141414] border border-[#262626] focus:border-[#C58E5C] text-white text-sm rounded-xl px-3 py-3 outline-none"
                />
              </div>
            </div>
          </div>

          {/* 360 Tour External Link (if type is 360) */}
          {projectType === '360' && (
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#C58E5C] mb-2 font-medium flex items-center gap-1.5">
                <ExternalLink className="w-3.5 h-3.5" />
                360° Virtual Tour Web Link (GitHub Pages or Custom URL)
              </label>
              <input
                type="url"
                value={externalLink}
                onChange={(e) => setExternalLink(e.target.value)}
                placeholder="https://arch-hussein.github.io/MU-CLUSTER/"
                className="w-full bg-[#141414] border border-[#C58E5C]/40 focus:border-[#C58E5C] text-white text-sm rounded-xl px-4 py-3 outline-none"
              />
            </div>
          )}

          {/* Project Details / Description */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2 font-medium">
              Project Details & Architectural Description
            </label>
            <textarea
              rows={4}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Describe the spatial layout, material palette, structural concept, facade treatments, and architectural narrative..."
              className="w-full bg-[#141414] border border-[#262626] focus:border-[#C58E5C] text-white text-sm rounded-xl p-4 outline-none resize-y"
            />
          </div>

          {/* Project Thumbnail Image Section */}
          <div className="p-5 rounded-2xl bg-[#141414] border border-[#262626] space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                  <ImageIcon className="w-4 h-4 text-[#C58E5C]" />
                  Project Main Thumbnail Photo *
                </h4>
                <p className="text-xs text-gray-400 mt-0.5">
                  This photo will be displayed on the portfolio card and section headers.
                </p>
              </div>

              <label className="cursor-pointer px-4 py-2 rounded-xl bg-[#221810] border border-[#C58E5C]/40 hover:bg-[#C58E5C] hover:text-black text-xs font-semibold uppercase tracking-wider text-[#C58E5C] flex items-center gap-2 transition-all">
                <Upload className="w-3.5 h-3.5" />
                <span>{uploadingThumbnail ? "Uploading..." : "Upload New Photo"}</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleThumbnailUpload}
                  disabled={uploadingThumbnail}
                  className="hidden"
                />
              </label>
            </div>

            {/* Thumbnail Preview & URL Box */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
              <div className="relative aspect-video sm:aspect-square bg-black rounded-xl overflow-hidden border border-[#332211]">
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt="Thumbnail Preview"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-gray-600 p-4 text-center">
                    <ImageIcon className="w-8 h-8 mb-2 stroke-1" />
                    <span className="text-xs">No Thumbnail Selected</span>
                  </div>
                )}
                {imageUrl && (
                  <div className="absolute top-2 left-2 px-2 py-1 bg-black/70 backdrop-blur-md rounded text-[10px] uppercase font-bold text-[#C58E5C] border border-[#C58E5C]/40">
                    Active Thumbnail
                  </div>
                )}
              </div>

              <div className="sm:col-span-2 space-y-2">
                <label className="block text-[11px] uppercase tracking-wider text-gray-400 font-medium">
                  Image File Path or URL
                </label>
                <input
                  type="text"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="/projects/marina-villa/marina-3.jpg"
                  className="w-full bg-[#0a0a0a] border border-[#2b2b2b] focus:border-[#C58E5C] text-white text-xs rounded-xl p-3 outline-none font-mono"
                />
                <p className="text-[11px] text-gray-500">
                  Uploading an image automatically sets this path and saves the file in <code className="text-gold">public/projects/uploads/</code>.
                </p>
              </div>
            </div>
          </div>

          {/* Project Gallery Photos Section */}
          <div className="p-5 rounded-2xl bg-[#141414] border border-[#262626] space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                  <Plus className="w-4 h-4 text-[#C58E5C]" />
                  Project Gallery Photos ({images.length})
                </h4>
                <p className="text-xs text-gray-400 mt-0.5">
                  Additional photos shown in the high-resolution lightbox gallery.
                </p>
              </div>

              <label className="cursor-pointer px-4 py-2 rounded-xl bg-[#1f1f1f] border border-[#333] hover:border-[#C58E5C] text-xs font-semibold uppercase tracking-wider text-gray-300 flex items-center gap-2 transition-all">
                <Upload className="w-3.5 h-3.5 text-[#C58E5C]" />
                <span>{uploadingGallery ? "Uploading..." : "Add Gallery Photos"}</span>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleGalleryUpload}
                  disabled={uploadingGallery}
                  className="hidden"
                />
              </label>
            </div>

            {/* Images Grid */}
            {images.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {images.map((img, idx) => {
                  const isMain = img === imageUrl;
                  return (
                    <div
                      key={idx}
                      className={`relative aspect-square bg-black rounded-xl overflow-hidden border transition-all group ${
                        isMain ? 'border-[#C58E5C] ring-2 ring-[#C58E5C]/30' : 'border-[#262626] hover:border-[#444]'
                      }`}
                    >
                      <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover" />
                      
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-2">
                        <div className="flex justify-end">
                          <button
                            type="button"
                            onClick={() => handleRemoveGalleryImage(idx)}
                            className="p-1.5 rounded-lg bg-red-900/80 hover:bg-red-700 text-white transition-colors"
                            title="Remove photo"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {!isMain && (
                          <button
                            type="button"
                            onClick={() => handleSetAsThumbnail(img)}
                            className="w-full py-1 rounded bg-[#C58E5C] hover:bg-[#b07b49] text-black text-[10px] font-bold uppercase tracking-wider transition-colors"
                          >
                            Make Thumbnail
                          </button>
                        )}
                      </div>

                      {isMain && (
                        <div className="absolute bottom-1 left-1 right-1 py-0.5 bg-[#C58E5C] text-black text-[9px] font-bold uppercase tracking-wider text-center rounded">
                          Thumbnail
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-6 border border-dashed border-[#262626] rounded-xl text-xs text-gray-500">
                No gallery photos added yet. Upload photos above to expand the project gallery.
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-[#1f1f1f] flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="py-3 px-5 rounded-xl border border-[#333] hover:border-[#555] text-gray-300 font-medium text-xs uppercase tracking-wider transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving || uploadingThumbnail || uploadingGallery}
              className="py-3 px-8 rounded-xl bg-[#C58E5C] hover:bg-[#b07b49] text-black font-semibold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg shadow-[#C58E5C]/20 disabled:opacity-50"
            >
              {saving ? (
                <span className="inline-block w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Check className="w-4 h-4" />
                  <span>{initialProject ? "Save Changes" : "Create Project"}</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
