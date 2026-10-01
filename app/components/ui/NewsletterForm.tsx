"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
    setEmail("");
  };

  return (
    <div className="flex flex-col gap-2">
      {submitted ? (
        <div className="flex items-center gap-2 rounded-pill bg-success-light px-5 py-3 text-sm font-medium text-success">
          <span>Thank you for subscribing to our newsletter!</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-wrap items-center gap-3 sm:flex-nowrap">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError("");
            }}
            placeholder="Enter your email"
            aria-label="Email address for newsletter"
            className="w-full max-w-[360px] rounded-pill border border-border bg-surface px-6 py-3.5 text-sm text-text-primary placeholder:text-text-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand md:text-base"
          />
          <button
            type="submit"
            className="cursor-pointer shrink-0 rounded-pill bg-accent px-8 py-3.5 text-sm font-medium text-on-accent transition-colors hover:bg-accent-hover md:text-base"
          >
            Subscribe
          </button>
        </form>
      )}
      {error && (
        <p className="text-xs text-error md:text-sm" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

