"use client";

import { useGSAP } from "@gsap/react";
import { registerGsapPlugins, gsap, ScrollTrigger } from "@/lib/gsap-config";

registerGsapPlugins();
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function GsapScrollAnimations() {
  const reducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      document.documentElement.classList.add("gsap-ready");

      if (reducedMotion) {
        gsap.set("[data-gsap]", { clearProps: "all" });
        return;
      }

      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 768px)",
          isMobile: "(max-width: 767px)",
        },
        (ctx) => {
          const { isDesktop } = ctx.conditions as { isDesktop: boolean };

          const revealY = isDesktop ? 56 : 32;
          const revealDuration = isDesktop ? 1 : 0.7;

          /* —— Hero load + parallax —— */
          const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
          heroTl
            .from("[data-gsap='hero-title']", { y: 36, opacity: 0, duration: 0.8 })
            .from(
              "[data-gsap='hero-visual']",
              {
                y: 48,
                opacity: 0,
                scale: 0.92,
                rotateX: 12,
                duration: 1,
                ease: "power2.out",
              },
              "-=0.4"
            )
            .from(
              "[data-gsap='hero-pill']",
              { y: 12, opacity: 0, stagger: 0.05, duration: 0.4 },
              "-=0.35"
            )
            .from(
              "[data-gsap='hero-cta']",
              { y: 12, opacity: 0, stagger: 0.06, duration: 0.45 },
              "-=0.3"
            );

          if (isDesktop) {
            gsap.to("[data-gsap='hero-content']", {
              y: 24,
              ease: "none",
              scrollTrigger: {
                trigger: "[data-gsap='hero']",
                start: "top top",
                end: "bottom top",
                scrub: 0.8,
              },
            });
          }

          /* —— Section headings —— */
          gsap.utils.toArray<HTMLElement>("[data-gsap='section-heading']").forEach((heading) => {
            const label = heading.querySelector("[data-gsap='heading-label']");
            const title = heading.querySelector("[data-gsap='heading-title']");
            const desc = heading.querySelector("[data-gsap='heading-desc']");

            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: heading,
                start: "top 82%",
                once: true,
              },
            });

            if (label) {
              tl.from(label, {
                y: 20,
                opacity: 0,
                duration: 0.55,
                ease: "power3.out",
              });
            }
            if (title) {
              tl.from(
                title,
                {
                  y: revealY,
                  opacity: 0,
                  duration: revealDuration,
                  ease: "power3.out",
                },
                "-=0.35"
              );
            }
            if (desc) {
              tl.from(
                desc,
                {
                  y: 24,
                  opacity: 0,
                  duration: 0.6,
                  ease: "power2.out",
                },
                "-=0.5"
              );
            }
          });

          /* —— Reveal cards (batch for perf) —— */
          ScrollTrigger.batch("[data-gsap='reveal']", {
            start: "top 88%",
            once: true,
            onEnter: (batch) => {
              gsap.from(batch, {
                y: revealY,
                opacity: 0,
                duration: revealDuration,
                stagger: isDesktop ? 0.12 : 0.08,
                ease: "power3.out",
                overwrite: "auto",
              });
            },
          });

          /* —— About: summary + focus cards (sequential, no batch overlap) —— */
          const aboutSummary = document.querySelector(
            "[data-gsap='about-summary']"
          );
          if (aboutSummary) {
            gsap.from(aboutSummary, {
              y: revealY,
              opacity: 0,
              duration: revealDuration,
              ease: "power3.out",
              scrollTrigger: {
                trigger: aboutSummary,
                start: "top 88%",
                once: true,
              },
            });
          }

          gsap.utils
            .toArray<HTMLElement>("[data-gsap='about-focus']")
            .forEach((card, i) => {
              gsap.from(card, {
                y: isDesktop ? 32 : 24,
                opacity: 0,
                duration: revealDuration,
                delay: i * 0.1,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: card,
                  start: "top 92%",
                  once: true,
                },
              });
            });

          /* —— Experience timeline —— */
          const line = document.querySelector("[data-gsap='timeline-line']");
          if (line && isDesktop) {
            gsap.from(line, {
              scaleY: 0,
              transformOrigin: "top center",
              duration: 1.2,
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: "[data-gsap='experience-list']",
                start: "top 70%",
                once: true,
              },
            });
          }

          /* —— Projects: cinematic on desktop, simple on mobile —— */
          gsap.utils
            .toArray<HTMLElement>("[data-gsap='project-card']")
            .forEach((card) => {
              gsap.from(card, {
                y: isDesktop ? 48 : 28,
                opacity: 0,
                duration: isDesktop ? 0.9 : 0.65,
                ease: "power3.out",
                rotationX: isDesktop ? 6 : 0,
                transformPerspective: isDesktop ? 800 : undefined,
                transformOrigin: "center top",
                scrollTrigger: {
                  trigger: card,
                  start: "top 88%",
                  once: true,
                },
              });
            });

          /* —— Contact CTA glow scrub —— */
          const contactGlow = document.querySelector("[data-gsap='contact-glow']");
          if (contactGlow && isDesktop) {
            gsap.to(contactGlow, {
              opacity: 0.9,
              scale: 1.15,
              ease: "none",
              scrollTrigger: {
                trigger: "[data-gsap='contact']",
                start: "top 60%",
                end: "center center",
                scrub: 1,
              },
            });
          }
        }
      );

      requestAnimationFrame(() => ScrollTrigger.refresh());

      return () => {
        mm.revert();
        document.documentElement.classList.remove("gsap-ready");
      };
    },
    { dependencies: [reducedMotion], revertOnUpdate: true }
  );

  return null;
}
