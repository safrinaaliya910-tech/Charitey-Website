"use client";

import { ChevronDown, Heart, Users, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { brand } from "@/config/brand";
import { PLAY_STORE_URL } from "@/config/app";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { PhoneMockup } from "./PhoneMockup";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-gradient-to-b from-background to-[#fdf8f9] pt-20 pb-16 md:min-h-screen md:pt-24 md:pb-20"
    >
      {/* 1. INDIA CONNECT NETWORK BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden opacity-60">
        <div 
          className="absolute h-[400px] w-[400px] bg-contain bg-center bg-no-repeat opacity-20 md:h-[600px] md:w-[600px]"
          style={{ backgroundImage: "url('/india-map-dotted.svg')" }} 
        />
        <svg
          className="absolute h-[1200px] w-[1200px] text-primary/30"
          viewBox="0 0 1000 1000"
          fill="none"
        >
          <path d="M-100,500 C 300,300 700,700 1100,300" stroke="currentColor" strokeWidth="1" strokeDasharray="6 8" className="opacity-40" />
          <path d="M 200,1100 C 400,600 600,400 800,-100" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" className="opacity-30" />
          <path d="M 0,800 C 400,900 600,200 1000,500" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" className="opacity-50" />
          <g fill="currentColor">
            <circle cx="480" cy="480" r="6" className="animate-pulse opacity-80" />
            <circle cx="480" cy="480" r="14" className="animate-ping opacity-20" />
            <circle cx="650" cy="380" r="4" className="animate-pulse opacity-70" style={{ animationDelay: "150ms" }} />
            <circle cx="320" cy="620" r="5" className="animate-pulse opacity-90" style={{ animationDelay: "300ms" }} />
          </g>
        </svg>
      </div>

      {/* 2. ELEGANT FLOWING RIBBON WAVES (Replaced "Mountains" with smooth sweeps) */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-0 w-full overflow-hidden leading-none drop-shadow-2xl">
        <svg
          className="relative block h-[140px] w-[200%] sm:h-[180px] md:h-[220px] md:w-full lg:h-[280px]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Rich gradients to match the elegant maroon/burgundy reference */}
            <linearGradient id="wave-back" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f5e6e8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#d9a5ac" stopOpacity="0.6" />
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

          {/* Sweeping Back Light Ribbon */}
          <path
            fill="url(#wave-back)"
            d="M0,192 C288,288 576,288 864,224 C1152,160 1296,96 1440,64 L1440,320 L0,320 Z"
          />
          {/* Flowing Middle Dark Ribbon */}
          <path
            fill="url(#wave-mid)"
            d="M0,256 C320,256 500,128 800,160 C1100,192 1280,288 1440,224 L1440,320 L0,320 Z"
          />
          {/* Deep Foreground Ribbon for 3D Depth */}
          <path
            fill="url(#wave-front)"
            d="M0,320 L0,288 C320,320 640,192 960,192 C1280,192 1360,256 1440,256 L1440,320 Z"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-start gap-10 px-5 pt-4 sm:px-6 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:pt-8 xl:gap-16">
        
        {/* TEXT COLUMN - Improved Typography & Alignment */}
        <div className="mx-auto flex max-w-xl flex-col items-center text-center lg:mx-0 lg:max-w-none lg:items-start lg:pt-4 lg:text-left">
          <FadeIn>
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-white/90 px-4 py-1.5 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-[13px] font-semibold tracking-wide text-primary">
                Official Charitey App
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-[2.75rem] font-extrabold leading-[1.1] tracking-tight text-[#2d1b1e] sm:text-5xl lg:text-[3.5rem] xl:text-[4.25rem]">
              {brand.tagline || "It's We Donated."}
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-5 max-w-[480px] text-base leading-relaxed text-[#5c4a4d] md:text-lg">
              Charitey connects verified NGOs with generous donors across India.
              Discover real needs, give with confidence, and see your impact reach
              the communities who need it most.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center lg:justify-start">
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                <Button href={PLAY_STORE_URL} size="lg" className="w-full justify-center bg-primary font-semibold text-white shadow-lg shadow-primary/30 hover:bg-primary/90 sm:w-auto">
                  Download App
                </Button>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                <Button href="#about" variant="outline" size="lg" className="w-full justify-center border-primary/20 bg-white/50 font-semibold text-primary backdrop-blur-sm hover:bg-white/80 sm:w-auto">
                  Learn More
                </Button>
              </motion.div>
            </div>
          </FadeIn>

          {/* FLOATING STATS BOX - Perfectly aligned to the left grid on desktop */}
          <FadeIn delay={0.4}>
            <div className="mt-12 flex w-full flex-wrap items-center justify-center gap-6 rounded-2xl border border-white/60 bg-white/80 p-5 shadow-xl shadow-primary/5 backdrop-blur-md sm:w-auto sm:gap-8 lg:justify-start">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <p className="text-xl font-bold leading-tight text-[#2d1b1e]">500+</p>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-primary/70">NGOs</p>
                </div>
              </div>
              <div className="hidden h-10 w-px bg-primary/15 sm:block" />
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Users className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <p className="text-xl font-bold leading-tight text-[#2d1b1e]">10K+</p>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-primary/70">Donors</p>
                </div>
              </div>
              <div className="hidden h-10 w-px bg-primary/15 sm:block" />
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Heart className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <p className="text-xl font-bold leading-tight text-[#2d1b1e]">25K+</p>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-primary/70">Impacted</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* PHONE COLUMN */}
        <FadeIn 
          delay={0.2} 
          direction="left" 
          className="relative mx-auto flex w-full max-w-[240px] justify-center sm:max-w-[260px] lg:mx-0 lg:max-w-[290px] xl:max-w-[320px] lg:justify-end xl:ml-auto"
        >
          <div className="relative flex w-full justify-center">
            {/* Adjusted glow behind the phone to match the new elegant tones */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
              <div className="h-[80%] w-[80%] rounded-full bg-gradient-to-br from-[#d9a5ac]/40 via-primary/20 to-transparent blur-3xl" />
            </div>
            <PhoneMockup />
          </div>
        </FadeIn>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1.5 text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:bottom-6"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Scroll to about section"
      >
        <span className="text-[10px] font-semibold uppercase tracking-widest text-white/90 drop-shadow-md">Scroll</span>
        <ChevronDown className="h-4 w-4 text-white drop-shadow-md" />
      </motion.a>
    </section>
  );
}