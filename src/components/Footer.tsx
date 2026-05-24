export function Footer() {
  return (
    <footer data-gsap="reveal" className="border-t border-white/5 py-6 sm:py-8">
      <div className="container-main flex flex-col items-center justify-between gap-3 text-center text-sm text-zinc-500 sm:flex-row sm:gap-4 sm:text-left">
        <p>© {new Date().getFullYear()} Harsh Chaudhary</p>
        <p className="font-mono text-xs">
          Next.js · Tailwind · Lenis · GSAP
        </p>
      </div>
    </footer>
  );
}
