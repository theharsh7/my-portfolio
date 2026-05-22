"use client";

import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLenis } from "@/context/LenisContext";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lenis, scrollTo } = useLenis();

  useEffect(() => {
    const onScroll = () => setScrolled((lenis?.scroll ?? window.scrollY) > 24);
    onScroll();
    if (lenis) {
      lenis.on("scroll", onScroll);
      return () => lenis.off("scroll", onScroll);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lenis]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    scrollTo(href, { offset: -72 });
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-[background,border] duration-500 ${
        scrolled || open
          ? "border-b border-white/5 bg-[#050508]/90 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="container-main flex h-14 items-center justify-between sm:h-16">
        <a
          href="#"
          onClick={(e) => handleNav(e, "#")}
          className="text-sm font-semibold tracking-tight text-zinc-100"
        >
          DE<span className="text-gradient-accent">.</span>
        </a>

        <ul className="hidden items-center gap-6 md:flex lg:gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#contact"
            onClick={(e) => handleNav(e, "#contact")}
            className="hidden rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition-[filter,box-shadow] hover:shadow-blue-500/40 hover:brightness-110 sm:inline-flex"
          >
            Get in touch
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-zinc-300 md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <motion.div
        initial={false}
        animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden border-t border-white/5 md:hidden"
        data-lenis-prevent
      >
        <ul className="container-main flex flex-col gap-1 py-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="flex min-h-[48px] items-center text-base text-zinc-300"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              onClick={(e) => handleNav(e, "#contact")}
              className="flex min-h-[48px] items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-sm font-medium text-white"
            >
              Get in touch
            </a>
          </li>
        </ul>
      </motion.div>
    </motion.header>
  );
}
