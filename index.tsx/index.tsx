import React, { useState, useEffect } from 'react';
import { Phone, ChevronDown } from 'lucide-react';

const Index = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [isVisible, setIsVisible] = useState({});
  
  // Animation handler for scroll
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100 && elementBottom > 0) {
          setIsVisible(prev => ({ ...prev, [index]: true }));
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // Enhanced styling for service items
  const serviceIconStyles = "inline-block p-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black mb-6";
  
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          <div className="flex items-center">
            <a 
              href="tel:043219638696" 
              className="mr-3 bg-yellow-400 rounded-full h-10 w-10 flex items-center justify-center hover:bg-yellow-500 transition-colors"
              aria-label="Anrufen"
            >
              <Phone className="h-5 w-5 text-black" />
            </a>
            <div className="text-2xl font-bold">
              Taxi<span className="text-yellow-400">Go</span> Neumünster
            </div>
          </div>
          
          <div className="lg:hidden">
            <button className="text-black hover:text-yellow-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
          <nav className="hidden lg:block">
            <ul className="flex space-x-6">
              <li><a href="/" className="font-semibold hover:text-yellow-500 transition-colors">Startseite</a></li>
              <li><a href="leistungen.html" className="font-semibold hover:text-yellow-500 transition-colors">Leistungen</a></li>
              <li><a href="ueber-uns.html" className="font-semibold hover:text-yellow-500 transition-colors">Über uns</a></li>
              <li><a href="kontakt.html" className="font-semibold hover:text-yellow-500 transition-colors">Kontakt</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section className="relative h-[70vh] flex items-center pt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black z-0">
          <div className="absolute inset-0 opacity-20" 
               style={{ 
                 backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255, 218, 0, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255, 218, 0, 0.2) 0%, transparent 50%)' 
               }}>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-left ml-[5%]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 text-white 
                           animate-fade-in" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
              Taxi in Neumünster gesucht?
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white animate-fade-in" style={{animationDelay: '0.2s', textShadow: '1px 1px 3px rgba(0,0,0,0.5)'}}>
              Ihr sicherer und bequemer Taxi-Service in Neumünster, Tag und Nacht.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <a 
                href="tel:043219638696" 
                className="py-3 px-6 bg-yellow-400 text-black font-bold rounded hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2 border-2 border-white shadow-lg transform hover:scale-105 transition-transform"
              >
                <Phone className="h-5 w-5" />
                <span>Jetzt anrufen</span>
              </a>
              <a 
                href="https://wa.me/4943219638696" 
                className="py-3 px-6 bg-green-500 text-white font-bold rounded hover:bg-green-600 transition-colors flex items-center justify-center gap-2 border-2 border-white shadow-lg transform hover:scale-105 transition-transform"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>Per WhatsApp bestellen</span>
              </a>
            </div>
          </div>
        </div>
        <a href="#services" className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white opacity-80 hover:opacity-100 transition-opacity bg-black/30 w-12 h-12 rounded-full flex items-center justify-center">
          <ChevronDown className="h-8 w-8" />
        </a>
      </section>

      {/* Services Section - Enhanced */}
      <section id="services" className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Unsere Leistungen</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-b-4 border-yellow-400 hover:translate-y-[-5px]">
              <div className={serviceIconStyles}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Flughafen-Transfer</h3>
              <p className="text-gray-600">Zuverlässiger Transfer zu allen Flughäfen in der Region. Pünktlich und stressfrei.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-b-4 border-yellow-400 hover:translate-y-[-5px]">
              <div className={serviceIconStyles}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Kurierfahrten</h3>
              <p className="text-gray-600">Schnelle und sichere Lieferung Ihrer wichtigen Dokumente und Pakete.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-b-4 border-yellow-400 hover:translate-y-[-5px]">
              <div className={serviceIconStyles}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Schülerfahrten</h3>
              <p className="text-gray-600">Sicherer Transport für Schüler mit besonderem Augenmerk auf Pünktlichkeit.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-b-4 border-yellow-400 hover:translate-y-[-5px]">
              <div className={serviceIconStyles}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Einkaufsfahrten</h3>
              <p className="text-gray-600">Bequeme Unterstützung beim Transport Ihrer Einkäufe.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-b-4 border-yellow-400 hover:translate-y-[-5px]">
              <div className={serviceIconStyles}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Businessfahrten</h3>
              <p className="text-gray-600">Professioneller Service für Geschäftstermine und Konferenzen.</p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <a href="leistungen.html" className="py-3 px-6 bg-yellow-400 text-black font-bold rounded hover:bg-yellow-500 transition-colors inline-block shadow-md hover:shadow-lg transform hover:scale-105 transition-transform">Alle Leistungen ansehen</a>
          </div>
        </div>
      </section>

      {/* Fleet Section - Enhanced */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Unsere Flotte</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-yellow-400">
              <div className="text-yellow-400 text-3xl mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4 border-2 border-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Toyota BZ4X</h3>
              <p className="text-gray-600 text-center">Modern, komfortabel und umweltfreundlich - unser Toyota BZ4X garantiert Ihnen eine angenehme Fahrt.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-yellow-400">
              <div className="text-yellow-400 text-3xl mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4 border-2 border-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Toyota Prius Plus</h3>
              <p className="text-gray-600 text-center">Geräumig und effizient - ideal für Gruppen oder wenn Sie mehr Platz für Ihr Gepäck benötigen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prices Section - Enhanced */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Unsere Preise</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">Alle Preise entsprechen den offiziellen Tarifen in der Stadt Neumünster</p>
          </div>
          
          <div className="max-w-2xl mx-auto overflow-hidden rounded-lg">
            <table className="w-full bg-white shadow-xl border-collapse">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold uppercase">Leistung</th>
                  <th className="px-6 py-4 text-right font-bold uppercase">Preis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium">Grundpreis</td>
                  <td className="px-6 py-4 text-right">3,50 €</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium">Preis pro Kilometer</td>
                  <td className="px-6 py-4 text-right">2,20 €</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium">Wartezeit pro Stunde</td>
                  <td className="px-6 py-4 text-right">30,00 €</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* About Section - Enhanced */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Über Uns</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4"></div>
          </div>
          
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-100">
            <p className="mb-4 text-gray-700 leading-relaxed">Willkommen bei TaxiGo Neumünster, Ihrem zuverlässigen Partner für Taxifahrten in Neumünster und Umgebung.</p>
            <p className="mb-4 text-gray-700 leading-relaxed">Seit 2025 bieten wir professionelle Taxidienstleistungen mit Fokus auf Kundenzufriedenheit, Pünktlichkeit und Komfort.</p>
            <p className="mb-4 text-gray-700 leading-relaxed">Unser Team besteht aus erfahrenen Fahrern, die die Region bestens kennen und Sie sicher und zuverlässig an Ihr Ziel bringen.</p>
            <p className="mb-4 text-gray-700 leading-relaxed">Wir legen großen Wert auf moderne, gepflegte Fahrzeuge und einen freundlichen Service, damit Ihre Fahrt so angenehm wie möglich wird.</p>
            
            <div className="text-center mt-8">
              <a href="ueber-uns.html" className="py-3 px-6 bg-yellow-400 text-black font-bold rounded hover:bg-yellow-500 transition-colors inline-block shadow-md hover:shadow-lg transform hover:scale-105 transition-transform">Mehr über uns erfahren</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Enhanced */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Häufig gestellte Fragen</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4"></div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                  <button 
                    className="w-full flex justify-between items-center p-5 text-left font-semibold hover:bg-gray-50 transition-colors focus:outline-none" 
                    onClick={() => toggleFaq(index)}
                  >
                    {item.question}
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 transition-transform ${expandedFaq === index ? 'transform rotate-180' : ''} text-yellow-500`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div 
                    className={`transition-all duration-300 overflow-hidden ${expandedFaq === index ? 'max-h-[500px] px-5 pb-5' : 'max-h-0'}`}
                  >
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Enhanced */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" 
             style={{ 
               backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255, 218, 0, 0.2) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255, 218, 0, 0.1) 0%, transparent 50%)' 
             }}>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Bereit, ein Taxi anzurufen?</h2>
            <p className="text-xl mb-8">Kontaktieren Sie uns jetzt für eine schnelle und zuverlässige Fahrt!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:043219638696" 
                className="py-3 px-6 bg-yellow-400 text-black font-bold rounded hover:bg-yellow-500 transition-all duration-300 flex items-center justify-center gap-2 border-2 border-white shadow-xl transform hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                <span>Jetzt anrufen</span>
              </a>
              <a 
                href="https://wa.me/4943219638696" 
                className="py-3 px-6 bg-green-500 text-white font-bold rounded hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-2 border-2 border-white shadow-xl transform hover:scale-105"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>Per WhatsApp bestellen</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Enhanced */}
      <footer className="bg-gray-900 text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 border-b-2 border-yellow-400 pb-2 inline-block">Über uns</h3>
              <p className="text-gray-300 mb-4">TaxiGo Neumünster ist Ihr zuverlässiger Partner für Taxifahrten in Neumünster und Umgebung. Wir bieten professionellen Service zu fairen Preisen.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 border-b-2 border-yellow-400 pb-2 inline-block">Schnelllinks</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-300 hover:text-yellow-400 transition-colors">Startseite</a></li>
                <li><a href="leistungen.html" className="text-gray-300 hover:text-yellow-400 transition-colors">Leistungen</a></li>
                <li><a href="ueber-uns.html" className="text-gray-300 hover:text-yellow-400 transition-colors">Über uns</a></li>
                <li><a href="kontakt.html" className="text-gray-300 hover:text-yellow-400 transition-colors">Kontakt</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 border-b-2 border-yellow-400 pb-2 inline-block">Kontakt</h3>
              <ul className="space-y-2">
                <li>
                  <a href="tel:043219638696" className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>04321-9638696</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:taxigoneumuenster@gmail.com" className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>taxigoneumuenster@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/4943219638696" className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    <span>WhatsApp</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
            <p>&copy; 2025 TaxiGo Neumünster. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>

      {/* Mobile Menu - Hidden by default */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-50">
        <div className="flex justify-around items-center py-2">
          <a href="tel:043219638696" className="flex flex-col items-center p-2 text-gray-700">
            <Phone className="h-6 w-6" />
            <span className="text-xs mt-1">Anrufen</span>
          </a>
          <a href="https://wa.me/4943219638696" className="flex flex-col items-center p-2 text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span className="text-xs mt-1">WhatsApp</span>
          </a>
          <a href="/" className="flex flex-col items-center p-2 text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-xs mt-1">Home</span>
          </a>
          <a href="kontakt.html" className="flex flex-col items-center p-2 text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-xs mt-1">Kontakt</span>
          </a>
        </div>
      </div>
    </div>
  );
};

// FAQ data
const faqItems = [
  {
    question: "Wie kann ich ein Taxi bestellen?",
    answer: "Sie können uns telefonisch unter 04321-9638696 erreichen, per WhatsApp kontaktieren oder über unser Kontaktformular auf der Website eine Anfrage stellen."
  },
  {
    question: "Kann ich ein Taxi im Voraus buchen?",
    answer: "Ja, Sie können Ihre Fahrt gerne im Voraus buchen. Dies empfehlen wir besonders für Flughafentransfers oder wenn Sie zu einem bestimmten Zeitpunkt abgeholt werden möchten."
  },
  {
    question: "Welche Zahlungsmethoden akzeptieren Sie?",
    answer: "Wir akzeptieren Barzahlung sowie Kartenzahlung (EC und Kreditkarte) direkt im Fahrzeug."
  },
  {
    question: "Bieten Sie auch Fahrten außerhalb von Neumünster an?",
    answer: "Ja, wir fahren auch überregional und bieten Langstreckenfahrten an, z.B. zu Flughäfen oder in andere Städte. Kontaktieren Sie uns für ein individuelles Angebot."
  },
  {
    question: "Kann ich ein größeres Taxi für mehrere Personen bestellen?",
    answer: "Ja, unser Toyota Prius Plus bietet Platz für bis zu 6 Personen. Bitte geben Sie bei der Bestellung an, wie viele Personen mitfahren."
  },
  {
    question: "Wie berechnen sich die Fahrpreise?",
    answer: "Die Preise berechnen sich nach dem offiziellen Taxitarif der Stadt Neumünster, bestehend aus Grundpreis und Kilometerpreis. Für bestimmte Strecken wie Flughafentransfers bieten wir auch Festpreise an."
  },
  {
    question: "Fahren Sie 24 Stunden am Tag?",
    answer: "Ja, unser Service steht Ihnen rund um die Uhr zur Verfügung, auch an Wochenenden und Feiertagen."
  },
  {
    question: "Kann ich spezielle Anforderungen angeben (z.B. Kindersitz)?",
    answer: "Selbstverständlich. Bitte teilen Sie uns bei der Buchung Ihre speziellen Wünsche mit, damit wir diese berücksichtigen können."
  },
  {
    question: "Wie viel Gepäck kann ich mitnehmen?",
    answer: "Unsere Fahrzeuge bieten Platz für Standardgepäck. Bei größerem Gepäckaufkommen empfehlen wir, dies bei der Bestellung anzugeben, damit wir ein passendes Fahrzeug für Sie bereitstellen können."
  },
  {
    question: "Fahren Sie auch zum Flughafen Hamburg?",
    answer: "Ja, wir bieten regelmäßige Fahrten zum Flughafen Hamburg und anderen Flughäfen in der Region an. Für Flughafentransfers empfehlen wir eine frühzeitige Buchung."
  }
];

export default Index;
