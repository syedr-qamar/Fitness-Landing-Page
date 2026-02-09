import { useState } from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Header />
      <main>
        <Hero />
        <Section />
        <Results />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <div className="font-bold tracking-tight">NovaFit</div>
        <nav className="hidden md:flex gap-6 text-sm text-slate-600">

          <a
           href="#services"
           className="text-sm text-slate-600 hover:text-slate-900 transition focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 rounded"          
          >
              Services
          </a>

          <a 
            href="#results"
            className="text-sm text-slate-600 hover:text-slate-900 transition focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 rounded"          >
            Results
          </a>

          <a 
            href="#contact" 
            className="text-sm text-slate-600 hover:text-slate-900 transition focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 rounded"          >
            Contact
          </a>

        </nav>

        <a
          href="#contact"
          className="inline-flex items-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
        >
          Book a call
        </a>

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
          <div className="aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-slate-200 to-slate-100" />
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

function Section() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 pb-16">
      <h2 className="text-3xl font-bold tracking-tight">Services</h2>
      <p className="mt-2 text-slate-600">
        Pick a plan. We’ll tailor everything to your goal and your schedule.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <ServiceCard title="Starter" desc="3 workouts/week + monthly check-in." />
        <ServiceCard title="Standard" desc="5 workouts/week + weekly check-ins." />
        <ServiceCard title="Premium" desc="Custom plan + nutrition + priority support." />
      </div>
    </section>
  );
}

function Results() {
  return (
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


function ServiceCard({ title, desc }) {
  return (
    <div className="rounded-2xl border p-6 hover:shadow-sm transition">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
      <ul className="mt-4 space-y-2 text-sm text-slate-700">
        <li>• Personalized plan</li>
        <li>• Progress tracking</li>
        <li>• Simple guidance</li>
      </ul>
      <a
        href="#contact"
        className="mt-6 inline-flex rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
      >
        Choose {title}
      </a>
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
          Get it
        </a>
      </div>
    </div>
  );
}


function Footer() {
  const [sent, setSent] = useState(false);

  return (
    <footer id="contact" className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-4 md:grid-cols-2 md:items-center">
        <div>
          <h3 className="text-lg font-semibold">Get your free starter plan</h3>
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
      <MobileCTA />
    </footer>
  );
}

