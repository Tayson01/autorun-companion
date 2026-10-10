import { useCallback, useEffect, useRef, useState } from "react";
import { BadgeCheck, Camera, ChevronLeft, ChevronRight, ExternalLink, Quote, Star, X } from "lucide-react";

import f1 from "@/assets/google/foto-1.jpg";
import f2 from "@/assets/google/foto-2.jpg";
import f3 from "@/assets/google/foto-3.jpg";
import f5 from "@/assets/google/foto-5.jpg";
import f6 from "@/assets/google/foto-6.jpg";
import f7 from "@/assets/google/foto-7.jpg";
import f8 from "@/assets/google/foto-8.jpg";
import f9 from "@/assets/google/foto-9.jpg";
import f11 from "@/assets/google/foto-11.jpg";
import a1 from "@/assets/google/avatar-1.png";
import a2 from "@/assets/google/avatar-2.png";
import a3 from "@/assets/google/avatar-3.png";
import a4 from "@/assets/google/avatar-4.png";
import a10 from "@/assets/google/avatar-10.png";
import a6 from "@/assets/google/avatar-6.png";
import a7 from "@/assets/google/avatar-7.png";
import a9 from "@/assets/google/avatar-9.png";
import { GoogleMark } from "@/components/site/GoogleMark";
import { SectionLabel } from "@/components/site/ui";

const GOOGLE_URL = "https://maps.app.goo.gl/JiXsr3WJvsk4Q7V1A";
const RATING = 4.9;
const COUNT = 177;

const owner = { name: "Vulcanizare NonStop", avatar: a9 };

/** Fotografii preluate de pe profilul Google Maps, cu autorul fiecăreia. */
const photos = [
  { src: f1, w: 1440, h: 810, author: owner },
  { src: f8, w: 4032, h: 3024, author: { name: "El Nicu", avatar: a6 } },
  { src: f2, w: 960, h: 540, author: owner },
  { src: f3, w: 720, h: 960, author: owner },
  { src: f9, w: 3264, h: 1468, author: { name: "Cosmin Cox", avatar: a7 } },
  { src: f5, w: 860, h: 746, author: owner },
  { src: f6, w: 720, h: 960, author: owner },
  { src: f11, w: 684, h: 912, author: owner },
  { src: f7, w: 720, h: 960, author: owner },
];

/** Recenzii preluate de pe Google Maps (Google oferă public cele mai relevante 5). */
const reviews = [
  { name: "Florin Serban", avatar: a1, rating: 5, when: "acum 3 luni", text: "Preturi mici și calitate superioara!!! Super", url: "https://www.google.com/maps/contrib/116364624744404057671/reviews" },
  { name: "Nicolae Balasa", avatar: a2, rating: 5, when: "acum 3 luni", text: "Super preturi...calitate buna!!!", url: "https://www.google.com/maps/contrib/104743814083269855919/reviews" },
  { name: "Georgiana Alexandra Viloaica", avatar: a3, rating: 5, when: "acum 5 luni", text: "Profesioniști!\nRăspund rapid și rezolvă problema imediat!", url: "https://www.google.com/maps/contrib/102515383428966307254/reviews" },
  { name: "A A", avatar: a4, rating: 5, when: "acum 3 ani", text: "Niște băieți de nota 10 lucrează ft rapid și calitativ", url: "https://www.google.com/maps/contrib/108273886275660952522/reviews" },
  { name: "Andrei Yt", avatar: a10, rating: 5, when: "acum 3 ani", text: "Top💪🏻", url: "https://www.google.com/maps/contrib/114594447374595946819/reviews" },
];

