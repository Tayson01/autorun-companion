import { useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Car,
  Check,
  Clock,
  MapPin,
  Moon,
  PhoneCall,
  Phone,
  ShieldCheck,
  Sparkles,
  Truck,
  Wrench,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

import { ADDRESS, MAPS, PHONE, TEL, services } from "@/lib/site-data";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import { SectionLabel } from "@/components/site/ui";

type Category = "all" | "atelier" | "urgente" | "montaj" | "camioane";

const categories: { id: Category; label: string }[] = [
  { id: "all", label: "Toate" },
  { id: "urgente", label: "Urgențe pe drum" },
  { id: "montaj", label: "Montaj & întreținere" },
  { id: "camioane", label: "Camioane & flote" },
];

const serviceCategory: Record<string, Category> = {
  "vulcanizare-atelier-non-stop": "atelier",
  "asistenta-rutiera": "urgente",
  "reparatii-pe-loc": "urgente",
  "transport-auto": "urgente",
  "montaj-domiciliu": "montaj",
  "echilibrare-roti": "montaj",
  "vulcanizare-camioane": "camioane",
};

const steps = [
  { icon: PhoneCall, title: "Ne suni", text: "Răspundem 24/24, inclusiv noaptea și în sărbători." },
  { icon: MapPin, title: "Vii sau venim", text: "Atelier pe Calea Găești 45 sau echipa mobilă până la 100 km." },
  { icon: Wrench, title: "Rezolvăm", text: "Utilaje profesionale, echilibrare electronică, piese verificate." },
  { icon: ShieldCheck, title: "Pleci liniștit", text: "Verificăm presiunea și strângerea înainte să pleci." },
];

export function ServicesSection() {
  const [active, setActive] = useState<Category>("all");

  const atelier = services.find((s) => s.slug === "vulcanizare-atelier-non-stop")!;
  const mobile = services.find((s) => s.slug === "asistenta-rutiera")!;

  const grid = useMemo(
    () =>
      services.filter(
        (s) =>
          s.slug !== atelier.slug &&
          s.slug !== mobile.slug &&
          (active === "all" || serviceCategory[s.slug] === active),
      ),
    [active, atelier.slug, mobile.slug],
  );

  const showAtelier = false;
  const showMobile = active === "all" || active === "urgente";

  return (
    <section id="servicii" className="relative overflow-hidden py-16 sm:py-24">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-brand-soft/50 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-5">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <SectionLabel>Servicii · Non-stop în Dragodana</SectionLabel>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
              Atelier deschis <span className="text-brand">24/24</span>.
              <br className="hidden sm:block" /> Echipă mobilă la tine.
            </h2>
            <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Vii la noi pe Calea Găești oricând, zi sau noapte — sau venim noi la tine, pe A1, DN7,
              DN71, DN61 și până la 100 km de Dragodana.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              { k: "24/24", v: "deschis non-stop", icon: Moon },
              { k: "40 lei", v: "schimb + echilibrare 4 roți", icon: Sparkles },
              { k: "100 km", v: "rază intervenții", icon: Car },
            ].map((s) => (
              <div key={s.k} className="rounded-2xl border border-border bg-card p-4 shadow-card">
                <s.icon className="size-4 text-brand" />
                <p className="mt-3 text-xl font-black tracking-tight sm:text-2xl">{s.k}</p>
                <p className="mt-1 text-[11px] leading-snug text-muted-foreground">{s.v}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-10 flex gap-2 overflow-x-auto pb-1">
          {categories.map((c) => {
            const on = active === c.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setActive(c.id)}
                aria-pressed={on}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  on
                    ? "bg-foreground text-background shadow-card"
                    : "border border-border bg-card text-muted-foreground hover:border-brand/40 hover:text-foreground"
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        {/* Two pillars */}
        {(showAtelier || showMobile) && (
          <div className={`mt-6 grid gap-5 ${showAtelier && showMobile ? "lg:grid-cols-2" : ""}`}>
            {showMobile && (
              <article className="group relative overflow-hidden rounded-[28px] border border-border bg-card p-7 shadow-card sm:p-9">
                <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-brand/10 blur-3xl transition-opacity group-hover:opacity-70" />
                <div className="relative flex items-start justify-between gap-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-brand">
                    <Truck className="size-3.5" /> Mobil · până la 100 km
                  </span>
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-brand text-brand-foreground">
                    <ServiceIcon name={mobile.icon} className="size-6" />
                  </span>
                </div>
                <h3 className="relative mt-6 text-3xl font-black tracking-tight sm:text-4xl">{mobile.title}</h3>
                <p className="relative mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">{mobile.intro}</p>

                <div className="relative mt-6 inline-flex items-center gap-2 rounded-2xl border border-border bg-surface px-4 py-3">
                  <Clock className="size-4 text-brand" />
                  <span className="text-sm font-bold">{mobile.duration}</span>
                </div>

                <ul className="relative mt-6 grid gap-2 sm:grid-cols-2">
                  {mobile.bullets.slice(0, 4).map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-foreground/90">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-soft">
                        <Check className="size-3 text-brand" />
                      </span>
                      <span className="leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="relative mt-7 flex flex-wrap gap-3">
                  <a
                    href={`tel:${TEL}`}
                    className="vm-callfx vm-callcta inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-bold text-brand-foreground shadow-card transition-transform hover:-translate-y-0.5"
                  >
                    <Phone className="size-4" /> <span className="tabular-nums">{PHONE}</span>
                  </a>
                  <Link
                    to="/servicii/$slug"
                    params={{ slug: mobile.slug }}
                    className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold transition-colors hover:bg-surface"
                  >
                    Detalii <ArrowRight className="size-4" />
                  </Link>
                </div>
              </article>
            )}
          </div>
        )}

        {/* Grid */}
        {grid.length > 0 && (
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {grid.map((s, i) => (
              <Link
                key={s.slug}
                to="/servicii/$slug"
                params={{ slug: s.slug }}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-card"
              >
                <span aria-hidden className="absolute right-5 top-3 text-6xl font-black tracking-tighter text-foreground/5 transition-colors group-hover:text-brand/15">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="relative flex size-12 items-center justify-center rounded-2xl bg-brand-soft text-brand transition-all group-hover:scale-110 group-hover:bg-brand group-hover:text-brand-foreground">
                  <ServiceIcon name={s.icon} className="size-6" />
                </span>
                <h3 className="relative mt-5 text-lg font-bold">{s.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <ul className="relative mt-4 space-y-2">
                  {s.bullets.slice(0, 3).map((b) => (
                    <li key={b} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <Check className="mt-0.5 size-3.5 shrink-0 text-brand" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="relative mt-auto flex items-center justify-between border-t border-border pt-4 text-xs">
                  <span className="inline-flex items-center gap-1.5 font-medium text-muted-foreground">
                    <Clock className="size-3.5 text-brand" /> {s.duration}
                  </span>
                  <span className="flex size-8 items-center justify-center rounded-full border border-border transition-all group-hover:border-brand group-hover:bg-brand group-hover:text-brand-foreground">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Process */}
        <div className="mt-14 rounded-[28px] border border-border bg-card p-6 sm:p-9">
          <p className="text-xs font-bold uppercase tracking-widest text-brand">Cum lucrăm</p>
          <h3 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">De la telefon la drum, în 4 pași.</h3>
          <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((st, i) => (
              <li key={st.title} className="relative">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-brand text-brand-foreground">
                    <st.icon className="size-5" />
                  </span>
                  <span className="text-xs font-black text-muted-foreground">PAS {i + 1}</span>
                </div>
                <p className="mt-4 font-bold">{st.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{st.text}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* CTA */}
        <div className="mt-6 flex flex-col items-start justify-between gap-5 rounded-[28px] bg-foreground p-7 text-background sm:flex-row sm:items-center sm:p-9">
          <div>
            <p className="text-2xl font-black tracking-tight sm:text-3xl">Ai o pană chiar acum?</p>
            <p className="mt-1 text-sm opacity-75">Suntem deschiși non-stop. Sună și îți spunem imediat cât durează.</p>
          </div>
          <a
            href={`tel:${TEL}`}
            className="vm-callfx inline-flex items-center gap-2 whitespace-nowrap rounded-xl bg-brand px-6 py-4 text-base font-black text-brand-foreground shadow-card transition-transform hover:-translate-y-0.5"
          >
            <Phone className="size-5" /> <span className="tabular-nums">{PHONE}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
