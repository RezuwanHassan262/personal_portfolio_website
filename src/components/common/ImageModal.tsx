import React, { useEffect, useState, useRef, useCallback } from 'react';
import './ImageModal.css';

interface MediaItem {
  src: string;
  alt: string;
}

interface ImageModalProps {
  isOpen: boolean;
  imageUrl: string;
  alt: string;
  onClose: () => void;
  images?: MediaItem[];
  currentImageIndex?: number;
  onNavigate?: (newIndex: number) => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ 
  isOpen, 
  imageUrl, 
  alt, 
  onClose,
  images = [],
  currentImageIndex = 0,
  onNavigate
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  const hasMultipleImages = images.length > 1;

  // The minimum distance to be considered a swipe
  const minSwipeDistance = 50;

  const navigatePrevious = useCallback(() => {
    if (hasMultipleImages && onNavigate) {
      const newIndex = currentImageIndex <= 0 ? images.length - 1 : currentImageIndex - 1;
      onNavigate(newIndex);
    }
  }, [currentImageIndex, images, hasMultipleImages, onNavigate]);

  const navigateNext = useCallback(() => {
    if (hasMultipleImages && onNavigate) {
      const newIndex = currentImageIndex >= images.length - 1 ? 0 : currentImageIndex + 1;
      onNavigate(newIndex);
    }
  }, [currentImageIndex, images, hasMultipleImages, onNavigate]);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    } else if (event.key === 'ArrowLeft') {
      navigatePrevious();
    } else if (event.key === 'ArrowRight') {
      navigateNext();
    }
  }, [onClose, navigatePrevious, navigateNext]);

  // Touch handlers for swiping
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      navigateNext();
    } else if (isRightSwipe) {
      navigatePrevious();
    }
  };

  // Mouse handlers for swiping/dragging
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<number | null>(null);
  const [dragEnd, setDragEnd] = useState<number | null>(null);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart(e.clientX);
    setDragEnd(null);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setDragEnd(e.clientX);
    }
  };

  const onMouseUp = () => {
    if (isDragging && dragStart !== null && dragEnd !== null) {
      const distance = dragStart - dragEnd;
      const isLeftSwipe = distance > minSwipeDistance;
      const isRightSwipe = distance < -minSwipeDistance;

      if (isLeftSwipe) {
        navigateNext();
      } else if (isRightSwipe) {
        navigatePrevious();
      }
    }
    setIsDragging(false);
  };

  const onMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <div 
        className="image-modal-content" 
        onClick={(e) => e.stopPropagation()}
        ref={contentRef}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
      >
        <button className="image-modal-close" onClick={onClose}>×</button>
        
        {hasMultipleImages && (
          <button 
            className="image-modal-nav image-modal-prev" 
            onClick={(e) => {
              e.stopPropagation();
              navigatePrevious();
            }}
            aria-label="Previous image"
          >
            <i className="bi bi-chevron-left"></i>
          </button>
        )}
        
        <img 
          src={imageUrl} 
          alt={alt} 
          className="image-modal-image" 
          draggable={false}
        />
        
        {hasMultipleImages && (
          <button 
            className="image-modal-nav image-modal-next" 
            onClick={(e) => {
              e.stopPropagation();
              navigateNext();
            }}
            aria-label="Next image"
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        )}
        
        <div className="image-modal-caption">
          {alt}
          {hasMultipleImages && (
            <span className="image-modal-counter">
              {currentImageIndex + 1} / {images.length}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
