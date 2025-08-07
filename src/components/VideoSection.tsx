const VideoSection = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-br from-boutique-cream to-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-boutique-pink to-boutique-gold bg-clip-text text-transparent">
            تعرفي على مجموعتنا
          </h2>
          <p className="text-muted-foreground">
            شاهدي آخر صيحات الموضة والأناقة في بوتيك بنات
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          {/* Video container with aspect ratio */}
          <div className="aspect-video bg-muted/20 border-2 border-boutique-pink/20">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Banat Boutique - Latest Collection"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-boutique-gold opacity-60 blur-sm" />
          <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-boutique-pink opacity-40 blur-sm" />
        </div>

        {/* Video description */}
        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            استمتعي بتجربة تسوق فريدة واكتشفي أحدث التصاميم العصرية
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;