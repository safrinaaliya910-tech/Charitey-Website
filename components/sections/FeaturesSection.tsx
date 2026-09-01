"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  HandHeart,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { FadeIn, staggerItemVariants } from "@/components/ui/FadeIn";

const features = [
  {
    icon: BadgeCheck,
    title: "Verified NGOs",
    description:
      "Every organisation on Fourth Idly goes through a verification process, so you can give with complete confidence.",
  },
  {
    icon: HandHeart,
    title: "Easy Requests",
    description:
      "NGOs post clear, specific needs. Donors browse real requests and respond in just a few taps — food, supplies, or support.",
  },
  {
    icon: Sparkles,
    title: "Smart Matching",
    description:
      "Intelligent matching connects the right donors with the right requests, reducing waste and maximising real-world impact.",
  },
  {
    icon: Users,
    title: "Community Support",
    description:
      "Join a growing community of givers, volunteers, and changemakers united by one idea: the fourth idly is for others.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Platform",
    description:
      "Your data and interactions are protected with industry-standard security practices and clear privacy controls.",
  },
  {
    icon: HeartHandshake,
    title: "Transparent Impact",
    description:
      "Track how your contributions reach beneficiaries and see the difference your generosity makes on the ground.",
  },
];

export function FeaturesSection() {
  return (
    <SectionContainer
      id="features"
      className="relative overflow-hidden bg-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 right-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-primary/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <FadeIn>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-[#faf8f7] px-4 py-1.5 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Why Fourth Idly
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#2d1b1e] sm:text-4xl md:text-[2.75rem] md:leading-[1.15]">
            Everything you need to
            <span className="block text-primary">give with purpose</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.14}>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#5c4a4d] md:text-lg">
            Purpose-built features that make sharing feel as good as it should —
            simple, secure, and deeply rewarding. One extra idly can change
            someone&apos;s day.
          </p>
        </FadeIn>
      </div>

      <motion.div
        className="relative mt-12 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08 } },
        }}
      >
        {features.map((feature) => (
          <motion.article
            key={feature.title}
            variants={staggerItemVariants}
            whileHover={{ y: -5 }}
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#e8ddd9] bg-[#faf8f7] p-7 shadow-[0_8px_30px_rgb(0,0,0,0.03)] transition-all duration-300 hover:border-primary/25 hover:bg-white hover:shadow-[0_16px_40px_rgb(168,74,88,0.1)]"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/0 blur-2xl transition-colors duration-300 group-hover:bg-primary/10"
            />

            <div className="relative mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-white group-hover:shadow-md group-hover:shadow-primary/25">
              <feature.icon className="h-6 w-6" aria-hidden="true" />
            </div>

            <h3 className="relative mb-2.5 text-lg font-semibold leading-snug text-[#2d1b1e]">
              {feature.title}
            </h3>

            <p className="relative text-sm leading-relaxed text-[#5c4a4d] md:text-[0.9375rem]">
              {feature.description}
            </p>
          </motion.article>
        ))}
      </motion.div>
    </SectionContainer>
  );
}