import { useEffect, useRef, useState } from "react";

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState("Starter");

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Header />
      <main>
        <Hero />
        <Section onPlanSelect={setSelectedPlan} />
        <Results />
      </main>
      <Footer selectedPlan={selectedPlan} />
    </div>
  );
}

function Reveal({ children, className = "", delay = 0 }) {
  const [isVisible, setIsVisible] = useState(
    () => typeof window !== "undefined" && !("IntersectionObserver" in window)
  );
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || isVisible) {
      return;
    }

    const isPhone =
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 768px)").matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: isPhone ? 0.01 : 0.05,
        rootMargin: isPhone ? "0px 0px -2% 0px" : "0px 0px -6% 0px",
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${isVisible ? "reveal-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItemClass =
    "inline-flex items-center rounded-lg px-3 py-2 text-sm text-slate-600 transition-all duration-500 hover:-translate-y-0.5 hover:text-white hover:bg-gradient-to-r hover:from-violet-500 hover:via-fuchsia-500 hover:to-indigo-600 hover:shadow-[0_10px_26px_rgba(139,92,246,0.35)] focus:outline-none focus:ring-2 focus:ring-violet-300 focus:ring-offset-2 active:scale-[0.98] active:text-white active:bg-gradient-to-r active:from-violet-500 active:via-fuchsia-500 active:to-indigo-600";

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl h-20 pr-4 pl-0 md:px-4 flex items-center justify-between">
        <div className="inline-flex items-center">
          <img
            src="/logo.png"
            alt="NovaFit Logo"
            className="h-20 w-[14rem] -ml-4 shrink-0 object-contain object-left md:h-20 md:w-[14rem] md:-ml-3"
          />
        </div>

        <nav className="hidden md:flex gap-6 text-sm text-slate-600">
          <a
            href="#services"
            className={navItemClass}
          >
            Services
          </a>

          <a
            href="#results"
            className={navItemClass}
          >
            Results
          </a>

          <a
            href="#contact"
            className={navItemClass}
          >
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-all duration-500 hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-violet-500 hover:via-fuchsia-500 hover:to-indigo-600 hover:shadow-[0_10px_26px_rgba(139,92,246,0.35)] focus:outline-none focus:ring-2 focus:ring-violet-300 focus:ring-offset-2 active:scale-[0.98] active:bg-gradient-to-r active:from-violet-500 active:via-fuchsia-500 active:to-indigo-600"
        >
          Book a call
        </a>

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition-all duration-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-violet-300 focus:ring-offset-2 active:scale-[0.98]"
        >
          Menu
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden border-t bg-white/95 backdrop-blur transition-all duration-300 ${
          isMenuOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2">
          <a
            href="#services"
            onClick={() => setIsMenuOpen(false)}
            className={navItemClass}
          >
            Services
          </a>
          <a
            href="#results"
            onClick={() => setIsMenuOpen(false)}
            className={navItemClass}
          >
            Results
          </a>
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className={navItemClass}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-medium text-slate-600">
            Personal Training • Nutrition • Accountability
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Get stronger, leaner, and more confident — in 12 weeks.
          </h1>
          <p className="mt-4 text-slate-600 leading-relaxed">
            A simple coaching plan built around your schedule. Weekly check-ins,
            workouts you can follow, and nutrition you’ll actually stick to. Get your fitness
            journey started today!
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex justify-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Get a free plan
            </a>
            <a
              href="#services"
              className="inline-flex justify-center rounded-lg border px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              See services
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
            <div>
              <span className="font-semibold text-slate-900">120+</span> clients
            </div>
            <div>
              <span className="font-semibold text-slate-900">4.9/5</span> avg rating
            </div>
            <div>
              <span className="font-semibold text-slate-900">Berlin</span> & online
            </div>
          </div>
        </div>

        <div className="rounded-2xl border bg-slate-50 p-6">
          <img
            src="/training.webp"
            alt="Training Session"
            className="aspect-[4/3] w-full rounded-xl object-cover" />
          <div className="mt-4 grid grid-cols-3 gap-3 text-center">
            <CardStat label="Strength" value="+28%" />
            <CardStat label="Energy" value="+41%" />
            <CardStat label="Consistency" value="12w" />
          </div>
        </div>
      </div>
    </section>
  );
}

function CardStat({ label, value }) {
  return (
    <div className="rounded-xl bg-white border p-3">
      <div className="text-lg font-bold">{value}</div>
      <div className="text-xs text-slate-600">{label}</div>
    </div>
  );
}

