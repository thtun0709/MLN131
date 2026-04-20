import React from "react";
import { Building2, Coins, Globe, Landmark, Network, Scale, Users } from "lucide-react";
import CardItem from "../components/chapter1/CardItem";
import HeroBlock from "../components/chapter1/HeroBlock";
import SectionWrapper from "../components/chapter1/SectionWrapper";

const technologyCards = [
  {
    icon: Globe,
    title: "MXH mở rộng dân chủ",
    description: "Không gian số mở thêm kênh tham gia, phản hồi và lan tỏa thông tin công khai cho người dân.",
  },
  {
    icon: Users,
    title: "Tăng sự tham gia của nhân dân",
    description: "Cộng đồng có điều kiện theo dõi, góp ý và đồng hành nhiều hơn trong các vấn đề xã hội.",
  },
];

const irreplaceableCards = [
  {
    icon: Landmark,
    title: "Chính trị (Đảng lãnh đạo)",
    description: "Hệ thống chính trị định hướng mục tiêu chung và bảo đảm quyền lực phục vụ nhân dân.",
  },
  {
    icon: Coins,
    title: "Kinh tế (sở hữu xã hội)",
    description: "Nền tảng kinh tế xã hội chủ nghĩa là điều kiện vật chất để quyền làm chủ trở nên thực chất.",
  },
  {
    icon: Scale,
    title: "Pháp luật (Hiến pháp)",
    description: "Hiến pháp và pháp luật thể chế hóa, bảo vệ và kiểm soát việc thực thi quyền lực nhân dân.",
  },
];

const vietnamPracticeCards = [
  {
    icon: Building2,
    title: "Kết hợp trực tiếp + đại diện",
    description: "Dân chủ trực tiếp và dân chủ đại diện bổ trợ lẫn nhau trong vận hành thực tiễn.",
  },
  {
    icon: Network,
    title: "Vai trò hệ thống chính trị",
    description: "Sự phối hợp đồng bộ giữa Đảng, Nhà nước và các tổ chức xã hội tạo sức mạnh tổng hợp.",
  },
];

function Chapter4({ chapter }) {
  const chapterId = chapter?.id ?? "chapter-4";

  return (
    <section id={chapterId} className="scroll-mt-24 py-12">
      <div className="mx-auto w-full max-w-6xl space-y-12 px-0">
        <HeroBlock
          kicker="--------Chương 4--------"
          heading="Kết luận"
          subheading="Công nghệ hỗ trợ - hệ thống quyết định"
          highlight="Democracy is a system, not a tool"
          centered
        />

        <SectionWrapper title="Vai trò công nghệ">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {technologyCards.map((item) => (
              <CardItem key={item.title} icon={item.icon} title={item.title} description={item.description} tone="cool" />
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper title="Bản chất không thể thay thế">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {irreplaceableCards.map((item) => (
              <CardItem key={item.title} icon={item.icon} title={item.title} description={item.description} tone="cool" />
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper title="Thực tiễn Việt Nam">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {vietnamPracticeCards.map((item) => (
              <CardItem key={item.title} icon={item.icon} title={item.title} description={item.description} tone="cool" />
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper title="Tổng Hợp" tone="warm">
          <div className="rounded-2xl border border-amber-300/30 bg-linear-to-r from-orange-950/35 via-amber-900/20 to-red-950/35 p-6 md:p-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
              <p className="text-lg font-semibold leading-relaxed text-amber-100 md:text-2xl">
                Dân chủ XHCN là quá trình lâu dài,
                <br />
                MXH chỉ là công cụ hỗ trợ.
                <br />
                Quyền lực thực sự thuộc về nhân dân
                <br />
                khi được thực hiện trong khuôn khổ pháp luật.
              </p>

              <div className="flex flex-col items-center gap-3 text-center">
                <div className="rounded-xl border border-cyan-300/30 bg-white/5 px-6 py-3 text-sm font-semibold text-cyan-100 md:text-base">
                  Nhân dân
                </div>
                <span className="text-3xl font-semibold text-cyan-200/80">↓</span>
                <div className="rounded-xl border border-amber-300/30 bg-black/20 px-6 py-3 text-sm font-semibold text-amber-100 md:text-base">
                  Hệ thống chính trị
                </div>
                <span className="text-3xl font-semibold text-cyan-200/80">↓</span>
                <div className="rounded-xl border border-amber-300/30 bg-black/20 px-6 py-3 text-sm font-semibold text-amber-100 md:text-base">
                  Pháp luật + Kinh tế + Xã hội
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}

export default Chapter4;
