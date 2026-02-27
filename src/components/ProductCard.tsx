import { Link } from "react-router-dom";
import type { Product } from "@/data/products";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const hasSecondImage = product.images.length > 1;

  const formatPrice = (v: number) =>
    v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  return (
    <article className="group relative">
      <Link
        to={`/produto/${product.id}`}
        className="block overflow-hidden bg-secondary relative"
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className={`aspect-square w-full object-cover transition-opacity duration-500 ${hasSecondImage ? "group-hover:opacity-0" : "group-hover:scale-105 transition-transform"
            }`}
          loading="lazy"
        />
        {hasSecondImage && (
          <img
            src={product.images[1]}
            alt={`${product.name} - foto 2`}
            className="absolute inset-0 aspect-square w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            loading="lazy"
          />
        )}
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] font-semibold tracking-widest uppercase px-2 py-1 z-10">
            Novo
          </span>
        )}
        {product.isSale && (
          <span className="absolute top-3 left-3 bg-sale text-sale-foreground text-[10px] font-semibold tracking-widest uppercase px-2 py-1 z-10">
            Promo
          </span>
        )}
      </Link>
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
