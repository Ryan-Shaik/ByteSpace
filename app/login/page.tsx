import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getLoginContent } from "@/src/lib/auth";
import AuthIllustration from "@/app/components/auth/AuthIllustration";
import LoginForm from "@/app/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Login – ByteSpace",
  description:
    "Sign in to your ByteSpace account to access your courses, track your learning progress, and connect with creators.",
};

export default function LoginPage() {
  const content = getLoginContent();

  return (
    <main className="hero-grid min-h-screen w-full flex flex-col justify-between overflow-x-hidden">
      {/* Top Header Row with Logo */}
      <header className="w-full px-6 pt-7 sm:px-10 sm:pt-8 lg:px-14 lg:pt-10 xl:px-16">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between">
          <Link
            href="/"
            aria-label="ByteSpace Home"
            className="group flex items-center transition-transform hover:scale-105"
          >
            {/* Isolated lime 'b' mark matching Login.png */}
            <div className="relative h-9 w-9 overflow-hidden sm:h-10 sm:w-10">
              <Image
                src="/assets/Header_Logo.png"
                alt="ByteSpace"
                width={160}
                height={36}
                priority
                className="max-w-none object-left"
              />
            </div>
          </Link>
        </div>
      </header>

      {/* Main Split Layout Content - comfortably scaled across all desktop widths */}
      <div className="mx-auto flex w-full max-w-[1500px] flex-1 items-center px-6 py-6 sm:px-10 lg:px-14 lg:py-10 xl:px-16">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-14">
          {/* Left Column: Marketing Copy & Layered Collage (Desktop only) */}
          <section
            aria-label="ByteSpace sign in preview"
            className="hidden flex-col justify-center lg:col-span-6 lg:flex"
          >
            <div className="max-w-[540px]">
              <h2 className="text-3xl font-bold tracking-tight text-on-brand sm:text-4xl xl:text-[42px]">
                {content.marketing.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-on-brand/90 xl:text-[18px]">
                {content.marketing.description}
              </p>
            </div>

            {/* Visual Composition with 3D elements and overlapping cards */}
            <div className="mt-8 w-full">
              <AuthIllustration />
            </div>
          </section>

          {/* Right Column: Sign In Card */}
          <section
            aria-label="Sign in form"
            className="flex w-full justify-center lg:col-span-6 lg:justify-end"
          >
            <LoginForm
              eyebrow={content.eyebrow}
              title={content.formTitle}
              submitButtonText={content.submitButtonText}
              registerPromptText={content.registerPromptText}
              registerLinkText={content.registerLinkText}
            />
          </section>
        </div>
      </div>

      {/* Subtle bottom spacer */}
      <footer className="h-6 w-full sm:h-8" aria-hidden="true" />
    </main>
  );
}
