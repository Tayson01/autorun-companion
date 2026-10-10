import { createFileRoute } from "@tanstack/react-router";
import {
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
          "Intervenții rapide 24/7 pentru autoturisme, camioane și flote, în atelier sau direct la locația ta, în Dâmbovița.",
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
                Vulcanizare deschisă 24/24 pe Calea Găești 45, Dragodana. Vino la noi oricând sau venim noi la tine:
                Găești, Târgoviște, Titu, A1 și până la 100 km.
              </p>

              <div className="mt-5 grid gap-2.5 sm:mt-8 sm:flex sm:flex-wrap sm:gap-3">
                <Btn href={`tel:${TEL}`} className="vm-callfx vm-callcta min-h-14 w-full text-base font-bold shadow-glow sm:min-h-0 sm:w-auto sm:text-sm">
                  <Phone className="size-5 sm:size-4" /> <span className="tabular-nums">{PHONE}</span>
                </Btn>
                <div className="grid grid-cols-2 gap-2.5 sm:contents">
                  <Btn href={WA} variant="ghost" className="min-h-13 px-3 sm:min-h-0 sm:px-5">
                    <MessageCircle className="size-4" /> Locația
                  </Btn>
                  <BtnLink to="/contact" variant="ghost" className="min-h-13 px-3 sm:min-h-0 sm:px-5">
                    Cere ofertă
                  </BtnLink>
                </div>
              </div>

              <dl className="mt-5 grid max-w-xl grid-cols-3 gap-2 sm:mt-10 sm:gap-3">
                {[
                  { icon: Clock, k: "< 20 min", v: "timp de răspuns" },
                  { icon: MapPin, k: "100 km", v: "rază acoperire" },
                  { icon: ShieldCheck, k: "Garanție", v: "la fiecare lucrare" },
                ].map((s) => (
                  <div
                    key={s.k}
                    className="rounded-2xl border border-border bg-card/70 p-3 backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-card sm:p-4"
                  >
                    <s.icon className="size-4 text-brand" />
                    <dt className="mt-2.5 text-sm font-extrabold leading-none sm:text-base">{s.k}</dt>
                    <dd className="mt-1.5 text-[11px] leading-snug text-muted-foreground sm:text-xs">{s.v}</dd>
                  </div>
                ))}
              </dl>

            </div>
          </div>
        </div>
      </section>

      {/* Bară urgență */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-10">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <div>
              <p className="text-base font-bold">Ai pană acum?</p>
              <p className="text-sm text-muted-foreground">
                Răspundem 24/7. Trimite locația pe WhatsApp și pornim spre tine.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Btn href={`tel:${TEL}`} className="vm-callfx vm-callcta">
                <Phone className="size-4" /> <span className="tabular-nums">{PHONE}</span>
              </Btn>
              <Btn href={WA} variant="ghost">
                <MessageCircle className="size-4" /> WhatsApp
              </Btn>
            </div>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {zones.slice(0, 4).map((z) => (
              <BtnLink
                key={z.slug}
                to="/zone/$slug"
                params={{ slug: z.slug }}
                variant="ghost"
                className="flex-col items-start rounded-2xl px-4 py-4 text-left"
              >
                <span className="inline-flex items-center gap-2 text-sm font-semibold">
                  <MapPin className="size-4 text-brand" /> {z.short}
                </span>
                <span className="mt-1 text-xs font-normal text-muted-foreground">{z.eta}</span>
              </BtnLink>
            ))}
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

