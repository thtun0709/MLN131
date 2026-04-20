import React from "react";
import { Book, Bot, Code, ListChecks, ShieldCheck } from "lucide-react";
import CardItem from "../components/chapter1/CardItem";
import HeroBlock from "../components/chapter1/HeroBlock";
import SectionWrapper from "../components/chapter1/SectionWrapper";

const toolCards = [
  {
    icon: Code,
    title: "Copilot để lập trình",
    description: "Mình dùng Copilot để tăng tốc viết component, xử lý UI và tối ưu cấu trúc mã nguồn.",
  },
  {
    icon: Book,
    title: "NotebookLM đề xuất",
    description: "NotebookLM hỗ trợ đề xuất dàn ý, nhịp nội dung và hướng trình bày rõ ràng hơn.",
  },
  {
    icon: Bot,
    title: "Gemini + ChatGPT phân tích",
    description: "Gemini và ChatGPT hỗ trợ phân tích nội dung, rút ý chính và gợi ý cách diễn đạt.",
  },
];

const promptingSteps = [
  {
    step: "1",
    title: "Xác định vai trò và mục tiêu",
    detail: "Nêu rõ vai trò AI, đầu ra mong muốn và giới hạn phạm vi trước khi tạo nội dung.",
  },
  {
    step: "2",
    title: "Tinh chỉnh lặp",
    detail: "Đánh giá từng phiên bản, yêu cầu sửa theo tiêu chí cụ thể để cải thiện chất lượng.",
  },
  {
    step: "3",
    title: "Tích hợp và chuẩn hóa",
    detail: "Kết hợp kết quả AI với nội dung học thuật, chuẩn hóa thuật ngữ và cấu trúc trình bày.",
  },
];

function ChapterUsage({ chapter }) {
  const chapterId = chapter?.id ?? "chapter-usage";

  return (
    <section id={chapterId} className="scroll-mt-24 py-12">
      <div className="mx-auto w-full max-w-6xl space-y-12 px-0">
        <HeroBlock
          kicker="--------Sử dụng AI--------"
          heading="Báo cáo sử dụng AI"
          subheading="Minh bạch công cụ, quy trình đặt lệnh và cách kiểm duyệt nội dung học thuật"
          highlight="Copilot + NotebookLM + Gemini + ChatGPT"
          centered
        />

        <SectionWrapper title="Công cụ sử dụng" subtitle="Mô tả vai trò của từng công cụ trong quá trình xây dựng sản phẩm.">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {toolCards.map((item) => (
              <CardItem key={item.title} icon={item.icon} title={item.title} description={item.description} tone="cool" />
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper title="Quy trình đặt lệnh" subtitle="Quy trình làm việc để tăng chất lượng đầu ra và giữ đúng mục tiêu học thuật.">
          <div className="space-y-4">
            {promptingSteps.map((item) => (
              <article
                key={item.step}
                className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-400/15 text-sm font-bold text-emerald-200">
                    {item.step}
                  </span>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-100">{item.title}</h4>
                    <p className="mt-1 text-sm text-slate-300">{item.detail}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper title="CAM KẾT MINH BẠCH" tone="warm">
          <div className="rounded-2xl border border-amber-300/30 bg-linear-to-r from-orange-950/35 via-amber-900/20 to-red-950/35 p-6 md:p-8">
            <div className="mb-4 flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-amber-200" />
              <h3 className="text-xl font-bold text-amber-100 md:text-2xl">Cam kết minh bạch</h3>
            </div>
            <p className="text-base leading-relaxed text-slate-100 md:text-lg">
              Sản phẩm này được hỗ trợ bởi AI (Gemini/ChatGPT) trong việc viết mã nguồn và gợi ý ý tưởng.
              Tuy nhiên, toàn bộ nội dung học thuật, lý luận Mác - Lênin và cấu trúc bài giảng đều được
              thành viên nhóm kiểm duyệt và biên tập thủ công để đảm bảo tính chính xác và phù hợp với giáo trình.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-amber-300/30 bg-black/20 px-3 py-2 text-sm font-medium text-amber-100">
              <ListChecks className="h-4 w-4" />
              Có kiểm duyệt thủ công trước khi trình bày
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}

export default ChapterUsage;
