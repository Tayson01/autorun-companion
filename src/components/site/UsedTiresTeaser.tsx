import { Link } from "@tanstack/react-router";
import { ArrowRight, Warehouse } from "lucide-react";

import s1 from "@/assets/stoc/stoc-1.jpg";
import s4 from "@/assets/stoc/stoc-4.jpg";

export function UsedTiresTeaser() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-10">
      <Link
        to="/anvelope-sh"
        className="group grid overflow-hidden rounded-[28px] border border-border bg-card shadow-card transition-all hover:-translate-y-0.5 hover:border-brand/40 md:grid-cols-[1.2fr_1fr]"
      >
        <div className="p-6 sm:p-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-3 py-1.5 text-[11px] font-black uppercase tracking-widest text-brand">
            <Warehouse className="size-3.5" /> Stoc la atelier
          </span>
          <h2 className="mt-4 text-2xl font-black tracking-tight sm:text-3xl">
            Ai nevoie de anvelope? Avem stoc de <span className="text-brand">anvelope SH</span>.
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Vară, iarnă și all-season, sortate pe dimensiuni. Montaj și echilibrare pe loc, non-stop.
          </p>
          <span className="mt-5 inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-black text-brand-foreground">
            Vezi stocul de anvelope SH <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
        <div className="grid h-48 grid-cols-2 gap-1 md:h-auto">
          <img src={s1} alt="Rafturi cu anvelope SH" loading="lazy" className="h-full w-full object-cover" />
          <img src={s4} alt="Anvelope SH în curtea atelierului" loading="lazy" className="h-full w-full object-cover" />
        </div>
      </Link>
    </section>
  );
}
