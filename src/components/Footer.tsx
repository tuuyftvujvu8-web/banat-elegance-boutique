import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-boutique-pink to-boutique-rose text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand section */}
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end space-x-2 rtl:space-x-reverse mb-4">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-xl font-bold">ب</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">بنات</h3>
                <p className="text-sm opacity-90">Elegance Boutique</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              وجهتك الأولى للأناقة والجمال<br />
              نقدم لك أفضل المنتجات العصرية
            </p>
          </div>

          {/* Contact info */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">تواصلي معنا</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse">
                <Phone className="h-4 w-4" />
                <a href="https://wa.me/22236123456" className="hover:underline">
                  +222 36 12 34 56
                </a>
              </div>
              <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@banatboutique.mr" className="hover:underline">
                  info@banatboutique.mr
                </a>
              </div>
              <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse">
                <MapPin className="h-4 w-4" />
                <span>نواكشوط، موريتانيا</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
            <div className="space-y-2">
              <div><a href="#" className="hover:underline opacity-90">الرئيسية</a></div>
              <div><a href="#" className="hover:underline opacity-90">المنتجات</a></div>
              <div><a href="#" className="hover:underline opacity-90">من نحن</a></div>
              <div><a href="#" className="hover:underline opacity-90">اتصلي بنا</a></div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p className="text-sm opacity-75">
            © 2024 بنات بوتيك. جميع الحقوق محفوظة | تم التطوير بواسطة فريق بنات
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;