import { useParams, Link } from "react-router-dom";
import { getProductById } from "@/data/products";
import { useCartStore } from "@/store/cart";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Footer from "@/components/Footer";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");
  const addItem = useCartStore((s) => s.addItem);
  const openCart = useCartStore((s) => s.openCart);


  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <p className="text-muted-foreground">Peça não encontrada.</p>
        <Link to="/catalogo" className="underline text-sm mt-4 inline-block">
          Voltar ao catálogo
        </Link>
      </div>
    );
  }

  const formatPrice = (v: number) =>
    v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) return;
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
      color: selectedColor,
    });
    openCart();
  };



  const accordions = [
    { key: "desc", label: "Detalhes da Peça", content: product.details },
    { key: "comp", label: "Composição e Certificação", content: product.composition },
    {
      key: "ship",
      label: "Entrega e Garantia",
      content:
        "Entrega segura com seguro total. Garantia permanente contra defeitos de fabricação. Primeira limpeza e polimento gratuitos.",
    },
  ];

  return (
    <main className="min-h-screen">
      <div className="container py-6">
        <nav className="text-xs text-muted-foreground mb-6" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/catalogo" className="hover:text-foreground transition-colors">Catálogo</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <div className="space-y-3">
            <div className="overflow-hidden bg-secondary">
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="aspect-square w-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`w-20 aspect-square overflow-hidden border-2 transition-colors ${activeImage === i ? "border-foreground" : "border-transparent"
                      }`}
                  >
                    <img src={img} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-xs text-muted-foreground tracking-widest uppercase mb-1">
                {product.material}
              </p>
              <h1 className="text-2xl md:text-3xl font-light tracking-tight">{product.name}</h1>
              <div className="flex items-center gap-3 mt-2">
                <span className="text-lg font-medium">{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div>
              <h3 className="text-xs font-semibold tracking-[0.15em] uppercase mb-3">
                Metal{selectedColor ? `: ${selectedColor}` : ""}
              </h3>
              <div className="flex gap-3">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c.name)}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${selectedColor === c.name ? "border-foreground scale-110" : "border-border"
                      }`}
                    style={{ backgroundColor: c.hex }}
                    aria-label={c.name}
                    title={c.name}
                  />
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-semibold tracking-[0.15em] uppercase">
                  {product.category === "aneis" ? "Tamanho do Aro" : "Tamanho"}
                </h3>
                {product.category === "aneis" && (
                  <button className="text-xs text-muted-foreground underline">Guia de medidas</button>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`min-w-[3rem] border px-4 py-2.5 text-xs tracking-wider transition-colors ${selectedSize === s
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border hover:border-foreground"
                      }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={handleAddToCart}
                disabled={!selectedSize || !selectedColor}
                className="w-full bg-primary text-primary-foreground py-3.5 text-sm font-semibold tracking-[0.2em] uppercase transition-opacity hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Adicionar ao Carrinho
              </button>
            </div>

            <div className="border-t border-border pt-6 space-y-0">
              {accordions.map((acc) => (
                <div key={acc.key} className="border-b border-border">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.key ? null : acc.key)}
                    className="flex items-center justify-between w-full py-4 text-sm font-medium"
                    aria-expanded={openAccordion === acc.key}
                  >
                    <span>{acc.label}</span>
                    {openAccordion === acc.key ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </button>
                  {openAccordion === acc.key && (
                    <div className="pb-4 text-sm text-muted-foreground leading-relaxed animate-fade-in">
                      {acc.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
