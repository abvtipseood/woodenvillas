/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Wifi, Car, Utensils, Wind, Phone, MapPin, Mail, Globe, ChevronLeft, ChevronRight, Flame, Baby, ChevronDown, Facebook, Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const translations = {
  bg: {
    nav: {
      home: 'Начало',
      about: 'За нас',
      amenities: 'Удобства',
      gallery: 'Галерия',
      reviews: 'Отзиви',
      contact: 'Контакти',
      book: 'Резервирай'
    },
    hero: {
      title: 'Дървени Вили Лозенец',
      subtitle: 'Луксът среща природата',
      cta: 'Резервирай сега'
    },
    about: {
      title: 'Убежище на спокойствието',
      p1: 'Разположени в Лозенец, нашите бутикови дървени вили предлагат перфектното бягство от забързаното ежедневие. Създадени с мисъл за природата, те съчетават екологично дървено строителство с модерен лукс.',
      p2: 'Насладете се на свежия морски бриз, уханието на природата и безкомпромисния комфорт на нашата уютна атмосфера. Всяка вила е проектирана да ви донесе хармония и релакс.'
    },
    amenities: {
      title: 'Удобства',
      wifi: 'Бърз Wi-Fi',
      parking: 'Безплатен Паркинг',
      kitchen: 'Оборудвана Кухня',
      ac: 'Климатик',
      bbq: 'Барбекю',
      crib: 'Бебешко легло'
    },
    gallery: {
      title: 'Галерия'
    },
    reviews: {
      title: 'Какво казват гостите ни'
    },
    contact: {
      title: 'Очакваме ви',
      desc: 'Свържете се с нас, за да проверите наличността и да резервирате вашата почивка. Ние сме на разположение да отговорим на всички ваши въпроси.',
      location: 'с. Лозенец, България',
      ctaTitle: 'Готови ли сте за почивка?',
      ctaDesc: 'Обадете ни се директно за най-добри цени и условия.',
      ctaBtn: 'Резервирай сега'
    },
    footerFollow: 'Последвайте ни',
    footer: 'Дървени Вили Лозенец. Всички права запазени.'
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      amenities: 'Amenities',
      gallery: 'Gallery',
      reviews: 'Reviews',
      contact: 'Contact',
      book: 'Book Now'
    },
    hero: {
      title: 'Wooden Villas Lozenets',
      subtitle: 'Luxury meets nature',
      cta: 'Book Now'
    },
    about: {
      title: 'A Sanctuary of Tranquility',
      p1: 'Located in Lozenets, our boutique wooden villas offer the perfect escape from the hectic everyday life. Designed with nature in mind, they combine ecological wooden construction with modern luxury.',
      p2: 'Enjoy the fresh sea breeze, the scent of nature, and the uncompromising comfort of our cozy atmosphere. Each villa is designed to bring you harmony and relaxation.'
    },
    amenities: {
      title: 'Amenities',
      wifi: 'Fast Wi-Fi',
      parking: 'Free Parking',
      kitchen: 'Equipped Kitchen',
      ac: 'Air Conditioning',
      bbq: 'BBQ Area',
      crib: 'Baby Crib'
    },
    gallery: {
      title: 'Gallery'
    },
    reviews: {
      title: 'What Our Guests Say'
    },
    contact: {
      title: 'We are expecting you',
      desc: 'Contact us to check availability and book your vacation. We are available to answer all your questions.',
      location: 'Lozenets village, Bulgaria',
      ctaTitle: 'Ready for a vacation?',
      ctaDesc: 'Call us directly for the best prices and conditions.',
      ctaBtn: 'Book Now'
    },
    footerFollow: 'Follow us',
    footer: 'Wooden Villas Lozenets. All rights reserved.'
  },
  ru: {
    nav: {
      home: 'Главная',
      about: 'О нас',
      amenities: 'Удобства',
      gallery: 'Галерея',
      reviews: 'Отзывы',
      contact: 'Контакты',
      book: 'Забронировать'
    },
    hero: {
      title: 'Деревянные Виллы Лозенец',
      subtitle: 'Роскошь встречается с природой',
      cta: 'Забронировать сейчас'
    },
    about: {
      title: 'Святилище спокойствия',
      p1: 'Расположенные в Лозенец, наши бутик-виллы из дерева предлагают идеальный побег от суетливой повседневной жизни. Созданные с заботой о природе, они сочетают экологичное деревянное строительство с современной роскошью.',
      p2: 'Наслаждайтесь свежим морским бризом, ароматом природы и бескомпромиссным комфортом нашей уютной атмосферы. Каждая вилла спроектирована так, чтобы принести вам гармонию и расслабление.'
    },
    amenities: {
      title: 'Удобства',
      wifi: 'Быстрый Wi-Fi',
      parking: 'Бесплатная парковка',
      kitchen: 'Оборудованная кухня',
      ac: 'Кондиционер',
      bbq: 'Барбекю',
      crib: 'Детская кроватка'
    },
    gallery: {
      title: 'Галерея'
    },
    reviews: {
      title: 'Что говорят наши гости'
    },
    contact: {
      title: 'Мы ждем вас',
      desc: 'Свяжитесь с нами, чтобы проверить наличие мест и забронировать ваш отдых. Мы готовы ответить на все ваши вопросы.',
      location: 'с. Лозенец, Болгария',
      ctaTitle: 'Готовы к отдыху?',
      ctaDesc: 'Позвоните нам напрямую для получения лучших цен и условий.',
      ctaBtn: 'Забронировать сейчас'
    },
    footerFollow: 'Подписывайтесь на нас',
    footer: 'Деревянные Виллы Лозенец. Все права защищены.'
  }
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<'bg' | 'en' | 'ru'>('bg');
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [mobileLangMenuOpen, setMobileLangMenuOpen] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);

  const scrollGallery = (direction: 'left' | 'right') => {
    if (galleryRef.current) {
      const scrollAmount = window.innerWidth * 0.85;
      galleryRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollReviews = (direction: 'left' | 'right') => {
    if (reviewsRef.current) {
      const scrollAmount = window.innerWidth * 0.85;
      reviewsRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = translations[lang];

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.amenities, href: '#amenities' },
    { name: t.nav.gallery, href: '#gallery' },
    { name: t.nav.reviews, href: '#reviews' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const reviewsData = [
    {
      name: "Иван Иванов",
      date: { bg: "Август 2023", en: "August 2023", ru: "Август 2023" },
      text: {
        bg: "Страхотно място за почивка! Вилите са нови, чисти и много уютни. Собствениците са изключително любезни. Препоръчвам с две ръце!",
        en: "Great place for a vacation! The villas are new, clean, and very cozy. The owners are extremely polite. Highly recommend!",
        ru: "Отличное место для отдыха! Виллы новые, чистые и очень уютные. Хозяева исключительно вежливы. Очень рекомендую!"
      }
    },
    {
      name: "Sarah Johnson",
      date: { bg: "Септември 2023", en: "September 2023", ru: "Сентябрь 2023" },
      text: {
        bg: "Перфектното бягство от града. Дървеният дизайн е прекрасен, а мястото е много спокойно. Със сигурност ще се върнем.",
        en: "Perfect escape from the city. The wooden design is beautiful and the location is very peaceful. We will definitely come back.",
        ru: "Идеальный побег из города. Деревянный дизайн прекрасен, а место очень спокойное. Мы обязательно вернемся."
      }
    },
    {
      name: "Мария Петрова",
      date: { bg: "Юли 2023", en: "July 2023", ru: "Июль 2023" },
      text: {
        bg: "Прекрасни условия за семейства с деца. Има достатъчно пространство, барбекюто е супер, а плажът е наблизо.",
        en: "Wonderful conditions for families with children. There is plenty of space, the BBQ is great, and the beach is nearby.",
        ru: "Прекрасные условия для семей с детьми. Много места, отличное барбекю, а пляж находится неподалеку."
      }
    }
  ];

  return (
    <div className="min-h-screen font-montserrat bg-soft-sand text-deep-charcoal selection:bg-warm-oak selection:text-white">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-soft-sand/85 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a href="#home" className={`flex items-center space-x-3 font-playfair text-xl md:text-xl font-bold tracking-wider ${isScrolled ? 'text-deep-charcoal' : 'text-white'}`}>
              <img src="https://i.ibb.co/xKTLqG18/WOODEN-VILLAS-1.png" alt="Logo" className="h-20 md:h-16 w-auto object-contain" />
              <span className="hidden sm:inline-block mt-1">WOODEN VILLAS</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-medium tracking-[0.2em] uppercase transition-colors ${
                    isScrolled ? 'text-deep-charcoal/70 hover:text-warm-oak' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              
              <div className="relative">
                <button 
                  onClick={() => setLangMenuOpen(!langMenuOpen)}
                  className={`flex items-center space-x-1 text-xs font-medium tracking-widest uppercase transition-colors ${
                    isScrolled ? 'text-deep-charcoal/70 hover:text-warm-oak' : 'text-white/80 hover:text-white'
                  }`}
                >
                  <Globe size={16} />
                  <span>{lang.toUpperCase()}</span>
                  <ChevronDown size={14} />
                </button>

                {langMenuOpen && (
                  <div className="absolute right-0 mt-4 w-24 bg-white rounded-md shadow-xl py-2 z-50 border border-soft-sand">
                    {['bg', 'en', 'ru'].map((l) => (
                      <button
                        key={l}
                        onClick={() => { setLang(l as any); setLangMenuOpen(false); }}
                        className={`block w-full text-left px-4 py-2 text-xs font-medium tracking-widest uppercase transition-colors hover:bg-soft-sand ${lang === l ? 'text-warm-oak' : 'text-deep-charcoal'}`}
                      >
                        {l.toUpperCase()}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="tel:+359898506877"
                className={`px-8 py-3 rounded-md text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  isScrolled
                    ? 'bg-warm-oak text-white hover:bg-deep-charcoal'
                    : 'bg-white text-deep-charcoal hover:bg-warm-oak hover:text-white'
                }`}
              >
                {t.nav.book}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <div className="relative">
                <button 
                  onClick={() => setMobileLangMenuOpen(!mobileLangMenuOpen)}
                  className={`flex items-center space-x-1 text-sm font-medium ${isScrolled ? 'text-deep-charcoal' : 'text-white'}`}
                >
                  <Globe size={18} />
                  <span>{lang.toUpperCase()}</span>
                  <ChevronDown size={16} />
                </button>
                {mobileLangMenuOpen && (
                  <div className="absolute right-0 mt-4 w-24 bg-white rounded-md shadow-xl py-2 z-50 border border-soft-sand">
                    {['bg', 'en', 'ru'].map((l) => (
                      <button
                        key={l}
                        onClick={() => { setLang(l as any); setMobileLangMenuOpen(false); }}
                        className={`block w-full text-left px-4 py-2 text-sm font-medium tracking-widest uppercase transition-colors hover:bg-soft-sand ${lang === l ? 'text-warm-oak' : 'text-deep-charcoal'}`}
                      >
                        {l.toUpperCase()}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={isScrolled ? 'text-deep-charcoal' : 'text-white'}
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-soft-sand/95 backdrop-blur-md shadow-lg py-8 px-6 flex flex-col space-y-6 border-t border-deep-charcoal/5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-deep-charcoal font-playfair text-2xl"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+359898506877"
              className="inline-block text-center bg-warm-oak text-white px-6 py-4 rounded-md text-sm font-semibold tracking-[0.2em] uppercase mt-4"
            >
              {t.nav.book}
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className="relative h-screen flex items-center justify-center md:bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url('https://i.ibb.co/PZBsNsPy/viber-2026-02-27-15-35-29-586.jpg')` }}
      >
        <div className="absolute inset-0 bg-deep-charcoal/40 backdrop-blur-[2px]"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center mt-16">
          <motion.h1 
            key={`hero-title-${lang}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="font-playfair text-5xl md:text-7xl lg:text-8xl text-white mb-6 drop-shadow-lg"
          >
            {t.hero.title}
          </motion.h1>
          <motion.p 
            key={`hero-subtitle-${lang}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-xl md:text-2xl text-soft-sand font-light tracking-[0.2em] uppercase mb-12 drop-shadow-md"
          >
            {t.hero.subtitle}
          </motion.p>
          <motion.a 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            href="tel:+359898506877"
            className="inline-block bg-warm-oak text-white px-12 py-5 text-sm font-semibold tracking-[0.2em] uppercase rounded-md hover:-translate-y-1 hover:shadow-2xl hover:bg-white hover:text-deep-charcoal transition-all duration-300"
          >
            {t.hero.cta}
          </motion.a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-32 bg-soft-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
            >
              <h2 className="font-playfair text-4xl md:text-5xl text-deep-charcoal mb-10 leading-tight">{t.about.title}</h2>
              <p className="text-deep-charcoal/70 text-lg leading-loose font-light mb-8">
                {t.about.p1}
              </p>
              <p className="text-deep-charcoal/70 text-lg leading-loose font-light">
                {t.about.p2}
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2 }}
              className="relative h-[400px] md:h-[700px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://i.ibb.co/PZBsNsPy/viber-2026-02-27-15-35-29-586.jpg"
                alt="Cozy interior"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-16 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-playfair text-4xl md:text-5xl text-deep-charcoal mb-6">{t.amenities.title}</h2>
            <div className="w-16 h-1 bg-warm-oak mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            {[
              { icon: <Wifi size={40} strokeWidth={1} />, title: t.amenities.wifi },
              { icon: <Car size={40} strokeWidth={1} />, title: t.amenities.parking },
              { icon: <Utensils size={40} strokeWidth={1} />, title: t.amenities.kitchen },
              { icon: <Wind size={40} strokeWidth={1} />, title: t.amenities.ac },
              { icon: <Flame size={40} strokeWidth={1} />, title: t.amenities.bbq },
              { icon: <Baby size={40} strokeWidth={1} />, title: t.amenities.crib },
            ].map((amenity, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-8 rounded-2xl hover:bg-soft-sand transition-colors duration-500"
              >
                <div className="text-warm-oak mb-6">
                  {amenity.icon}
                </div>
                <h3 className="text-lg font-medium text-deep-charcoal tracking-wide">{amenity.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 md:py-32 bg-soft-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-playfair text-4xl md:text-5xl text-deep-charcoal mb-6">{t.gallery.title}</h2>
            <div className="w-16 h-1 bg-warm-oak mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            {/* Mobile Navigation Arrows */}
            <button 
              onClick={() => scrollGallery('left')}
              className="md:hidden absolute left-4 top-[calc(50%-1rem)] -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm text-deep-charcoal p-3 rounded-full shadow-xl hover:bg-warm-oak hover:text-white transition-all"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scrollGallery('right')}
              className="md:hidden absolute right-4 top-[calc(50%-1rem)] -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm text-deep-charcoal p-3 rounded-full shadow-xl hover:bg-warm-oak hover:text-white transition-all"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            <div 
              ref={galleryRef}
              className="flex md:block md:columns-2 lg:columns-3 gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0"
            >
            {[
              { src: "https://i.ibb.co/FkSpCWLc/viber-2026-02-27-15-57-27-282.jpg", titleBg: "Къщите отвън", titleEn: "Exterior" },
              { src: "https://i.ibb.co/35hbJ5pg/viber-2026-02-27-15-57-26-466.jpg", titleBg: "Двор", titleEn: "Yard" },
              { src: "https://i.ibb.co/mKzSJWm/viber-2026-02-27-15-57-27-040.jpg", titleBg: "Барбекю зона", titleEn: "BBQ Area" },
              { src: "https://i.ibb.co/ymwG8KnD/viber-2026-02-27-15-57-27-800.jpg", titleBg: "Хол", titleEn: "Living Room" },
              { src: "https://i.ibb.co/QjHqxJ0C/viber-2026-02-27-15-57-28-933.jpg", titleBg: "Кухня", titleEn: "Kitchen" },
              { src: "https://i.ibb.co/rKb0Gdcz/viber-2026-03-03-15-15-25-346.jpg", titleBg: "Място за хранене", titleEn: "Dining Area" },
              { src: "https://i.ibb.co/9mMHkFZg/viber-2026-02-27-15-57-28-745.jpg", titleBg: "Спалня едно", titleEn: "Bedroom One" },
              { src: "https://i.ibb.co/zTCp1Fsq/viber-2026-02-27-15-57-28-507.jpg", titleBg: "Спалня две", titleEn: "Bedroom Two" },
              { src: "https://i.ibb.co/FkFvjCs5/viber-2026-02-27-15-57-29-156.jpg", titleBg: "Баня", titleEn: "Bathroom" },
              { src: "https://i.ibb.co/YTb16YhW/viber-2026-02-27-16-05-11-353.jpg", titleBg: "Паркинг", titleEn: "Parking" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex-none w-[85vw] sm:w-[60vw] md:w-full snap-center break-inside-avoid rounded-xl overflow-hidden relative group mb-0 md:mb-6 shadow-md hover:shadow-2xl transition-shadow duration-500"
              >
                <img 
                  src={item.src} 
                  alt={lang === 'bg' ? item.titleBg : item.titleEn} 
                  className="w-full aspect-[4/5] md:aspect-auto object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-deep-charcoal/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                  <span className="text-white font-playfair text-2xl tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 translate-y-4 group-hover:translate-y-0">
                    {lang === 'bg' ? item.titleBg : item.titleEn}
                  </span>
                </div>
              </motion.div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="font-playfair text-4xl md:text-5xl text-deep-charcoal mb-6">{t.reviews.title}</h2>
            <div className="w-16 h-1 bg-warm-oak mx-auto rounded-full"></div>
          </div>
          
          <div className="relative">
            <div 
              ref={reviewsRef}
              className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0"
            >
              {reviewsData.map((review, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="flex-none w-[85vw] sm:w-[60vw] md:w-auto snap-center bg-soft-sand/30 p-8 md:p-10 rounded-2xl relative group hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-warm-oak/10"
                >
                  <Quote size={40} className="absolute top-6 right-6 text-warm-oak/10 group-hover:text-warm-oak/20 transition-colors duration-500" />
                  
                  <div className="flex space-x-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  
                  <p className="text-deep-charcoal/80 font-light leading-relaxed mb-8 italic">
                    "{review.text[lang]}"
                  </p>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-warm-oak/20 flex items-center justify-center text-warm-oak font-playfair font-bold text-xl">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-medium text-deep-charcoal">{review.name}</h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile Navigation Arrows */}
            <div className="md:hidden flex justify-center space-x-6 mt-2">
              <button 
                onClick={() => scrollReviews('left')}
                className="bg-white border border-soft-sand text-deep-charcoal p-3 rounded-full shadow-md hover:bg-warm-oak hover:text-white hover:border-warm-oak transition-all"
                aria-label="Previous review"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => scrollReviews('right')}
                className="bg-white border border-soft-sand text-deep-charcoal p-3 rounded-full shadow-md hover:bg-warm-oak hover:text-white hover:border-warm-oak transition-all"
                aria-label="Next review"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <a 
              href="https://www.google.com/maps/dir//%D0%94%D1%8A%D1%80%D0%B2%D0%B5%D0%BD%D0%B8+%D0%B2%D0%B8%D0%BB%D0%B8+%D0%9B%D0%BE%D0%B7%D0%B5%D0%BD%D0%B5%D1%86,+Unnamed+Rd,+8277+%D0%9B%D0%BE%D0%B7%D0%B5%D0%BD%D0%B5%D1%86/@42.1987859,27.7979227,177m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x40a12d4da9718791:0xe0eebf892f9350a3!2m2!1d27.7981909!2d42.1990487?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-sm font-semibold tracking-[0.2em] uppercase text-warm-oak hover:text-deep-charcoal transition-colors group"
            >
              <span>{lang === 'bg' ? 'Вижте всички отзиви в Google' : lang === 'en' ? 'View all reviews on Google' : 'Посмотреть все отзывы в Google'}</span>
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-32 bg-deep-charcoal text-soft-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="font-playfair text-4xl md:text-5xl mb-10">{t.contact.title}</h2>
              <p className="text-soft-sand/70 text-lg mb-12 leading-loose font-light">
                {t.contact.desc}
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center space-x-6 group">
                  <div className="p-4 rounded-full bg-warm-oak/10 text-warm-oak group-hover:bg-warm-oak group-hover:text-white transition-colors duration-300">
                    <Phone size={24} />
                  </div>
                  <a href="tel:+359898506877" className="text-xl font-light tracking-wide hover:text-warm-oak transition-colors">+359 898 5068 77</a>
                </div>
                <div className="flex items-center space-x-6 group">
                  <div className="p-4 rounded-full bg-warm-oak/10 text-warm-oak group-hover:bg-warm-oak group-hover:text-white transition-colors duration-300">
                    <Mail size={24} />
                  </div>
                  <a href="mailto:m.mihalev92@abv.bg" className="text-xl font-light tracking-wide hover:text-warm-oak transition-colors">m.mihalev92@abv.bg</a>
                </div>
                <div className="flex items-center space-x-6 group">
                  <div className="p-4 rounded-full bg-warm-oak/10 text-warm-oak group-hover:bg-warm-oak group-hover:text-white transition-colors duration-300">
                    <MapPin size={24} />
                  </div>
                  <span className="text-xl font-light tracking-wide">{t.contact.location}</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="flex flex-col justify-center items-center bg-white/5 backdrop-blur-sm p-12 rounded-2xl text-center border border-white/10"
            >
              <h3 className="font-playfair text-3xl mb-6">{t.contact.ctaTitle}</h3>
              <p className="mb-10 text-soft-sand/70 font-light leading-relaxed">{t.contact.ctaDesc}</p>
              <a 
                href="tel:+359898506877"
                className="bg-warm-oak text-white px-6 py-4 md:px-12 md:py-5 text-xs md:text-sm font-semibold tracking-wider md:tracking-[0.2em] uppercase rounded-md hover:-translate-y-1 hover:shadow-2xl hover:bg-white hover:text-deep-charcoal transition-all duration-300 w-full sm:w-auto"
              >
                {t.contact.ctaBtn}
              </a>
            </motion.div>
          </div>
          
          {/* Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-20 w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
          >
            <iframe 
              src="https://maps.google.com/maps?q=42.1990487,27.7981909&hl=bg&z=16&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Wooden Villas Lozenets Location"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1512] pt-12 md:pt-20 pb-8 md:pb-10 border-t border-white/5 text-soft-sand/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 md:mb-16">
            
            {/* Brand */}
            <div className="md:col-span-5 flex flex-col items-start space-y-4 md:space-y-6">
              <a href="#home" className="flex items-center space-x-3 md:space-x-4">
                <img src="https://i.ibb.co/xKTLqG18/WOODEN-VILLAS-1.png" alt="Logo" className="h-12 md:h-16 w-auto object-contain opacity-90" />
                <span className="font-playfair text-xl md:text-2xl font-bold tracking-widest text-white">WOODEN VILLAS</span>
              </a>
              <p className="text-sm leading-relaxed text-left max-w-sm font-light">
                {lang === 'bg' ? 'Луксът среща природата в сърцето на Лозенец. Вашето перфектно бягство от забързаното ежедневие, съчетаващо екологично строителство с безкомпромисен комфорт.' : lang === 'en' ? 'Luxury meets nature in the heart of Lozenets. Your perfect escape from the hectic everyday life, combining ecological construction with uncompromising comfort.' : 'Роскошь встречается с природой в самом сердце Лозенец. Ваш идеальный побег от суетливой повседневной жизни, сочетающий экологичное строительство с бескомпромиссным комфортом.'}
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3 flex flex-col items-start space-y-4 md:space-y-6 w-full">
              <h4 className="text-white font-playfair text-xl tracking-wider">{lang === 'bg' ? 'Бързи връзки' : lang === 'en' ? 'Quick Links' : 'Быстрые ссылки'}</h4>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-3 md:flex md:flex-col md:space-y-3 md:gap-0 text-left w-full md:w-auto">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-warm-oak transition-colors text-sm tracking-wide font-light">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div className="md:col-span-4 flex flex-col items-start space-y-4 md:space-y-6">
              <h4 className="text-white font-playfair text-xl tracking-wider">{t.nav.contact}</h4>
              <ul className="space-y-4 text-left">
                <li>
                  <a href="tel:+359898506877" className="hover:text-warm-oak transition-colors text-sm tracking-wide font-light flex items-center justify-start space-x-3 group">
                    <Phone size={16} className="text-warm-oak group-hover:scale-110 transition-transform" />
                    <span>+359 898 5068 77</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:m.mihalev92@abv.bg" className="hover:text-warm-oak transition-colors text-sm tracking-wide font-light flex items-center justify-start space-x-3 group">
                    <Mail size={16} className="text-warm-oak group-hover:scale-110 transition-transform" />
                    <span>m.mihalev92@abv.bg</span>
                  </a>
                </li>
                <li className="flex items-center justify-start space-x-3 text-sm tracking-wide font-light">
                  <MapPin size={16} className="text-warm-oak" />
                  <span>{t.contact.location}</span>
                </li>
              </ul>
              
              <div className="pt-2 md:pt-4 w-full flex flex-col items-start">
                <span className="block text-xs uppercase tracking-widest mb-3 md:mb-4 text-soft-sand/50">{t.footerFollow}</span>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com/woodenvillass/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2.5 rounded-full bg-white/5 hover:bg-warm-oak hover:text-white transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
            </div>

          </div>

          <div className="border-t border-white/10 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 text-xs font-light tracking-wider text-soft-sand/40 text-left">
            <p>&copy; {new Date().getFullYear()} {t.footer}</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Button (Mobile Only) */}
      <motion.a 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
        href="tel:+359898506877" 
        className="md:hidden fixed bottom-6 right-6 z-50 bg-green-600/80 backdrop-blur-md text-white w-14 h-14 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center"
        aria-label="Call us"
      >
        <div className="relative flex items-center justify-center">
          <Phone size={24} fill="currentColor" className="relative z-10" />
          <span className="absolute inset-0 rounded-full bg-white opacity-30 animate-ping"></span>
        </div>
      </motion.a>
    </div>
  );
}
