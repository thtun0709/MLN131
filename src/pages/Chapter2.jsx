import React from "react";
import {
  Book,
  Brain,
  Building2,
  Coins,
  Factory,
  Landmark,
  Scale,
  Shield,
  TrendingUp,
  UserCheck,
  Users,
  Vote,
} from "lucide-react";
import CardItem from "../components/chapter1/CardItem";
import HeroBlock from "../components/chapter1/HeroBlock";
import SectionWrapper from "../components/chapter1/SectionWrapper";

const politicalCards = [
  {
    icon: Users,
    title: "Bản chất giai cấp",
    description: "Dân chủ xã hội chủ nghĩa đại diện lợi ích của đại đa số nhân dân lao động.",
  },
  {
    icon: Shield,
    title: "Sự lãnh đạo của Đảng",
    description: "Định hướng đúng mục tiêu phát triển và bảo vệ lợi ích chung của xã hội.",
  },
  {
    icon: Landmark,
    title: "Mục tiêu tham gia quản lý",
    description: "Lôi cuốn nhân dân tham gia tự giác vào quản lý nhà nước và đời sống xã hội.",
  },
];

const economicCards = [
  {
    icon: Coins,
    title: "Sở hữu xã hội",
    description: "Nền tảng kinh tế dựa trên sở hữu xã hội về tư liệu sản xuất chủ yếu.",
  },
  {
    icon: Factory,
    title: "Làm chủ thực chất",
    description: "Quyền kinh tế gắn với quyền quản lý và phân phối, không chỉ là hình thức.",
  },
  {
    icon: TrendingUp,
    title: "Lợi ích người lao động",
    description: "Mọi chính sách phát triển hướng tới nâng cao đời sống và quyền lợi của người lao động.",
  },
];

const ideologyCards = [
  {
    icon: Brain,
    title: "Chủ nghĩa Mác - Lênin",
    description: "Nền tảng tư tưởng khoa học định hướng giải phóng con người và xã hội.",
  },
  {
    icon: Book,
    title: "Kế thừa tinh hoa",
    description: "Tiếp thu giá trị tiến bộ của nhân loại để phát triển văn hóa xã hội bền vững.",
  },
  {
    icon: Scale,
    title: "Hài hòa lợi ích",
    description: "Gắn kết lợi ích cá nhân, tập thể và cộng đồng trong cùng một hệ giá trị.",
  },
];

const criteriaCards = [
  {
    icon: UserCheck,
    title: "Nhân dân là chủ",
    description: "Quyền lực nhà nước bắt nguồn từ nhân dân và phục vụ nhân dân.",
  },
  {
    icon: Vote,
    title: "Dân chủ trực tiếp",
    description: "Nhân dân tham gia góp ý, giám sát và quyết định ở các vấn đề thiết thực.",
  },
  {
    icon: Building2,
    title: "Dân chủ đại diện",
    description: "Thông qua Quốc hội, HĐND và cơ quan nhà nước do dân bầu.",
  },
  {
    icon: Scale,
    title: "Pháp luật bảo đảm",
    description: "Hiến pháp và pháp luật thể chế hóa, bảo vệ quyền làm chủ của nhân dân.",
  },
];

function Chapter2({ chapter }) {
  const chapterId = chapter?.id ?? "chapter-2";

  return (
    <section id={chapterId} className="scroll-mt-24 py-12">
      <div className="mx-auto w-full max-w-6xl space-y-12 px-0">
        <HeroBlock
          kicker="--------Chương 2--------"
          heading="Bản chất dân chủ xã hội chủ nghĩa"
          subheading="Không chỉ là quyền phát biểu, mà là hệ thống quyền lực của nhân dân"
          highlight="Chính trị - Kinh tế - Tư tưởng - Pháp luật"
          centered
        />

        <SectionWrapper title="Chính trị: Quyền lực thuộc về nhân dân">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {politicalCards.map((item) => (
              <CardItem key={item.title} icon={item.icon} title={item.title} description={item.description} tone="cool" />
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper title="Kinh tế: Nền tảng của dân chủ">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {economicCards.map((item) => (
              <CardItem key={item.title} icon={item.icon} title={item.title} description={item.description} tone="cool" />
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper title="Tư tưởng - Văn hóa">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {ideologyCards.map((item) => (
              <CardItem key={item.title} icon={item.icon} title={item.title} description={item.description} tone="cool" />
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper
          title="Làm sao biết quyền lực thuộc về nhân dân?"
          subtitle="Bốn dấu hiệu nhận diện quyền lực nhân dân được thực thi thực chất trong đời sống chính trị - pháp lý."
          tone="warm"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {criteriaCards.map((item) => (
              <CardItem key={item.title} icon={item.icon} title={item.title} description={item.description} tone="warm" />
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper title="Kết luận" tone="warm">
          <div className="rounded-2xl border border-amber-300/30 bg-linear-to-r from-orange-950/35 via-amber-900/20 to-red-950/35 p-6 md:p-8">
            <p className="text-lg font-semibold leading-relaxed text-amber-100 md:text-2xl">
            Hệ thống quyền lực của nhân dân.
            </p>

            <div className="mt-6 flex flex-col items-center gap-3 text-center">
              <div className="rounded-xl border border-cyan-300/30 bg-white/5 px-6 py-3 text-sm font-semibold text-cyan-100 md:text-base">
                Nhân dân → Quyền lực
              </div>
              <span className="text-3xl font-semibold text-cyan-200/80">↓</span>
              <div className="rounded-xl border border-amber-300/30 bg-black/20 px-6 py-3 text-sm font-semibold text-amber-100 md:text-base">
                Chính trị + Kinh tế + Tư tưởng + Pháp luật
              </div>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}

export default Chapter2;
