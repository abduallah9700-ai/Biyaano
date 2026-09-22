import { useState } from "react";
import { Lock, User, ShieldAlert, ArrowRight } from "lucide-react";
import { apiUrl } from "../../lib/api";

interface AdminLoginProps {
  onLoginSuccess: (token: string, username: string) => void;
  onClose?: () => void;
}

export default function AdminLogin({ onLoginSuccess, onClose }: AdminLoginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch(apiUrl("/api/admin/login"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        localStorage.setItem("biyaano_admin_token", data.token);
        localStorage.setItem("biyaano_admin_user", data.username);
        onLoginSuccess(data.token, data.username);
      } else {
        setError(data.error || "Invalid username or password");
      }
    } catch (err) {
      console.error("Login request failed:", err);
      setError("Unable to connect to backend server. Make sure server is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md bg-[#0a0a0a] border border-[#332211] rounded-2xl shadow-2xl overflow-hidden">
        {/* Top Gold Accent Line */}
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#C58E5C] to-transparent" />

        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#18120c] border border-[#C58E5C]/30 mb-4 shadow-lg">
              <Lock className="w-8 h-8 text-[#C58E5C]" />
            </div>
            <h2 className="text-2xl font-serif font-light tracking-wide text-white">
              Biyaano <span className="text-[#C58E5C] italic font-semibold">Admin</span>
            </h2>
            <p className="text-xs text-gray-400 mt-2 uppercase tracking-widest">
              Architectural Portal Authorization
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 rounded-xl bg-red-950/40 border border-red-800/50 flex items-start gap-3 text-red-300 text-sm">
              <ShieldAlert className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Authentication Error</p>
                <p className="text-xs text-red-300/80 mt-1">{error}</p>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2 font-medium">
                Username
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin"
                  className="w-full bg-[#141414] border border-[#262626] focus:border-[#C58E5C] text-white text-sm rounded-xl pl-10 pr-4 py-3 outline-none transition-all duration-300 placeholder:text-gray-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2 font-medium">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-[#141414] border border-[#262626] focus:border-[#C58E5C] text-white text-sm rounded-xl pl-10 pr-4 py-3 outline-none transition-all duration-300 placeholder:text-gray-600"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-6 rounded-xl bg-[#C58E5C] hover:bg-[#b07b49] text-black font-semibold text-sm tracking-wide uppercase flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-[#C58E5C]/20 disabled:opacity-50"
              >
                {loading ? (
                  <span className="inline-block w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Sign In to Dashboard</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="mt-6 pt-6 border-t border-[#1f1a14] text-center flex justify-between items-center text-xs text-gray-500">
            <span>Default: admin / biyaano2026</span>
            {onClose && (
              <button
                onClick={onClose}
                type="button"
                className="text-gray-400 hover:text-white transition-colors underline"
              >
                Back to Site
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
