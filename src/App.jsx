import React, { useEffect, useMemo, useState } from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import HeaderTabs from "./components/HeaderTabs";
import FooterBar from "./components/FooterBar";
import Chapter1 from "./pages/Chapter1";
import Chapter2 from "./pages/Chapter2";
import Chapter3 from "./pages/Chapter3";
import Chapter4 from "./pages/Chapter4";
import { chapterData, heroContent, tabs } from "./data/chapters";
import "./App.css";

const OUTER_TRIANGLES = Array.from({ length: 48 }, (_, index) => (index * 360) / 48);
const OUTER_GEOMETRIC = Array.from({ length: 24 }, (_, index) => (index * 360) / 24);
const INNER_SPOKES = Array.from({ length: 36 }, (_, index) => (index * 360) / 36);
const INNER_DOTS = Array.from({ length: 18 }, (_, index) => (index * 360) / 18);
const SUN_RAYS = Array.from({ length: 16 }, (_, index) => (index * 360) / 16);

function App() {
  const SCROLL_SPY_OFFSET = 108;
  const SCROLL_SPY_HYSTERESIS = 30;

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const chapters = useMemo(() => [chapterData.chapter1, chapterData.chapter2, chapterData.chapter3, chapterData.chapter4], []);

  const smoothScrollTo = (targetY, duration = 420) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    if (Math.abs(distance) < 2) return;

    const startTime = performance.now();

    const easeOutCubic = (t) => 1 - (1 - t) ** 3;

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);

      window.scrollTo(0, startY + distance * eased);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  useEffect(() => {
    let ticking = false;

    const updateActiveTabByScroll = () => {
      const sectionRects = chapters
        .map((chapter) => {
          const element = document.getElementById(chapter.id);
          if (!element) return null;

          const rect = element.getBoundingClientRect();
          return {
            id: chapter.id,
            top: rect.top,
            bottom: rect.bottom,
          };
        })
        .filter(Boolean);

      if (!sectionRects.length) return;

      const visibleSections = sectionRects.filter((section) => section.bottom > SCROLL_SPY_OFFSET);

      if (!visibleSections.length) {
        setActiveTab(chapters[chapters.length - 1].id);
        return;
      }

      let nextActive = visibleSections[0].id;
      let minDistance = Number.POSITIVE_INFINITY;

      visibleSections.forEach((section) => {
        const distance = Math.abs(section.top - SCROLL_SPY_OFFSET);
        if (distance < minDistance) {
          minDistance = distance;
          nextActive = section.id;
        }
      });

      if (nextActive) {
        setActiveTab((prev) => {
          if (prev === nextActive) return prev;

          const prevSection = visibleSections.find((section) => section.id === prev);
          if (prevSection && Math.abs(prevSection.top - SCROLL_SPY_OFFSET) < SCROLL_SPY_HYSTERESIS) {
            return prev;
          }

          return nextActive;
        });
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        updateActiveTabByScroll();
        ticking = false;
      });
    };

    updateActiveTabByScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActiveTabByScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateActiveTabByScroll);
    };
  }, [chapters, SCROLL_SPY_OFFSET, SCROLL_SPY_HYSTERESIS]);

  const handleTabClick = (id) => {
    const target = document.getElementById(id);
    if (!target) return;

    const offset = 90;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    smoothScrollTo(top, 460);
    setActiveTab(id);
  };

  const handleUsageClick = () => {
    if (typeof document.startViewTransition === "function") {
      document.startViewTransition(() => {
        navigate("/ai-usage");
      });
      return;
    }

    navigate("/ai-usage");
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
      <div className="app-bg" aria-hidden="true" />

      <HeaderTabs tabs={tabs} activeTab={activeTab} onTabClick={handleTabClick} onUsageClick={handleUsageClick} />

      <section className="hero-banner-wrap relative z-10 pt-[68px]">
        <div className="hero-banner">
          <div className="hero-banner-ornament" aria-hidden="true">
            <svg className="dongson-drum" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="dongson-depth" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#d4af37" stopOpacity="0.18" />
                  <stop offset="55%" stopColor="#c9a96e" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
                </radialGradient>
                <filter id="dongson-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="1.4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <circle className="drum-depth" cx="400" cy="400" r="370" fill="url(#dongson-depth)" />

              <g className="drum-outer-ring">
                <circle cx="400" cy="400" r="322" fill="none" stroke="#c9a96e" strokeWidth="2" />
                <circle cx="400" cy="400" r="292" fill="none" stroke="#d4af37" strokeWidth="1.6" />
                <circle cx="400" cy="400" r="264" fill="none" stroke="#c9a96e" strokeWidth="1.2" />

                {OUTER_TRIANGLES.map((angle) => (
                  <path
                    key={`outer-triangle-${angle}`}
                    d="M400 74 L388 108 L412 108 Z"
                    fill="#d4af37"
                    transform={`rotate(${angle} 400 400)`}
                  />
                ))}

                {OUTER_GEOMETRIC.map((angle) => (
                  <g key={`outer-geometric-${angle}`} transform={`rotate(${angle} 400 400)`}>
                    <path d="M400 128 L392 138 L400 148 L408 138 Z" fill="#c9a96e" />
                    <path d="M400 162 L394 170 L400 178 L406 170 Z" fill="#d4af37" />
                  </g>
                ))}

                {SUN_RAYS.map((angle) => (
                  <path
                    key={`mid-rays-${angle}`}
                    d="M400 202 L394 228 L406 228 Z"
                    fill="#c9a96e"
                    transform={`rotate(${angle} 400 400)`}
                  />
                ))}
              </g>

              <g className="drum-inner-ring">
                <circle cx="400" cy="400" r="212" fill="none" stroke="#d4af37" strokeWidth="1.5" />
                <circle cx="400" cy="400" r="186" fill="none" stroke="#c9a96e" strokeWidth="1.3" />

                {INNER_SPOKES.map((angle) => (
                  <line
                    key={`inner-spoke-${angle}`}
                    x1="400"
                    y1="198"
                    x2="400"
                    y2="244"
                    stroke="#d4af37"
                    strokeWidth="1.2"
                    transform={`rotate(${angle} 400 400)`}
                  />
                ))}

                {INNER_DOTS.map((angle) => (
                  <circle
                    key={`inner-dot-${angle}`}
                    cx="400"
                    cy="214"
                    r="4"
                    fill="#c9a96e"
                    transform={`rotate(${angle} 400 400)`}
                  />
                ))}
              </g>

              <g className="drum-sun" filter="url(#dongson-glow)">
                <circle cx="400" cy="400" r="88" fill="none" stroke="#c9a96e" strokeWidth="1.5" />
                <circle cx="400" cy="400" r="58" fill="none" stroke="#d4af37" strokeWidth="1.3" />

                {SUN_RAYS.map((angle) => (
                  <path
                    key={`sun-rays-${angle}`}
                    d="M400 304 L394 338 L406 338 Z"
                    fill="#d4af37"
                    transform={`rotate(${angle} 400 400)`}
                  />
                ))}

                <circle cx="400" cy="400" r="22" fill="#c9a96e" fillOpacity="0.45" />
              </g>
            </svg>
          </div>

          <div className="hero-banner-inner mx-auto flex h-full w-full max-w-[1200px] flex-col items-center justify-center px-4 text-center md:px-6">
            <span className="inline-flex rounded-full border border-emerald-300/40 bg-emerald-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
              {heroContent.badge}
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-6xl">{heroContent.title}</h1>
            <p className="mt-3 text-lg text-slate-300 md:text-3xl">{heroContent.subtitle}</p>
            <div className="mt-5 min-h-8 text-base font-semibold text-emerald-200 md:text-lg">
              <Typewriter
                options={{
                  strings: heroContent.typing,
                  autoStart: true,
                  loop: true,
                  delay: 26,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <main className="relative z-10 mx-auto w-full max-w-[1200px] px-4 pb-6 pt-6 md:px-6 md:pb-8 md:pt-8">
        <section className="mt-6 space-y-5">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
            <Chapter1 chapter={chapterData.chapter1} />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
            <Chapter2 chapter={chapterData.chapter2} />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Chapter3 chapter={chapterData.chapter3} />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
            <Chapter4 chapter={chapterData.chapter4} />
          </motion.div>
        </section>
      </main>

      <FooterBar />
    </div>
  );
}

export default App;
