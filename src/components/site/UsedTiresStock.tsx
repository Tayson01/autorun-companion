import { useState } from "react";
import { BadgeCheck, Check, MessageCircle, Phone, Ruler, Snowflake, Sun, Warehouse } from "lucide-react";

import { PHONE, TEL, WA } from "@/lib/site-data";
import s1 from "@/assets/stoc/stoc-1.jpg";
import s2 from "@/assets/stoc/stoc-2.jpg";
import s3 from "@/assets/stoc/stoc-3.jpg";
import s4 from "@/assets/stoc/stoc-4.jpg";
import s5 from "@/assets/stoc/stoc-5.jpg";
import s6 from "@/assets/stoc/stoc-6.jpg";

const photos = [
  { src: s1, alt: "Rafturi cu sute de anvelope SH sortate pe dimensiuni" },
  { src: s2, alt: "Stive de anvelope SH marcate cu dimensiunea" },
  { src: s3, alt: "Depozit acoperit cu anvelope second hand" },
  { src: s4, alt: "Curtea cu anvelope SH de toate dimensiunile" },
  { src: s5, alt: "Anvelope SH 205/65 R15 și 215/55 R18" },
  { src: s6, alt: "Stoc de anvelope SH la Vulcanizare Dragodana" },
];

const sizes = [
  "175/65 R14", "185/60 R14", "185/65 R14", "185/60 R15", "185/65 R15", "195/65 R15",
  "205/55 R16", "205/65 R15", "215/55 R18", "225/45 R17", "235/55 R19", "255/50 R19",
];

export function UsedTiresStock() {
  const [w, setW] = useState("205");
  const [h, setH] = useState("55");
  const [r, setR] = useState("16");
  const msg = encodeURIComponent(`Bună! Aveți anvelope SH ${w}/${h} R${r}?`);
  const waHref = `${WA.split("?")[0]}?text=${msg}`;

  const sel = "h-12 w-full rounded-xl border border-border bg-card px-3 text-base font-bold outline-none focus:border-brand";

  return (
    <section id="stoc-sh" className="relative overflow-hidden bg-foreground py-16 text-background sm:py-24">
      <div aria-hidden className="pointer-events-none absolute -left-32 top-10 size-[420px] rounded-full bg-brand/30 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand px-3 py-1.5 text-[11px] font-black uppercase tracking-widest text-brand-foreground">
              <Warehouse className="size-3.5" /> Stoc mare · disponibil acum
            </span>
            <h2 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl">
              Mii de anvelope <span className="text-brand">SH</span>,
              <br /> gata de montat.
            </h2>
            <p className="mt-5 max-w-xl text-base opacity-80 sm:text-lg">
              Avem unul dintre cele mai generoase stocuri de anvelope second hand din zonă — vară,
              iarnă și all-season, sortate pe dimensiuni. Alegi, montăm și echilibrăm pe loc, non-stop.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                { i: Sun, t: "Vară, iarnă & all-season" },
                { i: Ruler, t: "De la R13 la R19+" },
                { i: BadgeCheck, t: "Verificate înainte de vânzare" },
                { i: Snowflake, t: "Seturi complete de 2 sau 4" },
              ].map((x) => (
                <li key={x.t} className="flex items-center gap-3 rounded-2xl border border-background/15 bg-background/5 px-4 py-3 text-sm font-semibold">
                  <x.i className="size-5 shrink-0 text-brand" /> {x.t}
                </li>
              ))}
            </ul>
          </div>

          {/* Mosaic */}
          <div className="grid grid-cols-6 grid-rows-[repeat(4,90px)] gap-2.5 sm:grid-rows-[repeat(4,120px)]">
            {[
              "col-span-4 row-span-2",
              "col-span-2 row-span-2",
              "col-span-2 row-span-2",
              "col-span-4 row-span-2",
            ].map((cls, i) => (
              <div key={i} className={`group relative overflow-hidden rounded-2xl ${cls}`}>
                <img src={photos[i]!.src} alt={photos[i]!.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
            ))}
          </div>
        </div>

        {/* Size finder */}
        <div className="mt-12 grid gap-6 rounded-[28px] bg-background p-6 text-foreground shadow-card sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-brand">Caută-ți dimensiunea</p>
            <p className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">Spune-ne mărimea, îți spunem pe loc dacă o avem.</p>
            <p className="mt-2 text-sm text-muted-foreground">O găsești scrisă pe flancul anvelopei, ex: 205/55 R16.</p>
            <div className="mt-5 grid grid-cols-3 gap-3">
              <label className="text-xs font-semibold text-muted-foreground">Lățime
                <select value={w} onChange={(e) => setW(e.target.value)} className={sel}>
                  {["155","165","175","185","195","205","215","225","235","245","255"].map((v) => <option key={v}>{v}</option>)}
                </select>
              </label>
              <label className="text-xs font-semibold text-muted-foreground">Profil
                <select value={h} onChange={(e) => setH(e.target.value)} className={sel}>
                  {["40","45","50","55","60","65","70"].map((v) => <option key={v}>{v}</option>)}
                </select>
              </label>
              <label className="text-xs font-semibold text-muted-foreground">Jantă
                <select value={r} onChange={(e) => setR(e.target.value)} className={sel}>
                  {["13","14","15","16","17","18","19","20"].map((v) => <option key={v}>{v}</option>)}
                </select>
              </label>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={waHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3.5 text-sm font-black text-brand-foreground shadow-card transition-transform hover:-translate-y-0.5">
                <MessageCircle className="size-4" /> Întreabă pe WhatsApp: {w}/{h} R{r}
              </a>
              <a href={`tel:${TEL}`} className="vm-callfx inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3.5 text-sm font-bold hover:bg-surface">
                <Phone className="size-4 text-brand" /> <span className="tabular-nums">{PHONE}</span>
              </a>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Dimensiuni des întâlnite în stoc</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {sizes.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => {
                    const m = s.match(/(\d+)\/(\d+) R(\d+)/);
                    if (m) { setW(m[1]!); setH(m[2]!); setR(m[3]!); }
                  }}
                  className="rounded-full border border-border bg-surface px-3.5 py-2 text-sm font-bold tabular-nums transition-colors hover:border-brand hover:bg-brand hover:text-brand-foreground"
                >
                  {s}
                </button>
              ))}
            </div>
            <p className="mt-5 flex items-start gap-2 text-xs text-muted-foreground">
              <Check className="mt-0.5 size-4 shrink-0 text-brand" /> Montaj și echilibrare făcute pe loc, în atelierul nostru din Dragodana.
            </p>
          </div>
        </div>

        {/* Strip */}
        <div className="mt-6 grid grid-cols-2 gap-2.5">
          {photos.slice(4).map((p) => (
            <div key={p.alt} className="group relative h-40 overflow-hidden rounded-2xl sm:h-56">
              <img src={p.src} alt={p.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
