import { useId, useState } from "react";

function EnvelopeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M4 7.75A2.75 2.75 0 0 1 6.75 5h10.5A2.75 2.75 0 0 1 20 7.75v8.5A2.75 2.75 0 0 1 17.25 19H6.75A2.75 2.75 0 0 1 4 16.25v-8.5Zm1.8-.36 5.45 4.2a1.2 1.2 0 0 0 1.46 0l5.49-4.2"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M8 10V8a4 4 0 1 1 8 0v2m-8 0h8a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function FloatingField({
  id,
  label,
  type = "text",
  autoComplete,
  icon,
  rightSlot,
}) {
  return (
    <div className="group relative animate-[field-rise_420ms_cubic-bezier(0.22,1,0.36,1)_both]">
      <div className="absolute inset-x-3 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-70 transition duration-300 group-hover:via-slate-400 group-focus-within:via-slate-900" />
      <div className="absolute inset-0 rounded-[22px] bg-gradient-to-b from-white to-[#f8f6f2] shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition duration-300 group-focus-within:shadow-[0_16px_40px_rgba(15,23,42,0.08)]" />
      <div className="absolute inset-0 rounded-[22px] ring-1 ring-slate-200/90 transition duration-300 group-hover:ring-slate-300 group-focus-within:ring-slate-900/15" />
      <div className="pointer-events-none absolute inset-x-2 bottom-0 h-10 rounded-b-[18px] bg-[radial-gradient(circle_at_50%_120%,rgba(15,23,42,0.08),transparent_60%)] opacity-0 blur-xl transition duration-300 group-focus-within:opacity-100" />

      <div className="relative flex items-center">
        <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition duration-300 group-hover:text-slate-500 group-focus-within:text-slate-900">
          {icon}
        </div>

        <input
          id={id}
          name={id}
          type={type}
          autoComplete={autoComplete}
          placeholder=" "
          required
          className="peer h-16 w-full rounded-[22px] bg-transparent px-14 pb-4 pt-7 text-[15px] font-medium text-slate-900 outline-none placeholder:text-transparent"
        />

        <label
          htmlFor={id}
          className="pointer-events-none absolute left-14 top-5 origin-left text-[15px] text-slate-500 transition-all duration-200 peer-focus:top-3.5 peer-focus:scale-[0.82] peer-focus:text-slate-700 peer-[:not(:placeholder-shown)]:top-3.5 peer-[:not(:placeholder-shown)]:scale-[0.82]"
        >
          {label}
        </label>

        {rightSlot ? (
          <div className="absolute inset-y-0 right-3 flex items-center">
            {rightSlot}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function MetricCard({ value, label, tone }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
      <div
        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] ${tone}`}
      >
        {label}
      </div>
      <div className="mt-4 text-3xl font-semibold tracking-tight text-white">
        {value}
      </div>
    </div>
  );
}

function LogoMark() {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white shadow-lg shadow-slate-950/10">
      ML
    </div>
  );
}

export default function App() {
  const emailId = useId();
  const passwordId = useId();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen bg-[#f3f0ea] text-slate-950">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <div className="relative w-full overflow-hidden rounded-[32px] border border-black/5 bg-white shadow-[0_40px_120px_rgba(15,23,42,0.12)] lg:grid lg:min-h-[880px] lg:grid-cols-[1.08fr_0.92fr]">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

          <section className="relative hidden overflow-hidden bg-[#0f1720] p-10 lg:flex lg:flex-col lg:justify-between xl:p-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.12),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(120,119,198,0.12),_transparent_24%),linear-gradient(180deg,_rgba(255,255,255,0.02),_rgba(255,255,255,0))]" />
            <div className="absolute inset-0 bg-hero-grid bg-[length:42px_42px] opacity-[0.06]" />
            <div className="absolute left-14 top-24 h-48 w-48 rounded-full bg-cyan-300/10 blur-3xl" />
            <div className="absolute bottom-12 right-12 h-56 w-56 rounded-full bg-indigo-300/10 blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-4">
                <LogoMark />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">
                    modern-login-ui
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    Identity access for premium software products
                  </p>
                </div>
              </div>

              <div className="mt-16 max-w-xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200">
                  <span className="h-2 w-2 rounded-full bg-emerald-300" />
                  Secure authentication layer
                </div>

                <h1 className="mt-8 text-5xl font-semibold leading-[1.05] tracking-tight text-white">
                  Sign in flows that feel dependable at first glance.
                </h1>
                <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">
                  A composed, production-grade login surface with strong
                  hierarchy, sharp alignment, and enough restraint to feel real
                  inside a SaaS product.
                </p>
              </div>
            </div>

            <div className="relative z-10 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <MetricCard
                  value="2.4s"
                  label="avg sign-in"
                  tone="bg-emerald-400/10 text-emerald-200"
                />
                <MetricCard
                  value="99.98%"
                  label="availability"
                  tone="bg-cyan-400/10 text-cyan-200"
                />
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-slate-400">Workspace overview</p>
                    <p className="mt-2 text-2xl font-semibold tracking-tight text-white">
                      Team access is healthy across all regions
                    </p>
                  </div>
                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200">
                    Stable
                  </span>
                </div>

                <div className="mt-8 space-y-5">
                  <div>
                    <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                      <span>Identity checks</span>
                      <span>96%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10">
                      <div className="h-2 w-[96%] rounded-full bg-white" />
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                      <span>Session trust score</span>
                      <span>91%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10">
                      <div className="h-2 w-[91%] rounded-full bg-gradient-to-r from-cyan-300 to-indigo-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="flex min-h-screen items-center justify-center bg-[#fcfbf8] px-5 py-10 sm:px-8 lg:min-h-[880px] lg:px-12 xl:px-16">
            <div className="w-full max-w-[440px]">
              <div className="flex items-center gap-4 lg:hidden">
                <LogoMark />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                    modern-login-ui
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Secure access portal
                  </p>
                </div>
              </div>

              <div className="mt-10 animate-[content-rise_520ms_cubic-bezier(0.22,1,0.36,1)_both] lg:mt-0">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                  Welcome back
                </p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">
                  Access your workspace
                </h2>
                <p className="mt-4 max-w-sm text-[15px] leading-7 text-slate-600">
                  Enter your credentials to continue to your dashboard, manage
                  projects, and review account activity.
                </p>
              </div>

              <form
                className="mt-10 space-y-5 animate-[content-rise_620ms_cubic-bezier(0.22,1,0.36,1)_both]"
                noValidate
                aria-label="Login form"
              >
                <FloatingField
                  id={emailId}
                  label="Work email"
                  type="email"
                  autoComplete="email"
                  icon={<EnvelopeIcon />}
                />

                <FloatingField
                  id={passwordId}
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  icon={<LockIcon />}
                  rightSlot={
                    <button
                      type="button"
                      onClick={() => setShowPassword((value) => !value)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      aria-pressed={showPassword}
                      className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  }
                />

                <div className="flex items-center justify-between gap-4 pt-1 text-sm">
                  <label className="flex cursor-pointer items-center gap-3 text-slate-600">
                    <input
                      type="checkbox"
                      name="remember"
                      className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900/20"
                    />
                    <span>Remember me</span>
                  </label>

                  <a
                    href="#"
                    className="font-semibold text-slate-900 transition hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                  >
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="inline-flex h-14 w-full items-center justify-center rounded-2xl bg-slate-950 px-6 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-950/10"
                >
                  Sign in
                </button>

                <div className="relative py-2">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200" />
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-[#fcfbf8] px-4 text-sm text-slate-400">
                      or continue with
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    className="inline-flex h-12 items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-900 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-900/5"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      <path
                        fill="#EA4335"
                        d="M12 10.2v3.9h5.4c-.2 1.3-1.5 3.9-5.4 3.9-3.3 0-6-2.7-6-6s2.7-6 6-6c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.8 3.6 14.7 2.7 12 2.7A9.3 9.3 0 0 0 2.7 12 9.3 9.3 0 0 0 12 21.3c5.3 0 8.8-3.7 8.8-8.9 0-.6-.1-1.1-.2-1.6H12Z"
                      />
                    </svg>
                    Google
                  </button>

                  <button
                    type="button"
                    className="inline-flex h-12 items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-900 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-900/5"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-5 w-5 fill-current"
                    >
                      <path d="M12 2C6.5 2 2 6.6 2 12.2c0 4.4 2.8 8.1 6.7 9.5.5.1.7-.2.7-.5v-1.9c-2.7.6-3.3-1.2-3.3-1.2-.4-1.1-1.1-1.4-1.1-1.4-.9-.7.1-.7.1-.7 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.3 1.1 2.8.8.1-.7.4-1.1.7-1.4-2.2-.2-4.6-1.1-4.6-5 0-1.1.4-2 1.1-2.8-.1-.3-.5-1.3.1-2.7 0 0 .9-.3 2.9 1.1A10 10 0 0 1 12 7.2c.9 0 1.8.1 2.7.4 2-1.4 2.9-1.1 2.9-1.1.6 1.4.2 2.4.1 2.7.7.8 1.1 1.7 1.1 2.8 0 3.9-2.4 4.7-4.7 5 .4.3.8 1 .8 2v3c0 .3.2.6.7.5 3.9-1.4 6.7-5.1 6.7-9.5C22 6.6 17.5 2 12 2Z" />
                    </svg>
                    GitHub
                  </button>
                </div>
              </form>

              <div className="mt-10 rounded-[28px] border border-slate-200 bg-white p-5 lg:hidden">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Trusted access
                </p>
                <p className="mt-3 text-lg font-semibold tracking-tight text-slate-950">
                  Fast, quiet, production-grade authentication experience.
                </p>
              </div>

              <p className="mt-8 text-center text-sm text-slate-500">
                By continuing, you agree to the platform terms and security
                policy.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
