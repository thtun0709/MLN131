import React from "react";

function SectionWrapper({ title, subtitle, tone = "neutral", theme = "dark", children }) {
  const isLight = theme === "light";

  const toneClass = isLight
    ? tone === "warm"
      ? "border-rose-200 bg-white/70 backdrop-blur"
      : "border-slate-200 bg-white/70 backdrop-blur"
    : tone === "warm"
      ? "border-orange-400/30 bg-gradient-to-br from-orange-950/40 via-slate-900/70 to-red-950/35"
      : "border-cyan-300/20 bg-gradient-to-br from-slate-900/80 via-slate-900/70 to-indigo-950/40";

  const titleClass = isLight ? "text-slate-900" : "text-white";
  const subtitleClass = isLight ? "text-slate-600" : "text-slate-300";
  const dividerClass = isLight ? "border-slate-200" : "border-white/10";

  return (
    <section
      className={`rounded-3xl border p-6 shadow-md md:p-8 ${toneClass}`}
    >
      {(title || subtitle) && (
        <header className={`mb-6 border-b pb-4 md:mb-7 ${dividerClass}`}>
          {title && <h3 className={`text-2xl font-bold md:text-3xl ${titleClass}`}>{title}</h3>}
          {subtitle && <p className={`mt-2 text-sm md:text-base ${subtitleClass}`}>{subtitle}</p>}
        </header>
      )}
      {children}
    </section>
  );
}

export default SectionWrapper;
