import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";

const materialOptions = ["Ouro 18k", "Ouro Branco", "Ouro Rosé", "Prata 925"];
const colorOptions = [
  { name: "Ouro 18k", hex: "#d4a843" },
  { name: "Ouro Branco", hex: "#c0c0c0" },
  { name: "Ouro Rosé", hex: "#b76e79" },
];

type SortOption = "recent" | "price-asc" | "price-desc";

export default function Catalog() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const filter = searchParams.get("filter");

  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [sort, setSort] = useState<SortOption>("recent");

  const toggleColor = (c: string) =>
    setSelectedColors((prev) => (prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]));

  const filtered = useMemo(() => {
    let list = [...products];

    if (category) list = list.filter((p) => p.category === category);
    if (filter === "new") list = list.filter((p) => p.isNew);
    if (filter === "sale") list = list.filter((p) => p.isSale);

    if (selectedColors.length)
      list = list.filter((p) => p.colors.some((c) => selectedColors.includes(c.name)));

    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);

    return list;
  }, [category, filter, selectedColors, sort]);

  const title = category
    ? categories.find((c) => c.slug === category)?.name || "Catálogo"
    : filter === "new"
      ? "Novidades"
      : filter === "sale"
        ? "Promoções"
        : "Todas as Joias";

  return (
    <main className="min-h-screen">
      <div className="container py-6">
        <nav className="text-xs text-muted-foreground mb-6" aria-label="Breadcrumb">
          <a href="/" className="hover:text-foreground transition-colors">Home</a>
          <span className="mx-2">/</span>
          <span className="text-foreground">{title}</span>
        </nav>

        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl md:text-3xl font-light tracking-tight">{title}</h1>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="appearance-none bg-transparent border border-border px-4 py-2 pr-8 text-xs tracking-wider uppercase cursor-pointer focus:outline-none focus:ring-1 focus:ring-ring"
              >
                <option value="recent">Mais Recentes</option>
                <option value="price-asc">Menor Preço</option>
                <option value="price-desc">Maior Preço</option>
              </select>
              <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground" />
            </div>
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="flex items-center gap-2 border border-border px-4 py-2 text-xs tracking-wider uppercase md:hidden"
            >
              <SlidersHorizontal size={14} />
              Filtros
            </button>
          </div>
        </div>

        <div className="flex gap-10">
          <aside className="hidden md:block w-56 shrink-0 space-y-8">
            <div>
              <h3 className="text-xs font-semibold tracking-[0.15em] uppercase mb-4">Categoria</h3>
              <div className="flex flex-col gap-2">
                {categories.map((c) => (
                  <a
                    key={c.slug}
                    href={`/catalogo?category=${c.slug}`}
                    className={`text-sm transition-colors ${
                      category === c.slug ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {c.name}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs font-semibold tracking-[0.15em] uppercase mb-4">Metal</h3>
              <div className="flex flex-wrap gap-3">
                {colorOptions.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => toggleColor(c.name)}
                    className={`w-7 h-7 rounded-full border-2 transition-all ${
                      selectedColors.includes(c.name) ? "border-foreground scale-110" : "border-border"
                    }`}
                    style={{ backgroundColor: c.hex }}
                    aria-label={c.name}
                    title={c.name}
                  />
                ))}
              </div>
            </div>
          </aside>

          <div className="flex-1">
            <p className="text-xs text-muted-foreground mb-6">
              {filtered.length} {filtered.length === 1 ? "peça" : "peças"}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
            {filtered.length === 0 && (
              <p className="text-center text-muted-foreground mt-20">
                Nenhuma peça encontrada.
              </p>
            )}
          </div>
        </div>
      </div>

      {filtersOpen && (
        <div className="fixed inset-0 z-[60] md:hidden" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-[hsl(var(--overlay))]" onClick={() => setFiltersOpen(false)} />
          <div className="absolute bottom-0 left-0 right-0 bg-background p-6 rounded-t-xl max-h-[70vh] overflow-y-auto animate-slide-in-right">
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-semibold tracking-[0.15em] uppercase">Filtros</span>
              <button onClick={() => setFiltersOpen(false)}><X size={22} /></button>
            </div>

            <div className="mb-6">
              <h3 className="text-xs font-semibold tracking-[0.15em] uppercase mb-3">Ordenar</h3>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="w-full border border-border px-4 py-2.5 text-sm bg-background focus:outline-none"
              >
                <option value="recent">Mais Recentes</option>
                <option value="price-asc">Menor Preço</option>
                <option value="price-desc">Maior Preço</option>
              </select>
            </div>

            <div className="mb-6">
              <h3 className="text-xs font-semibold tracking-[0.15em] uppercase mb-3">Metal</h3>
              <div className="flex flex-wrap gap-3">
                {colorOptions.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => toggleColor(c.name)}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                      selectedColors.includes(c.name) ? "border-foreground scale-110" : "border-border"
                    }`}
                    style={{ backgroundColor: c.hex }}
                    aria-label={c.name}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={() => setFiltersOpen(false)}
              className="w-full bg-primary text-primary-foreground py-3 text-sm font-semibold tracking-widest uppercase"
            >
              Aplicar Filtros
            </button>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
