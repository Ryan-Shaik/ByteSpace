"use client";

import { useState } from "react";
import Link from "next/link";

interface RegisterFormProps {
  eyebrow?: string;
  title?: string;
  submitButtonText?: string;
  loginPromptText?: string;
  loginLinkText?: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  password?: string;
}

export default function RegisterForm({
  eyebrow = "Create an Account",
  title = "Welcome to ByteSpace",
  submitButtonText = "Continue",
  loginPromptText = "Already have an account?",
  loginLinkText = "Login",
}: RegisterFormProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ [K in keyof FormErrors]?: boolean }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateField = (field: keyof FormErrors, value: string): string | undefined => {
    switch (field) {
      case "fullName":
        if (!value.trim()) return "Please enter your full name.";
        if (value.trim().length < 2) return "Name must be at least 2 characters.";
        return undefined;
      case "email":
        if (!value.trim()) return "Please enter your email address.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return "Please enter a valid email address.";
        }
        return undefined;
      case "password":
        if (!value) return "Please enter a password.";
        if (value.length < 6) return "Password must be at least 6 characters.";
        return undefined;
    }
  };

  const handleBlur = (field: keyof FormErrors) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const val = field === "fullName" ? fullName : field === "email" ? email : password;
    const errorMsg = validateField(field, val);
    setErrors((prev) => ({ ...prev, [field]: errorMsg }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nameError = validateField("fullName", fullName);
    const emailError = validateField("email", email);
    const passwordError = validateField("password", password);

    setTouched({ fullName: true, email: true, password: true });
    setErrors({
      fullName: nameError,
      email: emailError,
      password: passwordError,
    });

    if (nameError || emailError || passwordError) {
      return;
    }

    setIsSubmitting(true);

    // Mock client-side submission with zero network calls per architecture rules
    setTimeout(() => {
      try {
        if (typeof window !== "undefined") {
          window.localStorage.setItem(
            "bytespace_user",
            JSON.stringify({ name: fullName.trim(), email: email.trim() })
          );
        }
      } catch {
        // Ignore localStorage errors in private browsing
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
          <h2 className="text-lg font-semibold text-success">
            Account created successfully!
          </h2>
          <p className="mt-1.5 text-sm text-text-secondary">
            Welcome to ByteSpace, {fullName}! Your account has been registered.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/courses"
              className="rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Browse Courses
            </Link>
            <Link
              href="/login"
              className="rounded-full border border-border bg-white px-7 py-3 text-sm font-semibold text-text-primary transition-colors hover:bg-surface-muted"
            >
              Go to Login
            </Link>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="mt-8 flex flex-col gap-5 sm:mt-10 sm:gap-6">
          {/* Full Name Field */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-xs font-semibold text-text-primary mb-2 sm:text-sm"
            >
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              placeholder="Jamie Davis"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
                if (touched.fullName) {
                  setErrors((prev) => ({ ...prev, fullName: validateField("fullName", e.target.value) }));
                }
              }}
              onBlur={() => handleBlur("fullName")}
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
              className={`w-full rounded-xl border bg-white px-5 py-4 text-sm text-text-primary placeholder:text-text-muted/50 transition-colors focus:outline-none focus:ring-1 sm:text-base ${
                errors.fullName
                  ? "border-error focus:border-error focus:ring-error"
                  : "border-border focus:border-brand focus:ring-brand"
              }`}
            />
            {errors.fullName && (
              <p id="fullName-error" className="mt-1.5 text-xs text-error" role="alert">
                {errors.fullName}
              </p>
            )}
          </div>

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
              autoComplete="new-password"
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

          {/* Right-aligned Submit Button matching Register.png */}
          <div className="mt-2 flex justify-end sm:mt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex cursor-pointer items-center justify-center rounded-full bg-accent px-9 py-4 text-sm font-semibold text-on-accent transition-transform hover:bg-accent-hover active:scale-95 disabled:cursor-not-allowed disabled:opacity-70 shadow-sm sm:text-base"
            >
              {isSubmitting ? "Submitting..." : submitButtonText}
            </button>
          </div>
        </form>
      )}

      {/* Footer Navigation Link */}
      <div className="mt-12 text-center text-xs text-text-secondary sm:mt-16 sm:text-sm">
        <span>{loginPromptText} </span>
        <Link href="/login" className="font-semibold text-brand transition-colors hover:underline">
          {loginLinkText}
        </Link>
      </div>
    </div>
  );
}
