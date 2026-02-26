import { Link } from "react-router-dom";
import { Search, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { useState } from "react";

const navLinks = [
  { label: "Novidades", to: "/catalogo?filter=new" },
  { label: "Anéis", to: "/catalogo?category=aneis" },
  { label: "Colares", to: "/catalogo?category=colares" },
  { label: "Brincos", to: "/catalogo?category=brincos" },
  { label: "Pulseiras", to: "/catalogo?category=pulseiras" },
  { label: "Promoções", to: "/catalogo?filter=sale" },
];

export default function Header() {
  const totalItems = useCartStore((s) => s.totalItems());
  const openCart = useCartStore((s) => s.openCart);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container flex h-14 items-center justify-between md:h-16">
          <button
            onClick={() => setMobileOpen(true)}
            className="p-2 md:hidden"
            aria-label="Abrir menu"
          >
            <Menu size={22} />
          </button>

          <Link to="/" className="text-lg font-semibold tracking-[0.2em] uppercase md:text-xl">
            Aura Joias
          </Link>

          <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-xs font-medium tracking-widest uppercase text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button className="p-2 hidden md:inline-flex" aria-label="Buscar">
              <Search size={20} />
            </button>

            <button onClick={openCart} className="p-2 relative" aria-label="Carrinho">
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true">
          <div
            className="absolute inset-0 bg-[hsl(var(--overlay))]"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="absolute left-0 top-0 h-full w-72 bg-background p-6 animate-slide-in-right shadow-2xl">
            <div className="flex items-center justify-between mb-10">
              <span className="text-sm font-semibold tracking-[0.2em] uppercase">Menu</span>
              <button onClick={() => setMobileOpen(false)} aria-label="Fechar menu">
                <X size={22} />
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium tracking-widest uppercase text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
