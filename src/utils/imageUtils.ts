// Image utility functions for optimization and responsive images

export interface ImageConfig {
  src: string;
  alt: string;
  sizes?: string;
  aspectRatio?: string;
  priority?: boolean;
  className?: string;
}

export interface ResponsiveImageConfig extends ImageConfig {
  srcSet?: {
    [key: string]: string;
  };
  sizes?: string;
}

/**
 * Generate responsive image srcset for different screen sizes
 */
export const generateSrcSet = (baseSrc: string, widths: number[]): string => {
  return widths
    .map(width => `${baseSrc}?w=${width} ${width}w`)
    .join(', ');
};

/**
 * Generate appropriate sizes attribute for responsive images
 */
export const generateSizes = (breakpoints: { [key: string]: string }): string => {
  return Object.entries(breakpoints)
    .map(([media, size]) => `${media} ${size}`)
    .join(', ');
};

/**
 * Default responsive image sizes for different contexts
 */
export const defaultSizes = {
  hero: {
    sizes: '(max-width: 768px) 100vw, 100vw',
    widths: [320, 768, 1200, 1920]
  },
  profile: {
    sizes: '(max-width: 768px) 200px, 300px',
    widths: [200, 300, 400]
  },
  portfolio: {
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    widths: [400, 600, 800]
  },
  research: {
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    widths: [400, 600, 800]
  }
};

/**
 * Optimize image path for different formats and sizes
 */
export const optimizeImagePath = (path: string, options?: {
  width?: number;
  format?: 'webp' | 'jpg' | 'png';
  quality?: number;
}): string => {
  if (!options) return path;
  
  const url = new URL(path, window.location.origin);
  if (options.width) url.searchParams.set('w', options.width.toString());
  if (options.format) url.searchParams.set('f', options.format);
  if (options.quality) url.searchParams.set('q', options.quality.toString());
  
  return url.toString();
};

/**
 * Preload critical images
 */
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    img.src = src;
  });
};

/**
 * Get image dimensions from URL or path
 */
export const getImageDimensions = (path: string): Promise<{ width: number; height: number }> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve({ width: img.naturalWidth, height: img.naturalHeight });
    };
    img.onerror = () => reject(new Error(`Failed to get dimensions for: ${path}`));
    img.src = path;
  });
};

/**
 * Calculate aspect ratio from dimensions
 */
export const calculateAspectRatio = (width: number, height: number): string => {
  const gcd = (a: number, b: number): number => b === 0 ? a : gcd(b, a % b);
  const divisor = gcd(width, height);
  return `${width / divisor}/${height / divisor}`;
};

/**
 * Generate placeholder data URL for images
 */
export const generatePlaceholder = (width: number, height: number, color: string = '#f0f0f0'): string => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  
  if (ctx) {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, width, height);
  }
  
  return canvas.toDataURL();
};

/**
 * Check if image is in viewport
 */
export const isImageInViewport = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * Debounce function for scroll events
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};