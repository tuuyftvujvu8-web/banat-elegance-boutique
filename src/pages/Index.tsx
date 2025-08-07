import { useState } from 'react';
import SplashScreen from '@/components/SplashScreen';
import Header from '@/components/Header';
import ProductCategories from '@/components/ProductCategories';
import VideoSection from '@/components/VideoSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      
      {/* Hero section */}
      <section className="py-16 px-4 bg-gradient-to-br from-boutique-cream via-background to-boutique-rose/20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-boutique-pink to-boutique-gold bg-clip-text text-transparent">
            مرحباً بك في بنات
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            اكتشفي عالم الأناقة والجمال مع أفضل المنتجات العصرية المصممة خصيصاً للمرأة العربية
          </p>
          <div className="flex justify-center space-x-4 rtl:space-x-reverse">
            <button className="px-8 py-3 bg-gradient-to-r from-boutique-pink to-boutique-rose text-white rounded-xl font-semibold hover:scale-105 transition-transform duration-200 shadow-lg">
              تسوقي الآن
            </button>
            <button className="px-8 py-3 border-2 border-boutique-pink text-boutique-pink rounded-xl font-semibold hover:bg-boutique-pink hover:text-white transition-colors duration-200">
              تعرفي علينا
            </button>
          </div>
        </div>
      </section>

      <ProductCategories />
      <VideoSection />
      <Footer />
    </div>
  );
};

export default Index;
