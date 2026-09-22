import { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  private handleReset = () => {
    localStorage.removeItem("biyaano_admin_token");
    localStorage.removeItem("biyaano_admin_user");
    window.location.hash = "";
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#030303] text-white flex items-center justify-center p-6 font-sans">
          <div className="max-w-md w-full bg-[#0a0a0a] border border-[#332211] rounded-2xl p-8 shadow-2xl text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-red-950/60 border border-red-800/60 text-red-400 mx-auto flex items-center justify-center">
              <AlertTriangle className="w-8 h-8" />
            </div>

            <div>
              <h2 className="text-2xl font-serif text-white">Something went wrong</h2>
              <p className="text-xs text-gray-400 mt-2">
                An unexpected error occurred while loading the application.
              </p>
              {this.state.error && (
                <div className="mt-4 p-3 bg-red-950/30 border border-red-900/40 rounded-xl text-left">
                  <p className="text-[11px] font-mono text-red-300 break-words">
                    {this.state.error.message}
                  </p>
                </div>
              )}
            </div>

            <button
              onClick={this.handleReset}
              className="w-full py-3 px-6 rounded-xl bg-[#C58E5C] hover:bg-[#b07b49] text-black font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Reset & Reload Website</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
