export type ShopCategory = {
  title: string;
  slug: string;
  count: string;
  image: string;
  description: string;
  terms: string[];
};

export const shopCategories: ShopCategory[] = [
  {
    title: "Aquarium Plants",
    slug: "aquarium-plants",
    count: "500+ products",
    image: "/images/1.jpeg",
    description: "Healthy stems, mosses and easy foreground plants.",
    terms: ["plants", "live plants", "moss", "java moss", "anubias"],
  },
  {
    title: "Fertilizers",
    slug: "fertilizers",
    count: "120+ products",
    image: "/images/2.jpeg",
    description: "Liquid nutrients, root tabs and plant growth support.",
    terms: ["fertilizer", "fertilizers", "nutrients", "root tabs", "iron"],
  },
  {
    title: "Fish Food",
    slug: "fish-food",
    count: "150+ products",
    image: "/images/3.jpeg",
    description: "Daily nutrition for active fish and shrimp colonies.",
    terms: ["food", "fish food", "flakes", "pellets", "shrimp food"],
  },
  {
    title: "Accessories",
    slug: "accessories",
    count: "350+ products",
    image: "/images/4.jpeg",
    description: "Tools, nets, cleaning supplies and setup essentials.",
    terms: ["accessories", "tools", "net", "cleaning", "equipment"],
  },
  {
    title: "Aquascaping",
    slug: "aquascaping",
    count: "350+ products",
    image: "/images/71r8RpvIJ4L.jpg",
    description: "Hardscape, substrate and layout details for planted tanks.",
    terms: ["aquascaping", "hardscape", "substrate", "stone", "wood"],
  },
  {
    title: "Fish & Shrimp",
    slug: "fish-shrimp",
    count: "250+ products",
    image: "/images/exotic-fish-in-the-aquarium.jpg",
    description: "Livestock selections for balanced freshwater aquariums.",
    terms: ["fish", "shrimp", "livestock", "freshwater", "community"],
  },
  {
    title: "CO2 System",
    slug: "co2-system",
    count: "80+ products",
    image: "/images/7.jpeg",
    description: "Regulators, diffusers and CO2 support for plant growth.",
    terms: ["co2", "co2 system", "regulator", "diffuser", "carbon"],
  },
  {
    title: "Water Care",
    slug: "water-care",
    count: "100+ products",
    image: "/images/8.jpeg",
    description: "Testing, conditioning and water stability products.",
    terms: ["water", "water care", "testing", "conditioner", "quality"],
  },
];
