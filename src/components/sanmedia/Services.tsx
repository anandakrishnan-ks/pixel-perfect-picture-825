import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imgAds from "@/assets/service-ads.jpg";
import imgBrand from "@/assets/service-brand.jpg";
import imgCorporate from "@/assets/service-corporate.jpg";
import imgProduct from "@/assets/service-product.jpg";
import imgSocial from "@/assets/service-social.jpg";
import imgCampaign from "@/assets/service-campaign.jpg";
import { registerGsap, reducedMotion } from "./anim";

const SERVICES = [
  { n: "01", title: "ADVERTISING FILMS", desc: "Spots built to move markets.", img: imgAds },
  { n: "02", title: "BRAND FILMS", desc: "Identity, told in motion.", img: imgBrand },
  { n: "03", title: "CORPORATE FILMS", desc: "Companies, filmed with cinema's eye.", img: imgCorporate },
  { n: "04", title: "PRODUCT FILMS", desc: "Objects lit like protagonists.", img: imgProduct },
  { n: "05", title: "SOCIAL CONTENT", desc: "Short-form, cut with intent.", img: imgSocial },
  { n: "06", title: "CINEMATIC CAMPAIGNS", desc: "Full-scale stories across screens.", img: imgCampaign },
];

export function Services() {
  const wrapRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imgRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap || reducedMotion()) return;
    registerGsap();

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrap,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.7,
        },
      });

      SERVICES.forEach((_, i) => {
        if (i === 0) {
          gsap.set(itemRefs.current[0], { opacity: 1 });
          gsap.set(imgRefs.current[0], { opacity: 1 });
          gsap.set(itemRefs.current.slice(1), { opacity: 0.18 });
          gsap.set(imgRefs.current.slice(1), { opacity: 0 });
          return;
        }
        tl.to(imgRefs.current[i - 1], { opacity: 0, duration: 0.3, ease: "none" }, i - 0.2)
          .to(itemRefs.current[i - 1], { opacity: 0.18, duration: 0.2, ease: "none" }, i - 0.2)
          .to(imgRefs.current[i], { opacity: 1, duration: 0.35, ease: "none" }, i)
          .to(itemRefs.current[i], { opacity: 1, duration: 0.2, ease: "none" }, i);
      });
    }, wrap);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={wrapRef} id="services" className="relative h-[560vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-background">
        {/* Background imagery per service */}
        {SERVICES.map((s, i) => (
          <div
            key={s.n}
            ref={(el) => {
              imgRefs.current[i] = el;
            }}
            className="grain vignette absolute inset-0 will-change-opacity"
          >
            <img
              src={s.img}
              alt={s.title}
              loading="lazy"
              width={1536}
              height={1024}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-background/62" />
          </div>
        ))}

        <div className="relative z-10 flex h-full flex-col justify-center">
          <div className="mx-auto w-full max-w-[1500px] px-6 lg:px-12">
            <p className="meta mb-8 text-foreground/60">What we make</p>
            <div className="flex flex-col gap-2 md:gap-3">
              {SERVICES.map((s, i) => (
                <div
                  key={s.n}
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  className="flex items-baseline gap-5 border-b border-hairline pb-2 md:gap-10 md:pb-4"
                >
                  <span className="meta shrink-0 text-foreground/50">{s.n}</span>
                  <h3 className="display text-[7.5vw] leading-none text-foreground md:text-[4.6vw] lg:text-[3.8vw]">
                    {s.title}
                  </h3>
                  <span className="ml-auto hidden shrink-0 text-sm font-light text-foreground/60 md:block">
                    {s.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
