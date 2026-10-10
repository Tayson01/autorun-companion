import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  Camera,
  Car,
  ChevronDown,
  CloudSun,
  MapPin,
  MessageCircle,
  Phone,
  Search,
  Snowflake,
  Sun,
  Tractor,
  Truck,
  X,
} from "lucide-react";

import { TireDecoder } from "@/components/site/TireDecoder";
import { ADDRESS, MAPS, PHONE, TEL, WA } from "@/lib/site-data";
import s1 from "@/assets/stoc/stoc-1.jpg";
import s2 from "@/assets/stoc/stoc-2.jpg";
import s3 from "@/assets/stoc/stoc-3.jpg";
import s4 from "@/assets/stoc/stoc-4.jpg";
import s5 from "@/assets/stoc/stoc-5.jpg";
import s6 from "@/assets/stoc/stoc-6.jpg";
import s8 from "@/assets/stoc/stoc-8.jpg";
import s9 from "@/assets/stoc/stoc-9.jpg";
import s10 from "@/assets/stoc/stoc-10.jpg";

export const Route = createFileRoute("/anvelope-sh")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Anvelope SH Dragodana – vară, iarnă, all-season | Vulcanizare Dragodana" },
      {
        name: "description",
        content:
          "Anvelope second hand de vară, iarnă și all-season în Dragodana, Calea Găești 45. Alege dimensiunea și primești poze și preț pe WhatsApp. Aproape de Găești, Târgoviște, Titu.",
      },
      { property: "og:title", content: "Anvelope SH Dragodana – vară, iarnă, all-season" },
      { property: "og:description", content: "Alege dimensiunea și primești poze și preț pe WhatsApp. Deschis non-stop." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://vulcanizaredragodana.ro/anvelope-sh" }],
  }),
  component: AnvelopeSH,
});

const photos = [
  { src: s1, alt: "Rafturi cu anvelope SH sortate pe dimensiuni" },
  { src: s2, alt: "Stive de anvelope SH marcate cu dimensiunea" },
  { src: s4, alt: "Curtea cu anvelope SH de toate dimensiunile" },
  { src: s3, alt: "Depozit acoperit cu anvelope second hand" },
  { src: s5, alt: "Anvelope SH 205/65 R15 și 215/55 R18" },
  { src: s6, alt: "Stoc de anvelope SH la Vulcanizare Dragodana" },
  { src: s8, alt: "Stive de anvelope Atlas în depozit" },
  { src: s9, alt: "Anvelope stivuite în atelierul din Dragodana" },
  { src: s10, alt: "Stivă de anvelope Annaite la intrarea în atelier" },
];

const categories = [
  { id: "auto", label: "Autoturisme", icon: Car, sizes: ["175/65 R14", "185/65 R15", "195/65 R15", "205/55 R16", "205/65 R15", "225/45 R17"] },
  { id: "suv", label: "SUV & 4x4", icon: Truck, sizes: ["215/55 R18", "215/65 R16", "225/65 R17", "235/55 R19", "255/50 R19"] },
  { id: "util", label: "Utilitare", icon: Truck, sizes: ["195/70 R15", "205/65 R16", "215/65 R16", "225/65 R16"] },
  { id: "grele", label: "Camioane", icon: Tractor, sizes: [] as string[] },
];

const seasons = [
  { id: "vară", icon: Sun },
  { id: "iarnă", icon: Snowflake },
  { id: "all-season", icon: CloudSun },
];

const faqs = [
  { q: "Cum aflu dacă aveți dimensiunea mea?", a: "Alege dimensiunea mai sus și apasă pe WhatsApp, sau sună-ne. Îți spunem ce avem și, la cerere, îți trimitem poze." },
  { q: "Cât costă anvelopele SH?", a: "Depinde de dimensiune, marcă și cât profil mai au. Scrie-ne și îți spunem prețul exact." },
  { q: "Trebuie să le și montez la voi?", a: "Nu. Le poți lua doar la vânzare. Dacă vrei, ți le montăm pe loc, în atelier, non-stop." },
  { q: "Ce profil minim trebuie să aibă?", a: "Minimul legal în România este 1,6 mm, iar iarna, pe zăpadă, 4 mm. Le poți verifica la atelier înainte să le cumperi." },
  { q: "Aveți și anvelope pentru camioane?", a: "Sună-ne cu dimensiunea exactă și verificăm stocul pentru tine." },
];

