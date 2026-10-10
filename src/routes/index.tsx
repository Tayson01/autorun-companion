import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ChevronRight,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";

import { Btn, BtnLink } from "@/components/site/ui";
import { CoverageMapSection } from "@/components/site/CoverageMapSection";
import { ServicesSection } from "@/components/site/ServicesSection";
import { FAQSection } from "@/components/site/FAQSection";
import { ContactSection } from "@/components/site/ContactSection";
import { InterventionsGallery } from "@/components/site/InterventionsGallery";
import { PriceHighlight } from "@/components/site/PriceHighlight";
import { UsedTiresTeaser } from "@/components/site/UsedTiresTeaser";
import { BASE, PHONE, TEL, WA, zones } from "@/lib/site-data";


export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  component: Index,
  head: () => ({
    meta: [
      { title: "Vulcanizare Dragodana 24/24 – Non-stop & Mobilă | 0729 847 830" },
      {
        name: "description",
        content:
          "Vulcanizare deschisă non-stop în Dragodana, pe Calea Găești 45, plus intervenții mobile în Găești, Târgoviște, Titu și pe A1, pentru autoturisme, camioane și flote.",
      },
      { property: "og:title", content: "Vulcanizare Dragodana 24/24 – Non-stop & Mobilă" },
      {
        property: "og:description",
        content:
          "Intervenții rapide 24/24 pentru autoturisme, camioane și flote, în atelier sau direct la locația ta, în Dâmbovița.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://vulcanizaredragodana.ro/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoRepair",
          name: "Vulcanizare Dragodana",
          telephone: TEL,
          url: "https://vulcanizaredragodana.ro/",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Calea Găești, Nr. 45, Dragodana",
            addressLocality: "Dragodana",
            postalCode: "137210",
            addressCountry: "RO",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: BASE[0],
            longitude: BASE[1],
          },
          openingHours: "Mo-Su 00:00-23:59",
          areaServed: zones.map((z) => z.name),
        }),
      },
    ],
  }),
});


