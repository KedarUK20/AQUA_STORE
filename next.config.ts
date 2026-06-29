import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/photo-**",
      },
      {
        protocol: "https",
        hostname: "aquariumplantsonline.com.au",
      },
      {
        protocol: "https",
        hostname: "www.aquariumcoop.com",
      },
      {
        protocol: "https",
        hostname: "aquarium-boutique.com",
      },
      {
        protocol: "https",
        hostname: "st2.depositphotos.com",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "www.tropicalfishcareguides.com",
      },
      {
        protocol: "https",
        hostname: "www.aquariumsource.com",
      },
      {
        protocol: "https",
        hostname: "pet-health-advisor.com",
      },
    ],
  },
};

export default nextConfig;
