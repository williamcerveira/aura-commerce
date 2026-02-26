import { Link } from "react-router-dom";
import heroImage1 from "@/assets/hero-jewelry.jpg";
import heroImage2 from "@/assets/hero-autumn.jpg";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    image: heroImage1,
    subtitle: "Coleção Exclusiva",
    title: "Joias que contam sua história",
    cta: "Explorar Coleção",
    link: "/catalogo",
  },
  {
    image: heroImage2,
    subtitle: "Novidades",
    title: "Brilho que transforma momentos",
    cta: "Ver Novidades",
    link: "/catalogo?categoria=colares",
  },
  {
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1200&q=80",
    subtitle: "Edição Limitada",
    title: "Elegância em cada detalhe",
    cta: "Descobrir",
    link: "/catalogo?categoria=aneis",
  },
];

export default function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative w-full overflow-hidden">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {slides.map((slide, i) => (
            <div key={i} className="relative h-[70vh] md:h-[85vh] min-w-0 shrink-0 grow-0 basis-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-16">
                <div className="container">
                  <p className="text-xs font-medium tracking-[0.3em] uppercase text-foreground/80 mb-3">
                    {slide.subtitle}
                  </p>
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground max-w-lg">
                    {slide.title}
                  </h1>
                  <Link
                    to={slide.link}
                    className="mt-6 inline-block bg-primary text-primary-foreground px-8 py-3.5 text-xs font-semibold tracking-[0.2em] uppercase transition-opacity hover:opacity-90"
                  >
                    {slide.cta}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === selectedIndex ? "w-8 bg-foreground" : "w-1.5 bg-foreground/40"
            }`}
            aria-label={`Ir para slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
