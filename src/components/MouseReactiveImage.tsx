import React, { useRef, useEffect, useState } from 'react';

interface MouseReactiveImageProps {
  src: string;
  alt: string;
  className?: string;
}

const MouseReactiveImage: React.FC<MouseReactiveImageProps> = ({ 
  src, 
  alt, 
  className = '' 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      // Get container dimensions and position
      const rect = containerRef.current.getBoundingClientRect();
      
      // Calculate mouse position relative to the center of the container
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      
      setPosition({ x, y });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => {
      setIsHovering(false);
      // Reset position with animation when mouse leaves
      setPosition({ x: 0, y: 0 });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Calculate the transform style based on mouse position
  const imageTransform = isHovering
    ? `scale(1.05) rotateX(${position.y * -10}deg) rotateY(${position.x * 10}deg)`
    : 'scale(1) rotateX(0) rotateY(0)';

  // Calculate glow position
  const glowX = position.x * 50 + 50;
  const glowY = position.y * 50 + 50;
  const glowBackground = isHovering
    ? `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 60%)`
    : 'none';

  return (
    <div 
      ref={containerRef}
      className={`relative ${className}`}
      style={{ perspective: '1000px' }}
    >
      <div 
        className="absolute inset-0 transition-all duration-200 ease-out"
        style={{ 
          background: glowBackground,
          opacity: isHovering ? 1 : 0,
          borderRadius: 'inherit'
        }}
      />
      <div
        className="relative w-full h-full transition-transform duration-200 ease-out transform-gpu"
        style={{ 
          transform: imageTransform,
        }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          style={{ borderRadius: 'inherit' }}
        />
      </div>
    </div>
  );
};

export default MouseReactiveImage;