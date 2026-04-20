import React from "react";
import { motion } from "framer-motion";
import SectionCard from "./SectionCard";

function ChapterSection({ chapter }) {
  return (
    <section id={chapter.id} className="scroll-mt-28 rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/30 md:p-8">
      <div className="mb-6 border-b border-white/10 pb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">{chapter.label}</p>
        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">{chapter.title}</h2>
        <p className="mt-2 max-w-3xl text-base text-slate-300">{chapter.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {chapter.sections.map((section, index) => (
          <motion.div
            key={section.heading}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
          >
            <SectionCard section={section} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ChapterSection;
