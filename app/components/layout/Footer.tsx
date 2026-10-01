import Image from "next/image";
import Link from "next/link";
import Container from "@/app/components/ui/Container";
import NewsletterForm from "@/app/components/ui/NewsletterForm";
import type { FooterContent } from "@/src/types";

interface FooterProps {
  content: FooterContent;
}

export default function Footer({ content }: FooterProps) {
  return (
    <footer className="bg-surface pt-16 md:pt-24" aria-label="Site Footer">
      <Container>
        {/* Top section: newsletter + link columns */}
        <div className="flex flex-col gap-12 md:flex-row md:justify-between md:gap-8 lg:gap-16">
          {/* Left: Logo, newsletter text, input, disclaimer */}
          <div className="flex max-w-[560px] flex-col gap-6">
            {/* Logo */}
            <Link href="/" aria-label="ByteSpace Home">
              <Image
                src="/assets/footer-logo.png"
                alt="ByteSpace"
                width={145}
                height={32}
                className="h-7 w-auto md:h-8"
              />
            </Link>

            {/* Newsletter description */}
            <p className="text-sm leading-relaxed text-text-secondary md:text-base md:leading-[26px]">
              {content.newsletterText}
            </p>

            {/* Newsletter form */}
            <NewsletterForm />

            {/* Disclaimer */}
            <p className="text-xs leading-relaxed text-text-muted md:text-sm">
              {content.newsletterDisclaimer}
            </p>
          </div>

          {/* Right: Three link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:gap-10 lg:gap-14">
            {content.linkColumns.map((column, colIndex) => (
              <nav
                key={colIndex}
                aria-label={`Footer links column ${colIndex + 1}`}
                className="flex flex-col gap-3 md:gap-4"
              >
                {column.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-text-primary transition-colors hover:text-link md:text-base"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            ))}
          </div>
        </div>

        {/* Divider */}
        <hr className="mt-16 border-t border-border md:mt-24" />

        {/* Bottom row: copyright + legal links */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row md:py-8">
          <p className="text-xs text-text-muted md:text-sm">
            {content.copyrightText}
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            {content.legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-text-muted transition-colors hover:text-text-primary md:text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
