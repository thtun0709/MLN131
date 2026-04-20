import React from "react";
import { AlertTriangle, Coins, Eye, MessageCircle, Scale, Users } from "lucide-react";
import CardItem from "../components/chapter1/CardItem";
import HeroBlock from "../components/chapter1/HeroBlock";
import SectionWrapper from "../components/chapter1/SectionWrapper";

const toolCards = [
  {
    icon: MessageCircle,
    title: "Thúc đẩy dân chủ trực tiếp",
    description: "MXH giúp người dân phản hồi nhanh, góp ý chính sách và lan tỏa thông tin công khai.",
  },
  {
    icon: Users,
    title: "Kết nối cộng đồng xã hội",
    description: "Không gian mạng tạo liên kết rộng, tăng sự tham gia của người dân vào vấn đề chung.",
  },
  {
    icon: Eye,
    title: "Giám sát và phản biện xã hội",
    description: "Dư luận trực tuyến tạo áp lực minh bạch, buộc cơ quan công quyền lắng nghe và giải trình.",
  },
];

const limitCards = [
  {
    icon: Scale,
    title: "Thiếu pháp lý",
    description: "Tương tác trên MXH không có giá trị pháp lý như các cơ chế dân chủ được luật định.",
  },
  {
    icon: AlertTriangle,
    title: "Dễ bị thao túng",
    description: "Tin giả và xu hướng đám đông có thể làm sai lệch nhận thức và định hướng xã hội.",
  },
  {
    icon: Coins,
    title: "Không đảm bảo kinh tế",
    description: "MXH không thể thay thế nền tảng sở hữu và phân phối bảo đảm quyền làm chủ thực chất.",
  },
];

function Chapter3({ chapter }) {
  const chapterId = chapter?.id ?? "chapter-3";

  return (
    <section id={chapterId} className="scroll-mt-24 py-12">
      <div className="mx-auto w-full max-w-6xl space-y-12 px-0">
        <HeroBlock
          kicker="--------Chương 3--------"
          heading="Mạng xã hội và dân chủ"
          subheading="Công cụ mạnh mẽ nhưng không phải bản chất"
          highlight="Tool ≠ System"
          centered
        />

        <SectionWrapper title="MXH là công cụ mạnh mẽ của dân chủ">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {toolCards.map((item) => (
              <CardItem
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
                tone="cool"
              />
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper
          title="Vì sao MXH chưa phải bản chất?"
          subtitle="MXH có giá trị như một công cụ, nhưng chưa đủ điều kiện để đại diện bản chất dân chủ XHCN."
          tone="warm"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {limitCards.map((item) => (
              <CardItem
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
                tone="warm"
              />
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper title="Kết luận" tone="warm">
          <div className="rounded-2xl border border-amber-300/30 bg-linear-to-r from-orange-950/35 via-amber-900/20 to-red-950/35 p-6 md:p-8">
            <p className="text-lg font-semibold leading-relaxed text-amber-100 md:text-2xl">
              MXH là công cụ hỗ trợ dân chủ, nhưng không thể thay thế hệ thống chính trị - kinh tế - pháp luật.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-cyan-300/30 bg-white/5 px-5 py-4 text-center text-sm font-semibold text-cyan-100 md:text-base">
                MXH → Công cụ
              </div>
              <div className="rounded-xl border border-amber-300/30 bg-black/20 px-5 py-4 text-center text-sm font-semibold text-amber-100 md:text-base">
                Dân chủ XHCN → Hệ thống
              </div>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}

export default Chapter3;
