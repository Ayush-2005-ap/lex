import React, { useState, useEffect } from 'react';
import { Database, BookOpen, Search, Globe, Award, ExternalLink } from 'lucide-react';

const Indexing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      src: '/Images/SSRN_Logo (1).png',
      title: 'SSRN',
      description: 'Social Science Research Network',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      src: '/Images/Academia-2.png',
      title: 'Academia',
      description: 'Academic Social Network',
      color: 'from-slate-600 to-blue-600'
    },
    {
      src: '/Images/1024px-ResearchGate (1).png',
      title: 'Research Gate',
      description: 'Scientific Research Network',
      color: 'from-green-500 to-teal-600'
    },
    {
      src: '/Images/Scribd (1).png',
      title: 'Scribd',
      description: 'Digital Library Platform',
      color: 'from-red-500 to-pink-600'
    },
    {
      src: '/Images/Google-Scholar (1).png',
      title: 'Google Scholar',
      description: 'Academic Search Engine',
      color: 'from-amber-500 to-red-600'
    },
  ];

  const features = [
    {
      icon: Database,
      title: "Wide Reach",
      description: "Indexed across major academic databases",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Search,
      title: "Easy Discovery",
      description: "Enhanced visibility for researchers worldwide",
      color: "from-amber-500 to-red-600"
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Available to international academic community",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Recognized by prestigious indexing services",
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 opacity-95"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-900/20 via-transparent to-red-900/30"></div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-amber-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex justify-center items-center space-x-4 mb-8">
              <Database className="w-16 h-16 text-amber-400 animate-bounce" />
              <BookOpen className="w-12 h-12 text-amber-300 animate-pulse" />
            </div>

            <h1 className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-amber-400 via-red-500 to-amber-600 bg-clip-text text-transparent mb-6">
              Indexing 
            </h1>

            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Lex Revolution is indexed and abstracted in leading academic databases, ensuring maximum visibility and accessibility for published research.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative -mt-10 z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Features Grid */}
          <section className={`mb-12 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>

                  <div className="relative z-10">
                    <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Indexing Services Grid */}
          <section className={`bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <header className="bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 px-8 py-6">
              <h2 className="text-2xl font-bold text-white uppercase tracking-wide text-center flex items-center justify-center">
                <Search className="w-8 h-8 mr-3 text-amber-400" />
                 Indexing 
              </h2>
            </header>

            <div className="p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, idx) => (
                  <div
                    key={service.title}
                    className="group relative bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 shadow-lg border-2 border-white/50 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{
                      transitionDelay: `${idx * 100}ms`
                    }}
                  >
                    {/* Animated Border */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300`}></div>

                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>

                    <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[240px]">
                      {/* Image Container */}
                      <div className="w-full flex items-center justify-center mb-6 h-32">
                        <img
                          src={service.src}
                          alt={service.title}
                          className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-gray-600 text-center mb-4">
                        {service.description}
                      </p>

                      {/* External Link Icon */}
                      <div className={`transition-all duration-300 ${hoveredIndex === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                        <ExternalLink className={`w-5 h-5 bg-gradient-to-br ${service.color} bg-clip-text text-transparent`} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className={`text-center py-16 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gradient-to-r from-amber-500 via-red-500 to-amber-600 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-4">Enhanced Discoverability</h3>
              <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
                Your research deserves to be seen. Publish with Lex Revolution and benefit from our extensive indexing network.
              </p>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default Indexing;
