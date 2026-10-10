import { Check, Clock, MapPin, Phone } from "lucide-react";
import { ADDRESS, MAPS, PHONE, TEL } from "@/lib/site-data";

const perks = ["Demontare & montare", "Echilibrare electronică", "Verificare presiune", "Fără programare"];

export function PriceHighlight() {
  return (
    <section className="px-4 py-10 sm:px-5 sm:py-16">
      <div className="price-hero relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] p-6 text-brand-foreground shadow-glow sm:p-10 md:p-14">
        <div className="price-hero-glow" aria-hidden="true" />
        <div className="relative grid items-center gap-10 md:grid-cols-[1.1fr_1fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-foreground/15 px-3 py-1.5 text-xs font-bold uppercase tracking-widest">
              <Clock className="size-3.5" /> Deschis non-stop · 24/24
            </span>
            <h2 className="mt-5 text-3xl font-black leading-[1.05] sm:text-5xl">
              Schimb + echilibrare
              <br />
              <span className="opacity-90">4 cauciucuri</span>
            </h2>
            <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm font-semibold sm:text-base">
              {perks.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <span className="grid size-5 shrink-0 place-items-center rounded-full bg-brand-foreground text-brand">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <a href={MAPS} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 opacity-90 hover:underline">
              <MapPin className="size-4" /> {ADDRESS}
            </a>
          </div>

          <div className="price-tag relative mx-auto w-full max-w-sm rounded-[1.75rem] bg-card p-7 text-center text-card-foreground sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Preț fix în atelier</p>
            <p className="mt-3 flex items-start justify-center font-black leading-none text-brand">
              <span className="text-[6.5rem] tracking-tighter sm:text-[8rem]">40</span>
              <span className="mt-4 text-3xl sm:mt-6 sm:text-4xl">lei</span>
            </p>
            <p className="mt-1 text-sm font-semibold text-muted-foreground">pentru tot setul de 4 roți</p>
            <a
              href={`tel:${TEL}`}
              className="vm-callfx mt-7 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-brand px-6 text-base font-extrabold text-brand-foreground shadow-glow transition-transform active:scale-[0.98]"
            >
              <Phone className="size-5" /> <span className="tabular-nums">{PHONE}</span>
            </a>
            <p className="mt-3 text-xs text-muted-foreground">Vii oricând, zi sau noapte</p>
          </div>
        </div>
      </div>
    </section>
  );
}
