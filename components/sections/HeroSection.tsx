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
      className="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-[#fafafa] pt-20 pb-16 md:min-h-screen md:pt-24 md:pb-20"
    >
      {/* 1. INDIA MAP WATERMARK LAYER */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        
        {/* 
          UPDATED: Map Container 
          - Shifted significantly to the RIGHT (left-[60%] to left-[65%])
          - Pushed slightly down (top-[58%])
          - This moves it completely out of the text and right into the gap you circled!
        */}
        <div className="absolute top-[55%] left-[58%] lg:top-[48%] lg:left-[62%] xl:left-[54%] -translate-x-1/2 -translate-y-1/2 h-[260px] w-[260px] sm:h-[300px] sm:w-[300px] md:h-[340px] md:w-[340px] lg:h-[400px] lg:w-[400px]">
          {/* Elegant soft white glow directly behind the map for depth */}
          <div className="absolute inset-0 rounded-full bg-white/80 blur-[60px]" />
          {/* The Dotted Map */}
          <div 
            className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-45 drop-shadow-sm"
            style={{ backgroundImage: "url('/india-map-dotted.png')" }} 
          />
        </div>
      </div>

      {/* 2. ELEGANT FLOWING RIBBON WAVES */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-0 w-full overflow-hidden leading-none drop-shadow-2xl">
        <svg
          className="relative block h-[140px] w-[200%] sm:h-[180px] md:h-[220px] md:w-full lg:h-[280px]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
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
          <path fill="url(#wave-back)" d="M0,192 C288,288 576,288 864,224 C1152,160 1296,96 1440,64 L1440,320 L0,320 Z" />
          <path fill="url(#wave-mid)" d="M0,256 C320,256 500,128 800,160 C1100,192 1280,288 1440,224 L1440,320 L0,320 Z" />
          <path fill="url(#wave-front)" d="M0,320 L0,288 C320,320 640,192 960,192 C1280,192 1360,256 1440,256 L1440,320 Z" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-start gap-10 px-5 pt-4 sm:px-6 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:pt-8 xl:gap-16">
        
        {/* TEXT COLUMN */}
        <div className="mx-auto flex max-w-xl flex-col items-center text-center lg:mx-0 lg:max-w-none lg:items-start lg:pt-4 lg:text-left">
          <FadeIn>
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-primary/10 bg-white px-4 py-1.5 shadow-sm">
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
                <Button href="#about" variant="outline" size="lg" className="w-full justify-center border-primary/20 bg-white font-semibold text-primary shadow-sm hover:bg-gray-50 sm:w-auto">
                  Learn More
                </Button>
              </motion.div>
            </div>
          </FadeIn>

          {/* FLOATING STATS BOX */}
          <FadeIn delay={0.4}>
            <div className="mt-12 flex w-full flex-wrap items-center justify-center gap-6 rounded-2xl border border-primary/5 bg-white p-5 shadow-xl shadow-primary/5 sm:w-auto sm:gap-8 lg:justify-start">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <p className="text-xl font-bold leading-tight text-[#2d1b1e]">50+</p>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-primary/70">NGOs</p>
                </div>
              </div>
              <div className="hidden h-10 w-px bg-gray-100 sm:block" />
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Users className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <p className="text-xl font-bold leading-tight text-[#2d1b1e]">10K+</p>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-primary/70">Donors</p>
                </div>
              </div>
              <div className="hidden h-10 w-px bg-gray-100 sm:block" />
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
            {/* Elegant soft glow strictly behind the phone */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
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
        <span className="text-[10px] font-semibold uppercase tracking-widest drop-shadow-sm">Scroll</span>
        <ChevronDown className="h-4 w-4 drop-shadow-sm" />
      </motion.a>
    </section>
  );
}