function Stars({ value, className = "size-4" }: { value: number; className?: string }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${value} din 5 stele`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className={`${className} ${i <= Math.round(value) ? "fill-star text-star" : "fill-muted text-muted"}`} />
      ))}
    </span>
  );
}

function Lightbox({ index, onClose, onMove }: { index: number; onClose: () => void; onMove: (d: number) => void }) {
  const p = photos[index] ?? photos[0]!;
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onMove(1);
      if (e.key === "ArrowLeft") onMove(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onMove]);

  return (
    <div className="gallery-lightbox fixed inset-0 z-[1000] flex items-center justify-center p-4" role="dialog" aria-modal="true" onClick={onClose}>
      <button type="button" aria-label="Închide" className="gallery-lb-btn absolute right-4 top-4" onClick={onClose}>
        <X className="size-5" />
      </button>
      <button type="button" aria-label="Fotografia anterioară" className="gallery-lb-btn absolute left-3 top-1/2 -translate-y-1/2 sm:left-6" onClick={(e) => { e.stopPropagation(); onMove(-1); }}>
        <ChevronLeft className="size-6" />
      </button>
      <figure className="relative max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <img src={p.src} alt={`Fotografie ${index + 1} de pe Google Maps`} className="max-h-[80svh] w-auto rounded-2xl object-contain" />
        <figcaption className="mt-3 flex items-center justify-between gap-3 text-sm text-gallery-lb-foreground">
          <span className="flex items-center gap-2">
            <img src={p.author.avatar} alt="" className="size-7 rounded-full" />
            Foto: {p.author.name}
          </span>
          <span className="tabular-nums opacity-70">{index + 1} / {photos.length}</span>
        </figcaption>
      </figure>
      <button type="button" aria-label="Fotografia următoare" className="gallery-lb-btn absolute right-3 top-1/2 -translate-y-1/2 sm:right-6" onClick={(e) => { e.stopPropagation(); onMove(1); }}>
        <ChevronRight className="size-6" />
      </button>
    </div>
  );
}

export function InterventionsGallery() {
  const [open, setOpen] = useState<number | null>(null);
  const move = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + photos.length) % photos.length)), []);
  const close = useCallback(() => setOpen(null), []);

  return (
    <section id="galerie" className="gallery-section relative overflow-hidden py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        {/* Antet + scor Google */}
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <div>
            <SectionLabel>Galerie · Intervenții reale</SectionLabel>
            <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight sm:text-5xl">
              Lucrări reale, clienți <span className="text-brand">reali.</span>
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              Fotografii și recenzii direct de pe profilul nostru Google Maps fără filtre, fără poze de stoc.
            </p>
          </div>

          <a href={GOOGLE_URL} target="_blank" rel="noreferrer" className="gallery-score group block rounded-3xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-float">
            <div className="flex items-center gap-5">
              <div className="text-center">
                <p className="text-6xl font-black leading-none tracking-tighter">{RATING.toFixed(1).replace(".", ",")}</p>
                <Stars value={RATING} className="mt-2 size-4" />
              </div>
              <div className="flex-1 border-l border-border pl-5">
                <p className="flex items-center gap-2 text-sm font-bold">
                  <GoogleMark className="size-5" /> Recenzii Google
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  din <span className="font-bold text-foreground">{COUNT}</span> de recenzii
                </p>
                <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-brand">
                  Vezi toate pe Google <ExternalLink className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </p>
              </div>
            </div>
          </a>
        </div>

        {/* Galerie bento */}
        <div className="mt-12 columns-2 gap-3 sm:gap-4 md:columns-3 lg:columns-4">
          {photos.map((p, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setOpen(i)}
              className="gallery-tile group relative mb-3 block w-full overflow-hidden rounded-2xl sm:mb-4"
              style={{ aspectRatio: `${p.w} / ${p.h}` }}
              aria-label={`Deschide fotografia ${i + 1}`}
            >
              <img src={p.src} alt={`Lucrare Vulcanizare Dragodana, fotografie ${i + 1}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <span className="gallery-tile-shade absolute inset-0" aria-hidden="true" />
              <span className="absolute inset-x-0 bottom-0 flex translate-y-2 items-center gap-2 p-3 text-xs font-semibold text-gallery-lb-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <img src={p.author.avatar} alt="" className="size-6 rounded-full ring-2 ring-gallery-lb-foreground/60" />
                {p.author.name}
              </span>
              <span className="absolute right-2.5 top-2.5 grid size-8 place-items-center rounded-full bg-card/85 text-foreground opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                <Camera className="size-4" />
              </span>
            </button>
          ))}
        </div>

        <ReviewsCarousel />
      </div>

      {open !== null && <Lightbox index={open} onClose={close} onMove={move} />}
    </section>
  );
}

