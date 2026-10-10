import { Camera, ExternalLink, Quote, Star } from "lucide-react";

import photo02 from "@/assets/gallery/interventie-02.jpg";
import photo03 from "@/assets/gallery/interventie-03.jpg";
import photo04 from "@/assets/gallery/interventie-04.jpg";
import photo05 from "@/assets/gallery/interventie-05.jpg";
import photo06 from "@/assets/gallery/interventie-06.jpg";
import photo07 from "@/assets/gallery/interventie-07.jpg";
import photo08 from "@/assets/gallery/interventie-08.jpg";
import photo09 from "@/assets/gallery/interventie-09.jpg";
import photo10 from "@/assets/gallery/interventie-10.jpg";
import { MAPS } from "@/lib/site-data";
import { SectionLabel } from "@/components/site/ui";

const photos = [
  { src: photo02, alt: "Schimb de roată efectuat la client" },
  { src: photo03, alt: "Intervenție Dragodana la un autoturism albastru" },
  { src: photo04, alt: "Intervenție de vulcanizare la o dubă" },
  { src: photo05, alt: "Duba Dragodana la o intervenție de noapte" },
  { src: photo06, alt: "Schimb de roată în parcarea clientului" },
  { src: photo07, alt: "Intervenție de vulcanizare pe autostradă" },
  { src: photo08, alt: "Reparație de roată direct în oraș" },
  { src: photo09, alt: "Asistență auto pentru pornirea unei mașini" },
  { src: photo10, alt: "Reparație auto efectuată la locația clientului" },
];

const reviews = [
  {
    text: "Servicii de calitate. Recomand cu încredere!",
    date: "19 martie 2026",
  },
  {
    text: "Am avut un prezon stricat și m-au rezolvat în mijlocul drumului. Mulțumesc și recomand cu încredere!",
    date: "2 ianuarie 2026",
  },
  {
    text: "Super rapid și eficient, calitate. Recomand!",
    date: "29 decembrie 2025",
  },
];

export function InterventionsGallery() {
  return (
    <section id="galerie" className="bg-surface py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>Galerie · Intervenții reale</SectionLabel>
            <h2 className="mt-3 max-w-2xl text-3xl font-extrabold sm:text-4xl">
              Poze reale din intervențiile noastre.
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              Imagini din teren, cu duba noastră și lucrări făcute direct la client, pe autostradă sau în oraș.
            </p>
          </div>
          <a
            href={MAPS}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold transition-colors hover:bg-background"
          >
            <Camera className="size-4 text-brand" /> Vezi profilul Google <ExternalLink className="size-3.5" />
          </a>
        </div>

        <div className="mt-9 grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {photos.map((photo, index) => (
            <a
              key={photo.src}
              href={MAPS}
              target="_blank"
              rel="noreferrer"
              className={`group relative overflow-hidden rounded-lg bg-card shadow-card ${
                index === 0 ? "col-span-2 aspect-[16/9] sm:row-span-2 sm:aspect-auto" : "aspect-[4/5]"
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                width={1600}
                height={index === 2 || index === 3 || index === 7 ? 1200 : 2133}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <span className="sr-only">Deschide fotografiile în Google Maps</span>
            </a>
          ))}
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          Fotografii publicate pe profilul Google Maps Vulcanizare Mobila Constanta.
        </p>

        <div className="mt-10 border-t border-border pt-8 sm:mt-12 sm:pt-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="flex gap-0.5 text-brand" aria-label="5 stele din 5">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="size-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <span className="text-sm font-extrabold">4,9 din 5</span>
              </div>
              <h3 className="mt-2 text-xl font-extrabold sm:text-2xl">Spus de clienții noștri</h3>
              <p className="mt-1 text-sm text-muted-foreground">Recenzii publice de pe Google Maps.</p>
            </div>
            <a
              href={MAPS}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand transition-opacity hover:opacity-75"
            >
              Vezi toate recenziile <ExternalLink className="size-3.5" />
            </a>
          </div>

          <div className="mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0">
            {reviews.map((review) => (
              <figure
                key={review.text}
                className="min-w-[82%] snap-start rounded-lg border border-border bg-card p-5 shadow-card sm:min-w-0"
              >
                <Quote className="size-5 text-brand" aria-hidden="true" />
                <blockquote className="mt-3 text-sm font-medium leading-relaxed">„{review.text}”</blockquote>
                <figcaption className="mt-4 text-xs text-muted-foreground">Recenzie Google · {review.date}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}