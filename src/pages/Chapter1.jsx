import React from "react";
import {
  CheckCircle,
  AlertTriangle,
  BadgeAlert,
  Gavel,
  Landmark,
  MessageSquareWarning,
  ShieldCheck,
  Users,
  XCircle,
} from "lucide-react";
import SectionWrapper from "../components/chapter1/SectionWrapper";
import HeroBlock from "../components/chapter1/HeroBlock";
import ConclusionDiagram from "../components/chapter1/ConclusionDiagram";
import heroMockup from "../assets/image.png";

const correctPoints = [
  {
    icon: Users,
    title: "Tham gia quản lý",
    description: "Người dân dễ góp ý.",
  },
  {
    icon: ShieldCheck,
    title: "Giám sát",
    description: "Thông tin minh bạch hơn.",
  },
  {
    icon: Landmark,
    title: "Trách nhiệm",
    description: "Nhà nước phản hồi nhanh hơn.",
  },
];

const incorrectPoints = [
  {
    icon: BadgeAlert,
    title: "Chính trị",
    description: "Không thay thế hệ thống.",
  },
  {
    icon: Gavel,
    title: "Pháp lý",
    description: "Không có giá trị luật.",
  },
  {
    icon: AlertTriangle,
    title: "Kinh tế",
    description: "Không đảm bảo quyền lực.",
  },
  {
    icon: MessageSquareWarning,
    title: "Bản chất",
    description: "Mạng xã hội chỉ là công cụ.",
  },
];

function Chapter1({ chapter }) {
  const chapterId = chapter?.id ?? "chapter-1";

  return (
    <section id={chapterId} className="scroll-mt-24 py-12">
      <div className="mx-auto w-full max-w-300 space-y-12">
        <HeroBlock
          kicker="--------Chương 1--------"
          heading="Nhận định: ĐÚNG MỘT PHẦN"
          subheading="Mạng xã hội là công cụ mở rộng tham gia dân chủ, nhưng không phải bản chất của nền dân chủ xã hội chủ nghĩa."
          imageSrc={heroMockup}
          imageAlt="Mockup phần 1"
        />

        <SectionWrapper title="So sánh nhận định" subtitle="Đặt hai góc nhìn cạnh nhau để thấy rõ: Mạng xã hội hỗ trợ dân chủ nhưng không phải bản chất của dân chủ xã hội chủ nghĩa.">
          <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="pointer-events-none absolute left-1/2 top-2 hidden h-[calc(100%-1rem)] w-px -translate-x-1/2 bg-slate-600/50 md:block" />

            <div className="rounded-2xl border border-blue-300/30 bg-blue-950/25 p-5">
              <div className="mb-4 flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-6 w-6 shrink-0 text-emerald-300" />
                <div>
                  <h3 className="text-xl font-bold text-blue-100">Nhận định ĐÚNG</h3>
                  <p className="mt-1 text-sm text-blue-200/90">Mạng xã hội hỗ trợ dân chủ.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-1">
                {correctPoints.map((item) => {
                  const Icon = item.icon;
                  return (
                    <article key={item.title} className="h-full rounded-xl border border-white/10 bg-slate-900/70 p-4 shadow-sm transition duration-300 hover:shadow-lg">
                      <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-400/15 text-blue-200">
                        <Icon size={18} strokeWidth={2} />
                      </div>
                      <h4 className="text-base font-semibold text-slate-100">{item.title}</h4>
                      <p className="mt-1 text-sm text-slate-300">• {item.description}</p>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="rounded-2xl border border-red-300/30 bg-red-950/20 p-5">
              <div className="mb-4 flex items-start gap-3">
                <XCircle className="mt-0.5 h-6 w-6 shrink-0 text-red-300" />
                <div>
                  <h3 className="text-xl font-bold text-red-100">Nhận định SAI</h3>
                  <p className="mt-1 text-sm text-red-200/90">Mạng xã hội không phải bản chất.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-2">
                {incorrectPoints.map((item) => {
                  const Icon = item.icon;
                  return (
                    <article key={item.title} className="h-full rounded-xl border border-white/10 bg-slate-900/70 p-4 shadow-sm transition duration-300 hover:shadow-lg">
                      <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-red-400/15 text-red-200">
                        <Icon size={18} strokeWidth={2} />
                      </div>
                      <h4 className="text-base font-semibold text-slate-100">{item.title}</h4>
                      <p className="mt-1 text-sm text-slate-300">• {item.description}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper
          title="Sơ đồ kết luận"
          subtitle="Mạng xã hội là công cụ hỗ trợ, trong khi dân chủ xã hội chủ nghĩa là một hệ thống chính trị - pháp lý - kinh tế toàn diện."
          tone="warm"
        >
          <ConclusionDiagram />
        </SectionWrapper>
      </div>
    </section>
  );
}

export default Chapter1;
