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
          const heroVisualY = isDesktop ? 48 : 24;
          const heroVisualDuration = isDesktop ? 0.9 : 0.65;
          const pipelineNodeStagger = isDesktop ? 0.12 : 0.07;

          /* —— Hero load + parallax —— */
          const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
          const pipelineStatusText = document.querySelector(
            "[data-gsap='pipeline-status-text']"
          );

          if (pipelineStatusText) {
            pipelineStatusText.textContent = "initializing";
          }

          gsap.set("[data-gsap='pipeline-flow']", {
            attr: { x2: 40 },
            opacity: 0,
          });

          heroTl
            .from("[data-gsap='hero-name']", {
              y: isDesktop ? 34 : 22,
              opacity: 0,
              filter: "blur(8px)",
              duration: isDesktop ? 0.8 : 0.6,
              clearProps: "filter",
            })
            .from(
              "[data-gsap='hero-role']",
              {
                y: isDesktop ? 24 : 16,
                opacity: 0,
                duration: isDesktop ? 0.65 : 0.5,
              },
              "-=0.45"
            )
            .from(
              "[data-gsap='hero-rotating-line']",
              {
                y: isDesktop ? 16 : 10,
                opacity: 0,
                duration: isDesktop ? 0.55 : 0.42,
              },
              "-=0.25"
            )
            .from(
              "[data-gsap='hero-visual']",
              {
                y: heroVisualY,
                opacity: 0,
                scale: isDesktop ? 0.94 : 0.98,
                rotateX: isDesktop ? 10 : 0,
                duration: heroVisualDuration,
                ease: "power2.out",
              },
              "-=0.2"
            )
            .to(
              "[data-gsap='pipeline-flow']",
              {
                attr: { x2: 360 },
                opacity: 1,
                duration: isDesktop ? 0.8 : 0.55,
                ease: "power2.inOut",
              },
              "-=0.35"
            )
            .from(
              "[data-gsap='pipeline-node']",
              {
                y: isDesktop ? 18 : 10,
                opacity: 0,
                scale: isDesktop ? 0.86 : 0.92,
                stagger: pipelineNodeStagger,
                duration: isDesktop ? 0.5 : 0.36,
                ease: "back.out(1.35)",
              },
              "-=0.55"
            )
            .to(
              "[data-gsap='pipeline-status-dot']",
              {
                scale: 1.25,
                duration: 0.18,
                yoyo: true,
                repeat: 1,
              },
              "-=0.05"
            )
            .call(() => {
              if (pipelineStatusText) {
                pipelineStatusText.textContent = "running";
              }
            })
            .from(
              "[data-gsap='pipeline-status']",
              {
                opacity: 0.45,
                duration: 0.25,
              },
              "<"
            )
            .from(
              "[data-gsap='pipeline-metric']",
              {
                y: isDesktop ? 16 : 10,
                opacity: 0,
                stagger: isDesktop ? 0.08 : 0.05,
                duration: isDesktop ? 0.45 : 0.32,
              },
              "-=0.2"
            )
            .from(
              "[data-gsap='pipeline-code']",
              {
                y: isDesktop ? 18 : 10,
                opacity: 0,
                duration: isDesktop ? 0.5 : 0.34,
              },
              "-=0.25"
            )
            .from(
              "[data-gsap='hero-pill']",
              {
                y: isDesktop ? 12 : 8,
                opacity: 0,
                stagger: isDesktop ? 0.05 : 0.025,
                duration: isDesktop ? 0.4 : 0.28,
              },
              "-=0.1"
            )
            .from(
              "[data-gsap='hero-cta']",
              {
                y: isDesktop ? 12 : 8,
                opacity: 0,
                stagger: 0.06,
                duration: isDesktop ? 0.45 : 0.32,
              },
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
