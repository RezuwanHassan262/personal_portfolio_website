import React, { useState, useRef, useEffect } from 'react';
import OptimizedImage from './OptimizedImage';

interface ImageGalleryProps {
  images: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
  }[];
  aspectRatio?: string;
  className?: string;
  showLightbox?: boolean;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  aspectRatio = '16/9',
  className = '',
  showLightbox = true
}) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const lightboxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isLightboxOpen) {
        closeLightbox();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (lightboxRef.current && !lightboxRef.current.contains(e.target as Node)) {
        closeLightbox();
      }
    };

    const previousOverflow = document.body.style.overflow;
    if (isLightboxOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = previousOverflow;
    };
  }, [isLightboxOpen]);

  const openLightbox = (index: number) => {
    if (!showLightbox) return;
    setSelectedImage(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  return (
    <>
      <div className={`image-gallery ${className}`}>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="gallery-item"
              onClick={() => openLightbox(index)}
            >
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                aspectRatio={aspectRatio}
                objectFit="cover"
                className="gallery-image"
              />
              {image.title && (
                <div className="gallery-item-overlay">
                  <h4>{image.title}</h4>
                  {image.description && <p>{image.description}</p>}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && selectedImage !== null && (
        <div className="lightbox-overlay" ref={lightboxRef}>
          <div className="lightbox-content">
            <button className="lightbox-close" onClick={closeLightbox}>
              <i className="bi bi-x-lg"></i>
            </button>
            
            <button className="lightbox-nav lightbox-prev" onClick={prevImage}>
              <i className="bi bi-chevron-left"></i>
            </button>
            
            <div className="lightbox-image-container">
              <OptimizedImage
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                aspectRatio="16/9"
                objectFit="contain"
                className="lightbox-image"
                priority={true}
              />
              <div className="lightbox-info">
                <h3>{images[selectedImage].title || images[selectedImage].alt}</h3>
                {images[selectedImage].description && (
                  <p>{images[selectedImage].description}</p>
                )}
                <span className="lightbox-counter">
                  {selectedImage + 1} / {images.length}
                </span>
              </div>
            </div>
            
            <button className="lightbox-nav lightbox-next" onClick={nextImage}>
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery; 