function ReviewsCarousel() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const card = el.firstElementChild as HTMLElement | null;
      if (!card) return;
      const step = card.offsetWidth + 16;
      setActive(Math.min(reviews.length - 1, Math.round(el.scrollLeft / step)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const go = (i: number) => {
    const el = ref.current;
    const card = el?.children[i] as HTMLElement | undefined;
    if (el && card) el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" });
  };

  return (
    <div className="mt-16 overflow-hidden rounded-[2rem] border border-border bg-surface p-5 sm:p-8">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
        <div className="min-w-0">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand">
            <GoogleMark className="size-4" /> Recenzii verificate
          </p>
          <h3 className="mt-2 text-2xl font-black leading-tight sm:text-3xl">Ce spun clienții noștri</h3>
          <div className="mt-2 flex items-center gap-2 text-sm">
            <span className="font-black">{RATING.toFixed(1).replace(".", ",")}</span>
            <Stars value={RATING} className="size-3.5" />
            <span className="text-muted-foreground">· {COUNT} recenzii</span>
          </div>
        </div>
        <div className="hidden gap-2 sm:flex">
          <button type="button" onClick={() => go(Math.max(0, active - 1))} aria-label="Recenzia anterioară" className="grid size-11 place-items-center rounded-full border border-border bg-card transition hover:border-brand hover:text-brand disabled:opacity-40" disabled={active === 0}>
            <ChevronLeft className="size-5" />
          </button>
          <button type="button" onClick={() => go(Math.min(reviews.length - 1, active + 1))} aria-label="Recenzia următoare" className="grid size-11 place-items-center rounded-full border border-border bg-card transition hover:border-brand hover:text-brand disabled:opacity-40" disabled={active === reviews.length - 1}>
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>

      <div ref={ref} className="gallery-reviews -mx-5 mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-5 pb-2 sm:mx-0 sm:px-0">
        {reviews.map((r, i) => (
          <article
            key={r.name}
            className={`group relative flex w-[82%] shrink-0 snap-start flex-col overflow-hidden rounded-3xl border bg-card p-5 shadow-card transition-all duration-500 sm:w-[340px] sm:p-6 ${
              i === active ? "border-brand/50 shadow-float" : "border-border opacity-80"
            }`}
          >
            <span aria-hidden className="absolute inset-x-0 top-0 h-1 bg-brand" />
            <Quote className="absolute right-4 top-4 size-10 text-brand/10 transition-transform duration-500 group-hover:rotate-12" />
            <div className="flex items-center gap-1" aria-label={`${r.rating} din 5 stele`}>
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="size-4 fill-star text-star" />
              ))}
            </div>
            <p className="mt-4 flex-1 whitespace-pre-line text-base font-bold leading-snug sm:text-lg">„{r.text}”</p>
            <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
              <img src={r.avatar} alt={r.name} width={40} height={40} loading="lazy" className="size-10 shrink-0 rounded-full object-cover ring-2 ring-brand/20" />
              <div className="min-w-0 flex-1">
                <p className="flex items-center gap-1 truncate text-sm font-bold capitalize">
                  {r.name} <BadgeCheck className="size-4 shrink-0 text-brand" />
                </p>
                <p className="text-xs text-muted-foreground">{r.when}</p>
              </div>
              <a href={r.url} target="_blank" rel="noreferrer" aria-label="Vezi pe Google" className="grid size-8 shrink-0 place-items-center rounded-full bg-surface transition hover:bg-muted">
                <GoogleMark className="size-4" />
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-5 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <div className="flex gap-1.5">
          {reviews.map((r, i) => (
            <button
              key={r.name}
              type="button"
              onClick={() => go(i)}
              aria-label={`Recenzia ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${i === active ? "w-6 bg-brand" : "w-2 bg-border"}`}
            />
          ))}
        </div>
        <a href={GOOGLE_URL} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-bold text-brand-foreground shadow-glow transition-transform hover:-translate-y-0.5 active:scale-[0.98] sm:w-auto">
          <Star className="size-4 fill-current" /> Lasă o recenzie pe Google
        </a>
      </div>
    </div>
  );
}
