'use client';

import { useState } from 'react';

export default function IletisimPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    lineCount: '',
    message: '',
    kvkk: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formType, setFormType] = useState('quote'); // 'quote' or 'demo'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.kvkk) {
      alert('KVKK onayı gereklidir.');
      return;
    }

    setIsSubmitting(true);
    
    // Placeholder submit - replace with actual Formspree or mailto
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      lineCount: '',
      message: '',
      kvkk: false
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            İletişim
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            FACIOT ile üretim verimliliğinizi artırmaya hazır mısınız? 7 günlük ücretsiz pilot için bize ulaşın.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Contact Form */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Bize Ulaşın</h2>
              
              {/* Form Type Selector */}
              <div className="flex gap-2 mb-6">
                <button
                  type="button"
                  onClick={() => setFormType('quote')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                    formType === 'quote'
                      ? 'bg-gradient-to-r from-[#665EFF] to-[#6B57FF] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Fiyat Teklifi
                </button>
                <button
                  type="button"
                  onClick={() => setFormType('demo')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                    formType === 'demo'
                      ? 'bg-gradient-to-r from-[#665EFF] to-[#6B57FF] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Canlı Demo
                </button>
              </div>
            </div>
            
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-check-line text-white text-2xl w-8 h-8 flex items-center justify-center"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Mesajınız Gönderildi!</h3>
                <p className="text-gray-600 mb-6">
                  En kısa sürede size dönüş yapacağız. {formType === 'demo' ? 'Demo' : 'Pilot'} sürecinizi başlatmak için gerekli bilgileri paylaşacağız.
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  className="bg-gradient-to-r from-[#665EFF] to-[#6B57FF] px-6 py-2 rounded-lg text-white font-medium hover:opacity-90 transition-opacity whitespace-nowrap cursor-pointer"
                >
                  Yeni Mesaj Gönder
                </button>
              </div>
            ) : (
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      aria-label="Ad Soyad"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#665EFF] focus:border-transparent text-gray-900"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                      E-posta *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      aria-label="E-posta"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#665EFF] focus:border-transparent text-gray-900"
                      placeholder="ornek@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2 text-gray-700">
                      Şirket *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      aria-label="Şirket"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#665EFF] focus:border-transparent text-gray-900"
                      placeholder="Şirket adınız"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-700">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      aria-label="Telefon"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#665EFF] focus:border-transparent text-gray-900"
                      placeholder="+90 5xx xxx xx xx"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="lineCount" className="block text-sm font-medium mb-2 text-gray-700">
                    Hat Sayısı
                  </label>
                  <select
                    id="lineCount"
                    name="lineCount"
                    value={formData.lineCount}
                    onChange={handleChange}
                    aria-label="Hat Sayısı"
                    className="w-full px-4 py-3 pr-8 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#665EFF] focus:border-transparent text-gray-900 cursor-pointer"
                  >
                    <option value="">Hat sayısını seçin</option>
                    <option value="1-5">1-5 hat</option>
                    <option value="6-15">6-15 hat</option>
                    <option value="16-50">16-50 hat</option>
                    <option value="50+">50+ hat</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">
                    Mesaj *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    maxLength={500}
                    required
                    rows={5}
                    aria-label="Mesaj"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#665EFF] focus:border-transparent resize-none text-gray-900"
                    placeholder={
                      formType === 'demo' 
                        ? "Demo sırasında görmek istediğiniz özellikleri belirtin..."
                        : "Projeniz hakkında kısaca bilgi verin (maks. 500 karakter)"
                    }
                  />
                  <div className="text-right text-sm text-gray-500 mt-1">
                    {formData.message.length}/500
                  </div>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="kvkk"
                    name="kvkk"
                    checked={formData.kvkk}
                    onChange={handleChange}
                    aria-label="KVKK Onayı"
                    className="mt-1 w-4 h-4 text-[#665EFF] bg-white border-gray-300 rounded focus:ring-[#665EFF] cursor-pointer"
                  />
                  <label htmlFor="kvkk" className="ml-3 text-sm text-gray-600 cursor-pointer">
                    Kişisel verilerimin KVKK kapsamında işlenmesine onay veriyorum. *
                  </label>
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.kvkk}
                    className="flex-1 px-8 py-4 bg-gradient-to-r from-[#665EFF] to-[#6B57FF] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <i className="ri-loader-4-line animate-spin mr-2 w-5 h-5 flex items-center justify-center"></i>
                        Gönderiliyor...
                      </span>
                    ) : formType === 'demo' ? (
                      <span className="flex items-center justify-center">
                        <i className="ri-video-line mr-2 w-5 h-5 flex items-center justify-center"></i>
                        Canlı Demo Talebi
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <i className="ri-file-text-line mr-2 w-5 h-5 flex items-center justify-center"></i>
                        Fiyat Teklifi Al
                      </span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Panel - Contact Information */}
          <div className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-6 text-gray-900">İletişim Bilgileri</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#665EFF] to-[#6B57FF] rounded-lg flex items-center justify-center">
                    <i className="ri-mail-line text-white w-5 h-5 flex items-center justify-center"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-900">Satış</h4>
                    <a href="mailto:satis@faciot.com" className="text-[#665EFF] hover:text-[#5B52FF] transition-colors cursor-pointer">
                      satis@faciot.com
                    </a>
                    <p className="text-sm text-gray-600">Pilot başlatma ve fiyatlandırma</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#665EFF] to-[#6B57FF] rounded-lg flex items-center justify-center">
                    <i className="ri-headphone-line text-white w-5 h-5 flex items-center justify-center"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-900">Teknik Destek</h4>
                    <a href="mailto:destek@faciot.com" className="text-[#665EFF] hover:text-[#5B52FF] transition-colors cursor-pointer">
                      destek@faciot.com
                    </a>
                    <p className="text-sm text-gray-600">Teknik sorular ve platform desteği</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#665EFF] to-[#6B57FF] rounded-lg flex items-center justify-center">
                    <i className="ri-map-pin-line text-white w-5 h-5 flex items-center justify-center"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-900">Adres</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Maslak Mahallesi, Büyükdere Cd. No:255<br/>
                      Nurol Plaza B Blok Kat:13<br/>
                      34398 Sarıyer, İstanbul
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Ofis Konumu</h3>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <i className="ri-map-pin-line text-4xl text-gray-400 mb-2 w-16 h-16 flex items-center justify-center mx-auto"></i>
                  <p className="text-gray-500">Harita Yükleniyor...</p>
                  <p className="text-sm text-gray-400 mt-1">
                    Maslak, İstanbul
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}