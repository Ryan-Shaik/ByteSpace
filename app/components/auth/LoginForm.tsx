"use client";

import { useState } from "react";
import Link from "next/link";

interface LoginFormProps {
  eyebrow?: string;
  title?: string;
  submitButtonText?: string;
  registerPromptText?: string;
  registerLinkText?: string;
}

interface FormErrors {
  email?: string;
  password?: string;
}

export default function LoginForm({
  eyebrow = "Sign In",
  title = "Welcome Back",
  submitButtonText = "Sign In",
  registerPromptText = "New user?",
  registerLinkText = "Create an account",
}: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ [K in keyof FormErrors]?: boolean }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateField = (field: keyof FormErrors, value: string): string | undefined => {
    switch (field) {
      case "email":
        if (!value.trim()) return "Please enter your email address.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return "Please enter a valid email address.";
        }
        return undefined;
      case "password":
        if (!value) return "Please enter your password.";
        if (value.length < 6) return "Password must be at least 6 characters.";
        return undefined;
    }
  };

  const handleBlur = (field: keyof FormErrors) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const val = field === "email" ? email : password;
    const errorMsg = validateField(field, val);
    setErrors((prev) => ({ ...prev, [field]: errorMsg }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emailError = validateField("email", email);
    const passwordError = validateField("password", password);

    setTouched({ email: true, password: true });
    setErrors({
      email: emailError,
      password: passwordError,
    });

    if (emailError || passwordError) {
      return;
    }

    setIsSubmitting(true);

    // Mock client-side sign in with zero external network requests
    setTimeout(() => {
      try {
        if (typeof window !== "undefined") {
          window.localStorage.setItem(
            "bytespace_session",
            JSON.stringify({ email: email.trim(), loggedInAt: new Date().toISOString() })
          );
        }
      } catch {
        // Ignore localStorage error in private browsing
      }
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 400);
  };

  return (
    <div className="w-full max-w-[580px] rounded-[32px] bg-white p-8 shadow-2xl border border-border/30 sm:rounded-[40px] sm:p-11 md:p-12 lg:p-14 xl:max-w-[620px] xl:rounded-[44px] xl:p-16">
      {/* Header Eyebrow & Title */}
      <div>
        <p className="text-sm font-medium text-brand sm:text-base">{eyebrow}</p>
        <h1 className="mt-1.5 text-2xl font-bold tracking-tight text-text-primary sm:text-3xl lg:text-4xl xl:text-[40px]">
          {title}
        </h1>
      </div>

      {isSuccess ? (
        <div
          className="mt-8 rounded-2xl bg-success-light border border-success/30 p-8 text-center"
          role="status"
          aria-live="polite"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-success text-white mb-3 font-bold text-2xl">
            ✓
          </div>
          <h2 className="text-lg font-semibold text-success">Signed in successfully!</h2>
          <p className="mt-1.5 text-sm text-text-secondary">
            Welcome back to ByteSpace! You are signed in as {email}.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/courses"
              className="rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Browse Courses
            </Link>
            <Link
              href="/"
              className="rounded-full border border-border bg-white px-7 py-3 text-sm font-semibold text-text-primary transition-colors hover:bg-surface-muted"
            >
              Go to Home
            </Link>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="mt-8 flex flex-col gap-5 sm:mt-10 sm:gap-6">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold text-text-primary mb-2 sm:text-sm"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="designer@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (touched.email) {
                  setErrors((prev) => ({ ...prev, email: validateField("email", e.target.value) }));
                }
              }}
              onBlur={() => handleBlur("email")}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={`w-full rounded-xl border bg-white px-5 py-4 text-sm text-text-primary placeholder:text-text-muted/50 transition-colors focus:outline-none focus:ring-1 sm:text-base ${
                errors.email
                  ? "border-error focus:border-error focus:ring-error"
                  : "border-border focus:border-brand focus:ring-brand"
              }`}
            />
            {errors.email && (
              <p id="email-error" className="mt-1.5 text-xs text-error" role="alert">
                {errors.email}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-xs font-semibold text-text-primary mb-2 sm:text-sm"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="********"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (touched.password) {
                  setErrors((prev) => ({ ...prev, password: validateField("password", e.target.value) }));
                }
              }}
              onBlur={() => handleBlur("password")}
              aria-invalid={Boolean(errors.password)}
              aria-describedby={errors.password ? "password-error" : undefined}
              className={`w-full rounded-xl border bg-white px-5 py-4 text-sm text-text-primary placeholder:text-text-muted/50 transition-colors focus:outline-none focus:ring-1 sm:text-base ${
                errors.password
                  ? "border-error focus:border-error focus:ring-error"
                  : "border-border focus:border-brand focus:ring-brand"
              }`}
            />
            {errors.password && (
              <p id="password-error" className="mt-1.5 text-xs text-error" role="alert">
                {errors.password}
              </p>
            )}
          </div>

          {/* Right-aligned Submit Button matching Login.png */}
          <div className="mt-2 flex justify-end sm:mt-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex cursor-pointer items-center justify-center rounded-full bg-accent px-9 py-4 text-sm font-semibold text-on-accent transition-transform hover:bg-accent-hover active:scale-95 disabled:cursor-not-allowed disabled:opacity-70 shadow-sm sm:text-base"
            >
              {isSubmitting ? "Signing in..." : submitButtonText}
            </button>
          </div>

          {/* Divider "or" */}
          <div className="relative my-4 flex items-center justify-center sm:my-6">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-border" />
            </div>
            <span className="relative bg-white px-4 text-xs font-medium text-text-muted sm:text-sm">
              or
            </span>
          </div>

          {/* Social Sign In Buttons matching Login.png */}
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            {/* Facebook Button */}
            <button
              type="button"
              aria-label="Sign in with Facebook (visual placeholder)"
              onClick={() => {}}
              className="flex h-13 w-13 cursor-pointer items-center justify-center rounded-2xl border border-border bg-white text-text-primary transition-colors hover:bg-surface-muted sm:h-15 sm:w-15"
            >
              <svg className="h-6 w-6 fill-current sm:h-7 sm:w-7" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </button>

            {/* Google Button */}
            <button
              type="button"
              aria-label="Sign in with Google (visual placeholder)"
              onClick={() => {}}
              className="flex h-13 w-13 cursor-pointer items-center justify-center rounded-2xl border border-border bg-white text-text-primary transition-colors hover:bg-surface-muted sm:h-15 sm:w-15"
            >
              <svg className="h-6 w-6 fill-current sm:h-7 sm:w-7" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
              </svg>
            </button>
          </div>
        </form>
      )}

      {/* Footer Navigation Link */}
      <div className="mt-10 text-center text-xs text-text-secondary sm:mt-14 sm:text-sm">
        <span>{registerPromptText} </span>
        <Link href="/register" className="font-semibold text-brand transition-colors hover:underline">
          {registerLinkText}
        </Link>
      </div>
    </div>
  );
}
