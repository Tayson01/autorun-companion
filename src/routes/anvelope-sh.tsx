import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Car,
  ChevronDown,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  Search,
  Snowflake,
  Sun,
  Truck,
  Wrench,
  X,
  CloudSun,
  Tractor,
} from "lucide-react";

import { TireDecoder } from "@/components/site/TireDecoder";
import { ADDRESS, MAPS, PHONE, TEL, WA } from "@/lib/site-data";
import s1 from "@/assets/stoc/stoc-1.jpg";
import s2 from "@/assets/stoc/stoc-2.jpg";
import s3 from "@/assets/stoc/stoc-3.jpg";
import s4 from "@/assets/stoc/stoc-4.jpg";
import s5 from "@/assets/stoc/stoc-5.jpg";
import s6 from "@/assets/stoc/stoc-6.jpg";

export const Route = createFileRoute("/anvelope-sh")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Anvelope SH Dragodana – Stoc mare, montaj pe loc | Vulcanizare Dragodana" },
      {
        name: "description",
        content:
          "Anvelope second hand vară, iarnă și all-season în Dragodana, Calea Găești 45. Montaj și echilibrare pe loc, non-stop. Aproape de Găești, Târgoviște, Titu și A1.",
      },
      { property: "og:title", content: "Anvelope SH Dragodana – Stoc mare, montaj pe loc" },
      {
        property: "og:description",
        content: "Caută-ți dimensiunea și întreabă pe WhatsApp. Montaj și echilibrare non-stop în atelier.",
      },
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
  { src: s3, alt: "Depozit acoperit cu anvelope second hand" },
  { src: s4, alt: "Curtea cu anvelope SH de toate dimensiunile" },
  { src: s5, alt: "Anvelope SH 205/65 R15 și 215/55 R18" },
  { src: s6, alt: "Stoc de anvelope SH la Vulcanizare Dragodana" },
];

const categories = [
  { id: "auto", label: "Autoturisme", icon: Car, sizes: ["175/65 R14", "185/60 R14", "185/65 R15", "195/65 R15", "205/55 R16", "205/65 R15", "225/45 R17"] },
  { id: "suv", label: "SUV & 4x4", icon: Truck, sizes: ["215/55 R18", "215/65 R16", "225/65 R17", "235/55 R19", "255/50 R19"] },
  { id: "util", label: "Utilitare", icon: Truck, sizes: ["195/70 R15C", "205/65 R16C", "215/65 R16C", "225/65 R16C"] },
  { id: "grele", label: "Camioane & agricole", icon: Tractor, sizes: ["La telefon"] },
] as const;

const seasons = [
  { id: "vara", label: "Vară", icon: Sun, text: "Aderență bună pe uscat și ploaie, la temperaturi peste 7°C." },
  { id: "iarna", label: "Iarnă", icon: Snowflake, text: "Pentru zăpadă, gheață și frig. Marcaj M+S / fulg de zăpadă." },
  { id: "all", label: "All-season", icon: CloudSun, text: "Un singur set tot anul, pentru condusul mai mult în oraș." },
] as const;

const faqs = [
  { q: "Cum aflu dacă aveți dimensiunea mea?", a: "Alege dimensiunea mai sus și apasă pe WhatsApp, sau sună-ne. Îți spunem pe loc ce avem și îți putem trimite poze cu anvelopele." },
  { q: "Trebuie să le și montez la voi?", a: "Da. Dacă vrei, da — în atelierul din Dragodana, non-stop. Le poți lua și doar la vânzare." },
  { q: "Pot vedea anvelopele înainte să le cumpăr?", a: "Sigur. Vino la atelier pe Calea Găești 45 oricând, le vezi, verifici profilul și alegi." },
  { q: "Cât costă anvelopele SH?", a: "Prețul depinde de dimensiune, marcă și cât profil mai au. Sună-ne sau scrie-ne pe WhatsApp și îți spunem prețul exact." },
  { q: "Aveți și anvelope pentru camioane sau utilaje agricole?", a: "Întreabă-ne la telefon cu dimensiunea exactă și verificăm stocul pentru tine." },
];

const widths = ["155", "165", "175", "185", "195", "205", "215", "225", "235", "245", "255", "265", "275"];
const heights = ["35", "40", "45", "50", "55", "60", "65", "70", "75"];
const rims = ["13", "14", "15", "16", "17", "18", "19", "20", "21", "22"];

