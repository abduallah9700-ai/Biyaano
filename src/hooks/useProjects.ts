import { useState, useEffect, useCallback } from 'react';
import { ProjectItem } from '../types';
import { PROJECTS as STATIC_PROJECTS, PROJECTS_360 as STATIC_PROJECTS_360 } from '../data/portfolioData';
import { apiUrl } from '../lib/api';

export function useProjects() {
  const [projects, setProjects] = useState<ProjectItem[]>(STATIC_PROJECTS);
  const [projects360, setProjects360] = useState<ProjectItem[]>(STATIC_PROJECTS_360);
  const [loading, setLoading] = useState(true);
  const [isBackendConnected, setIsBackendConnected] = useState(false);

  const fetchProjects = useCallback(async () => {
    try {
      const res = await fetch(apiUrl('/api/projects'));
      if (res.ok) {
        const data = await res.json();
        if (data.projects && Array.isArray(data.projects)) {
          setProjects(data.projects);
        }
        if (data.projects360 && Array.isArray(data.projects360)) {
          setProjects360(data.projects360);
        }
        setIsBackendConnected(true);
      }
    } catch (err) {
      console.warn('Backend API unavailable, using local static data fallback:', err);
      setIsBackendConnected(false);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const uploadImage = async (file: File, token: string): Promise<string> => {
    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch(apiUrl('/api/upload'), {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || 'Failed to upload image');
    }

    const data = await res.json();
    return data.url;
  };

  const addProject = async (projectType: 'standard' | '360', project: ProjectItem, token: string) => {
    // Optimistic UI update
    if (projectType === '360') {
      setProjects360((prev) => [project, ...prev]);
    } else {
      setProjects((prev) => [project, ...prev]);
    }

    try {
      const res = await fetch(apiUrl('/api/projects'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ projectType, project }),
      });

      if (!res.ok) {
        throw new Error('Failed to save project to backend');
      }
      await fetchProjects();
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const updateProject = async (projectType: 'standard' | '360', project: ProjectItem, token: string) => {
    // Optimistic UI update
    if (projectType === '360') {
      setProjects360((prev) => prev.map((p) => (p.id === project.id ? project : p)));
    } else {
      setProjects((prev) => prev.map((p) => (p.id === project.id ? project : p)));
    }

    try {
      const res = await fetch(apiUrl(`/api/projects/${encodeURIComponent(project.id)}`), {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ projectType, project }),
      });

      if (!res.ok) {
        throw new Error('Failed to update project on backend');
      }
      await fetchProjects();
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const deleteProject = async (id: string, token: string) => {
    // Optimistic UI update
    setProjects((prev) => prev.filter((p) => p.id !== id));
    setProjects360((prev) => prev.filter((p) => p.id !== id));

    try {
      const res = await fetch(apiUrl(`/api/projects/${encodeURIComponent(id)}`), {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error('Failed to delete project on backend');
      }
      await fetchProjects();
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  return {
    projects,
    projects360,
    loading,
    isBackendConnected,
    fetchProjects,
    addProject,
    updateProject,
    deleteProject,
    uploadImage,
  };
}
