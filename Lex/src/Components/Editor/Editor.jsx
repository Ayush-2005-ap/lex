import React, { useState, useEffect } from 'react';
import { Scale, BookOpen, Users, Award, Globe, Mail, Phone, MapPin, Calendar, FileText, Building, User, Crown, Gavel, Star, ChevronDown } from 'lucide-react';

const Editor = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeSection, setActiveSection] = useState(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const advisory = [
        {
            name: 'Dr. Arun Gupto',
            title: 'Professor of English, IACER, Pokhra University, Kathmandu',
        },
        {
            name: 'Dr. Andrea Zappalaglio',
            title: 'Associate Professor, Intellectual Property Law, University of Leeds (U.K.)',
        },
        {
            name: 'Dr. Manirani Dasgupta',
            title: 'Professor of Law, University of Calcutta, Kolkata',
        },
        {
            name: 'Dr Sudarsan Verma',
            title: 'Professor of Law, BBAU, Lucknow',
        },
        {
            name: 'Dr. Pradeep Kulshrestha',
            title: 'Dean & Professor of Law, SoL, Bennett University, G. Noida',
        },
        {
            name: 'Dr. Rashmi Nagpal',
            title: 'Director (I/C) SVKM\'s NMIMS Chandigarh Campus',
        },
        {
            name: 'Dr. Deepak Kumar Srivastava',
            title: 'Associate Professor, Dean & Registrar (I/C), HNLU, Raipur',
        },
        {
            name: 'Dr. Nawal Kishor Mishra',
            title: 'Associate Professor of Law, Faculty of Law, BHU, Varanasi',
        },
        {
            name: 'Dr. Santosh K. Tripathi',
            title: 'Associate Professor, Amity University Haryana, Gurugram',
        },
        {
            name: 'Dr. Sangeeta Sharma',
            title: 'Human Rights & Social Activist, Lucknow',
        },
        {
            name: 'Dr. Ritu Agarwala',
            title: 'Asst. Professor of Sociology, Lucknow',
        },
        {
            name: 'Dr. Soma Dey Sarkar',
            title: 'Asst. Professor of Law, North Bengal University, Darjeeling',
        },
        {
            name: 'Dr. Suresh M. Tripathi',
            title: 'Asst. Professor of Law, Chhattisgarh Academy of Administration, Raipur',
        },
        {
            name: 'Dr. Bhanu Pratap',
            title: 'Asst. Professor of Law, University of Lucknow',
        },
        {
            name: 'Dr. Ankit Awasthi',
            title: 'Head, Centre for WTO/WIPO Studies (SLT), HNLU, Raipur',
        },
        {
            name: 'Dr. Pranshul Pathak',
            title: 'Associate Professor of Law, Amity University Haryana, Gurugram',
        },
        {
            name: 'Dr. Bineet Kedia',
            title: 'Associate Professor of Law, KIIT University, Bhubaneswar',
        },
        {
            name: 'Dr. Mudra Singh',
            title: 'Asst. Professor of Law, Amity Law School, Lucknow',
        },
        {
            name: 'Dr. Neha Mishra',
            title: 'Asst. Professor of Law, Amity University Haryana, Gurugram',
        },
        {
            name: 'Dr. Mayank Dubey',
            title: 'Advocate, Allahabad High Court, Prayagraj',
        },
        {
            name: 'Dr. Sarvesh K. Shahi',
            title: 'Asst. Professor of Law, KIIT University, Bhubaneswar',
        },
        {
            name: 'Dr. Aparajita Singh',
            title: 'Associate Professor of Law, UPES, Dehradun',
        },
        {
            name: 'Dr. Rishi Raj Bhardwaj',
            title: 'Asst. Professor of Law, Mahindra University, Hyderabad',
        },
        {
            name: 'Dr. Shilpika Pandey',
            title: 'Asst. Professor of Law, D.Y. Patil International University, Pune',
        },
        {
            name: 'Dr. Manisha Patawari',
            title: 'Asst. Professor of Law, ILNU, Nirma University, Ahmedabad'
        },
        {
            name: "Mr Anoop Yadav",
            title: 'Prosecution Officer, CBI, New Delhi'
        },
        {
            name: 'Dr. Razia Chauhan',
            title: 'Asst. Professor of Law, Sharda University, Greater Noida'
        },
        {
            name: 'Ms Sameera Fatima',
            title: 'Asst. Professor of Law, Arka Jain University, Ranchi'
        },
        {
            name: 'Dr. Aditya Mishra',
            title: 'Advocate, Supreme Court of India'
        },
        {
            name: 'Dr. Vartika Saxena',
            title: 'Asst. Professor of Law, Amity University Madhya Pradesh, Gwalior'
        },
    ];

    const associate = [
        {
            name: 'Ashish Sharma',
            title: 'Advocate',
        },
        {
            name: 'Harsha Manav',
            title: 'Deputy Manager Regulatory - Legal Greenko Group',
        },
        {
            name: 'Shivam Kumar Gupta',
            title: 'Doctoral Candidate, Bennett University',
        },
        {
            name: 'Sandhya Sharma',
            title: 'Doctoral Candidate, Bennett University',
        },
        {
            name: 'Gaurav Yadav',
            title: 'Asst. Professor, ICFAI University, Dehradun',
        },
        {
            name: 'Rachit Sharma',
            title: 'Asst. Professor, IILM University, Greater Noida',
        },
    ];

    const editors = [
        {
            name: 'Dr. Jayanta Ghosh',
            title: 'Assistant Professor & Coordinator',
            university: 'WBNUJS, Kolkata',
            email: 'Email: jayanta.crsgpp@nujs.edu',
            img: '/Images/jayanta-ghosh.jpg',
            department: 'The Centre for Regulatory Studies',
            department2: "Governance and Public Policy",
            Address1: " WBNUJS, 12 LB Block, Sector III",
            Address2: "Salt Lake City, Kolkata, West Bengal",
        },
        {
            name: 'Dr. Ankita Sharma',
            title: 'Associate Professor',
            university: 'G.D. Goenka University, Gurugram',
            email: 'Email:ankita.sharma@gdgu.org',
            department: "School of Law",
            img: '/Images/Ankita-Sharma.jpg',
            department2: "",
            Address1: "Sohna Gurgaon Road Sohna",
            Address2: "Haryana",
        },
        {
            name: 'Juhi Singh',
            title: 'Legal Counsel',
            university: 'Penguin Random House India',
            email: 'Email:juhi248@gmail.com',
            department: "Review & Proofreading",
            img: '/Images/juhi singh.jpg',
            department2: "",
            Address1: "Penguin Random House India Pvt. Ltd",
            Address2: "Mumbai",
        },
        {
            name: 'Dr. Avnish Singh',
            title: 'Assistant Professor',
            university: 'Bennett University, Greater Noida',
            email: 'Email:avnish.singh@bennett.edu.in',
            department: "School of Law",
            img: '/Images/avnishsir-final2_Edited.jpg',
            department2: "",
            Address1: "Bennett University, Plot#8-11, Tech Zone-2",
            Address2: "Greater Noida, Uttar Pradesh",
        },
        {
            name: 'Dr. Sumit Agarwala',
            title: 'Associate Professor',
            university: 'The Assam Royal Global University, Guwahati',
            email: 'Email:sagarwala@rgu.ac',
            department: "School of Law",
            img: '/Images/Dr. sumit.png',
            department2: "",
            Address1: "The Assam Royal Global University, NH-27",
            Address2: "Betkuchi, Guwahati, Assam ",
        },
        {
            name: 'Dr. Shailesh Mishra',
            title: 'Assistant Professor',
            university: 'Christ University, Ghaziabad',
            email: 'Email:shailesh.mishra@christuniversity.in',
            department: "School of Law",
            img: '/Images/Dr. shailesh.png',
            department2: "",
            Address1: "Christ University, Nandgram Rd",
            Address2: "Ghaziabad, Uttar Pradesh",
        },
        {
            name: 'Dr. Preeti Singh',
            title: 'Assistant Professor',
            university: 'Bennett University, Greater Noida',
            email: 'Email:preeti.singh@bennett.edu.in',
            department: "School of Law",
            img: '/Images/dr.preeti-final.jpg',
            department2: "",
            Address1: "Bennett University, Plot#8-11, Tech Zone-2",
            Address2: "Greater Noida, Uttar Pradesh",
        },
        {
            name: 'Aprajita Kumari',
            title: 'Advocate',
            university: 'Toronto, Ontario, Canada',
            email: 'Email:aparajitaktr@gmail.com',
            department: "Legal Service",
            img: '/Images/Aprajita_removebg_preview.png',
            department2: "",
            Address1: "Zahid Law Firm, 18-695 Markham Rd",
            Address2: "Scarborough ON M1H2A5, Canada",
        },
        {
            name: 'Dr. Ravi Prakash Chaubey',
            title: 'Visiting Faculty (Indic Studies)',
            university: 'Gurugram University, Gurugram',
            email: 'Email:ravipchaube@gmail.com',
            department: 'Dept. of Indic Studies',
            img: '/Images/Ravi-prakash-chaubey.jpg',
            department2: "",
            Address1: "Gurugram University, Opp. Presidium School",
            Address2: "Gurugram, Haryana ",
        },
        {
            name: 'Dr. Bhupali Saikia',
            title: 'Assistant Professor',
            university: 'The Assam Royal Global University, Guwahati',
            email: 'Email:bsaikia1@rgu.ac',
            department: "School of Law",
            img: '/Images/Bhupali-Saikia.jpg',
            department2: "",
            Address1: "The Assam Royal Global University",
            Address2: "Betkuchi, Guwahati, Assam "
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 opacity-95"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-900/20 via-transparent to-red-900/30"></div>
                
                {/* Floating Particles */}
                <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
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
                            <Crown className="w-16 h-16 text-amber-400 animate-bounce" />
                            <Users className="w-12 h-12 text-amber-300 animate-pulse" />
                        </div>
                        
                        <h1 className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-amber-400 via-red-500 to-amber-600 bg-clip-text text-transparent mb-6">
                            Editorial Board
                        </h1>
                        
                        <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
                            Meet our distinguished panel of legal scholars, academics, and professionals who guide Lex Revolution's editorial excellence.
                        </p>
                        
                        {/* Scroll Indicator */}
                        <div className="mt-12">
                            <ChevronDown className="w-8 h-8 text-amber-400 animate-bounce mx-auto" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <main className="relative -mt-10 z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Leadership Section */}
                    <section className={`mb-16 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
                            
                            {/* Patron in Chief */}
                            <div className="bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 px-8 py-12 text-center">
                                <div className="flex justify-center items-center space-x-4 mb-6">
                                    <Crown className="w-12 h-12 text-amber-400 animate-pulse" />
                                    <Star className="w-8 h-8 text-amber-300" />
                                </div>
                                <h2 className="text-4xl font-bold text-white mb-4">Patron-in-Chief</h2>
                                <h3 className="text-2xl text-amber-400 font-semibold mb-2">Prof. Gopal Krishna Chandani</h3>
                                <p className="text-gray-200 text-lg">Professor of Law (Retd.) University of Lucknow</p>
                            </div>

                            {/* Patron */}
                            <div className="bg-gradient-to-r from-indigo-800 via-blue-800 to-slate-800 px-8 py-12 text-center">
                                <div className="flex justify-center items-center space-x-4 mb-6">
                                    <Gavel className="w-12 h-12 text-amber-400 animate-bounce" />
                                    <Scale className="w-8 h-8 text-amber-300" />
                                </div>
                                <h2 className="text-4xl font-bold text-white mb-4">Patron</h2>
                                <h3 className="text-2xl text-amber-400 font-semibold mb-2">Mr. Kamal Nayan Chaubey</h3>
                                <p className="text-gray-200 text-lg">Sr. Advocate, Patna High Court, Patna</p>
                            </div>
                        </div>
                    </section>

                    {/* Chief & Executive Editor */}
                    <section className={`mb-16 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent mb-4">
                                Leadership Team
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-red-600 mx-auto rounded-full"></div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {/* Chief Editor */}
                            <div className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <a href="https://www.linkedin.com/in/advanimeshkumar/" target="_blank" rel="noopener noreferrer" className="block relative z-10">
                                        <img src="/Images/Dr_Animesh2.png" alt="editor-in-chief" className="w-full h-96 object-cover" />
                                    </a>
                                </div>
                                <div className="p-6 text-center">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <User className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-blue-600 mb-2">Dr. Animesh Kumar</h3>
                                    <p className="text-red-600 font-semibold text-lg mb-2">Editor-in-Chief</p>
                                    <p className="text-gray-700 font-medium mb-2">animesh@ccs.in</p>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Advocate & Senior Legal Research Consultant<br />
                                        Policy Research Outreach<br />
                                        Centre for Civil Society, A-69<br />
                                        Hauz Khas, New Delhi
                                    </p>
                                </div>
                            </div>

                            {/* Executive Editor */}
                            <div className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <a href="https://www.linkedin.com/in/mayuri-gupta-52064160/" target="_blank" rel="noopener noreferrer" className="block relative z-10">
                                        <img src="/Images/executive-editor.jpg" alt="executive-editor" className="w-full h-96 object-cover" />
                                    </a>
                                </div>
                                <div className="p-6 text-center">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <User className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-blue-600 mb-2">Mayuri Gupta</h3>
                                    <p className="text-red-600 font-semibold text-lg mb-2">Chief Executive Editor</p>
                                    <p className="text-gray-700 font-medium mb-2">mayuri.gupta@vidhipolicy.in</p>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Advocate & Senior Resident Fellow<br />
                                        Charkha, Constitutional Law Research<br />
                                        Vidhi Centre for Legal Policy, A-232<br />
                                        Defence Colony, New Delhi
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Editors Section */}
                    <section className={`mb-16 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent mb-4">
                                Editorial Team
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-red-600 mx-auto rounded-full"></div>
                        </div>

                        <div className="bg-gradient-to-r from-slate-100 to-blue-100 rounded-3xl p-8 shadow-inner">
                            <div className="flex overflow-x-auto gap-6 pb-6">
                                {editors.map((editor, idx) => (
                                    <div 
                                        key={idx} 
                                        className="group min-w-[320px] bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                                    >
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            <img src={editor.img} alt={editor.name} className="w-full h-64 object-cover" />
                                        </div>
                                        <div className="p-6">
                                            <div className="w-10 h-10 bg-gradient-to-br from-slate-600 to-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                                <BookOpen className="w-5 h-5 text-white" />
                                            </div>
                                            <h3 className="text-lg font-bold text-blue-600 mb-2">{editor.name}</h3>
                                            <p className="text-gray-700 font-medium text-sm mb-1">{editor.title}</p>
                                            <p className="text-gray-600 text-sm mb-1">{editor.department}</p>
                                            {editor.department2 && <p className="text-gray-600 text-sm mb-1">{editor.department2}</p>}
                                            <p className="text-gray-600 text-sm mb-2">{editor.university}</p>
                                            <p className="text-blue-600 text-xs font-medium mb-2">{editor.email}</p>
                                            <p className="text-gray-500 text-xs">{editor.Address1}</p>
                                            <p className="text-gray-500 text-xs">{editor.Address2}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Managing Editor */}
                    <section className={`mb-16 transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent mb-4">
                                Managing Editor
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-red-600 mx-auto rounded-full"></div>
                        </div>

                        <div className="flex justify-center">
                            <div className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl max-w-sm">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <img src="/Images/Snigdha-final.jpg" alt="Snigdha Gupta" className="w-full h-80 object-cover" />
                                </div>
                                <div className="p-6 text-center">
                                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Award className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-blue-600 mb-2">Snigdha Gupta</h3>
                                    <p className="text-gray-700 font-medium mb-2">Data Protection & AI Law Consultant</p>
                                    <p className="text-gray-600 mb-2">Kolkata</p>
                                    <p className="text-blue-600 text-sm font-medium">snigdhagupta0@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Executive Editors */}
                    <section className={`mb-16 transform transition-all duration-1000 delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent mb-4">
                                Executive Editors
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-red-600 mx-auto rounded-full"></div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {associate.map((member, idx) => (
                                <div
                                    key={idx}
                                    className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Users className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold text-blue-600 mb-2">{member.name}</h3>
                                    <p className="text-gray-700 font-medium text-sm">{member.title}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Advisory Board */}
                    <section className={`mb-16 transform transition-all duration-1000 delay-1300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent mb-4">
                                Advisory Board
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-red-600 mx-auto rounded-full"></div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {advisory.map((member, idx) => (
                                <div
                                    key={idx}
                                    className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Scale className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold text-blue-600 mb-2">{member.name}</h3>
                                    <p className="text-gray-700 font-medium text-sm leading-relaxed">{member.title}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Call to Action */}
                    <section className={`text-center py-16 transform transition-all duration-1000 delay-1500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="bg-gradient-to-r from-amber-500 via-red-500 to-amber-600 rounded-3xl p-8 shadow-2xl">
                            <h3 className="text-3xl font-bold text-white mb-4">Join Our Editorial Excellence</h3>
                            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
                                Our distinguished editorial board ensures the highest standards of academic rigor and scholarly excellence in legal research.
                            </p>
                            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="group px-8 py-4 bg-white text-red-600 font-semibold rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                                    <span className="group-hover:text-red-700">Submit Your Research</span>
                                </button>
                                <button className="group px-8 py-4 border-2 border-white text-white font-semibold rounded-full transform transition-all duration-300 hover:bg-white hover:text-red-600 hover:scale-105">
                                    Contact Editorial Team
                                </button>
                            </div> */}
                        </div>
                    </section>

                </div>
            </main>
        </div>
    );
};

export default Editor;