function AnvelopeSH() {
  const [w, setW] = useState("205");
  const [h, setH] = useState("55");
  const [r, setR] = useState("16");
  const [season, setSeason] = useState<string>("vara");
  const [qty, setQty] = useState(4);
  const [cat, setCat] = useState<string>("auto");
  const [open, setOpen] = useState<number | null>(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const seasonLabel = seasons.find((s) => s.id === season)!.label.toLowerCase();
  const waHref = useMemo(() => {
    const msg = encodeURIComponent(`Bună! Aveți ${qty} anvelope SH ${w}/${h} R${r}, de ${seasonLabel}?`);
    return `${WA.split("?")[0]}?text=${msg}`;
  }, [w, h, r, qty, seasonLabel]);

  const pick = (s: string) => {
    const m = s.match(/(\d+)\/(\d+) R(\d+)/);
    if (m) {
      setW(m[1]!);
      setH(m[2]!);
      setR(m[3]!);
      document.getElementById("cauta")?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const sel =
    "mt-1.5 h-14 w-full appearance-none rounded-2xl border-2 border-border bg-background px-4 text-xl font-black tabular-nums outline-none transition-colors focus:border-brand";
  const activeCat = categories.find((c) => c.id === cat)!;

  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 size-[520px] rounded-full bg-brand/15 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 pb-12 pt-10 md:pt-14 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div className="animate-rise">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand-soft px-3 py-1.5 text-[11px] font-black uppercase tracking-widest text-brand">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-70" />
                <span className="relative inline-flex size-2 rounded-full bg-success" />
              </span>
              Stoc disponibil acum · Dragodana
            </span>
            <h1 className="mt-5 text-[2.6rem] font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
              Anvelope <span className="text-brand">SH</span>
              <span className="block">la preț bun.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
              Vindem anvelope second hand de vară, iarnă și all-season, sortate pe dimensiuni, în Dragodana, pe Calea Găești 45. Ne spui mărimea, îți trimitem poze și prețul, vii și le iei.
            </p>
            <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap">
              <a href="#cauta" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-brand px-6 text-base font-black text-brand-foreground shadow-glow transition-transform hover:-translate-y-0.5">
                <Search className="size-5" /> Caută dimensiunea ta
              </a>
              <a href={`tel:${TEL}`} className="vm-callfx inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border-2 border-border bg-card px-6 text-base font-bold hover:border-brand/40">
                <Phone className="size-5 text-brand" /> <span className="tabular-nums">{PHONE}</span>
              </a>
            </div>
            <dl className="mt-8 grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { k: "3 sezoane", v: "vară, iarnă, all-season" },
                { k: "24/24", v: "deschis non-stop" },
                { k: "R13–R22", v: "întreabă orice mărime" },
              ].map((s) => (
                <div key={s.k} className="rounded-2xl border border-border bg-card p-3 shadow-card sm:p-4">
                  <dt className="text-base font-black text-brand sm:text-2xl">{s.k}</dt>
                  <dd className="mt-1 text-[11px] leading-snug text-muted-foreground sm:text-xs">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative grid h-[380px] grid-cols-6 grid-rows-6 gap-2.5 sm:h-[520px]">
            {["col-span-4 row-span-4", "col-span-2 row-span-3", "col-span-2 row-span-3", "col-span-4 row-span-2"].map((cls, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setLightbox(i)}
                className={`group relative overflow-hidden rounded-3xl shadow-card ${cls}`}
              >
                <img src={photos[i]!.src} alt={photos[i]!.alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </button>
            ))}
            <div className="absolute -bottom-4 -left-3 rotate-[-4deg] rounded-2xl bg-brand px-5 py-3 text-brand-foreground shadow-float sm:-left-6">
              <p className="text-[10px] font-black uppercase tracking-widest opacity-90">Vânzare directă</p>
              <p className="text-2xl font-black leading-none">Preț pe WhatsApp</p>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-y border-border bg-foreground py-4 text-background">
        <div className="vm-marquee flex w-max gap-10 whitespace-nowrap">
          {[0, 1].map((k) => (
            <div key={k} className="flex gap-10" aria-hidden={k === 1}>
              {["175/65 R14", "185/65 R15", "195/65 R15", "205/55 R16", "215/55 R18", "225/45 R17", "235/55 R19", "205/65 R16C", "Vară", "Iarnă", "All-season"].map((t) => (
                <span key={t} className="inline-flex items-center gap-3 text-lg font-black tabular-nums">
                  <span className="size-2 rounded-full bg-brand" /> {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* HOW TO BUY */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <p className="text-xs font-black uppercase tracking-widest text-brand">Cum cumperi</p>
        <h2 className="mt-2 max-w-2xl text-3xl font-black tracking-tight sm:text-5xl">Anvelopele tale în 4 pași simpli.</h2>
        <ol className="relative mt-10 grid gap-4 md:grid-cols-4">
          <div aria-hidden className="absolute left-0 right-0 top-8 hidden h-0.5 bg-gradient-to-r from-brand via-brand/40 to-transparent md:block" />
          {[
            { i: Search, t: "Alegi mărimea", d: "Din căutarea de mai jos sau ne trimiți o poză cu anvelopa." },
            { i: MessageCircle, t: "Primești poze și preț", d: "Îți arătăm exact anvelopele pe care le avem." },
            { i: BadgeCheck, t: "Ți le punem deoparte", d: "Le păstrăm pentru tine până ajungi." },
            { i: MapPin, t: "Vii și le iei", d: "Calea Găești 45, Dragodana — deschis non-stop." },
          ].map((x, idx) => (
            <li key={x.t} className="group relative rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-float">
              <span className="relative flex size-16 items-center justify-center rounded-2xl bg-brand text-brand-foreground shadow-glow transition-transform group-hover:rotate-6">
                <x.i className="size-7" />
                <span className="absolute -right-2 -top-2 flex size-7 items-center justify-center rounded-full border-2 border-card bg-foreground text-xs font-black text-background">{idx + 1}</span>
              </span>
              <p className="mt-5 text-lg font-black">{x.t}</p>
              <p className="mt-1.5 text-sm text-muted-foreground">{x.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* SIZE FINDER */}
      <section id="cauta" className="scroll-mt-24 bg-surface py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="overflow-hidden rounded-[32px] border border-border bg-card shadow-float">
            <div className="grid lg:grid-cols-[1.25fr_1fr]">
              <div className="p-6 sm:p-10">
                <p className="text-xs font-black uppercase tracking-widest text-brand">Pasul 1 · Dimensiunea</p>
                <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Ce anvelope cauți?</h2>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    { l: "Lățime", v: w, set: setW, o: widths },
                    { l: "Profil", v: h, set: setH, o: heights },
                    { l: "Jantă R", v: r, set: setR, o: rims },
                  ].map((f) => (
                    <label key={f.l} className="relative text-xs font-bold uppercase tracking-wide text-muted-foreground">
                      {f.l}
                      <select value={f.v} onChange={(e) => f.set(e.target.value)} className={sel}>
                        {f.o.map((v) => <option key={v}>{v}</option>)}
                      </select>
                      <ChevronDown className="pointer-events-none absolute bottom-4 right-3 size-4" />
                    </label>
                  ))}
                </div>

                <p className="mt-8 text-xs font-black uppercase tracking-widest text-brand">Pasul 2 · Sezon</p>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {seasons.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSeason(s.id)}
                      className={`flex min-h-14 items-center justify-center gap-2 rounded-2xl border-2 text-sm font-bold transition-all ${
                        season === s.id ? "border-brand bg-brand text-brand-foreground shadow-card" : "border-border bg-background hover:border-brand/40"
                      }`}
                    >
                      <s.icon className="size-4" /> {s.label}
                    </button>
                  ))}
                </div>

                <p className="mt-8 text-xs font-black uppercase tracking-widest text-brand">Pasul 3 · Câte bucăți</p>
                <div className="mt-3 grid grid-cols-4 gap-2">
                  {[1, 2, 3, 4].map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setQty(n)}
                      className={`h-12 rounded-2xl border-2 text-base font-black transition-all ${
                        qty === n ? "border-brand bg-brand-soft text-brand" : "border-border bg-background hover:border-brand/40"
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>

              {/* Summary ticket */}
              <div className="relative flex flex-col justify-between bg-foreground p-6 text-background sm:p-10">
                <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-brand/40 blur-3xl" />
                <div className="relative">
                  <p className="text-xs font-black uppercase tracking-widest opacity-70">Cererea ta</p>
                  <p className="mt-4 text-5xl font-black tabular-nums leading-none sm:text-6xl">
                    {w}/{h}
                    <span className="text-brand"> R{r}</span>
                  </p>
                  <div className="mt-6 space-y-3 text-sm">
                    {[
                      ["Sezon", seasons.find((s) => s.id === season)!.label],
                      ["Bucăți", String(qty)],
                      ["Preț", "îl primești pe WhatsApp"],
                      ["Unde", "Calea Găești 45, non-stop"],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between gap-4 border-b border-dashed border-background/20 pb-3">
                        <span className="opacity-70">{k}</span>
                        <span className="text-right font-bold">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative mt-8 grid gap-3">
                  <a href={waHref} target="_blank" rel="noreferrer" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-success px-5 text-base font-black text-brand-foreground transition-transform hover:-translate-y-0.5">
                    <MessageCircle className="size-5" /> Întreabă pe WhatsApp
                  </a>
                  <a href={`tel:${TEL}`} className="vm-callfx inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-brand px-5 text-base font-black text-brand-foreground">
                    <Phone className="size-5" /> Sună: <span className="tabular-nums">{PHONE}</span>
                  </a>
                  <p className="text-center text-xs opacity-60">Îți răspundem cu ce avem în stoc și, la cerere, cu poze.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="mt-12">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-brand">Dimensiuni căutate des</p>
                <h3 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">Alege după tipul mașinii</h3>
              </div>
            </div>
            <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
              {categories.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setCat(c.id)}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full border-2 px-4 py-2.5 text-sm font-bold transition-all ${
                    cat === c.id ? "border-foreground bg-foreground text-background" : "border-border bg-card hover:border-foreground/30"
                  }`}
                >
                  <c.icon className="size-4" /> {c.label}
                </button>
              ))}
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {activeCat.sizes.map((s) =>
                s === "La telefon" ? (
                  <a key={s} href={`tel:${TEL}`} className="col-span-2 flex items-center justify-between rounded-2xl border-2 border-dashed border-brand/40 bg-card p-5 sm:col-span-3 lg:col-span-4">
                    <span>
                      <span className="block text-lg font-black">Anvelope pentru camioane și utilaje agricole</span>
                      <span className="text-sm text-muted-foreground">Sună cu dimensiunea exactă și verificăm stocul.</span>
                    </span>
                    <Phone className="size-6 shrink-0 text-brand" />
                  </a>
                ) : (
                  <button
                    key={s}
                    type="button"
                    onClick={() => pick(s)}
                    className="group flex items-center justify-between rounded-2xl border-2 border-border bg-card p-4 text-left transition-all hover:-translate-y-0.5 hover:border-brand hover:shadow-card"
                  >
                    <span className="text-lg font-black tabular-nums">{s}</span>
                    <ArrowRight className="size-4 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-brand" />
                  </button>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO READ SIZE */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-brand">Citește-ți anvelopa</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-5xl">Ce înseamnă codul de pe flanc?</h2>
            <p className="mt-4 text-muted-foreground">
              Apasă pe fiecare parte a codului și vezi ce înseamnă. Sau fă o poză anvelopei tale și trimite-ne-o pe WhatsApp — îți spunem noi ce îți trebuie.
            </p>
          </div>
          <TireDecoder />
        </div>
      </section>

      {/* SEASONS + WHY */}
      <section className="border-y border-border bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-xs font-black uppercase tracking-widest text-brand">De ce SH de la noi</p>
          <h2 className="mt-2 max-w-2xl text-3xl font-black tracking-tight sm:text-5xl">Economisești, fără drumuri în plus.</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { i: BadgeCheck, t: "Vezi înainte să cumperi", d: "Verifici profilul și starea anvelopei pe loc, la atelier." },
              { i: Wrench, t: "Le iei sau ți le montăm", d: "Le iei acasă sau, dacă vrei, ți le montăm pe loc în atelier." },
              { i: Clock, t: "Non-stop", d: "Vino zi sau noapte, inclusiv weekend și sărbători." },
              { i: MessageCircle, t: "Răspuns rapid", d: "Scrie-ne dimensiunea și îți spunem imediat ce avem." },
            ].map((x, idx) => (
              <div key={x.t} className="group relative rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-float">
                <span className="absolute right-5 top-4 text-5xl font-black text-muted-foreground/15">0{idx + 1}</span>
                <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                  <x.i className="size-6" />
                </span>
                <p className="mt-5 text-lg font-black">{x.t}</p>
                <p className="mt-2 text-sm text-muted-foreground">{x.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {seasons.map((s) => (
              <div key={s.id} className="flex items-start gap-4 rounded-3xl border border-border bg-background p-6">
                <s.icon className="size-8 shrink-0 text-brand" />
                <div>
                  <p className="text-lg font-black">{s.label}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TREAD DEPTH */}
      <section className="mx-auto max-w-6xl px-5 pt-16 sm:pt-24">
        <div className="grid gap-8 rounded-[32px] border border-border bg-card p-6 shadow-card sm:p-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-brand">Ce verifici la o anvelopă SH</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Profilul contează.</h2>
            <p className="mt-3 text-muted-foreground">
              Minimul legal în România este 1,6 mm (iarna, pe zăpadă, 4 mm). Când vii la noi, măsurăm profilul împreună, ca să știi exact ce cumperi.
            </p>
          </div>
          <div className="space-y-3">
            {[
              { mm: "7–8 mm", l: "Ca noi", w: "100%" },
              { mm: "5–6 mm", l: "Foarte bune", w: "75%" },
              { mm: "4 mm", l: "Minim recomandat iarna", w: "50%" },
              { mm: "1,6 mm", l: "Limita legală", w: "20%" },
            ].map((t, i) => (
              <div key={t.mm} className="rounded-2xl border border-border bg-background p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-black tabular-nums">{t.mm}</span>
                  <span className="text-muted-foreground">{t.l}</span>
                </div>
                <div className="mt-2.5 h-2.5 overflow-hidden rounded-full bg-muted">
                  <div className={`h-full rounded-full ${i === 3 ? "bg-muted-foreground" : "bg-brand"}`} style={{ width: t.w }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-brand">Poze reale din atelier</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-5xl">Așa arată stocul nostru.</h2>
          </div>
          <a href={MAPS} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-brand">
            <MapPin className="size-4" /> {ADDRESS}
          </a>
        </div>
        <div className="mt-8 columns-2 gap-3 md:columns-3">
          {photos.map((p, i) => (
            <button key={p.alt} type="button" onClick={() => setLightbox(i)} className="group relative mb-3 block w-full overflow-hidden rounded-3xl">
              <img src={p.src} alt={p.alt} loading="lazy" className="w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 to-transparent p-4 text-left text-xs font-semibold text-background opacity-0 transition-opacity group-hover:opacity-100">
                {p.alt}
              </span>
            </button>
          ))}
        </div>
      </section>


      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
        <p className="text-center text-xs font-black uppercase tracking-widest text-brand">Întrebări despre anvelope SH</p>
        <h2 className="mt-2 text-center text-3xl font-black tracking-tight sm:text-4xl">Tot ce vrei să știi</h2>
        <div className="mt-8 space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className={`rounded-2xl border-2 bg-card transition-colors ${open === i ? "border-brand/40" : "border-border"}`}>
              <button type="button" onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold">
                {f.q}
                <ChevronDown className={`size-5 shrink-0 text-brand transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <p className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-16">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[36px] bg-brand p-8 text-brand-foreground shadow-glow sm:p-14">
          <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full border-[40px] border-brand-foreground/10" />
          <div className="relative grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-5xl">Spune-ne dimensiunea. Restul îl facem noi.</h2>
              <p className="mt-3 opacity-90">Deschis 24/24 pe Calea Găești 45, Dragodana.</p>
            </div>
            <div className="grid gap-3">
              <a href={`tel:${TEL}`} className="vm-callfx inline-flex min-h-16 items-center justify-center gap-2 rounded-2xl bg-background px-6 text-lg font-black text-foreground">
                <Phone className="size-5 text-brand" /> <span className="tabular-nums">{PHONE}</span>
              </a>
              <a href={waHref} target="_blank" rel="noreferrer" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border-2 border-brand-foreground/40 px-6 font-bold">
                <MessageCircle className="size-5" /> WhatsApp: {w}/{h} R{r}
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
