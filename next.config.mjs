import withPWA from 'next-pwa'; // Use import for ES6 modules

const nextConfig = {
  // Next.js config
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tse2.mm.bing.net",
      },
      {
        protocol: "https",
        hostname: "tse4.mm.bing.net",
      },
      {
        protocol: "https",
        hostname: "tse1.mm.bing.net",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "tailwindmix.b-cdn.net",
      },
      {
        protocol: "https",
        hostname: "miro.medium.com",
      },
      {
        hostname: "images.pexels.com",
      },
    ],
  },
};

const pwaConfig = {
  dest: 'public'
};

export default withPWA(pwaConfig)(nextConfig); // Using ES6 arrow function syntax
