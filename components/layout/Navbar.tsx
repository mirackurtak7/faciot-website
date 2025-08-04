'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isDashboard = pathname === '/dashboard';

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Dashboard sayfasında Navbar'ı gizle
  if (isDashboard) {
    return null;
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-serif font-bold text-purple-600">
              FACIOT
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <button
              type="button"
              onClick={() => scrollToSection('urun')}
              className="text-gray-700 hover:text-[#665EFF] transition-colors whitespace-nowrap cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#665EFF] focus:ring-opacity-50 rounded-md px-2 py-1"
              aria-label="Ürün bölümüne git"
            >
              Ürün
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('cozumler')}
              className="text-gray-700 hover:text-[#665EFF] transition-colors whitespace-nowrap cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#665EFF] focus:ring-opacity-50 rounded-md px-2 py-1"
              aria-label="Çözümler bölümüne git"
            >
              Çözümler
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('destek')}
              className="text-gray-700 hover:text-[#665EFF] transition-colors whitespace-nowrap cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#665EFF] focus:ring-opacity-50 rounded-md px-2 py-1"
              aria-label="Destek bölümüne git"
            >
              Destek
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('sirket')}
              className="text-gray-700 hover:text-[#665EFF] transition-colors whitespace-nowrap cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#665EFF] focus:ring-opacity-50 rounded-md px-2 py-1"
              aria-label="Şirket bölümüne git"
            >
              Şirket
            </button>
            <Link 
              href="/iletisim"
              className="text-gray-700 hover:text-[#665EFF] transition-colors whitespace-nowrap cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#665EFF] focus:ring-opacity-50 rounded-md px-2 py-1"
              aria-label="İletişim sayfasına git"
            >
              İletişim
            </Link>
            <Link 
              href="/dashboard"
              className="bg-gradient-to-r from-[#665EFF] to-[#6B57FF] px-6 py-2 rounded-lg text-white font-medium hover:opacity-90 transition-opacity whitespace-nowrap cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              aria-label="Dashboard sayfasına git"
            >
              Dashboard
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#665EFF] focus:ring-opacity-50 rounded-md p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={isMenuOpen}
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <button
              type="button"
              onClick={() => scrollToSection('urun')}
              className="block w-full text-left py-2 text-gray-700 hover:text-[#665EFF] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#665EFF] focus:ring-opacity-50 rounded-md px-2"
            >
              Ürün
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('cozumler')}
              className="block w-full text-left py-2 text-gray-700 hover:text-[#665EFF] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#665EFF] focus:ring-opacity-50 rounded-md px-2"
            >
              Çözümler
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('destek')}
              className="block w-full text-left py-2 text-gray-700 hover:text-[#665EFF] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#665EFF] focus:ring-opacity-50 rounded-md px-2"
            >
              Destek
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('sirket')}
              className="block w-full text-left py-2 text-gray-700 hover:text-[#665EFF] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#665EFF] focus:ring-opacity-50 rounded-md px-2"
            >
              Şirket
            </button>
            <Link
              href="/iletisim"
              className="block w-full py-2 text-gray-700 hover:text-[#665EFF] transition-colors cursor-pointer text-left"
              onClick={() => setIsMenuOpen(false)}
            >
              İletişim
            </Link>
            <Link
              href="/dashboard"
              className="block w-full mt-4 bg-gradient-to-r from-[#665EFF] to-[#6B57FF] px-6 py-2 rounded-lg text-white font-medium hover:opacity-90 transition-opacity whitespace-nowrap cursor-pointer text-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}