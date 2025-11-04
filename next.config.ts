import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  images: {
    // 配置图片优化，Vercel会自动通过CDN分发
    formats: ['image/avif', 'image/webp'], // 自动转换为更高效的格式
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // 响应式尺寸
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // 小图标尺寸
    minimumCacheTTL: 60 * 60 * 24 * 365, // 缓存1年，加速访问
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
