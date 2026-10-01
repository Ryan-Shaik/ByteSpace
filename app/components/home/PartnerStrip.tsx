import Image from "next/image";

export default function PartnerStrip() {
  return (
    <section
      aria-label="Partner Logos"
      className="w-full bg-surface-muted py-10 md:py-[80px]"
    >
      <div className="max-w-page mx-auto px-5 md:px-8 flex items-center justify-center">
        <Image
          src="/assets/Logo_Partner.png"
          alt="Trusted partner companies"
          width={1132}
          height={42}
          className="w-full max-w-[1132px] h-auto object-contain select-none"
        />
      </div>
    </section>
  );
}
