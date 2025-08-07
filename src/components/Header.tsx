import { Search, User, ShoppingCart, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        {/* Top section with logo and icons */}
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>

          {/* Logo */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-boutique-pink to-boutique-rose flex items-center justify-center">
              <span className="text-lg font-bold text-white">ب</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-boutique-pink to-boutique-gold bg-clip-text text-transparent">
                بنات
              </h1>
              <p className="text-xs text-muted-foreground">Elegance Boutique</p>
            </div>
          </div>

          {/* Search bar - hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="ابحث عن المنتجات..."
                className="pl-4 pr-10 bg-muted/50 border-boutique-pink/20 focus:border-boutique-pink"
                dir="rtl"
              />
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <Button variant="ghost" size="icon" className="relative">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {/* Cart badge */}
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-boutique-pink text-xs text-white flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
        </div>

        {/* Mobile search bar */}
        <div className="md:hidden pb-3">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="ابحث عن المنتجات..."
              className="pl-4 pr-10 bg-muted/50 border-boutique-pink/20 focus:border-boutique-pink"
              dir="rtl"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;