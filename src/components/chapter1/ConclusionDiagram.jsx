import React from "react";
import { ArrowRight, Landmark, Layers, MessageCircle, Wrench } from "lucide-react";

function DiagramCard({ icon: Icon, title, label, emphasized = false }) {
  const toneClass = emphasized
    ? "border-indigo-300/40 bg-linear-to-br from-blue-900/45 via-indigo-900/45 to-purple-900/35 text-indigo-100 shadow-indigo-900/30"
    : "border-white/20 bg-white/5 text-slate-100";

  return (
    <article
      className={`rounded-2xl border p-6 backdrop-blur-md transition duration-300 hover:scale-105 hover:shadow-2xl ${toneClass}`}
    >
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/10">
        <Icon size={22} strokeWidth={2.2} />
      </div>
      <h4 className="mt-4 text-center text-lg font-bold md:text-xl">{title}</h4>
      <p className="mt-1 text-center text-xs uppercase tracking-[0.14em] text-slate-300">{label}</p>
    </article>
  );
}

function FlowRow({ left, right, emphasize = false }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
      <div className="w-full md:w-64 lg:w-72">
        <DiagramCard icon={left.icon} title={left.title} label={left.label} emphasized={emphasize} />
      </div>

      <ArrowRight className="h-9 w-9 text-cyan-200/70 drop-shadow-[0_0_10px_rgba(103,232,249,0.25)] md:h-11 md:w-11" />

      <div className="w-full md:w-64 lg:w-72">
        <DiagramCard icon={right.icon} title={right.title} label={right.label} emphasized={emphasize} />
      </div>
    </div>
  );
}

function ConclusionDiagram() {
  return (
    <section className="space-y-7">
      <FlowRow
        left={{
          icon: MessageCircle,
          title: "Mạng xã hội",
          label: "Công cụ truyền thông",
        }}
        right={{
          icon: Wrench,
          title: "Công cụ",
          label: "Phương thức hỗ trợ",
        }}
      />

      <FlowRow
        left={{
          icon: Landmark,
          title: "Dân chủ XHCN",
          label: "Nền dân chủ xã hội chủ nghĩa",
        }}
        right={{
          icon: Layers,
          title: "Hệ thống",
          label: "Cấu trúc chính trị - pháp lý",
        }}
        emphasize
      />
    </section>
  );
}

export default ConclusionDiagram;
