import { Link } from "react-router-dom";
import catAneis from "@/assets/cat-aneis.jpg";
import catColares from "@/assets/cat-colares.jpg";
import catBrincos from "@/assets/cat-brincos.jpg";

const cats = [
  { name: "Anéis", image: catAneis, to: "/catalogo?category=aneis" },
  { name: "Colares", image: catColares, to: "/catalogo?category=colares" },
  { name: "Brincos", image: catBrincos, to: "/catalogo?category=brincos" },
];

export default function CategoryGrid() {
  return (
    <section className="container py-16 md:py-24">
      <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-8 text-center">
        Categorias
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cats.map((cat) => (
          <Link
            key={cat.name}
            to={cat.to}
            className="group relative overflow-hidden aspect-[3/4]"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
            <span className="absolute bottom-6 left-6 text-lg font-medium tracking-widest uppercase text-primary-foreground">
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
