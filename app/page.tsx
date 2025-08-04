
'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gray-900">Duruşu azaltın,</span>
              <br />
              <span className="bg-gradient-to-r from-[#665EFF] to-[#6B57FF] bg-clip-text text-transparent">
                OEE'yi yükseltin.
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              FACIOT, 7 günde ölçülebilir etki: IT'siz başlayın, sonra SAP/PLC ile büyütün.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard">
                <button type="button" className="bg-gradient-to-r from-[#665EFF] to-[#6B57FF] px-8 py-4 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity whitespace-nowrap cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
                  Canlı Demo
                </button>
              </Link>
              <Link href="/iletisim">
                <button type="button" className="border-2 border-[#665EFF] px-8 py-4 rounded-lg text-[#665EFF] font-semibold hover:bg-[#665EFF] hover:text-white transition-colors whitespace-nowrap cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#665EFF] focus:ring-opacity-50">
                  Fiyat Teklifi Al
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Gerçek Zamanlı Dashboard
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Üretim verilerinizi anlık olarak takip edin, OEE değerlerinizi analiz edin ve kritik uyarıları anında görün
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#665EFF]/20 to-[#6B57FF]/20 rounded-xl blur-3xl"></div>
            <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden">
              {/* Dashboard Preview Header */}
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-xl font-bold bg-gradient-to-r from-[#665EFF] to-[#6B57FF] bg-clip-text text-transparent">
                      FACIOT
                    </span>
                    <span className="bg-[#665EFF] text-white px-3 py-1 rounded-lg text-sm font-medium">
                      Dashboard
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <span>PLC Bağlantısı: Bağlı</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Dashboard Preview Content */}
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* OEE Chart Preview */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">OEE Breakdown</h3>
                    <div className="flex items-center justify-center">
                      <div className="relative">
                        <div className="w-32 h-32 rounded-full border-8 border-gray-200 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900">67%</div>
                            <div className="text-sm text-gray-600">OEE</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Kullanılabilirlik</span>
                        <span className="font-semibold">75%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Performans</span>
                        <span className="font-semibold">94%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Kalite</span>
                        <span className="font-semibold">95%</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Production Chart Preview */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Hedef vs Gerçekleşen</h3>
                    <div className="flex items-end justify-center space-x-8 h-32">
                      <div className="flex flex-col items-center">
                        <div className="w-8 bg-blue-500 rounded-t" style={{ height: '60px' }}></div>
                        <span className="text-xs text-gray-600 mt-2">Hedef</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-8 bg-green-500 rounded-t" style={{ height: '42px' }}></div>
                        <span className="text-xs text-gray-600 mt-2">Gerçekleşen</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Alerts Preview */}
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Aktif Uyarılar</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-lg text-sm">Hız yavaşlıyor</span>
                    <span className="px-3 py-1 bg-red-100 text-red-800 rounded-lg text-sm">Sıcaklık kritik</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-lg text-sm">Basınç düşük</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link href="/dashboard">
              <button type="button" className="bg-gradient-to-r from-[#665EFF] to-[#6B57FF] px-8 py-4 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity">
                Dashboard'ı Keşfet
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Features Section */}
      <section id="urun" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to optimize your production efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'ri-eye-line',
                title: 'Live Monitoring',
                description: 'Track your production lines in real-time and intervene instantly.'
              },
              {
                icon: 'ri-bar-chart-2-line',
                title: 'Downtime Pareto',
                description: 'Identify the biggest downtime causes and take priority actions.'
              },
              {
                icon: 'ri-dashboard-3-line',
                title: 'OEE Analysis',
                description: 'Analyze your Overall Equipment Effectiveness values in detail.'
              },
              {
                icon: 'ri-team-line',
                title: 'Shift Performance',
                description: 'Compare and improve shift-based performance.'
              },
              {
                icon: 'ri-file-chart-line',
                title: 'Reporting',
                description: 'Accelerate management briefings with automated reports.'
              },
              {
                icon: 'ri-plug-line',
                title: 'Integrations',
                description: 'Seamless integration with SAP, PLC and other systems.'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow cursor-pointer group border border-gray-100"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-[#665EFF] to-[#6B57FF] rounded-lg mb-6">
                  <i className={`${feature.icon} text-2xl text-white`}></i>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-[#665EFF] transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="cozumler" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored solutions for different manufacturing industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: ' Wire & Cable',
                image: 'https://readdy.ai/api/search-image?query=Modern%20wire%20and%20cable%20manufacturing%20facility%20with%20automated%20production%20lines%2C%20copper%20wires%2C%20industrial%20machinery%2C%20clean%20factory%20environment%20with%20blue%20and%20purple%20lighting%20accents%2C%20professional%20industrial%20photography%20style&width=400&height=300&seq=wire-cable&orientation=landscape',
                benefits: [
                  'Reduce wire break downtime',
                  'Optimize extrusion speed',
                  'Quality control automation'
                ]
              },
              {
                title: 'Metal Processing',
                image: 'https://readdy.ai/api/search-image?query=Advanced%20metal%20processing%20factory%20with%20CNC%20machines%2C%20steel%20cutting%20equipment%2C%20automated%20robotic%20arms%2C%20modern%20industrial%20environment%20with%20sophisticated%20machinery%2C%20blue%20and%20purple%20accent%20lighting&width=400&height=300&seq=metal-processing&orientation=landscape',
                benefits: [
                  'Tool life optimization',
                  'Machining efficiency',
                  'Predictive maintenance'
                ]
              },
              {
                title: 'Plastic Manufacturing',
                image: 'https://readdy.ai/api/search-image?query=Modern%20plastic%20manufacturing%20facility%20with%20injection%20molding%20machines%2C%20automated%20production%20lines%2C%20quality%20control%20systems%2C%20clean%20industrial%20environment%20with%20advanced%20machinery&width=400&height=300&seq=plastic-manufacturing&orientation=landscape',
                benefits: [
                  'Injection molding optimization',
                  'Cycle time reduction',
                  'Defect rate minimization'
                ]
              },
              {
                title: 'Food Production',
                image: 'https://readdy.ai/api/search-image?query=Clean%20modern%20food%20production%20facility%20with%20automated%20packaging%20lines%2C%20conveyor%20belts%2C%20quality%20control%20systems%2C%20hygienic%20industrial%20environment%20with%20stainless%20steel%20equipment&width=400&height=300&seq=food-production&orientation=landscape',
                benefits: [
                  'Packaging line efficiency',
                  'Temperature control',
                  'Quality assurance tracking'
                ]
              }
            ].map((solution, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="h-48 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={`${solution.title} manufacturing`}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {solution.title}
                  </h3>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <i className="ri-check-line text-[#665EFF] mr-2 w-4 h-4 flex items-center justify-center"></i>
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="destek" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
              Support & FAQ
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get help when you need it with our comprehensive support
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h3>
              
              {[
                {
                  question: 'How quickly can we see results?',
                  answer: 'Most customers see measurable improvements within 7 days of implementation. Our no-IT-required setup allows for immediate data collection and analysis.'
                },
                {
                  question: 'Do we need IT support for setup?',
                  answer: 'No! FACIOT is designed to start without IT involvement. You can begin collecting data manually and gradually integrate with your existing systems.'
                },
                {
                  question: 'What integrations do you support?',
                  answer: 'We support SAP OData, OPC UA/PLC connections, and various notification channels including email, SMS, and webhooks.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-3">{faq.question}</h4>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Level Agreement</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#665EFF] to-[#6B57FF] rounded-lg flex items-center justify-center">
                    <i className="ri-time-line text-white w-5 h-5 flex items-center justify-center"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Response Time</h4>
                    <p className="text-gray-600">4 hours for critical issues, 24 hours for standard support</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#665EFF] to-[#6B57FF] rounded-lg flex items-center justify-center">
                    <i className="ri-shield-check-line text-white w-5 h-5 flex items-center justify-center"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Uptime Guarantee</h4>
                    <p className="text-gray-600">99.9% uptime with automatic failover protection</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#665EFF] to-[#6B57FF] rounded-lg flex items-center justify-center">
                    <i className="ri-headphone-line text-white w-5 h-5 flex items-center justify-center"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Support Channels</h4>
                    <p className="text-gray-600">Email, phone, and live chat support available</p>
                  </div>
                </div>
              </div>

              <Link href="/iletisim" className="block mt-8">
                <button type="button" className="w-full bg-gradient-to-r from-[#665EFF] to-[#6B57FF] px-6 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity whitespace-nowrap cursor-pointer">
                  Contact Support
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section id="sirket" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
              About FACIOT
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Our Mission */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#665EFF] to-[#6B57FF] rounded-lg flex items-center justify-center mr-4">
                  <i className="ri-target-line text-white text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To democratize manufacturing excellence by making advanced production analytics accessible to every factory, 
                regardless of their IT infrastructure or technical expertise.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#665EFF] rounded-full mt-2"></div>
                  <p className="text-gray-600">Eliminate barriers to digital transformation</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#665EFF] rounded-full mt-2"></div>
                  <p className="text-gray-600">Enable data-driven decision making for all manufacturers</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#665EFF] rounded-full mt-2"></div>
                  <p className="text-gray-600">Reduce downtime and increase OEE across industries</p>
                </div>
              </div>
            </div>

            {/* Our Vision */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                  <i className="ri-eye-line text-white text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                A world where every manufacturing operation runs at optimal efficiency, 
                powered by intelligent data insights and seamless automation.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-gray-600">Zero unplanned downtime in manufacturing</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-gray-600">Real-time visibility across all production lines</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-gray-600">Sustainable and efficient manufacturing practices</p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Our Core Values</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#665EFF] to-[#6B57FF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-lightbulb-line text-white text-2xl"></i>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h4>
                <p className="text-gray-600">Continuously pushing boundaries to create cutting-edge manufacturing solutions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#665EFF] to-[#6B57FF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-shield-check-line text-white text-2xl"></i>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Reliability</h4>
                <p className="text-gray-600">Delivering consistent, dependable solutions that manufacturers can trust</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#665EFF] to-[#6B57FF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-team-line text-white text-2xl"></i>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Partnership</h4>
                <p className="text-gray-600">Building long-term relationships with our customers for mutual success</p>
              </div>
            </div>
          </div>

          {/* Logo Cloud */}
          <div className="text-center mt-16">
            <h3 className="text-xl font-semibold text-gray-900 mb-8">Trusted by leading manufacturers</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
              {['Company A', 'Company B', 'Company C', 'Company D', 'Company E', 'Company F'].map((company, index) => (
                <div key={index} className="bg-gray-200 px-6 py-3 rounded-lg text-gray-600 font-semibold">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
              Customer Success Stories
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "FACIOT helped us reduce downtime by 35% in just two weeks. The no-IT setup was exactly what we needed to get started quickly.",
                author: "John Smith",
                title: "Plant Manager",
                company: "MetalWorks Inc.",
                avatar: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20middle-aged%20plant%20manager%20in%20industrial%20setting%2C%20confident%20expression%2C%20manufacturing%20background&width=100&height=100&seq=testimonial-1&orientation=squarish"
              },
              {
                quote: "The SAP integration was seamless and the real-time insights transformed how we manage our production floor. Highly recommended!",
                author: "Maria Garcia",
                title: "Operations Director",
                company: "PlastiCorp Solutions",
                avatar: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20female%20operations%20director%20in%20business%20attire%2C%20modern%20office%20background%2C%20confident%20leadership%20style&width=100&height=100&seq=testimonial-2&orientation=squarish"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <i key={star} className="ri-star-fill text-yellow-400 w-5 h-5 flex items-center justify-center"></i>
                  ))}
                </div>
                <blockquote className="text-lg text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={`${testimonial.author} avatar`}
                    className="w-12 h-12 rounded-full mr-4 object-cover object-top"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.title}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-[#665EFF] to-[#6B57FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            7 günde ölçülebilir etki görün
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Pilot projenizi başlatın, IT olmadan veri toplamaya başlayın ve entegrasyonlarla büyütün
          </p>
          <Link href="/iletisim">
            <button type="button" className="bg-white text-[#665EFF] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
              Pilot Projeyi Başlat
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
