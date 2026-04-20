import React from "react";

function CardItem({ icon: Icon, title, description, tone = "cool", theme = "dark" }) {
  const isLight = theme === "light";

  const toneClass = isLight
    ? tone === "warm"
      ? "border-rose-200 bg-white hover:shadow-lg"
      : "border-slate-200 bg-white hover:shadow-lg"
    : tone === "warm"
      ? "border-orange-300/35 bg-orange-950/25 hover:shadow-orange-900/25"
      : "border-cyan-300/25 bg-white/5 hover:shadow-cyan-900/20";

  const iconWrapClass = isLight
    ? "border-slate-200 bg-slate-50 text-sky-400"
    : "border-white/15 bg-white/10 text-cyan-200";

  const titleClass = isLight ? "text-slate-900" : "text-white";
  const bodyClass = isLight ? "text-slate-700" : "text-slate-300";

  return (
    <article
      className={`group rounded-2xl border p-5 shadow-md transition duration-300 hover:-translate-y-1 hover:scale-[1.015] ${toneClass}`}
    >
      <div className={`mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border ${iconWrapClass}`}>
        {Icon && <Icon size={20} strokeWidth={2.1} />}
      </div>
      <h4 className={`text-lg font-semibold ${titleClass}`}>{title}</h4>
      <p className={`mt-2 text-sm leading-relaxed ${bodyClass}`}>{description}</p>
    </article>
  );
}

export default CardItem;
