"use client";

import { motion } from "framer-motion";
import { Building2, Gift, Heart, Search, Sparkles } from "lucide-react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { FadeIn } from "@/components/ui/FadeIn";

const steps = [
  {
    icon: Building2,
    step: "01",
    title: "NGOs create requests",
    description:
      "Verified NGOs post clear needs — food, supplies, or support — so the right help can reach the right place.",
  },
  {
    icon: Search,
    step: "02",
    title: "Donors respond with care",
    description:
      "Donors browse real requests nearby, choose what they can share, and offer support in a few simple taps.",
  },
  {
    icon: Gift,
    step: "03",
    title: "Help reaches the NGO",
    description:
      "Donations and logistics are coordinated so resources arrive safely and are ready for the community.",
  },
  {
    icon: Heart,
    step: "04",
    title: "Communities benefit",
    description:
      "People who need it most receive support with dignity — because the fourth idly was always meant for others.",
  },
];

export function HowItWorksSection() {
  return (
    <SectionContainer
      id="how-it-works"
      className="relative overflow-hidden bg-[#faf8f7]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <FadeIn>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white px-4 py-1.5 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              How It Works
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#2d1b1e] sm:text-4xl md:text-[2.75rem] md:leading-[1.15]">
            From need to impact
            <span className="block text-primary">in four simple steps</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.14}>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#5c4a4d] md:text-lg">
            Fourth Idly keeps the journey simple — so generosity moves faster
            and reaches further, with trust at every step.
          </p>
        </FadeIn>
      </div>

      <div className="relative mx-auto mt-14 max-w-3xl lg:mt-16">
        {/* Vertical line (desktop) */}
        <div
          aria-hidden="true"
          className="absolute left-7 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent md:left-1/2 md:block md:-translate-x-px"
        />

        <div className="space-y-8 md:space-y-14">
          {steps.map((step, index) => {
            const isReversed = index % 2 === 1;

            return (
              <FadeIn key={step.title} delay={index * 0.1}>
                <motion.div
                  className={`relative flex flex-col gap-5 md:flex-row md:items-center ${
                    isReversed ? "md:flex-row-reverse" : ""
                  }`}
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: isReversed ? 24 : -24 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                >
                  {/* Card */}
                  <div className="flex-1">
                    <div
                      className={`rounded-2xl border border-[#e8ddd9] bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:border-primary/20 hover:shadow-[0_14px_36px_rgb(168,74,88,0.1)] md:max-w-md ${
                        isReversed ? "md:ml-auto md:text-right" : "md:mr-auto"
                      }`}
                    >
                      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                        Step {step.step}
                      </span>
                      <h3 className="mt-2 text-xl font-semibold text-[#2d1b1e]">
                        {step.title}
                      </h3>
                      <p
                        className={`mt-2 text-sm leading-relaxed text-[#5c4a4d] ${
                          isReversed ? "md:ml-auto" : ""
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center icon */}
                  <div className="relative z-10 flex shrink-0 justify-start md:w-16 md:justify-center">
                    <motion.div
                      className="ml-1 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/25 md:ml-0"
                      whileHover={{ scale: 1.08 }}
                      transition={{ type: "spring", stiffness: 400, damping: 18 }}
                    >
                      <step.icon className="h-6 w-6" aria-hidden="true" />
                    </motion.div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden flex-1 md:block" />
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}