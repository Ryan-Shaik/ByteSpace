import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

interface HeaderProps {
  activePath?: string;
}

export default function Header({ activePath = "/" }: HeaderProps) {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Creators", href: "/creators" },
  ];

  return (
    <header className="relative z-30 w-full" aria-label="Main Navigation">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 md:px-14">
        {/* Brand Logo */}
        <Link href="/" aria-label="ByteSpace Home" className="flex items-center">
          <Image
            src="/assets/Header_Logo.png"
            alt="ByteSpace"
            width={145}
            height={32}
            priority
            className="h-7 w-auto md:h-8"
          />
        </Link>

        {/* Center Navigation Links */}
        <nav
          aria-label="Site Navigation"
          className="hidden md:flex items-center gap-9"
        >
          {navItems.map((item) => {
            const isActive = activePath === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[15px] transition-colors ${
                  isActive
                    ? "font-semibold text-on-brand"
                    : "font-normal text-on-brand/80 hover:text-on-brand"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Sign In, Join Us, Cart */}
        <div className="flex items-center gap-6 md:gap-7">
          <Link
            href="/login"
            className="text-[15px] font-normal text-on-brand/90 transition-colors hover:text-on-brand"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className="text-[15px] font-normal text-on-brand/90 transition-colors hover:text-on-brand"
          >
            Join Us
          </Link>
          <button
            type="button"
            aria-label="View shopping bag"
            className="flex items-center justify-center text-on-brand transition-opacity hover:opacity-80"
          >
            <ShoppingBag className="h-5 w-5" strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </header>
  );
}
