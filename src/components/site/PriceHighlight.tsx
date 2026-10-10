import { CalendarX, Clock, Gauge, MapPin, Phone, Scale, Wrench } from "lucide-react";
import { ADDRESS, MAPS, PHONE, TEL } from "@/lib/site-data";

const perks = [
  { i: Wrench, t: "Demontare & montare" },
  { i: Scale, t: "Echilibrare electronică" },
  { i: Gauge, t: "Verificare presiune" },
  { i: CalendarX, t: "Fără programare" },
];

export function PriceHighlight() {
  return (
    <section className="px-4 py-6 sm:px-5 sm:py-16">
      <div className="price-hero relative mx-auto max-w-6xl overflow-hidden rounded-[1.5rem] p-5 sm:rounded-[2rem] text-brand-foreground shadow-glow sm:p-10 md:p-14">
        <div className="price-hero-glow" aria-hidden="true" />
        {/* spinning tire watermark */}
        <svg aria-hidden viewBox="0 0 200 200" className="vm-spin pointer-events-none absolute -bottom-40 -left-40 size-[420px] opacity-[0.08] md:-bottom-48 md:left-[38%]">
          <circle cx="100" cy="100" r="92" fill="none" stroke="currentColor" strokeWidth="16" strokeDasharray="10 6" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="4" />
          {Array.from({ length: 6 }).map((_, i) => (
            <rect key={i} x="96" y="44" width="8" height="40" rx="4" fill="currentColor" transform={`rotate(${i * 60} 100 100)`} />
          ))}
          <circle cx="100" cy="100" r="14" fill="currentColor" />
        </svg>

        <div className="relative grid items-center gap-6 md:gap-10 md:grid-cols-[1.1fr_1fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-foreground/25 bg-brand-foreground/10 px-3 py-1.5 text-xs font-bold uppercase tracking-widest backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-foreground opacity-70" />
                <span className="relative inline-flex size-2 rounded-full bg-brand-foreground" />
              </span>
              <Clock className="size-3.5" /> Deschis non-stop · 24/24
            </span>
            <h2 className="mt-4 text-[1.7rem] font-black leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
              Schimb + echilibrare
              <br />
              <span className="relative inline-block">
                4 cauciucuri
                <svg aria-hidden viewBox="0 0 300 12" className="absolute -bottom-2 left-0 h-3 w-full" preserveAspectRatio="none">
                  <path d="M2 9 Q 150 -2 298 7" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.55" />
                </svg>
              </span>
            </h2>
            <ul className="mt-5 grid grid-cols-2 gap-2 sm:mt-8 sm:gap-2.5">
              {perks.map((p) => (
                <li
                  key={p.t}
                  className="group flex items-center gap-2.5 rounded-2xl border border-brand-foreground/15 bg-brand-foreground/10 p-2 text-[12px] font-bold leading-tight backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-brand-foreground/15 sm:p-3 sm:text-sm"
                >
                  <span className="grid size-7 sm:size-9 shrink-0 place-items-center rounded-xl bg-brand-foreground text-brand transition-transform group-hover:rotate-6">
                    <p.i className="size-4" strokeWidth={2.5} />
                  </span>
                  {p.t}
                </li>
              ))}
            </ul>
            <a href={MAPS} target="_blank" rel="noreferrer" className="mt-4 inline-flex text-[13px] sm:mt-6 items-center gap-2 sm:text-sm font-semibold underline-offset-4 opacity-90 hover:underline">
              <MapPin className="size-4" /> {ADDRESS}
            </a>
          </div>

          {/* Ticket */}
          <div className="vm-float relative mx-auto w-full max-w-[300px] sm:max-w-sm">
            <div className="price-tag relative overflow-hidden rounded-[1.75rem] bg-card text-center text-card-foreground">
              <div className="vm-shine bg-foreground px-6 py-3 text-background">
                <p className="text-[11px] font-black uppercase tracking-[0.25em]">Preț fix în atelier</p>
              </div>
              <div className="px-5 pb-4 pt-3 sm:px-9">
                <p className="flex items-start justify-center font-black leading-none text-brand">
                  <span className="text-[5rem] tracking-tighter sm:text-[8.5rem]">40</span>
                  <span className="mt-3 text-2xl sm:mt-7 sm:text-4xl">lei</span>
                </p>
                <p className="-mt-1 text-sm font-bold">pentru tot setul de 4 roți</p>
                <p className="mt-2 inline-flex rounded-full bg-brand-soft px-3 py-1 text-xs font-black text-brand">adică 10 lei / roată</p>
              </div>
              {/* perforation */}
              <div className="relative flex items-center">
                <span className="absolute -left-3 size-6 rounded-full bg-brand" />
                <span className="mx-5 w-full border-t-2 border-dashed border-border" />
                <span className="absolute -right-3 size-6 rounded-full bg-brand" />
              </div>
              <div className="p-4 sm:p-6 sm:px-9">
                <a
                  href={`tel:${TEL}`}
                  className="vm-callfx inline-flex min-h-12 sm:min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-brand px-6 text-base font-extrabold text-brand-foreground shadow-glow transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  <Phone className="size-5" /> <span className="tabular-nums">{PHONE}</span>
                </a>
                <p className="mt-3 text-xs text-muted-foreground">Vii oricând, zi sau noapte</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