function Section({ onPlanSelect }) {
  return (
    <Reveal>
      <section id="services" className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="text-3xl font-bold tracking-tight">Services</h2>
        <p className="mt-2 text-slate-600">
          Pick a plan. We’ll tailor everything to your goal and your schedule.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <ServiceCard
            title="Starter"
            desc="3 workouts/week + monthly check-in."
            items={[
              "Personalized workout plan",
              "Progress tracking",
              "Simple guidance",
            ]}
            onPlanSelect={onPlanSelect}
          />
          <ServiceCard
            title="Standard"
            desc="5 workouts/week + weekly check-ins."
            items={[
              "Everything in Starter",
              "Weekly coach check-ins",
              "Exercise form feedback",
              "Progressive overload planning",
              "Basic nutrition targets",
            ]}
            onPlanSelect={onPlanSelect}
          />
          <ServiceCard
            title="Premium"
            desc="Custom plan + nutrition + priority support."
            items={[
              "Everything in Standard",
              "Fully custom training split",
              "Personalized nutrition coaching",
              "Advanced body-composition tracking",
              "Priority message support",
              "Weekly plan adjustments",
              "Habit and accountability coaching",
            ]}
            onPlanSelect={onPlanSelect}
          />
        </div>
      </section>
    </Reveal>
  );
}

function Results() {
  return (
    <Reveal delay={80}>
      <section id="results" className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-2xl border bg-white p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Results that feel real</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">
                You’ll follow a simple plan you can repeat. No extreme diets. No confusing
                workouts. Just consistency you can maintain.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3">
                <MiniStat label="Weeks" value="12" />
                <MiniStat label="Check-ins" value="Weekly" />
                <MiniStat label="Plan" value="Custom" />
              </div>
            </div>

            <div className="grid gap-4">
              <Testimonial
                quote="I finally stuck to a routine. Down 6kg and I feel stronger."
                name="Mina • Product Designer"
              />
              <Testimonial
                quote="Clear plan, fast support. The weekly check-ins made the difference."
                name="Jonas • Founder"
              />
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}

function MiniStat({ label, value }) {
  return (
    <div className="rounded-xl bg-slate-50 border p-4 text-center">
      <div className="text-lg font-bold">{value}</div>
      <div className="text-xs text-slate-600">{label}</div>
    </div>
  );
}

function Testimonial({ quote, name }) {
  return (
    <div className="rounded-2xl border p-5">
      <p className="text-sm text-slate-700">“{quote}”</p>
      <p className="mt-2 text-xs font-medium text-slate-600">{name}</p>
    </div>
  );
}


function ServiceCard({ title, desc, items, onPlanSelect }) {
  return (
    <div className="group h-full flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_16px_40px_rgba(139,92,246,0.35)] hover:bg-gradient-to-br hover:from-violet-500 hover:via-fuchsia-500 hover:to-indigo-600">
      <h3 className="font-semibold transition-colors duration-500 group-hover:text-white">
        {title}
      </h3>
      <p className="mt-2 text-sm text-slate-600 transition-colors duration-500 group-hover:text-violet-100">
        {desc}
      </p>
      <ul className="mt-4 space-y-2 text-sm text-slate-700 transition-colors duration-500 group-hover:text-violet-50">
        {items.map((item) => (
          <li key={`${title}-${item}`}>• {item}</li>
        ))}
      </ul>
      <div className="mt-auto">
        <a
          href="#contact"
          onClick={() => onPlanSelect?.(title)}
          className="mt-6 inline-flex rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors duration-500 hover:bg-slate-800 group-hover:bg-white group-hover:text-violet-700"
        >
          Choose {title}
        </a>
      </div>
    </div>
  );
}

function MobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 border-t bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="text-sm">
          <div className="font-semibold">Free starter plan</div>
          <div className="text-xs text-slate-600">Takes 30 seconds</div>
        </div>
        <a
          href="#contact"
          className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 transition"
        >
          Book a call
        </a>
      </div>
    </div>
  );
}


function Footer({ selectedPlan }) {
  const [sent, setSent] = useState(false);
  const heading =
    selectedPlan === "Premium"
      ? "Contact us now for details to get started as a premium customer!"
      : selectedPlan === "Standard"
        ? "Get started with your Standard plan today!"
        : "Get your free starter plan";

  return (
    <footer id="contact" className="border-t">
      <Reveal delay={120}>
        <div className="mx-auto max-w-6xl px-4 py-10 grid gap-4 md:grid-cols-2 md:items-center">
          <div>
            <h3 key={heading} className="text-lg font-semibold animate-footer-heading">
              {heading}
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Send your goal + schedule. I’ll reply with a simple plan and next steps.
            </p>
            {sent && (
              <p className="mt-3 text-sm font-medium text-emerald-700">
                Thanks! Your message has been sent.
              </p>
            )}
          </div>

          <form
            className="grid gap-3 sm:grid-cols-3"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <input
              className="rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-300"
              placeholder="Name"
              required
            />
            <input
              className="rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-300"
              placeholder="Email"
              type="email"
              required
            />
            <button
              type="submit"
              className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Send
            </button>
          </form>

          <p className="text-xs text-slate-500 md:col-span-2">
            © {new Date().getFullYear()} NovaFit. All rights reserved.
          </p>
        </div>
      </Reveal>
      <MobileCTA />
    </footer>
  );
}
