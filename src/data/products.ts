export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  sizes: string[];
  colors: { name: string; hex: string }[];
  category: "aneis" | "colares" | "brincos" | "pulseiras" | "conjuntos";
  material: string;
  description: string;
  details: string;
  composition: string;
  isNew?: boolean;
  isSale?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Anel Solitário Brilhante",
    price: 2890.0,
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80",
    ],
    sizes: ["12", "14", "16", "18", "20"],
    colors: [
      { name: "Ouro 18k", hex: "#d4a843" },
      { name: "Ouro Branco", hex: "#c0c0c0" },
    ],
    category: "aneis",
    material: "Ouro 18k",
    description: "Anel solitário com diamante central de 0.30ct, lapidação brilhante. Peça atemporal para momentos especiais.",
    details: "Aro em ouro 18k polido. Diamante central com certificação GIA. Cravação tipo garra de 4 pontas. Acabamento premium.",
    composition: "Ouro 18k (750). Diamante 0.30ct, cor G, pureza VS2. Acompanha certificado de autenticidade.",
    isNew: true,
  },
  {
    id: "2",
    name: "Colar Riviera Zircônias",
    price: 1590.0,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141589-67f0d569b534?w=800&q=80",
    ],
    sizes: ["40cm", "45cm", "50cm"],
    colors: [
      { name: "Ouro 18k", hex: "#d4a843" },
      { name: "Ouro Rosé", hex: "#b76e79" },
    ],
    category: "colares",
    material: "Ouro 18k",
    description: "Colar riviera com zircônias cravejadas em toda extensão. Elegância para o dia a dia e ocasiões especiais.",
    details: "Corrente tipo riviera em ouro 18k. Zircônias redondas cravejadas. Fecho lagosta com trava de segurança.",
    composition: "Ouro 18k (750). Zircônias AAA. Peso aproximado: 5.2g.",
    isNew: true,
  },
  {
    id: "3",
    name: "Brinco Argola Clássica",
    price: 890.0,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80",
    ],
    sizes: ["Pequeno", "Médio", "Grande"],
    colors: [
      { name: "Ouro 18k", hex: "#d4a843" },
      { name: "Ouro Branco", hex: "#c0c0c0" },
      { name: "Ouro Rosé", hex: "#b76e79" },
    ],
    category: "brincos",
    material: "Ouro 18k",
    description: "Argola clássica em ouro 18k com acabamento polido. Versátil e elegante.",
    details: "Formato argola redonda. Acabamento polido e liso. Fecho tipo trava francesa.",
    composition: "Ouro 18k (750). Peso aproximado: 3.8g (par). Diâmetro varia conforme tamanho.",
  },
  {
    id: "4",
    name: "Pulseira Elos Cartier",
    price: 3450.0,
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80",
    ],
    sizes: ["16cm", "18cm", "20cm"],
    colors: [
      { name: "Ouro 18k", hex: "#d4a843" },
      { name: "Ouro Branco", hex: "#c0c0c0" },
    ],
    category: "pulseiras",
    material: "Ouro 18k",
    description: "Pulseira de elos estilo Cartier em ouro 18k. Design robusto e sofisticado.",
    details: "Elos ovais interligados. Acabamento polido. Fecho de gaveta com trava de segurança dupla.",
    composition: "Ouro 18k (750). Peso aproximado: 12g. Largura dos elos: 5mm.",
    isNew: true,
  },
  {
    id: "5",
    name: "Anel Aliança Cravejada",
    price: 1890.0,
    originalPrice: 2390.0,
    images: [
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80",
      "https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=800&q=80",
    ],
    sizes: ["12", "14", "16", "18"],
    colors: [
      { name: "Ouro 18k", hex: "#d4a843" },
      { name: "Ouro Rosé", hex: "#b76e79" },
    ],
    category: "aneis",
    material: "Ouro 18k",
    description: "Aliança cravejada com fileira de zircônias. Perfeita para usar sozinha ou compor com outros anéis.",
    details: "Formato meia aliança. Zircônias cravejadas em micro-pavê. Acabamento polido interno.",
    composition: "Ouro 18k (750). Zircônias AAA. Largura: 3mm. Peso aproximado: 3.5g.",
    isSale: true,
  },
  {
    id: "6",
    name: "Brinco Gota Pérola",
    price: 1290.0,
    images: [
      "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80",
    ],
    sizes: ["Único"],
    colors: [
      { name: "Ouro 18k", hex: "#d4a843" },
    ],
    category: "brincos",
    material: "Ouro 18k com Pérola",
    description: "Brinco pendente com pérola natural em formato gota. Sofisticação atemporal.",
    details: "Base em ouro 18k com design floral. Pérola natural de água doce formato gota. Fecho tipo tarraxa borboleta.",
    composition: "Ouro 18k (750). Pérola natural de água doce 8-9mm. Peso aproximado: 2.8g (par).",
    isNew: true,
  },
  {
    id: "7",
    name: "Colar Pingente Coração",
    price: 990.0,
    originalPrice: 1290.0,
    images: [
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80",
      "https://images.unsplash.com/photo-1576022162028-2be1e1697c93?w=800&q=80",
    ],
    sizes: ["40cm", "45cm"],
    colors: [
      { name: "Ouro 18k", hex: "#d4a843" },
      { name: "Ouro Rosé", hex: "#b76e79" },
      { name: "Ouro Branco", hex: "#c0c0c0" },
    ],
    category: "colares",
    material: "Ouro 18k",
    description: "Colar delicado com pingente coração cravejado de zircônias. Presente perfeito.",
    details: "Corrente veneziana em ouro 18k. Pingente coração com zircônias. Fecho lagosta.",
    composition: "Ouro 18k (750). Zircônias AAA. Peso aproximado: 2.5g.",
    isSale: true,
  },
  {
    id: "8",
    name: "Conjunto Pérolas Clássico",
    price: 4590.0,
    images: [
      "https://images.unsplash.com/photo-1515562141589-67f0d569b534?w=800&q=80",
      "https://images.unsplash.com/photo-1601121141418-c1a0e49ac241?w=800&q=80",
    ],
    sizes: ["Único"],
    colors: [
      { name: "Ouro 18k", hex: "#d4a843" },
    ],
    category: "conjuntos",
    material: "Ouro 18k com Pérolas",
    description: "Conjunto completo com colar e brincos de pérolas naturais. Elegância clássica.",
    details: "Colar com pérolas de 7-8mm e fecho em ouro 18k. Brincos com pérola e tarraxa borboleta em ouro.",
    composition: "Ouro 18k (750). Pérolas naturais de água doce 7-8mm. Colar: 45cm.",
  },
];

export const categories = [
  { name: "Anéis", slug: "aneis" },
  { name: "Colares", slug: "colares" },
  { name: "Brincos", slug: "brincos" },
  { name: "Pulseiras", slug: "pulseiras" },
  { name: "Conjuntos", slug: "conjuntos" },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category?: string): Product[] {
  if (!category) return products;
  return products.filter((p) => p.category === category);
}
