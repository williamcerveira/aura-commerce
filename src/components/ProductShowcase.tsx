import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductShowcase() {
  const featured = products.slice(0, 8);

  return (
    <section className="container py-16 md:py-24">
      <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-8 text-center">
        Destaques
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">
        {featured.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
