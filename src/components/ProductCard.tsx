import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import type { Product } from "@/data/products";
import { useWishlistStore } from "@/store/wishlist";
import { useState } from "react";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { toggle, has } = useWishlistStore();
  const isFav = has(product.id);
  const [hovered, setHovered] = useState(false);

  const formatPrice = (v: number) =>
    v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  const displayImage =
    hovered && product.images.length > 1 ? product.images[1] : product.images[0];

  return (
    <article className="group relative">
      <Link
        to={`/produto/${product.id}`}
        className="block overflow-hidden bg-secondary"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={displayImage}
          alt={product.name}
          className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] font-semibold tracking-widest uppercase px-2 py-1">
            Novo
          </span>
        )}
        {product.isSale && (
          <span className="absolute top-3 left-3 bg-sale text-sale-foreground text-[10px] font-semibold tracking-widest uppercase px-2 py-1">
            Promo
          </span>
        )}
      </Link>
      <button
        onClick={() => toggle(product.id)}
        className="absolute top-3 right-3 p-1.5 bg-background/80 backdrop-blur-sm transition-colors"
        aria-label={isFav ? "Remover dos favoritos" : "Adicionar aos favoritos"}
      >
        <Heart size={16} fill={isFav ? "currentColor" : "none"} />
      </button>
      <div className="mt-3 space-y-1">
        <Link to={`/produto/${product.id}`}>
          <h3 className="text-sm font-medium leading-tight">{product.name}</h3>
        </Link>
        <p className="text-xs text-muted-foreground">{product.material}</p>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-xs text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
