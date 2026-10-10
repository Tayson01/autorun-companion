import { Suspense, lazy, useEffect, useState } from "react";
import { ChevronRight, Clock, MapPin, Phone } from "lucide-react";

import { PHONE, TEL, mapRings, zones } from "@/lib/site-data";

const CoverageMap = lazy(() => import("./CoverageMap"));

const ringTones = ["bg-brand", "bg-brand/60", "bg-brand/30"];

const stats = [
  { value: "30 min", label: "sosire medie" },
  { value: "100 km", label: "rază acoperită" },
  { value: "24/24", label: "non-stop" },
];

export function CoverageMapSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="harta" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-12 sm:py-20">
      <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-end">
        <div>
          <span className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-brand">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-brand" />
            </span>
            Hartă acoperire live
          </span>
          <h2 className="mt-4 text-[2.2rem] font-black leading-[0.98] tracking-tight sm:text-5xl">
            Cât de repede
            <span className="block text-brand">ajungem la tine?</span>
          </h2>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
            Pornim din Dragodana și acoperim 100 km: Dâmbovița, Argeș, Prahova, București și A1.
          </p>
        </div>

        <dl className="grid grid-cols-3 divide-x divide-border border-y border-border">
          {stats.map((s) => (
            <div key={s.label} className="px-2 py-4 text-center">
              <dt className="text-xl font-black leading-none tracking-tight tabular-nums sm:text-3xl">{s.value}</dt>
              <dd className="mt-1.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-8 grid gap-8 sm:mt-12 lg:grid-cols-[1.6fr_1fr] lg:gap-12">
        <div className="relative -mx-5 overflow-hidden shadow-float sm:mx-0 sm:rounded-[28px] sm:ring-1 sm:ring-border">
          {mounted ? (
            <Suspense
              fallback={<div className="h-[70svh] min-h-[480px] w-full animate-pulse bg-surface sm:h-[620px]" aria-hidden="true" />}
            >
              <div className="dark:[&_.leaflet-container]:brightness-[.9]">
                <CoverageMap />
              </div>
            </Suspense>
          ) : (
            <div className="h-[70svh] min-h-[480px] w-full bg-surface sm:h-[620px]" aria-hidden="true" />
          )}
        </div>

        <div className="grid content-start gap-10">
          <div>
            <p className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground">
              <Clock className="size-3.5 text-brand" /> Timp estimat de sosire
            </p>
            <ul className="mt-4 space-y-4">
              {mapRings.map((r, i) => (
                <li key={r.km}>
                  <div className="flex items-baseline justify-between">
                    <span className="inline-flex items-center gap-2.5 text-base font-extrabold">
                      <span className={`size-2.5 rounded-full ${ringTones[i]}`} /> {r.minutes}
                    </span>
                    <span className="text-sm font-black tabular-nums text-brand">{r.km} km</span>
                  </div>
                  <div className="mt-2 h-1 overflow-hidden rounded-full bg-border">
                    <div className="h-full rounded-full bg-brand" style={{ width: `${r.km}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground">
              <MapPin className="size-3.5 text-brand" /> Localități deservite · {zones.length}
            </p>
            <ul className="mt-3 grid grid-cols-2 gap-x-5">
              {zones.map((z) => (
                <li key={z.slug} className="border-b border-border">
                  <a
                    href={`/zone/${z.slug}`}
                    className="group flex items-center justify-between gap-2 py-2.5 text-sm font-semibold transition-colors hover:text-brand"
                  >
                    <span className="min-w-0 truncate">{z.short}</span>
                    <ChevronRight className="size-3.5 shrink-0 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-brand" />
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={`tel:${TEL}`}
              className="group mt-6 flex items-center gap-3 rounded-2xl bg-brand px-4 py-3.5 text-brand-foreground shadow-glow transition hover:brightness-110"
            >
              <Phone className="size-4 shrink-0" />
              <span className="min-w-0 flex-1 text-sm font-bold leading-tight">
                Nu-ți vezi localitatea? <span className="block font-black tabular-nums">Sună: {PHONE}</span>
              </span>
              <ChevronRight className="size-4 shrink-0 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
