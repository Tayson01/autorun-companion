import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ChevronRight,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
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
                <span className="mt-2 block text-[1.35rem] font-extrabold text-brand sm:text-3xl">NON-STOP 24/24</span>
              </h1>

              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
                Vulcanizare deschisă non-stop în Dragodana — zi și noapte, weekend și sărbători, pe Calea Găești 45. Vino la noi oricând sau venim noi la tine:
                Găești, Târgoviște, Titu, A1 și până la 100 km.
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

              <dl className="mt-5 grid max-w-xl grid-cols-3 gap-2 sm:mt-10 sm:gap-3">
                {[
                  { icon: Clock, k: "24/24", v: "deschis non-stop", live: true },
                  { icon: MapPin, k: "100 km", v: "rază acoperire" },
                  { icon: ShieldCheck, k: "7 din 7", v: "inclusiv sărbători" },
                ].map((s, i) => (
                  <div
                    key={s.k}
                    style={{ animationDelay: `${i * 120}ms` }}
                    className="vm-stat group animate-rise rounded-2xl border border-border bg-card/80 p-3 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-float sm:p-4"
                  >
                    <div aria-hidden className="pointer-events-none absolute -right-8 -top-8 size-20 rounded-full bg-brand/10 blur-xl transition-all duration-500 group-hover:scale-150 group-hover:bg-brand/20" />
                    <div className="relative flex items-center justify-between">
                      <span className="flex size-8 items-center justify-center rounded-xl bg-brand-soft text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-brand-foreground group-hover:rotate-6">
                        <s.icon className="size-4" />
                      </span>
                      {s.live && (
                        <span className="relative flex size-2">
                          <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-70" />
                          <span className="relative inline-flex size-2 rounded-full bg-success" />
                        </span>
                      )}
                    </div>
                    <dt className="relative mt-3 text-base font-black leading-none tracking-tight sm:text-xl">{s.k}</dt>
                    <dd className="relative mt-1.5 text-[11px] leading-snug text-muted-foreground sm:text-xs">{s.v}</dd>
                    <span aria-hidden className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-brand transition-transform duration-500 group-hover:scale-x-100" />
                  </div>
                ))}
              </dl>

            </div>
          </div>
        </div>
      </section>

      <PriceHighlight />
      <UsedTiresTeaser />

      {/* Bară urgență */}
      <section className="px-4 py-8 sm:py-12">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-foreground p-5 text-background shadow-float sm:p-8">
          <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-brand/30 blur-3xl" />
          <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-background/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-success" />
                </span>
                Deschis acum · Non-stop 24/24
              </span>
              <p className="mt-3 text-xl font-extrabold leading-tight sm:text-2xl">
                Ai pană acum? <span className="text-brand">Suntem aici.</span>
              </p>
              <p className="mt-2 text-sm text-background/70">
                Vino oricând la atelier pe Calea Găești 45, Dragodana, sau trimite locația pe WhatsApp și pornim spre tine.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:flex sm:gap-3">
              <Btn href={`tel:${TEL}`} className="vm-callfx vm-callcta justify-center">
                <Phone className="size-4" /> <span className="tabular-nums">{PHONE}</span>
              </Btn>
              <a
                href={WA}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-background/20 bg-background/10 px-4 py-3 text-sm font-semibold transition hover:bg-background/20"
              >
                <MessageCircle className="size-4" /> WhatsApp
              </a>
            </div>
          </div>
          <div className="relative mt-6 border-t border-background/10 pt-5">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-background/50">Timp estimat de sosire</p>
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 sm:gap-3">
              {zones.slice(0, 4).map((z) => (
                <Link
                  key={z.slug}
                  to="/zone/$slug"
                  params={{ slug: z.slug }}
                  className="group flex items-center justify-between gap-2 rounded-2xl bg-background/5 p-3 ring-1 ring-background/10 transition hover:bg-background/10 hover:ring-brand/60"
                >
                  <span className="min-w-0">
                    <span className="flex items-center gap-1.5 truncate text-sm font-semibold">
                      <MapPin className="size-3.5 shrink-0 text-brand" /> {z.short}
                    </span>
                    <span className="mt-1 flex items-center gap-1 text-xs text-background/60">
                      <Clock className="size-3" /> {z.eta.replace("Sosire ", "")}
                    </span>
                  </span>
                  <ChevronRight className="size-4 shrink-0 text-background/40 transition group-hover:translate-x-0.5 group-hover:text-brand" />
                </Link>
              ))}
            </div>
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

