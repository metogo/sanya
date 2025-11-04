'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface HeroBannerProps {
  imagePath?: string; // 本地图片路径，如 /images/banners/sanya-hero.jpg
  alt?: string;
  height?: number;
}

export default function HeroBanner({ 
  imagePath = '/images/banners/sanya-hero.jpg',
  alt = '三亚旅游景区',
  height = 500
}: HeroBannerProps) {
  const t = useTranslations();

  return (
    <></>
    // <div className="relative w-full overflow-hidden bg-gradient-to-r from-blue-500 to-cyan-500" style={{ height: `${height}px` }}>
    //   {/* Banner图片 - 使用Next.js Image组件自动CDN优化 */}
    //   <Image
    //     src={imagePath}
    //     alt={alt}
    //     fill
    //     priority // 优先加载banner
    //     quality={90} // 高质量
    //     sizes="100vw" // 全宽响应式
    //     className="object-cover"
    //     placeholder="blur" // 模糊占位符
    //     blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
    //   />
      
    //   {/* 渐变遮罩 - 增强文字可读性 */}
    //   <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      
    //   {/* Banner内容 */}
    //   <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
    //     <h1 
    //       className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center drop-shadow-2xl animate-fade-in"
    //       style={{ fontFamily: "'Playfair Display', serif" }}
    //     >
    //       {t('banner.title', { default: '探索三亚之美' })}
    //     </h1>
    //     <p className="text-lg md:text-xl lg:text-2xl text-center max-w-3xl drop-shadow-lg opacity-95">
    //       {t('banner.subtitle', { default: '发现热带天堂的魅力景点' })}
    //     </p>
    //   </div>

    //   {/* 滚动提示 */}
    //   {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    //     <svg 
    //       className="w-6 h-6 text-white opacity-75" 
    //       fill="none" 
    //       strokeLinecap="round" 
    //       strokeLinejoin="round" 
    //       strokeWidth="2" 
    //       viewBox="0 0 24 24" 
    //       stroke="currentColor"
    //     >
    //       <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
    //     </svg>
    //   </div> */}
    // </div>
  );
}