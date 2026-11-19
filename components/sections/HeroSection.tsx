"use client";

import { ChevronDown, Heart, Users, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { APK_DOWNLOAD_URL } from "@/config/app";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { PhoneMockup } from "./PhoneMockup";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-[#faf8f7] pt-20 pb-16 md:min-h-screen md:pt-24 md:pb-20"
    >
      {/* India map watermark */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[55%] left-[58%] -translate-x-1/2 -translate-y-1/2 h-[260px] w-[260px] sm:h-[300px] sm:w-[300px] md:h-[340px] md:w-[340px] lg:top-[48%] lg:left-[62%] lg:h-[400px] lg:w-[400px] xl:left-[54%]">
          <div className="absolute inset-0 rounded-full bg-white/80 blur-[60px]" />
          <div
            className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-40 drop-shadow-sm"
            style={{ backgroundImage: "url('/india-map-dotted.png')" }}
          />
        </div>
      </div>

      {/* Bottom waves */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block h-[140px] w-[200%] sm:h-[180px] md:h-[220px] md:w-full lg:h-[280px]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="wave-back" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f5e6e8" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#d9a5ac" stopOpacity="0.55" />
            </linearGradient>
            <linearGradient id="wave-mid" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a84a58" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#7a2e38" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="wave-front" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3d151a" />
              <stop offset="50%" stopColor="#7a2e38" />
              <stop offset="100%" stopColor="#a33d4b" />
            </linearGradient>
          </defs>
          <path
            fill="url(#wave-back)"
            d="M0,192 C288,288 576,288 864,224 C1152,160 1296,96 1440,64 L1440,320 L0,320 Z"
          />
          <path
            fill="url(#wave-mid)"
            d="M0,256 C320,256 500,128 800,160 C1100,192 1280,288 1440,224 L1440,320 L0,320 Z"
          />
          <path
            fill="url(#wave-front)"
            d="M0,320 L0,288 C320,320 640,192 960,192 C1280,192 1360,256 1440,256 L1440,320 Z"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-start gap-10 px-5 pt-4 sm:px-6 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:pt-8 xl:gap-16">
        {/* Text column */}
        <div className="mx-auto flex max-w-xl flex-col items-center text-center lg:mx-0 lg:max-w-none lg:items-start lg:pt-4 lg:text-left">
          <FadeIn>
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-primary/10 bg-white px-4 py-1.5 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-[13px] font-semibold tracking-wide text-primary">
                Official Fourth Idly App
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary/80">
              Fourth Idly
            </p>
          </FadeIn>

          <FadeIn delay={0.12}>
            <h1 className="text-[2.35rem] font-extrabold leading-[1.15] tracking-tight text-[#2d1b1e] sm:text-4xl md:text-5xl lg:text-[3.15rem] xl:text-[3.5rem]">
              Three idlies satisfies your hunger,
              <span className="mt-1 block text-primary">
                but the fourth idly is for others.
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-5 max-w-[520px] text-base leading-relaxed text-[#5c4a4d] md:text-lg">
              Fourth Idly connects verified NGOs with generous donors across
              India. Discover real needs, give with confidence, and see your
              impact reach the communities who need it most.
            </p>
          </FadeIn>

          <FadeIn delay={0.28}>
            <div className="mt-8 flex w-full flex-col gap-3.5 sm:w-auto sm:flex-row sm:items-center lg:justify-start">
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto"
              >
               <Button
  href={APK_DOWNLOAD_URL}
  download="fourth-idly.apk"
  size="lg"
  className="w-full justify-center bg-primary font-semibold text-white shadow-lg shadow-primary/30 hover:bg-primary/90 sm:w-auto"
>
  Download App
</Button>
              </motion.div>
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto"
              >
                <Button
                  href="#about"
                  variant="outline"
                  size="lg"
                  className="w-full justify-center border-primary/20 bg-white font-semibold text-primary shadow-sm hover:bg-gray-50 sm:w-auto"
                >
                  Learn More
                </Button>
              </motion.div>
            </div>
          </FadeIn>

          {/* Stats */}
          <FadeIn delay={0.36}>
            <div className="mt-12 flex w-full flex-wrap items-center justify-center gap-5 rounded-2xl border border-primary/5 bg-white/95 p-5 shadow-xl shadow-primary/5 backdrop-blur-sm sm:w-auto sm:gap-8 lg:justify-start">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <p className="text-xl font-bold leading-tight text-[#2d1b1e]">
                    50+
                  </p>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-primary/70">
                    NGOs
                  </p>
                </div>
              </div>

              <div className="hidden h-10 w-px bg-gray-100 sm:block" />

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Users className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <p className="text-xl font-bold leading-tight text-[#2d1b1e]">
                    10K+
                  </p>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-primary/70">
                    Donors
                  </p>
                </div>
              </div>

              <div className="hidden h-10 w-px bg-gray-100 sm:block" />

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Heart className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <p className="text-xl font-bold leading-tight text-[#2d1b1e]">
                    25K+
                  </p>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-primary/70">
                    Impacted
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Phone column */}
        <FadeIn
          delay={0.2}
          direction="left"
          className="relative mx-auto flex w-full max-w-[240px] justify-center sm:max-w-[260px] lg:mx-0 lg:max-w-[290px] lg:justify-end xl:ml-auto xl:max-w-[320px]"
        >
          <div className="relative flex w-full justify-center">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
            >
              <div className="h-[80%] w-[80%] rounded-full bg-gradient-to-br from-[#d9a5ac]/30 via-primary/15 to-transparent blur-3xl" />
            </div>
            <PhoneMockup />
          </div>
        </FadeIn>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1.5 text-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:bottom-6"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Scroll to about section"
      >
        <span className="text-[10px] font-semibold uppercase tracking-widest drop-shadow-sm">
          Scroll
        </span>
        <ChevronDown className="h-4 w-4 drop-shadow-sm" />
      </motion.a>
    </section>
  );
}