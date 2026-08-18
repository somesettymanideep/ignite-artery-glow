import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ProgressiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
  containerClassName?: string;
}

export function ProgressiveImage({
  src,
  alt,
  className,
  containerClassName,
  fallback = "/placeholder.svg",
  ...props
}: ProgressiveImageProps) {
  const [currentSrc, setCurrentSrc] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!src) {
      setHasError(true);
      setIsLoading(false);
      return;
    }

    const img = new Image();
    img.src = src;
    
    setIsLoading(true);
    setHasError(false);

    img.onload = () => {
      setCurrentSrc(src);
      setIsLoading(false);
    };

    img.onerror = () => {
      setHasError(true);
      setIsLoading(false);
      // Ensure absolute fallback if provided, or default to relative placeholder
      setCurrentSrc(fallback);
      console.warn(`ProgressiveImage: Failed to load image at ${src}. Falling back to ${fallback}`);
    };
  }, [src, fallback]);

  return (
    <div className={cn("relative overflow-hidden bg-muted/20", containerClassName)}>
      {isLoading && (
        <div className="absolute inset-0 z-10 animate-pulse bg-muted/40 flex items-center justify-center">
          <div className="h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_2s_infinite]" />
        </div>
      )}
      
      <img
        {...props}
        src={currentSrc || fallback}
        alt={alt}
        className={cn(
          "transition-all duration-700 ease-in-out",
          isLoading ? "scale-105 blur-sm opacity-50" : "scale-100 blur-0 opacity-100",
          hasError && "grayscale opacity-60",
          className
        )}
      />
      
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
