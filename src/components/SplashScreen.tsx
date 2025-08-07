import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [logoLoaded, setLogoLoaded] = useState(false);

  useEffect(() => {
    // Auto-hide splash screen after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Wait for fade out animation
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500",
        "bg-gradient-to-br from-boutique-cream via-background to-boutique-rose",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="text-center space-y-6">
        {/* Logo Container with Animation */}
        <div className="relative">
          <div 
            className={cn(
              "w-32 h-32 mx-auto rounded-full transition-all duration-1000",
              "bg-gradient-to-br from-boutique-pink to-boutique-rose",
              "flex items-center justify-center shadow-2xl",
              "animate-pulse",
              logoLoaded && "animate-none scale-110"
            )}
          >
            <span className="text-4xl font-bold text-white">بنات</span>
          </div>
          
          {/* Decorative rings */}
          <div className="absolute inset-0 rounded-full border-2 border-boutique-gold/30 animate-ping" />
          <div className="absolute inset-4 rounded-full border border-boutique-pink/40 animate-pulse" />
        </div>

        {/* Brand Text */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-boutique-pink to-boutique-gold bg-clip-text text-transparent">
            بنات
          </h1>
          <p className="text-lg text-boutique-pink/80 font-medium">
            Banat Elegance Boutique
          </p>
          <p className="text-sm text-muted-foreground">
            أناقة وجمال للمرأة العصرية
          </p>
        </div>

        {/* Loading indicator */}
        <div className="flex justify-center">
          <div className="flex space-x-1 rtl:space-x-reverse">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={cn(
                  "w-2 h-2 rounded-full bg-boutique-pink animate-bounce",
                )}
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;