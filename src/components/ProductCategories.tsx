import { cn } from '@/lib/utils';

const categories = [
  {
    id: 'malhaf',
    name: 'الملحف',
    image: '/placeholder.svg',
    description: 'ملاحف تقليدية وعصرية'
  },
  {
    id: 'bags',
    name: 'الحقائب',
    image: '/placeholder.svg',
    description: 'حقائب أنيقة لكل المناسبات'
  },
  {
    id: 'dresses',
    name: 'الفساتين',
    image: '/placeholder.svg',
    description: 'فساتين راقية وجميلة'
  },
  {
    id: 'perfumes',
    name: 'العطور',
    image: '/placeholder.svg',
    description: 'عطور فاخرة ومميزة'
  }
];

const ProductCategories = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-boutique-pink to-boutique-gold bg-clip-text text-transparent">
            تسوقي حسب الفئة
          </h2>
          <p className="text-muted-foreground">
            اكتشفي مجموعتنا المتنوعة من المنتجات العصرية
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className={cn(
                "group relative overflow-hidden rounded-xl cursor-pointer",
                "bg-gradient-to-br from-boutique-cream to-boutique-rose/30",
                "border border-boutique-pink/20 hover:border-boutique-pink/40",
                "transition-all duration-300 hover:scale-105 hover:shadow-lg"
              )}
            >
              {/* Image container */}
              <div className="aspect-[3/4] relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-xl font-bold mb-1 drop-shadow-md">
                  {category.name}
                </h3>
                <p className="text-sm opacity-90 drop-shadow-md">
                  {category.description}
                </p>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-boutique-gold shadow-lg opacity-80" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;