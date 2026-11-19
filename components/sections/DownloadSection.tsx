import { Download } from "lucide-react";
import { APK_DOWNLOAD_URL } from "@/config/app";
import { Button } from "@/components/ui/Button";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { FadeIn } from "@/components/ui/FadeIn";

export function DownloadSection() {
  return (
    <SectionContainer id="download" className="bg-gradient-primary text-secondary">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 px-8 py-16 text-center md:px-16 md:py-20">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-black/10 blur-2xl" />

        <FadeIn>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-white/80">
            Download Fourth Idly
          </p>
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            Start giving with purpose today
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
            Join thousands of changemakers using Fourth Idly to connect with verified
            NGOs and make a real difference in communities across India.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href={APK_DOWNLOAD_URL}
              download="fourth-idly.apk"
              variant="secondary"
              size="lg"
              className="min-w-[220px] bg-secondary text-primary hover:bg-white"
            >
              <Download className="h-5 w-5" />
              Download App
            </Button>
          </div>

          <p className="mt-6 text-sm text-white/60">
            Android only · Free · About 63 MB
          </p>
          <p className="mx-auto mt-2 max-w-md text-xs text-white/50">
            After downloading, open the file and allow &ldquo;Install unknown
            apps&rdquo; if Android asks.
          </p>
        </FadeIn>
      </div>
    </SectionContainer>
  );
}