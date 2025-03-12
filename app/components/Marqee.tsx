import { useEffect } from 'react';

export default function Marquee() {
  // We need to add the animation styles to the document
  useEffect(() => {
    // Check if the style already exists to avoid duplicates
    if (!document.getElementById('marquee-animation-style')) {
      const style = document.createElement('style');
      style.id = 'marquee-animation-style';
      style.innerHTML = `
        @keyframes infiniteSlide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
        
        .animate-infinite-slide {
          animation: infiniteSlide 20s linear infinite;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  // The star SVG component
  const StarIcon = () => (
    <svg 
      width="14" 
      fill="none" 
      height="14" 
      viewBox="0 0 14 14" 
      className="w-5 h-5 text-secondary" 
      strokeWidth="1" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        fill="currentColor" 
        fillRule="evenodd" 
        d="M7.935.655c-.318-.873-1.552-.873-1.87 0L4.622 4.622L.655 6.065c-.873.318-.873 1.552 0 1.87l3.967 1.443l1.443 3.967c.318.873 1.552.873 1.87 0l1.443-3.967l3.967-1.443c.873-.318.873-1.552 0-1.87L9.378 4.622z" 
        clipRule="evenodd"
      />
    </svg>
  );

  // Create a single marquee item
  const MarqueeItem = () => (
    <div className="flex items-center gap-12 whitespace-nowrap">
      <StarIcon />
      <p className="text-white font-medium text-xl uppercase">Nawe Kila Wakati</p>
    </div>
  );

  // Create a row of items
  const MarqueeRow = () => (
    <div className="flex gap-12 px-6 animate-infinite-slide">
      {[...Array(5)].map((_, index) => (
        <MarqueeItem key={index} />
      ))}
    </div>
  );

  return (
    <div className="bg-primary-950 flex py-3 lg:py-6 max-w-screen overflow-hidden">
      <MarqueeRow />
      <MarqueeRow />
    </div>
  );
}