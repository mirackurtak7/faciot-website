'use client';

import Link from 'next/link';

interface FooterLink {
  href?: string;
  onClick?: () => void;
  label: string;
}

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks: Record<string, FooterLink[]> = {
    'Ürün': [
      { onClick: () => scrollToSection('urun'), label: 'Özellikler' },
      { onClick: () => scrollToSection('destek'), label: 'Destek' }
    ],
    'Çözümler': [
      { onClick: () => scrollToSection('cozumler'), label: 'Tel & Kablo' },
      { onClick: () => scrollToSection('cozumler'), label: 'Metal' },
      { onClick: () => scrollToSection('cozumler'), label: 'Plastik' },
      { onClick: () => scrollToSection('cozumler'), label: 'Gıda' }
    ],
    'Destek': [
      { onClick: () => scrollToSection('destek'), label: 'Yardım Merkezi' },
      { href: '/iletisim', label: 'İletişim' }
    ],
    'Şirket': [
      { onClick: () => scrollToSection('sirket'), label: 'Hakkımızda' },
      { href: '/iletisim', label: 'Kariyer' }
    ]
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#665EFF] to-[#6B57FF] bg-clip-text text-transparent font-['Pacifico']">
                FACIOT
              </span>
            </Link>
            <p className="text-gray-600 mb-6 max-w-sm">
              Yapay zeka destekli üretkenlik çözümleriyle fabrika operasyonlarınızı dönüştürün. 
              FACIOT ile daha akıllı, daha verimli üretim süreçleri.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-lg hover:bg-[#665EFF] hover:text-white transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#665EFF] focus:ring-opacity-50">
                <i className="ri-twitter-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-lg hover:bg-[#665EFF] hover:text-white transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#665EFF] focus:ring-opacity-50">
                <i className="ri-linkedin-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-lg hover:bg-[#665EFF] hover:text-white transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#665EFF] focus:ring-opacity-50">
                <i className="ri-github-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-lg hover:bg-[#665EFF] hover:text-white transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#665EFF] focus:ring-opacity-50">
                <i className="ri-youtube-fill text-lg"></i>
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-gray-900 font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    {'href' in link ? (
                      <Link
                        href={link.href!}
                        className="text-gray-600 hover:text-[#665EFF] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#665EFF] focus:ring-opacity-50 rounded-md px-1 py-0.5"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <button
                        onClick={link.onClick}
                        className="text-gray-600 hover:text-[#665EFF] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#665EFF] focus:ring-opacity-50 rounded-md px-1 py-0.5"
                      >
                        {link.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            © 2024 FACIOT. Tüm hakları saklıdır.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/iletisim" className="text-gray-600 hover:text-[#665EFF] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#665EFF] focus:ring-opacity-50 rounded-md px-2 py-1">
              Gizlilik Politikası
            </Link>
            <Link href="/iletisim" className="text-gray-600 hover:text-[#665EFF] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#665EFF] focus:ring-opacity-50 rounded-md px-2 py-1">
              Kullanım Şartları
            </Link>
            <Link href="/iletisim" className="text-gray-600 hover:text-[#665EFF] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#665EFF] focus:ring-opacity-50 rounded-md px-2 py-1">
              Çerez Politikası
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}