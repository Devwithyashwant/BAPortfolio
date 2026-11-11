import React, { Component, ErrorInfo, ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class RootErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error in portfolio:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "40px", fontFamily: "sans-serif", background: "#111", color: "#fff", minHeight: "100vh" }}>
          <h1 style={{ color: "#cfa355", fontSize: "28px" }}>Something went wrong</h1>
          <p style={{ color: "#aaa", marginTop: "12px" }}>{this.state.error?.message || "An unexpected error occurred."}</p>
          <button
            onClick={() => { this.setState({ hasError: false, error: null }); window.location.reload(); }}
            style={{ marginTop: "24px", padding: "10px 20px", background: "#cfa355", color: "#000", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}
          >
            Reload Portfolio
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')!).render(
  <RootErrorBoundary>
    <App />
  </RootErrorBoundary>
);
