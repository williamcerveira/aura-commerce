import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-jewelry.jpg";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[70vh] md:h-[85vh]">
        <img
          src={heroImage}
          alt="Coleção de Joias"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-16">
          <div className="container">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-foreground/80 mb-3">
              Coleção Exclusiva
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground max-w-lg">
              Joias que contam sua história
            </h1>
            <Link
              to="/catalogo"
              className="mt-6 inline-block bg-primary text-primary-foreground px-8 py-3.5 text-xs font-semibold tracking-[0.2em] uppercase transition-opacity hover:opacity-90"
            >
              Explorar Coleção
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
