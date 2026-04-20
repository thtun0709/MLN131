import React from "react";

function FooterBar() {
  return (
    <footer className="relative z-10 mt-10 border-t border-white/10 bg-slate-950/85 shadow-lg shadow-slate-950/40 backdrop-blur-xl">
      <div className="mx-auto w-full max-w-300 px-4 py-8 text-center md:px-6 md:py-10">
        <p className="text-sm font-medium leading-relaxed text-slate-200 md:text-base">
          Dựa trên Giáo trình Chương 4: Dân chủ xã hội chủ nghĩa và nhà nước xã hội chủ nghĩa
        </p>
        <p className="mt-2 text-sm font-semibold tracking-wide text-emerald-200 md:text-base">Nhóm 2</p>
      </div>
    </footer>
  );
}

export default FooterBar;
