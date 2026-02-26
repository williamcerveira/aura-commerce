import { X, Minus, Plus, Trash2, MessageCircle } from "lucide-react";
import { useCartStore } from "@/store/cart";

const WHATSAPP_PHONE = "5511999999999"; // Altere para o número da joalheria

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal, getWhatsAppLink } = useCartStore();

  if (!isOpen) return null;

  const formatPrice = (v: number) =>
    v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  const handleCheckout = () => {
    const link = getWhatsAppLink(WHATSAPP_PHONE);
    window.open(link, "_blank");
  };

  return (
    <div className="fixed inset-0 z-[70]" role="dialog" aria-modal="true" aria-label="Carrinho">
      <div className="absolute inset-0 bg-[hsl(var(--overlay))]" onClick={closeCart} />
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-background shadow-2xl animate-slide-in-right flex flex-col">
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <h2 className="text-sm font-semibold tracking-[0.15em] uppercase">
            Carrinho ({items.reduce((s, i) => s + i.quantity, 0)})
          </h2>
          <button onClick={closeCart} aria-label="Fechar carrinho">
            <X size={22} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <p className="text-center text-muted-foreground text-sm mt-20">
              Seu carrinho está vazio.
            </p>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={`${item.productId}-${item.size}-${item.color}`} className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-28 w-20 object-cover bg-secondary"
                  />
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <p className="text-sm font-medium leading-tight">{item.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {item.size} · {item.color}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-border">
                        <button
                          onClick={() =>
                            updateQuantity(item.productId, item.size, item.color, item.quantity - 1)
                          }
                          className="px-2 py-1"
                          aria-label="Diminuir quantidade"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.productId, item.size, item.color, item.quantity + 1)
                          }
                          className="px-2 py-1"
                          aria-label="Aumentar quantidade"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <span className="text-sm font-medium">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.productId, item.size, item.color)}
                    className="self-start p-1 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Remover item"
                  >
                    <Trash2 size={16} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium uppercase tracking-wider">Subtotal</span>
              <span className="text-base font-semibold">{formatPrice(subtotal())}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-[hsl(142_70%_35%)] text-primary-foreground py-3.5 text-sm font-semibold tracking-widest uppercase transition-opacity hover:opacity-90 flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} />
              Finalizar pelo WhatsApp
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
