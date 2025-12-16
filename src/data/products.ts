import { Product, Review } from "@/types/product";

export const products: Product[] = [
  {
    id: "bpc-157",
    name: "BPC-157 (Body Protection Compound)",
    price: 49.99,
    image: "/placeholder.svg",
    category: "Peptides",
    description: "BPC-157 is a synthetic peptide derived from a protein found in gastric juice. It has been extensively studied for its potential regenerative properties and is widely used in research applications examining tissue repair mechanisms.",
    shortDescription: "Premium research-grade peptide for advanced studies",
    specifications: [
      { label: "Purity", value: ">99%" },
      { label: "Molecular Weight", value: "1419.53 g/mol" },
      { label: "Sequence", value: "Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val" },
      { label: "Form", value: "Lyophilized Powder" },
      { label: "Storage", value: "-20°C" },
      { label: "Solubility", value: "Water, Saline" },
    ],
    inStock: true,
    rating: 4.9,
    reviewCount: 127,
  },
  {
    id: "tb-500",
    name: "TB-500 (Thymosin Beta-4)",
    price: 59.99,
    image: "/placeholder.svg",
    category: "Peptides",
    description: "TB-500 is a synthetic fraction of the protein thymosin beta-4, which is present in virtually all human and animal cells. Research focuses on its role in cell migration and tissue repair processes.",
    shortDescription: "High-purity thymosin beta-4 fragment for research",
    specifications: [
      { label: "Purity", value: ">98%" },
      { label: "Molecular Weight", value: "4963.5 g/mol" },
      { label: "Form", value: "Lyophilized Powder" },
      { label: "Storage", value: "-20°C" },
      { label: "Appearance", value: "White Powder" },
      { label: "Solubility", value: "Sterile Water" },
    ],
    inStock: true,
    rating: 4.8,
    reviewCount: 89,
  },
  {
    id: "mk-677",
    name: "MK-677 (Ibutamoren)",
    price: 69.99,
    image: "/placeholder.svg",
    category: "SARMs",
    description: "MK-677, also known as Ibutamoren, is a potent, long-acting, orally-active growth hormone secretagogue. It mimics the GH stimulating action of ghrelin and has been studied for various research applications.",
    shortDescription: "Research-grade growth hormone secretagogue",
    specifications: [
      { label: "Purity", value: ">99%" },
      { label: "Molecular Weight", value: "528.662 g/mol" },
      { label: "Formula", value: "C27H36N4O5S" },
      { label: "Form", value: "Crystalline Powder" },
      { label: "Storage", value: "Room Temperature" },
      { label: "Half-Life", value: "24 hours" },
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 203,
  },
];

export const reviews: Review[] = [
  {
    id: "1",
    author: "Dr. Michael R.",
    rating: 5,
    date: "2024-01-15",
    title: "Excellent purity and consistency",
    content: "We've been using Helix Research products for our lab studies and the quality is consistently outstanding. The purity levels match the CoA every time.",
    verified: true,
  },
  {
    id: "2",
    author: "Sarah K.",
    rating: 5,
    date: "2024-01-10",
    title: "Fast shipping, great product",
    content: "Received my order within 2 days. The packaging was professional and the product quality exceeded expectations. Will definitely order again.",
    verified: true,
  },
  {
    id: "3",
    author: "Research Lab Team",
    rating: 4,
    date: "2024-01-05",
    title: "Reliable supplier",
    content: "We've placed multiple orders and have always received high-quality compounds. The customer service team is also very responsive.",
    verified: true,
  },
  {
    id: "4",
    author: "James T.",
    rating: 5,
    date: "2023-12-28",
    title: "Top-tier quality",
    content: "The attention to detail in packaging and the included documentation shows this company takes quality seriously. Highly recommended for serious researchers.",
    verified: true,
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getProductReviews = (productId: string): Review[] => {
  // In a real app, this would filter reviews by product
  return reviews;
};
