import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Scale, BookOpen, Users, Award, ChevronDown, Gavel, FileText, Globe } from 'lucide-react';

export default function Home() {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [showSubmitSection, setShowSubmitSection] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const stats = [
        { icon: FileText, number: "500+", label: "Research Papers" },
        { icon: Users, number: "500+", label: "Contributors" },
        { icon: Globe, number: "5+", label: "Countries" },
        { icon: Award, number: "5+", label: "Indexed" }
    ];

    const features = [
        {
            icon: Scale,
            title: "Legal Excellence",
            description: "Peer-reviewed research focusing on contemporary Social & Legal challenges and solutions."
        },
        {
            icon: BookOpen,
            title: "Academic Rigor",
            description: "Quarterly publication maintaining the highest standards of scholarly research."
        },
        {
            icon: Users,
            title: "Global Community",
            description: "International network of legal scholars, students, and professionals."
        }
    ];

    return (
        <div className="mx-auto w-full max-w-7xl overflow-hidden">
            
            {/* Hero Section */}
            <aside className="relative overflow-hidden rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 opacity-95"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-900/20 via-transparent to-red-900/30"></div>

                {/* Particles */}
                <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-amber-400/30 rounded-full animate-pulse"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 3}s`,
                                animationDuration: `${2 + Math.random() * 3}s`
                            }}
                        ></div>
                    ))}
                </div>

                <div 
                    className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8 rounded-3xl"
                    style={{
                        transform: `translateY(${scrollY * 0.1}px)`,
                        backgroundImage: `url('/Law_Order_final.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundBlendMode: 'overlay'
                    }}
                >
                    <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>

                    <div className="relative z-20 max-w-4xl sm:mt-1 mt-80 space-y-8 text-left">
                        
                        {/* Logo */}
                        <div className={`flex items-center space-x-4 mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <div className="relative">
                                <Gavel className="w-12 h-12 text-amber-400 animate-bounce" />
                                <div className="absolute inset-0 w-12 h-12 bg-amber-400/20 rounded-full animate-ping"></div>
                            </div>
                            <Scale className="w-10 h-10 text-amber-300 animate-pulse" />
                        </div>

                        {/* Heading */}
                        <h2 className={`text-4xl sm:text-6xl font-bold bg-gradient-to-r from-amber-400 via-red-500 to-amber-600 bg-clip-text text-transparent transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            Lex Revolution
                            <br />
                            <span className="relative text-amber-600 text-2xl">
                                ISSN 2394-997X (Print) ; ISSN 3107-829X (Online)
                            </span>
                        </h2>

                        <div className={`space-y-6 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <p className="text-lg sm:text-xl text-gray-100 leading-relaxed font-light">
                                <span className="text-amber-400 font-semibold">Lex Revolution</span> is a peer-reviewed, quarterly published research journal focusing on social and legal studies. We invite original, unpublished research papers, articles, short comments, and book reviews from students, scholars, teachers, and professionals in the fields of law, human rights, and social sciences.
                            </p>

                            {/* BUTTON: Submit Your Research */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-6">
                                
                                {/* ONCLICK SHOWS EMAIL SECTION */}
                                <button 
                                    onClick={() => {
                                        setShowSubmitSection(true);
                                        setTimeout(() => {
                                            document.getElementById("email-submit")?.scrollIntoView({ behavior: "smooth" });
                                        }, 200);
                                    }}
                                    className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-red-600 text-white font-semibold rounded-full overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                                >
                                    <span className="relative z-10">Submit Your Research</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                                </button>

                                <Link 
                                    to="/archives" 
                                    className="group px-8 py-4 border-2 border-amber-400 text-amber-400 font-semibold rounded-full transform transition-all duration-300 hover:bg-amber-400 hover:text-slate-900 hover:scale-105"
                                >
                                    Browse Articles
                                </Link>
                            </div>
                        </div>

                        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <ChevronDown className="w-8 h-8 text-amber-400 animate-bounce" />
                        </div>
                    </div>
                </div>
            </aside>

            {/* Stats Section */}
            <section className="py-20 bg-gradient-to-r from-slate-50 to-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div 
                                key={index}
                                className={`text-center transform transition-all duration-700 delay-${index * 200} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                            >
                                <div className="relative inline-block mb-4">
                                    <stat.icon className="w-12 h-12 text-slate-700 mx-auto" />
                                    <div className="absolute inset-0 bg-amber-400/20 rounded-full animate-pulse"></div>
                                </div>
                                <div className="text-3xl font-bold text-slate-800 mb-2">{stat.number}</div>
                                <div className="text-slate-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h3 className="text-4xl font-bold text-white mb-4">Why Choose Lex Revolution?</h3>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">Leading in legal scholarship through integrity, excellence, and innovation.</p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div 
                                key={index}
                                className={`group relative p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 transform transition-all duration-700 delay-${index * 200} hover:scale-105 hover:bg-white/20 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                            >
                                <div className="relative mb-6">
                                    <feature.icon className="w-12 h-12 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
                                </div>
                                <h4 className="text-xl font-semibold text-white mb-4">{feature.title}</h4>
                                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Simple Email Submission Section */}
            {showSubmitSection && (
            <section
                id="email-submit"
                className="py-16 bg-gradient-to-br from-gray-900 via-slate-800 to-black text-white"
            >
                <div className="max-w-3xl mx-auto px-6 text-center space-y-6">

                    <h3 className="text-4xl font-bold text-amber-400">
                        Submit Your Research via Email
                    </h3>

                    <p className="text-lg text-gray-300">
                        We accept research papers, articles, case comments, and book reviews 
                        strictly through email submission.
                    </p>

                    <p className="text-lg text-gray-200">
                        Kindly send your manuscript in 
                        <span className="text-amber-400 font-semibold"> PDF or DOC/DOCX format </span>
                        to:
                    </p>

                    <p className="text-2xl font-semibold text-amber-400 mt-4">
                        ✉️ editor.lexrevolution@gmail.com
                    </p>

                    <p className="text-gray-300 mt-6">Include the following:</p>

                    <ul className="text-gray-300 space-y-2">
                        <li>• Full Name</li>
                        <li>• Affiliation / Institution</li>
                        <li>• Contact Number</li>
                        <li>• Title of Manuscript</li>
                        <li>• Abstract (150–250 words)</li>
                    </ul>

                    <p className="text-gray-400 mt-6 text-sm">
                        Response time: 7–14 working days.
                    </p>
                </div>
            </section>
            )}

            {/* CTA Section */}
            {/* CTA Section */}
<section className="py-20 bg-gradient-to-r from-amber-500 via-red-500 to-amber-600">
    <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        
        <h3 className="text-4xl font-bold text-white mb-6">Ready to Contribute?</h3>
        
        <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join our community of legal scholars and researchers. Share your insights and help shape the future of legal studies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            <Link 
                to="/submission-guidelines" 
                className="group px-8 py-4 bg-white text-red-600 font-semibold rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
                <span className="group-hover:text-red-700">Submission Guidelines</span>
            </Link>
            
            <Link 
                to="/editorial-board" 
                className="group px-8 py-4 border-2 border-white text-white font-semibold rounded-full transform transition-all duration-300 hover:bg-white hover:text-red-600 hover:scale-105"
            >
                Contact Editorial Board
            </Link>

        </div>
    </div>
</section>


        </div>
    );
}
