import React from "react";

function HeroBlock({
  heading,
  subheading,
  highlight,
  kicker = "Tóm tắt mở đầu",
  imageSrc,
  imageAlt = "Mockup mở đầu",
  centered = false,
  theme = "dark",
}) {
  const isLight = theme === "light";
  const alignClass = centered || !imageSrc ? "text-center" : "text-center lg:text-left";
  const subheadingAlignClass = centered || !imageSrc ? "mx-auto" : "mx-auto lg:mx-0";

  const heroClass = isLight
    ? "rounded-3xl border border-slate-200 bg-linear-to-br from-white via-indigo-50/70 to-slate-50 p-7 shadow-md md:p-10"
    : "rounded-3xl border border-cyan-300/25 bg-linear-to-br from-blue-900/35 via-indigo-900/35 to-slate-900/70 p-7 shadow-2xl shadow-slate-950/40 backdrop-blur-md md:p-10";

  const kickerClass = isLight ? "text-sky-500" : "text-cyan-200/90";
  const titleClass = isLight ? "text-slate-900" : "text-white";
  const subtitleClass = isLight ? "text-slate-600" : "text-slate-200";
  const highlightClass = isLight
    ? "border-sky-200 bg-sky-50 text-sky-700"
    : "border-cyan-300/30 bg-cyan-400/10 text-cyan-100";
  const imageWrapClass = isLight
    ? "border-slate-200 bg-white"
    : "border-white/15 bg-white/5";
  const imageClass = isLight
    ? "border-slate-200"
    : "border-cyan-200/20";

  return (
    <section className={heroClass}>
      <div className={imageSrc ? "grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]" : "flex justify-center"}>
        <div className={alignClass}>
          <p className={`text-xs font-semibold uppercase tracking-[0.24em] ${kickerClass}`}>{kicker}</p>
          <h3 className={`mt-3 text-3xl font-bold md:text-4xl ${titleClass}`}>{heading}</h3>
          <p className={`${subheadingAlignClass} mt-4 max-w-3xl text-base leading-relaxed md:text-lg ${subtitleClass}`}>
            {subheading}
          </p>
          {highlight && (
            <p className={`mx-auto mt-5 inline-flex rounded-full border px-4 py-1.5 text-sm font-semibold ${highlightClass}`}>
              {highlight}
            </p>
          )}
        </div>

        {imageSrc && (
          <div className={`mx-auto w-full max-w-md rounded-2xl border p-3 shadow-md ${imageWrapClass}`}>
            <img
              src={imageSrc}
              alt={imageAlt}
              className={`h-auto w-full rounded-xl border object-cover ${imageClass}`}
              loading="lazy"
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default HeroBlock;
