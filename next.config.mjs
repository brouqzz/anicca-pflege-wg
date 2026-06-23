/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Moderne Formate für beste Schärfe bei kleiner Dateigröße
    formats: ["image/avif", "image/webp"],
    // Feinere Abstufung der ausgelieferten Bildgrößen → weniger Hochskalierung
    deviceSizes: [640, 750, 828, 1024, 1080, 1200, 1440, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 768],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

export default nextConfig;
