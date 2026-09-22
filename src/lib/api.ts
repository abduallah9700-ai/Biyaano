/// <reference types="vite/client" />

/**
 * Shared API base URL helper.
 *
 * - Local dev:  VITE_API_BASE is unset → uses '' (empty string),
 *   so fetch('/api/...') goes through Vite's proxy to localhost:5000
 *
 * - Production: VITE_API_BASE = 'https://your-app.up.railway.app'
 *   so fetch() calls the Railway backend directly with CORS.
 */
export const API_BASE: string = (import.meta.env.VITE_API_BASE as string) ?? '';

export function apiUrl(path: string): string {
  // path should start with /api/...
  return `${API_BASE}${path}`;
}
