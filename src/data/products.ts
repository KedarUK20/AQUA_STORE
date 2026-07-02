export type ShopProduct = {
  title: string;
  price: string;
  image: string;
  /** Human-readable category label. */
  category: string;
  /** Category slug, used to link back to the category page. */
  slug: string;
};

/**
 * Flat catalog of every product across the category pages.
 * Used to power shop search so queries return real products, not just
 * category tiles. Keep in sync with the individual category pages.
 */
export const shopProducts: ShopProduct[] = [
  // Aquarium Plants
  {
    title: "Java Moss",
    price: "$5",
    image: "/images/1.jpeg",
    category: "Aquarium Plants",
    slug: "aquarium-plants",
  },
  {
    title: "Amazon Sword",
    price: "$8",
    image: "/images/2.jpeg",
    category: "Aquarium Plants",
    slug: "aquarium-plants",
  },
  {
    title: "Anubias Plant",
    price: "$6",
    image: "/images/3.jpeg",
    category: "Aquarium Plants",
    slug: "aquarium-plants",
  },

  // Fertilizers
  {
    title: "Liquid Fertilizer",
    price: "$10",
    image: "/images/2.jpeg",
    category: "Fertilizers",
    slug: "fertilizers",
  },
  {
    title: "Root Tabs",
    price: "$7",
    image: "/images/4.jpeg",
    category: "Fertilizers",
    slug: "fertilizers",
  },
  {
    title: "Iron Supplement",
    price: "$9",
    image: "/images/5.jpeg",
    category: "Fertilizers",
    slug: "fertilizers",
  },

  // Fish Food
  {
    title: "Flakes Food",
    price: "$5",
    image: "/images/3.jpeg",
    category: "Fish Food",
    slug: "fish-food",
  },
  {
    title: "Pellets",
    price: "$6",
    image: "/images/6.jpeg",
    category: "Fish Food",
    slug: "fish-food",
  },
  {
    title: "Shrimp Food",
    price: "$7",
    image: "/images/7.jpeg",
    category: "Fish Food",
    slug: "fish-food",
  },

  // Accessories
  {
    title: "LED Light",
    price: "$20",
    image: "/images/4.jpeg",
    category: "Accessories",
    slug: "accessories",
  },
  {
    title: "Filter Pump",
    price: "$25",
    image: "/images/8.jpeg",
    category: "Accessories",
    slug: "accessories",
  },
  {
    title: "Aquarium Heater",
    price: "$18",
    image: "/images/9.jpeg",
    category: "Accessories",
    slug: "accessories",
  },

  // Aquascaping
  {
    title: "Dragon Stone",
    price: "$12",
    image: "/images/5.jpeg",
    category: "Aquascaping",
    slug: "aquascaping",
  },
  {
    title: "Driftwood",
    price: "$15",
    image: "/images/10.jpeg",
    category: "Aquascaping",
    slug: "aquascaping",
  },
  {
    title: "Aquarium Sand Base",
    price: "$8",
    image: "/images/02 aquarium.jpg",
    category: "Aquascaping",
    slug: "aquascaping",
  },

  // Fish & Shrimp
  {
    title: "Neon Tetra",
    price: "$2",
    image: "/images/6.jpeg",
    category: "Fish & Shrimp",
    slug: "fish-shrimp",
  },
  {
    title: "Guppy",
    price: "$3",
    image: "/images/7.jpeg",
    category: "Fish & Shrimp",
    slug: "fish-shrimp",
  },
  {
    title: "Cherry Shrimp",
    price: "$4",
    image: "/images/8.jpeg",
    category: "Fish & Shrimp",
    slug: "fish-shrimp",
  },

  // CO2 System
  {
    title: "CO2 Kit",
    price: "$30",
    image: "/images/7.jpeg",
    category: "CO2 System",
    slug: "co2-system",
  },
  {
    title: "CO2 Regulator",
    price: "$22",
    image: "/images/8.jpeg",
    category: "CO2 System",
    slug: "co2-system",
  },
  {
    title: "CO2 Diffuser",
    price: "$10",
    image: "/images/9.jpeg",
    category: "CO2 System",
    slug: "co2-system",
  },

  // Water Care
  {
    title: "Water Conditioner",
    price: "$6",
    image: "/images/8.jpeg",
    category: "Water Care",
    slug: "water-care",
  },
  {
    title: "pH Control",
    price: "$8",
    image: "/images/9.jpeg",
    category: "Water Care",
    slug: "water-care",
  },
  {
    title: "Algae Remover",
    price: "$7",
    image: "/images/10.jpeg",
    category: "Water Care",
    slug: "water-care",
  },
];