const widths = ["155", "165", "175", "185", "195", "205", "215", "225", "235", "245", "255", "265", "275"];
const heights = ["35", "40", "45", "50", "55", "60", "65", "70", "75"];
const rims = ["13", "14", "15", "16", "17", "18", "19", "20", "21", "22"];

function AnvelopeSH() {
  const [w, setW] = useState("205");
  const [h, setH] = useState("55");
  const [r, setR] = useState("16");
  const [season, setSeason] = useState("vară");
  const [qty, setQty] = useState(4);
  const [cat, setCat] = useState("auto");
  const [open, setOpen] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const waBase = WA.split("?")[0];
  const waHref = useMemo(
    () => `${waBase}?text=${encodeURIComponent(`Bună! Aveți ${qty} anvelope SH ${w}/${h} R${r}, de ${season}?`)}`,
    [waBase, w, h, r, qty, season],
  );
  const waPhoto = `${waBase}?text=${encodeURIComponent("Bună! Vă trimit o poză cu anvelopa mea. Ce aveți pe stoc?")}`;

  const pick = (s: string) => {
    const m = s.match(/(\d+)\/(\d+) R(\d+)/);
    if (!m) return;
    setW(m[1]!);
    setH(m[2]!);
    setR(m[3]!);
    document.getElementById("cauta")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const activeCat = categories.find((c) => c.id === cat)!;
  const sel =
    "h-14 w-full appearance-none rounded-2xl border-2 border-border bg-background px-3 text-center text-xl font-black text-foreground tabular-nums outline-none transition-colors focus:border-brand sm:text-2xl";

  return (
    <main className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-foreground text-background">
        <img src={photos[0]!.src} alt="" aria-hidden className="vm-kenburns absolute inset-0 -z-10 h-full w-full object-cover opacity-45" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-foreground via-foreground/75 to-foreground/30 lg:bg-gradient-to-r lg:from-foreground lg:via-foreground/80 lg:to-foreground/10" />
        <div aria-hidden className="pointer-events-none absolute -left-32 bottom-0 -z-10 size-[420px] rounded-full bg-brand/30 blur-3xl" />

        <div className="mx-auto flex min-h-[78svh] max-w-6xl flex-col justify-end px-5 pb-10 pt-16 sm:min-h-[620px] lg:justify-center lg:pb-16">
          <div className="animate-rise max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/10 px-3 py-1.5 text-[11px] font-black uppercase tracking-widest backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-70" />
                <span className="relative inline-flex size-2 rounded-full bg-success" />
              </span>
              Stoc disponibil · Dragodana
            </span>
            <h1 className="mt-5 text-[3rem] font-black leading-[0.92] tracking-tight sm:text-7xl lg:text-8xl">
              Anvelope
              <br />
              <span className="text-brand">SH</span> la preț
              <br />
              bun.
            </h1>
            <p className="mt-5 max-w-md text-base opacity-80 sm:text-lg">
              Vară, iarnă și all-season, sortate pe dimensiuni. Ne spui mărimea, îți spunem ce avem.
            </p>
            <div className="mt-7 grid gap-2.5 sm:flex">
              <a
                href="#cauta"
                className="vm-shine inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-brand px-7 text-base font-black text-brand-foreground shadow-glow transition-transform hover:-translate-y-0.5"
              >
                <Search className="size-5" /> Caută dimensiunea
              </a>
              <a
                href={waPhoto}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-background/25 bg-background/10 px-7 text-base font-bold backdrop-blur transition-colors hover:bg-background/20"
              >
                <Camera className="size-5" /> Trimite o poză
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold opacity-85">
              {[
                { i: Sun, t: "Vară" },
                { i: Snowflake, t: "Iarnă" },
                { i: CloudSun, t: "All-season" },
                { i: MapPin, t: "Calea Găești 45" },
              ].map((x) => (
                <span key={x.t} className="inline-flex items-center gap-1.5">
                  <x.i className="size-4 text-brand" /> {x.t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINDER */}
      <section id="cauta" className="scroll-mt-20 bg-surface py-10 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="overflow-hidden rounded-[28px] border border-border bg-card shadow-float">
            <div className="grid lg:grid-cols-[1.2fr_1fr]">
              <div className="p-5 sm:p-10">
                <h2 className="text-2xl font-black tracking-tight sm:text-4xl">Ce anvelope cauți?</h2>
                <p className="mt-1 text-sm text-muted-foreground">Codul e scris pe flancul anvelopei, ex: 205/55 R16.</p>

                <div className="mt-5 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-end gap-1.5 sm:gap-3">
                  {[
                    { l: "Lățime", v: w, set: setW, o: widths },
                    null,
                    { l: "Profil", v: h, set: setH, o: heights },
                    null,
                    { l: "Jantă", v: r, set: setR, o: rims },
                  ].map((f, i) =>
                    f ? (
                      <label key={f.l} className="relative text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
                        {f.l}
                        <select value={f.v} onChange={(e) => f.set(e.target.value)} className={`mt-1.5 ${sel}`}>
                          {f.o.map((v) => (
                            <option key={v}>{v}</option>
                          ))}
                        </select>
                        <ChevronDown className="pointer-events-none absolute bottom-5 right-2 size-4" />
                      </label>
                    ) : (
                      <span key={i} className="pb-4 text-xl font-black text-muted-foreground">
                        {i === 1 ? "/" : "R"}
                      </span>
                    ),
                  )}
                </div>

                <div className="mt-5 grid grid-cols-3 gap-2">
                  {seasons.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSeason(s.id)}
                      className={`flex min-h-12 items-center justify-center gap-1.5 rounded-2xl border-2 text-sm font-bold capitalize transition-all ${
                        season === s.id ? "border-brand bg-brand text-brand-foreground shadow-card" : "border-border bg-background"
                      }`}
                    >
                      <s.icon className="size-4 shrink-0" /> {s.id}
                    </button>
                  ))}
                </div>

                <div className="mt-3 flex items-center justify-between gap-3 rounded-2xl border-2 border-border bg-background p-1.5">
                  <span className="pl-3 text-sm font-bold text-muted-foreground">Bucăți</span>
                  <div className="grid grid-cols-4 gap-1">
                    {[1, 2, 3, 4].map((n) => (
                      <button
                        key={n}
                        type="button"
                        onClick={() => setQty(n)}
                        className={`size-11 rounded-xl text-base font-black transition-all ${qty === n ? "bg-foreground text-background" : "hover:bg-surface"}`}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Result */}
              <div className="relative flex flex-col justify-between gap-6 bg-foreground p-5 text-background sm:p-10">
                <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-brand/40 blur-3xl" />
                <div className="relative">
                  <p className="text-[11px] font-black uppercase tracking-widest opacity-60">Cererea ta</p>
                  <p className="mt-2 text-5xl font-black tabular-nums leading-none sm:text-6xl">
                    {w}/{h}
                    <span className="text-brand"> R{r}</span>
                  </p>
                  <p className="mt-3 text-sm font-semibold opacity-75">
                    {qty} {qty === 1 ? "bucată" : "bucăți"} · {season}
                  </p>
                </div>
                <div className="relative grid gap-2.5">
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noreferrer"
                    className="vm-shine inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-success px-5 text-base font-black text-brand-foreground"
                  >
                    <MessageCircle className="size-5" /> Întreabă pe WhatsApp
                  </a>
                  <a
                    href={`tel:${TEL}`}
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-background/20 px-5 text-sm font-bold"
                  >
                    <Phone className="size-4 text-brand" /> <span className="tabular-nums">{PHONE}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Popular sizes */}
          <div className="mt-10">
            <h3 className="text-xl font-black tracking-tight sm:text-2xl">Dimensiuni căutate des</h3>
            <div className="-mx-5 mt-4 flex gap-2 overflow-x-auto px-5 pb-1">
              {categories.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setCat(c.id)}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full border-2 px-4 py-2.5 text-sm font-bold transition-all ${
                    cat === c.id ? "border-foreground bg-foreground text-background" : "border-border bg-card"
                  }`}
                >
                  <c.icon className="size-4" /> {c.label}
                </button>
              ))}
            </div>
            {activeCat.sizes.length ? (
              <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-6">
                {activeCat.sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => pick(s)}
                    className="group flex min-h-14 items-center justify-between rounded-2xl border-2 border-border bg-card px-4 text-left transition-all hover:-translate-y-0.5 hover:border-brand"
                  >
                    <span className="font-black tabular-nums">{s}</span>
                    <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-brand" />
                  </button>
                ))}
              </div>
            ) : (
              <a href={`tel:${TEL}`} className="mt-4 flex items-center justify-between gap-4 rounded-2xl border-2 border-dashed border-brand/40 bg-card p-5">
                <span>
                  <span className="block font-black">Anvelope pentru camioane</span>
                  <span className="text-sm text-muted-foreground">Sună cu dimensiunea exactă și verificăm.</span>
                </span>
                <Phone className="size-6 shrink-0 text-brand" />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* DECODER */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-12">
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-brand">Citește-ți anvelopa</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-5xl">Ce înseamnă codul de pe flanc?</h2>
            <p className="mt-3 text-muted-foreground">Apasă pe fiecare parte a codului. Nu te descurci? Trimite-ne o poză.</p>
          </div>
          <TireDecoder />
        </div>
      </section>

      {/* HOW TO BUY */}
      <section className="border-y border-border bg-surface py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Simplu, în 3 pași.</h2>
          <ol className="mt-8 grid gap-3 md:grid-cols-3 md:gap-5">
            {[
              { i: Search, t: "Ne spui mărimea", d: "Din căutarea de mai sus, la telefon sau cu o poză." },
              { i: MessageCircle, t: "Îți spunem ce avem", d: "Variante disponibile și prețul, pe loc." },
              { i: MapPin, t: "Vii și le iei", d: "Calea Găești 45, Dragodana — deschis non-stop." },
            ].map((x, idx) => (
              <li key={x.t} className="flex items-start gap-4 rounded-3xl border border-border bg-card p-5 md:flex-col md:p-7">
                <span className="relative flex size-14 shrink-0 items-center justify-center rounded-2xl bg-brand text-brand-foreground shadow-glow">
                  <x.i className="size-6" />
                  <span className="absolute -right-2 -top-2 flex size-6 items-center justify-center rounded-full border-2 border-card bg-foreground text-[11px] font-black text-background">
                    {idx + 1}
                  </span>
                </span>
                <div>
                  <p className="text-lg font-black">{x.t}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{x.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Stocul nostru, poze reale.</h2>
          <a href={MAPS} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand">
            <MapPin className="size-4" /> {ADDRESS}
          </a>
        </div>
        <div className="-mx-5 mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:auto-rows-[200px] md:grid-cols-4 md:overflow-visible md:p-0">
          {photos.map((p, i) => {
            const hidden = !showAll && i >= 5;
            const more = !showAll && i === 4 && photos.length > 5;
            return (
              <button
                key={p.alt}
                type="button"
                onClick={() => (more ? setShowAll(true) : setLightbox(i))}
                className={`group relative aspect-[4/5] w-[70%] shrink-0 snap-center overflow-hidden rounded-3xl md:aspect-auto md:w-auto ${hidden ? "md:hidden" : ""} ${["md:col-span-2 md:row-span-2", "", "", "", "", "md:col-span-2", "md:col-span-2", "md:col-span-2", "md:col-span-2"][i]}`}
              >
                <img src={p.src} alt={p.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                {more && (
                  <span className="absolute inset-0 hidden flex-col items-center justify-center gap-1 bg-foreground/65 text-background backdrop-blur-[2px] transition-colors group-hover:bg-brand/85 md:flex">
                    <span className="text-4xl font-black">+{photos.length - 5}</span>
                    <span className="text-xs font-bold uppercase tracking-widest">poze</span>
                  </span>
                )}
              </button>
            );
          })}
        </div>
        {photos.length > 5 && (
          <div className="mt-8 hidden justify-center md:flex">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="group inline-flex items-center gap-4 rounded-full border border-border bg-card py-2 pl-2 pr-6 font-bold shadow-card transition-all hover:-translate-y-0.5 hover:border-brand hover:shadow-glow"
            >
              <span className="flex -space-x-3">
                {photos.slice(5, 8).map((p) => (
                  <img key={p.alt} src={p.src} alt="" className="size-10 rounded-full object-cover ring-2 ring-card" />
                ))}
              </span>
              <span>{showAll ? "Arată mai puține" : `Vezi toată galeria · ${photos.length} poze`}</span>
              <span className="grid size-8 place-items-center rounded-full bg-brand text-brand-foreground">
                <ChevronDown className={`size-4 transition-transform duration-300 ${showAll ? "rotate-180" : "group-hover:translate-y-0.5"}`} />
              </span>
            </button>
          </div>
        )}
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-5 pb-16 sm:pb-24">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-xs font-black uppercase tracking-widest text-brand">Întrebări frecvente</p>
            <h2 className="mt-2 text-3xl font-black leading-[1.05] tracking-tight sm:text-5xl">
              Ai întrebări?
              <br />
              <span className="text-brand">Avem răspunsuri.</span>
            </h2>
            <p className="mt-3 text-muted-foreground">Tot ce trebuie să știi înainte să cumperi anvelope SH.</p>
            <div className="mt-6 hidden rounded-3xl bg-foreground p-6 text-background lg:block">
              <p className="font-black">Nu ai găsit răspunsul?</p>
              <p className="mt-1 text-sm opacity-70">Scrie-ne sau sună, îți răspundem imediat.</p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <a href={waHref} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-success text-sm font-black text-brand-foreground">
                  <MessageCircle className="size-4" /> WhatsApp
                </a>
                <a href={`tel:${TEL}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand text-sm font-black text-brand-foreground">
                  <Phone className="size-4" /> Sună
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {faqs.map((f, i) => {
              const on = open === i;
              return (
                <div
                  key={f.q}
                  className={`overflow-hidden rounded-3xl border-2 transition-all duration-300 ${
                    on ? "border-brand/40 bg-card shadow-float" : "border-border bg-card hover:border-foreground/20"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(on ? null : i)}
                    aria-expanded={on}
                    className="flex min-h-[72px] w-full items-center gap-4 px-4 text-left sm:px-6"
                  >
                    <span
                      className={`flex size-10 shrink-0 items-center justify-center rounded-2xl text-sm font-black tabular-nums transition-colors ${
                        on ? "bg-brand text-brand-foreground" : "bg-surface text-muted-foreground"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-[15px] font-bold leading-snug sm:text-base">{f.q}</span>
                    <span
                      className={`flex size-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        on ? "rotate-180 border-brand bg-brand-soft text-brand" : "border-border"
                      }`}
                    >
                      <ChevronDown className="size-4" />
                    </span>
                  </button>
                  <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${on ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <p className="mx-4 mb-5 border-l-4 border-brand pl-4 text-sm leading-relaxed text-muted-foreground sm:mx-6 sm:ml-[76px] sm:text-[15px]">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="grid grid-cols-2 gap-2 pt-2 lg:hidden">
              <a href={waHref} target="_blank" rel="noreferrer" className="inline-flex min-h-13 items-center justify-center gap-2 rounded-2xl bg-success text-sm font-black text-brand-foreground">
                <MessageCircle className="size-4" /> Altă întrebare?
              </a>
              <a href={`tel:${TEL}`} className="inline-flex min-h-13 items-center justify-center gap-2 rounded-2xl border-2 border-border bg-card text-sm font-bold">
                <Phone className="size-4 text-brand" /> Sună-ne
              </a>
            </div>
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/90 p-4" onClick={() => setLightbox(null)}>
          <button type="button" aria-label="Închide" className="absolute right-4 top-4 flex size-12 items-center justify-center rounded-full bg-background text-foreground">
            <X className="size-6" />
          </button>
          <img src={photos[lightbox]!.src} alt={photos[lightbox]!.alt} className="max-h-[85vh] max-w-full rounded-2xl object-contain" />
        </div>
      )}
    </main>
  );
}
