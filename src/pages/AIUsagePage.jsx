import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FooterBar from "../components/FooterBar";
import ChapterUsage from "./ChapterUsage";
import "../App.css";

function AIUsagePage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const handleBackToMain = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
      <div className="app-bg" aria-hidden="true" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/85 shadow-lg shadow-slate-950/40 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-4 px-4 py-3 md:px-6">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl border border-emerald-300/40 bg-emerald-400/15 text-lg font-extrabold text-emerald-200">
              7
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide text-slate-100">Nhóm 2 MLN131</p>
              <p className="text-xs text-slate-400">AI Usage</p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-1">
            <button
              type="button"
              onClick={handleBackToMain}
              className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              Nội dung chính
            </button>
            <span className="rounded-xl bg-emerald-400/20 px-4 py-2 text-sm font-semibold text-emerald-100 shadow">
              AI Usage
            </span>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto w-full max-w-[1200px] px-4 pb-8 pt-24 md:px-6">
        <ChapterUsage />
      </main>

      <FooterBar />
    </div>
  );
}

export default AIUsagePage;