function Index() {
  return (
    <main>
      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="relative mx-auto max-w-6xl px-5 pb-7 pt-10 md:pb-14 md:pt-16">
          <div className="max-w-xl md:max-w-[48%]">
            <div className="animate-rise">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-card/80 px-3 py-1.5 text-[11px] font-semibold text-muted-foreground shadow-card backdrop-blur sm:px-3.5 sm:text-xs">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-70" />
                  <span className="relative inline-flex size-2 rounded-full bg-success" />
                </span>
                Deschis 24/24 în Dragodana · intervenții până la 100 km
              </span>

              <h1 className="mt-4 text-[2.1rem] font-black leading-[1.06] sm:text-5xl md:leading-[1.02]">
                Vulcanizare <span className="text-brand">Dragodana</span>
              </h1>

              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
                Zi și noapte, weekend și sărbători, pe Calea Găești 45.{" "}
                <span className="hidden sm:inline">Vino la noi oricând sau venim noi la tine: Găești, Târgoviște, Titu, A1 și până la 100 km.</span>
                <span className="sm:hidden">Venim la tine până la 100 km.</span>
              </p>

              <div className="mt-5 grid gap-2.5 sm:mt-8 sm:flex sm:flex-wrap sm:gap-3">
                <Btn href={`tel:${TEL}`} className="vm-callfx vm-callcta vm-shine group min-h-14 w-full text-base font-bold shadow-glow transition-transform hover:-translate-y-0.5 sm:min-h-0 sm:w-auto sm:text-sm">
                  <span className="relative flex size-6 items-center justify-center rounded-full bg-brand-foreground/20">
                    <Phone className="size-3.5 transition-transform group-hover:rotate-12" />
                  </span>
                  <span className="tabular-nums">{PHONE}</span>
                </Btn>
                <div className="grid grid-cols-2 gap-2.5 sm:contents">
                  <Btn href={WA} variant="ghost" className="group min-h-13 px-3 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-card sm:min-h-0 sm:px-5">
                    <MessageCircle className="size-4 text-brand transition-transform group-hover:scale-110" /> Locația
                  </Btn>
                  <BtnLink to="/contact" variant="ghost" className="group min-h-13 px-3 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-card sm:min-h-0 sm:px-5">
                    Cere ofertă <span className="transition-transform group-hover:translate-x-1">→</span>
                  </BtnLink>
                </div>
              </div>

              <ul className="mt-6 max-w-xl divide-y divide-border border-y border-border sm:mt-10">
                {[
                  { icon: Wrench, k: "La atelier", v: "Non-stop, fără programare · Calea Găești 45" },
                  { icon: Truck, k: "La tine", v: "Echipă mobilă pe DN7, A1 și până la 100 km" },
                ].map((s, i) => (
                  <li
                    key={s.k}
                    style={{ animationDelay: `${i * 120}ms` }}
                    className="group animate-rise flex items-center gap-3.5 py-3.5 sm:gap-4 sm:py-4"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                      <s.icon className="size-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="text-[15px] font-black leading-tight sm:text-base">{s.k}</div>
                      <div className="mt-0.5 text-[13px] leading-snug text-muted-foreground sm:text-sm">{s.v}</div>
                    </div>
                    <span className="flex shrink-0 items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-success">
                      <span className="relative flex size-2">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-70" />
                        <span className="relative inline-flex size-2 rounded-full bg-success" />
                      </span>
                      Activ
                    </span>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </div>
      </section>

      <PriceHighlight />
      <UsedTiresTeaser />

      {/* Bară urgență */}
      <section className="relative overflow-hidden px-5 py-12 sm:py-20">
        <div aria-hidden className="pointer-events-none absolute -left-24 top-10 size-72 rounded-full bg-brand/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-brand">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-success" />
              </span>
              Deschis acum · Non-stop
            </span>
            <h2 className="mt-4 text-[2.4rem] font-black leading-[0.95] tracking-tight sm:text-6xl">
              Ai pană acum?
              <span className="mt-1 block text-brand">Suntem aici.</span>
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              Vino oricând la atelier pe Calea Găești 45, Dragodana, sau trimite locația pe WhatsApp și pornim spre tine.
            </p>

            <a href={`tel:${TEL}`} className="group mt-7 flex items-center gap-4">
              <span className="vm-callfx flex size-14 shrink-0 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-glow transition-transform group-hover:scale-105 sm:size-16">
                <Phone className="size-6 transition-transform group-hover:rotate-12" />
              </span>
              <span className="min-w-0">
                <span className="block text-[11px] font-bold uppercase tracking-widest text-muted-foreground">Sună direct</span>
                <span className="block text-[1.9rem] font-black leading-none tracking-tight tabular-nums transition-colors group-hover:text-brand sm:text-5xl">
                  {PHONE}
                </span>
              </span>
            </a>
            <a
              href={WA}
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-foreground underline decoration-brand decoration-2 underline-offset-[6px] transition hover:text-brand"
            >
              <MessageCircle className="size-4 text-brand" /> Trimite locația pe WhatsApp →
            </a>
          </div>

          <div>
            <p className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground">
              <Clock className="size-3.5 text-brand" /> Timp estimat de sosire
            </p>
            <ul className="mt-3">
              {zones.slice(0, 4).map((z, i) => (
                <li key={z.slug} className="border-b border-border">
                  <Link
                    to="/zone/$slug"
                    params={{ slug: z.slug }}
                    className="group flex items-center gap-4 py-4 sm:py-5"
                  >
                    <span className="w-6 shrink-0 text-xs font-black tabular-nums text-brand/60">0{i + 1}</span>
                    <span className="min-w-0 flex-1 text-base font-extrabold leading-tight transition-colors group-hover:text-brand sm:text-lg">
                      {z.short}
                    </span>
                    <span className="shrink-0 text-sm font-black tabular-nums text-brand sm:text-base">
                      {z.eta.replace("Sosire ", "")}
                    </span>
                    <ChevronRight className="size-4 shrink-0 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-brand" />
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="#harta"
              className="group mt-5 flex items-center justify-between gap-3 rounded-2xl bg-brand-soft px-4 py-3.5 text-sm font-black text-brand transition hover:bg-brand hover:text-brand-foreground"
            >
              <span className="flex items-center gap-2">
                <MapPin className="size-4" /> Vezi toate zonele pe hartă
              </span>
              <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Servicii */}
      <ServicesSection />


      <InterventionsGallery />


      {/* Hartă acoperire */}
      <div className="border-y border-border bg-surface">
        <CoverageMapSection />
      </div>


      {/* FAQ */}
      <FAQSection />

      {/* Contact */}
      <ContactSection />
    </main>
  );
}

