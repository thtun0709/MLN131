import React from "react";

function SectionCard({ section }) {
  const danger = section.tone === "warning";

  return (
    <article
      className={
        danger
          ? "rounded-2xl border border-rose-400/30 bg-rose-500/10 p-5 shadow-lg shadow-rose-900/20 transition hover:-translate-y-0.5"
          : "rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-slate-950/30 transition hover:-translate-y-0.5"
      }
    >
      <header className="mb-4">
        <h3 className="text-xl font-bold text-white">{section.heading}</h3>
        <p className="mt-1 text-sm text-slate-300">{section.subheading}</p>
      </header>

      <div className="space-y-3 text-sm leading-7 text-slate-200">
        {section.paragraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>

      <ul className="mt-4 space-y-2">
        {section.bullets.map((item) => (
          <li key={item} className="flex gap-3 text-sm text-slate-100">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default SectionCard;
