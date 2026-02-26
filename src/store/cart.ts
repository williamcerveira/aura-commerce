import { create } from "zustand";

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (productId: string, size: string, color: string) => void;
  updateQuantity: (productId: string, size: string, color: string, quantity: number) => void;
  totalItems: () => number;
  subtotal: () => number;
  clearCart: () => void;
  getWhatsAppLink: (phone: string) => string;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  isOpen: false,
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  toggleCart: () => set((s) => ({ isOpen: !s.isOpen })),

  addItem: (item) =>
    set((state) => {
      const existing = state.items.find(
        (i) => i.productId === item.productId && i.size === item.size && i.color === item.color
      );
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.productId === item.productId && i.size === item.size && i.color === item.color
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      }
      return { items: [...state.items, { ...item, quantity: 1 }] };
    }),

  removeItem: (productId, size, color) =>
    set((state) => ({
      items: state.items.filter(
        (i) => !(i.productId === productId && i.size === size && i.color === color)
      ),
    })),

  updateQuantity: (productId, size, color, quantity) =>
    set((state) => {
      if (quantity <= 0) {
        return {
          items: state.items.filter(
            (i) => !(i.productId === productId && i.size === size && i.color === color)
          ),
        };
      }
      return {
        items: state.items.map((i) =>
          i.productId === productId && i.size === size && i.color === color
            ? { ...i, quantity }
            : i
        ),
      };
    }),

  totalItems: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
  subtotal: () => get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
  clearCart: () => set({ items: [] }),

  getWhatsAppLink: (phone: string) => {
    const items = get().items;
    const formatPrice = (v: number) =>
      v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    
    let msg = "🛍️ *Pedido - Aura Joias*\n\n";
    items.forEach((item, i) => {
      msg += `${i + 1}. *${item.name}*\n`;
      msg += `   Tamanho: ${item.size} | Cor: ${item.color}\n`;
      msg += `   Qtd: ${item.quantity} × ${formatPrice(item.price)} = ${formatPrice(item.price * item.quantity)}\n\n`;
    });
    msg += `───────────────\n`;
    msg += `*Total: ${formatPrice(get().subtotal())}*\n\n`;
    msg += `Gostaria de finalizar este pedido!`;

    const encoded = encodeURIComponent(msg);
    return `https://wa.me/${phone}?text=${encoded}`;
  },
}));
