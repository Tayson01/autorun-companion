import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Phone, Menu, X, MessageCircle, ChevronRight } from "lucide-react";

import logo from "@/assets/autorun-logo.png";
import logoDark from "@/assets/autorun-logo-dark.png";

import { ThemeToggle } from "@/components/site/ThemeToggle";
import { PHONE, TEL, WA } from "@/lib/site-data";

const nav = [
  { to: "/", label: "Acasă" },
  { to: "/servicii", label: "Servicii" },
  { to: "/zone", label: "Zone deservite" },
  { to: "/intrebari-frecvente", label: "Întrebări" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled ? "border-border bg-background/90 backdrop-blur-md" : "border-transparent bg-background"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-4 sm:px-5">
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <img src={logo} alt="Vulcanizare Autorun" width={1060} height={260} className="h-auto w-28 shrink-0 sm:w-52 dark:hidden" /><img src={logoDark} alt="Vulcanizare Autorun" width={1060} height={260} className="h-auto w-28 shrink-0 sm:w-52 hidden dark:block" />
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-foreground font-semibold" }}
              className="transition-colors hover:text-foreground"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden sm:flex" />

          <a
            href={`tel:${TEL}`}
            className="vm-callfx vm-callcta inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-brand px-3.5 text-sm font-bold text-brand-foreground transition-all hover:brightness-110 active:scale-95 sm:px-4"
          >
            <Phone className="size-4 shrink-0" />
                <span className="hidden tabular-nums min-[340px]:inline">{PHONE}</span>
            <span className="sr-only sm:hidden">Sună</span>
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Meniu"
            aria-expanded={open}
            className="flex size-11 items-center justify-center rounded-xl border border-border bg-card active:scale-95 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-x-0 bottom-0 top-16 z-50 lg:hidden">
          <button
            aria-label="Închide meniul"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
          />
          <nav className="animate-rise absolute inset-x-0 top-0 max-h-full overflow-y-auto border-b border-border bg-background px-4 pb-6 pt-3 shadow-float">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "!text-brand !border-brand/40 !bg-brand-soft" }}
                className="mb-2 flex min-h-14 items-center justify-between rounded-2xl border border-border bg-card px-4 text-base font-semibold text-foreground active:scale-[0.99]"
              >
                {n.label}
                <ChevronRight className="size-4 text-muted-foreground" />
              </Link>
            ))}
            <div className="mt-4 grid grid-cols-2 gap-2">
              <a
                href={`tel:${TEL}`}
                className="vm-callfx vm-callcta flex min-h-13 items-center justify-center gap-2 rounded-2xl bg-brand text-sm font-bold text-brand-foreground"
              >
                <Phone className="size-4 shrink-0" />
                <span className="tabular-nums">{PHONE}</span>
              </a>
              <a
                href={WA}
                className="flex min-h-13 items-center justify-center gap-2 rounded-2xl border border-border bg-card text-sm font-semibold"
              >
                <MessageCircle className="size-4 text-brand" /> WhatsApp
              </a>
            </div>
            <div className="mt-3 flex items-center justify-between rounded-2xl border border-border bg-card px-4 py-3">
              <span className="text-sm font-semibold text-muted-foreground">Mod întunecat</span>
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
