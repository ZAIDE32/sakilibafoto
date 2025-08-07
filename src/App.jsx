import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Star, Users, Film, Award, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import './App.css';

// Import des images
import ngunuImage from './assets/images/Ngunu_ngunu_kan.jpg';
import jantoImage from './assets/images/Affiche_I_JANTO_A3_EN.jpg';
import larmesImage from './assets/images/Affiche_les_larmes_du_pagne.JPG';
import logoSakiliba from './assets/images/Logo_Sakiliba_PNG.png';

const carouselImages = [
  { src: ngunuImage, title: "Ngunu Ngunu Kan", type: "Long métrage fiction" },
  { src: jantoImage, title: "I Jantô", type: "Court métrage fiction" },
  { src: larmesImage, title: "Les Larmes du Pagne", type: "Long métrage documentaire" }
];

const stats = [
  { icon: Film, number: "12", label: "Films produits" },
  { icon: Award, number: "05", label: "Prix internationaux" }
];

const testimonials = [
  {
    text: "Sakiliba Photo apporte une vision authentique et professionnelle au cinéma malien.",
    author: "Partenaire culturel",
    role: "Festival International"
  },
  {
    text: "Une expertise remarquable dans la production audiovisuelle africaine.",
    author: "Investisseur",
    role: "Fonds de développement"
  }
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-orange-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 logo-container">
              <img 
                src={logoSakiliba} 
                alt="Sakiliba Photo Logo" 
                className="h-16 w-auto logo-glow animate-logo-entrance"
              />
              <div className="animate-text-reveal animate-delay-300">
                <h1 className="text-2xl font-bold font-montserrat text-gray-800">Sakiliba Photo</h1>
                <p className="text-sm text-orange-600 font-medium">Production cinématographique & audiovisuelle</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#accueil" className="text-gray-700 hover:text-orange-600 transition-all duration-300 font-medium relative group">
                Accueil
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#films" className="text-gray-700 hover:text-orange-600 transition-all duration-300 font-medium relative group">
                Nos Films
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#realisateurs" className="text-gray-700 hover:text-orange-600 transition-all duration-300 font-medium relative group">
                Réalisateurs
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#projets" className="text-gray-700 hover:text-orange-600 transition-all duration-300 font-medium relative group">
                Projets
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-all duration-300 font-medium relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section avec Carrousel */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 sakiliba-hero-bg"></div>
        <div className="geometric-pattern absolute inset-0"></div>
        
        {/* Éléments flottants animés */}
        <div className="hero-floating-elements">
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
        </div>

        {/* Particules animées */}
        <div className="particles-container">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="particle" 
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Contenu textuel */}
            <div className="hero-content text-white space-y-8">
              <div className="animate-text-reveal">
                <h1 className="hero-title font-bold font-montserrat leading-tight glitch-effect" data-text="Capturer l'essence de notre culture à travers des images puissantes">
                  <span className="sakiliba-text-gradient block">Capturer l'essence</span>
                  <span className="text-white block">de notre culture</span>
                  <span className="text-orange-300 block">à travers des images puissantes</span>
                </h1>
              </div>
              
              <div className="animate-text-reveal animate-delay-300">
                <p className="hero-subtitle font-open-sans text-gray-200 max-w-2xl">
                  Des histoires mémorables qui révèlent l'âme du Mali. Depuis 2015, Sakiliba Photo accompagne 
                  la promotion du cinéma malien avec une expertise globale en matière d'imagerie audiovisuelle.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 animate-text-reveal animate-delay-500">
                <Button 
                  size="lg" 
                  className="button-modern bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-10 py-5 text-lg font-semibold rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105"
                >
                  <Play className="w-6 h-6 mr-3" />
                  Voir nos films
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-10 py-5 text-lg font-semibold rounded-full backdrop-blur-sm bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  Découvrir nos projets
                </Button>
              </div>

              {/* Statistiques rapides */}
              <div className="flex space-x-8 pt-8 animate-text-reveal animate-delay-700">
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-300 mb-2">12</div>
                  <div className="text-sm text-gray-300 uppercase tracking-wide">Films Produits</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-300 mb-2">05</div>
                  <div className="text-sm text-gray-300 uppercase tracking-wide">Prix Internationaux</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-300 mb-2">2015</div>
                  <div className="text-sm text-gray-300 uppercase tracking-wide">Année de Création</div>
                </div>
              </div>
            </div>

            {/* Carrousel d'images amélioré */}
            <div className="carousel-container animate-carousel-slide-in animate-delay-600"
                 onMouseEnter={() => setIsAutoPlaying(false)}
                 onMouseLeave={() => setIsAutoPlaying(true)}>
              <div className="relative h-[600px] lg:h-[700px]">
                {carouselImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 carousel-slide ${
                      index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                    style={{
                      transform: `translateX(${(index - currentSlide) * 100}%) scale(${index === currentSlide ? 1 : 0.95})`,
                      transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                    <div className="carousel-overlay absolute inset-0 rounded-2xl"></div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8 rounded-b-2xl">
                      <div className="transform translate-y-4 opacity-0 animate-fade-in-up">
                        <h3 className="text-white text-2xl font-bold font-montserrat mb-2">{image.title}</h3>
                        <p className="text-orange-300 font-open-sans text-lg">{image.type}</p>
                        <div className="mt-4">
                          <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full">
                            <Play className="w-4 h-4 mr-2" />
                            Découvrir
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Contrôles du carrousel améliorés */}
                <button
                  onClick={prevSlide}
                  className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                
                {/* Indicateurs améliorés */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-orange-400 scale-125 shadow-lg' 
                          : 'bg-white/50 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>

                {/* Badge de qualité */}
                <div className="absolute top-6 right-6 bg-gradient-to-r from-orange-600 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
                  Production Sakiliba
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Section Présentation rapide - Histoire, Impact, Expertise */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Histoire de Sakiliba */}
            <div className="text-center space-y-6 animate-fade-in-up">
              <div className="w-16 h-16 sakiliba-gradient rounded-full flex items-center justify-center mx-auto">
                <Film className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-montserrat text-gray-800">Notre Histoire</h3>
              <p className="text-gray-600 font-open-sans leading-relaxed">
                Fondée en 2015, Sakiliba Photo est née de la passion de raconter les histoires authentiques du Mali. 
                Nous avons grandi pour devenir une référence dans la production cinématographique malienne.
              </p>
              <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white">
                En savoir plus
              </Button>
            </div>

            {/* Impact Culturel */}
            <div className="text-center space-y-6 animate-fade-in-up animate-delay-200">
              <div className="w-16 h-16 sakiliba-gradient rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-montserrat text-gray-800">Impact Culturel</h3>
              <p className="text-gray-600 font-open-sans leading-relaxed">
                Nos productions valorisent l'image du cinéma malien sur la scène internationale, 
                créant des ponts entre les cultures et transmettant notre patrimoine aux nouvelles générations.
              </p>
              <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white">
                Découvrir l'impact
              </Button>
            </div>

            {/* Expertise Technique */}
            <div className="text-center space-y-6 animate-fade-in-up animate-delay-400">
              <div className="w-16 h-16 sakiliba-gradient rounded-full flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-montserrat text-gray-800">Expertise Technique</h3>
              <p className="text-gray-600 font-open-sans leading-relaxed">
                Une maîtrise complète de la chaîne de production audiovisuelle, des équipements de pointe 
                et une équipe expérimentée pour des résultats professionnels de niveau international.
              </p>
              <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white">
                Voir nos compétences
              </Button>
            </div>
          </div>
          
          {/* Lien vers À propos */}
          <div className="text-center mt-16">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-12 py-4 text-lg font-semibold">
              Découvrir Sakiliba Photo
            </Button>
          </div>
        </div>
      </section>

      {/* Section Statistiques */}
      <section className="py-20 sakiliba-gradient">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold font-montserrat text-center text-white mb-16">
            Notre Impact en Chiffres
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-center p-8 hover:bg-white/20 transition-all">
                <CardContent className="p-0">
                  <stat.icon className="w-12 h-12 text-amber-300 mx-auto mb-6" />
                  <div className="text-5xl font-bold text-white mb-4">{stat.number}</div>
                  <div className="text-lg text-amber-100 font-open-sans">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section Films Récents */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-montserrat text-gray-800 mb-4">
              Films <span className="sakiliba-text-gradient">Récents</span>
            </h2>
            <p className="text-xl text-gray-600 font-open-sans">
              Découvrez nos dernières productions cinématographiques
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {carouselImages.map((film, index) => (
              <Card key={index} className="film-card bg-white overflow-hidden cursor-pointer group">
                <div className="relative h-80">
                  <img
                    src={film.src}
                    alt={film.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <Button className="bg-amber-600 hover:bg-amber-700 w-full">
                        <Play className="w-4 h-4 mr-2" />
                        Voir le film
                      </Button>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {film.type}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold font-montserrat text-gray-800 mb-2">{film.title}</h3>
                  <p className="text-gray-600 font-open-sans">
                    Une production Sakiliba Photo qui capture l'essence de notre culture malienne.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold">
              Voir tous nos films
            </Button>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold font-montserrat text-center text-gray-800 mb-16">
            Ce qu'ils disent de nous
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-amber-50 border-amber-200">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-700 font-open-sans italic mb-4">"{testimonial.text}"</p>
                      <div>
                        <p className="font-bold text-gray-800">{testimonial.author}</p>
                        <p className="text-amber-600 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="py-20 sakiliba-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold font-montserrat text-center text-white mb-16">
              Contactez-nous
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-center space-x-4 text-white">
                  <Mail className="w-6 h-6 text-amber-300" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-amber-100">sakilibafoto@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-white">
                  <Phone className="w-6 h-6 text-amber-300" />
                  <div>
                    <p className="font-semibold">Téléphone</p>
                    <p className="text-amber-100">(+223) 79 22 67 37 - Mali</p>
                    <p className="text-amber-100">+33 7 62 00 38 35 - France</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-white">
                  <MapPin className="w-6 h-6 text-amber-300" />
                  <div>
                    <p className="font-semibold">Localisation</p>
                    <p className="text-amber-100">Mali & France</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Suivez-nous</h3>
                <div className="grid grid-cols-2 gap-4">
                  <a href="#" className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-all">
                    <Facebook className="w-6 h-6 text-amber-300" />
                    <span className="text-white">Facebook</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-all">
                    <Instagram className="w-6 h-6 text-amber-300" />
                    <span className="text-white">Instagram</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-all">
                    <Twitter className="w-6 h-6 text-amber-300" />
                    <span className="text-white">Twitter</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-all">
                    <Linkedin className="w-6 h-6 text-amber-300" />
                    <span className="text-white">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 sakiliba-gradient rounded-full flex items-center justify-center">
                <Film className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-montserrat">Sakiliba Photo</h3>
                <p className="text-gray-400">Production cinématographique & audiovisuelle</p>
              </div>
            </div>
            <p className="text-gray-400 font-open-sans">
              © 2025 Sakiliba Photo. Tous droits réservés. Créé en 2015.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

