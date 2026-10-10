import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";

import { UsedTiresStock } from "@/components/site/UsedTiresStock";
import { PriceHighlight } from "@/components/site/PriceHighlight";
import { Btn } from "@/components/site/ui";
import { ADDRESS, MAPS, PHONE, TEL } from "@/lib/site-data";

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

function AnvelopeSH() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-5 pb-10 pt-10 md:pt-14">
        <p className="text-xs font-black uppercase tracking-widest text-brand">Anvelope second hand</p>
        <h1 className="mt-3 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl">
          Anvelope <span className="text-brand">SH</span> în Dragodana
        </h1>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Stoc la atelier, sortat pe dimensiuni. Alegi anvelopele, le montăm și echilibrăm pe loc — non-stop, 24/24.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Btn href={`tel:${TEL}`} className="vm-callfx vm-callcta">
            <Phone className="size-4" /> <span className="tabular-nums">{PHONE}</span>
          </Btn>
          <Btn href={MAPS} variant="ghost">
            <MapPin className="size-4" /> {ADDRESS}
          </Btn>
        </div>
      </section>
      <UsedTiresStock />
      <PriceHighlight />
    </main>
  );
}
