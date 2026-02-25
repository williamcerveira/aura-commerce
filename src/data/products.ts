export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  sizes: string[];
  colors: { name: string; hex: string }[];
  category: string;
  gender: "feminino" | "masculino" | "unissex";
  description: string;
  details: string;
  composition: string;
  isNew?: boolean;
  isSale?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Blazer Oversized Estruturado",
    price: 459.90,
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80",
    ],
    sizes: ["PP", "P", "M", "G", "GG"],
    colors: [
      { name: "Preto", hex: "#1a1a1a" },
      { name: "Bege", hex: "#c4b5a0" },
    ],
    category: "Blazers",
    gender: "feminino",
    description: "Blazer oversized com corte reto e ombros estruturados. Peça atemporal para composições elegantes.",
    details: "Modelo oversized com lapela larga. Bolsos laterais com aba. Forro interno completo. Fechamento por botão único.",
    composition: "54% Lã, 44% Poliéster, 2% Elastano. Forro: 100% Viscose. Lavagem a seco.",
    isNew: true,
  },
  {
    id: "2",
    name: "Calça Wide Leg Alfaiataria",
    price: 329.90,
    images: [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
    ],
    sizes: ["PP", "P", "M", "G", "GG"],
    colors: [
      { name: "Preto", hex: "#1a1a1a" },
      { name: "Cinza", hex: "#8c8c8c" },
      { name: "Off-White", hex: "#f5f0eb" },
    ],
    category: "Calças",
    gender: "feminino",
    description: "Calça wide leg de alfaiataria com cintura alta e caimento fluido.",
    details: "Cintura alta com cós largo. Pernas amplas com vinco frontal. Fechamento lateral com zíper invisível.",
    composition: "70% Poliéster, 25% Viscose, 5% Elastano. Lavar à máquina em ciclo delicado.",
    isNew: true,
  },
  {
    id: "3",
    name: "Suéter Gola Alta Merino",
    price: 289.90,
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cda3a23?w=800&q=80",
    ],
    sizes: ["P", "M", "G", "GG"],
    colors: [
      { name: "Creme", hex: "#e8ddd0" },
      { name: "Preto", hex: "#1a1a1a" },
      { name: "Camel", hex: "#c19a6b" },
    ],
    category: "Malhas",
    gender: "unissex",
    description: "Suéter de lã merino com gola alta e acabamento premium.",
    details: "Gola alta dobrável. Punhos e barra canelados. Corte regular fit.",
    composition: "100% Lã Merino. Lavar à mão em água fria.",
  },
  {
    id: "4",
    name: "Camisa Oxford Slim",
    price: 199.90,
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80",
    ],
    sizes: ["P", "M", "G", "GG"],
    colors: [
      { name: "Branco", hex: "#ffffff" },
      { name: "Azul Claro", hex: "#b8d4e3" },
    ],
    category: "Camisas",
    gender: "masculino",
    description: "Camisa oxford de algodão com corte slim e colarinho button-down.",
    details: "Corte slim fit. Colarinho button-down. Punhos com botão. Barra arredondada.",
    composition: "100% Algodão Oxford. Lavar à máquina a 30°C.",
  },
  {
    id: "5",
    name: "Trench Coat Clássico",
    price: 699.90,
    originalPrice: 899.90,
    images: [
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&q=80",
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80",
    ],
    sizes: ["PP", "P", "M", "G"],
    colors: [
      { name: "Bege", hex: "#c4b5a0" },
      { name: "Preto", hex: "#1a1a1a" },
    ],
    category: "Casacos",
    gender: "feminino",
    description: "Trench coat clássico com cinto e forro xadrez. Uma peça icônica.",
    details: "Gola com lapela. Trespasse duplo com botões. Cinto com fivela. Fenda traseira.",
    composition: "65% Algodão, 35% Poliéster. Lavagem a seco recomendada.",
    isSale: true,
  },
  {
    id: "6",
    name: "T-Shirt Essential",
    price: 89.90,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80",
    ],
    sizes: ["PP", "P", "M", "G", "GG"],
    colors: [
      { name: "Branco", hex: "#ffffff" },
      { name: "Preto", hex: "#1a1a1a" },
      { name: "Cinza", hex: "#8c8c8c" },
    ],
    category: "Camisetas",
    gender: "unissex",
    description: "Camiseta essencial em algodão orgânico com caimento perfeito.",
    details: "Corte regular. Gola careca reforçada. Costura dupla na barra e mangas.",
    composition: "100% Algodão Orgânico. Lavar à máquina a 30°C.",
    isNew: true,
  },
  {
    id: "7",
    name: "Jaqueta de Couro Minimal",
    price: 899.90,
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=800&q=80",
    ],
    sizes: ["P", "M", "G"],
    colors: [
      { name: "Preto", hex: "#1a1a1a" },
    ],
    category: "Jaquetas",
    gender: "masculino",
    description: "Jaqueta de couro legítimo com design minimalista e acabamento premium.",
    details: "Couro bovino legítimo. Forro em algodão. Zíper frontal. Bolsos laterais com zíper.",
    composition: "Exterior: 100% Couro Bovino. Forro: 100% Algodão.",
  },
  {
    id: "8",
    name: "Vestido Midi Slip",
    price: 259.90,
    originalPrice: 359.90,
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80",
    ],
    sizes: ["PP", "P", "M", "G"],
    colors: [
      { name: "Champagne", hex: "#d4c5a9" },
      { name: "Preto", hex: "#1a1a1a" },
    ],
    category: "Vestidos",
    gender: "feminino",
    description: "Vestido midi em cetim com corte slip dress e alças finas ajustáveis.",
    details: "Alças finas ajustáveis. Decote em V. Corte enviesado. Comprimento midi.",
    composition: "100% Poliéster Acetinado. Lavar à mão.",
    isSale: true,
  },
];

export const categories = [
  { name: "Feminino", slug: "feminino" },
  { name: "Masculino", slug: "masculino" },
  { name: "Acessórios", slug: "acessorios" },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(gender?: string): Product[] {
  if (!gender) return products;
  return products.filter((p) => p.gender === gender || p.gender === "unissex");
}
