import logo from "@/assets/autorun-logo.png";
import logoDark from "@/assets/autorun-logo-dark.png";
import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, MapPin } from "lucide-react";

import { PHONE, TEL, ADDRESS, WA, services, zones } from "@/lib/site-data";

export function Footer() {
  return (
    <>
      <footer className="border-t border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" aria-label="Vulcanizare Dragodana"><img src={logo} alt="Vulcanizare Dragodana" width={1060} height={260} className="h-auto w-56 dark:hidden" /><img src={logoDark} alt="Vulcanizare Dragodana" width={1060} height={260} className="h-auto w-56 hidden dark:block" /></Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Servicii mobile de vulcanizare în Constanța și pe litoral, disponibili 24/7.
            </p>
            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              <p className="inline-flex items-center gap-2"><MapPin className="size-4 text-brand" /> {ADDRESS}</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold">Servicii</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to="/servicii/$slug" params={{ slug: s.slug }} className="hover:text-foreground">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold">Zone deservite</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {zones.map((z) => (
                <li key={z.slug}>
                  <Link to="/zone/$slug" params={{ slug: z.slug }} className="hover:text-foreground">
                    {z.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/intrebari-frecvente" className="hover:text-foreground">
                  Întrebări frecvente
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href={`tel:${TEL}`} className="inline-flex items-center gap-2 font-semibold tabular-nums hover:text-foreground">
                  <Phone className="size-4 text-brand" /> {PHONE}
                </a>
              </li>
              <li>
                <a href={WA} className="inline-flex items-center gap-2 hover:text-foreground">
                  <MessageCircle className="size-4 text-brand" /> WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border">
          <p className="mx-auto max-w-6xl px-5 py-6 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Vulcanizare Dragodana. Toate drepturile rezervate.
          </p>
        </div>
      </footer>


      <a
        href={WA}
        aria-label="Scrie-ne pe WhatsApp"
        className="fixed bottom-6 right-6 z-50 hidden size-14 items-center justify-center rounded-full bg-success text-brand-foreground shadow-float transition-transform hover:scale-105 md:flex"
      >
        <MessageCircle className="size-6" />
      </a>
      <div className="h-24 lg:hidden" />
    </>
  );
}
