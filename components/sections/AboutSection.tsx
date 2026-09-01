import { Eye, Heart, Target, Users, Sparkles } from "lucide-react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { FadeIn } from "@/components/ui/FadeIn";

const cards = [
  {
    icon: Heart,
    title: "What Fourth Idly Is",
    description:
      "A mobile platform that connects verified NGOs with people who want to give. Fourth Idly makes sharing food and support simple, transparent, and deeply human — one extra idly at a time.",
  },
  {
    icon: Target,
    title: "Why It Exists",
    description:
      "Good intentions often never reach the right hands. Fourth Idly was built to remove friction, build trust, and ensure every act of generosity creates real, measurable impact on the ground.",
  },
  {
    icon: Users,
    title: "Who It Serves",
    description:
      "Donors who want to give meaningfully, NGOs working every day, volunteers ready to help, and communities across India who deserve dignity, care, and a full plate.",
  },
  {
    icon: Eye,
    title: "Mission & Vision",
    description:
      "Our mission is to make giving effortless and accountable. Our vision is a world where no one goes hungry when someone nearby has enough to share — because the fourth idly is for others.",
  },
];

export function AboutSection() {
  return (
    <SectionContainer id="about" className="relative overflow-hidden bg-[#faf8f7]">
      {/* Soft background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <FadeIn>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white px-4 py-1.5 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              About Fourth Idly
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#2d1b1e] sm:text-4xl md:text-[2.75rem] md:leading-[1.15]">
            Giving made simple,
            <span className="block text-primary">transparent, and human</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.14}>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#5c4a4d] md:text-lg">
            Fourth Idly is more than an app — it&apos;s a movement to connect
            generosity with genuine need. Three idlies satisfy your hunger; the
            fourth is for someone else.
          </p>
        </FadeIn>
      </div>

      <div className="relative mt-12 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-16">
        {cards.map((card, index) => (
          <FadeIn key={card.title} delay={0.1 + index * 0.08}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#e8ddd9] bg-white p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_16px_40px_rgb(168,74,88,0.12)] md:p-8">
              {/* Soft corner glow on hover */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-primary/0 blur-2xl transition-colors duration-300 group-hover:bg-primary/10"
              />

              <div className="relative mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-md group-hover:shadow-primary/25">
                <card.icon className="h-6 w-6" aria-hidden="true" />
              </div>

              <h3 className="relative mb-3 text-xl font-semibold leading-snug text-[#2d1b1e]">
                {card.title}
              </h3>

              <p className="relative text-sm leading-relaxed text-[#5c4a4d] md:text-[15px] md:leading-relaxed">
                {card.description}
              </p>
            </article>
          </FadeIn>
        ))}
      </div>
    </SectionContainer>
  );
}