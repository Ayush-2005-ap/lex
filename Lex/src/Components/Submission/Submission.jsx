import React, { useState, useEffect } from 'react';
import { FileText, CheckCircle, AlertCircle, Mail, BookOpen, Users, Clipboard, Shield, Scale } from 'lucide-react';

const Submission = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const guidelines = [
    {
      icon: BookOpen,
      title: "Language",
      content: "Submission must be made in English only.",
      color: "from-amber-500 to-red-600"
    },
    {
      icon: FileText,
      title: "Abstract & Author Details",
      content: "Each submission should be accompanied by an Abstract containing at least 5 keywords explaining the aims & objective of the paper and the Name of the Author(s), Designation, Institute, Contact details, etc.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Clipboard,
      title: "Font & Formatting",
      content: "The font shall be Times New Roman: font size 14 for headings & 12 for body. Footnotes should be size 10 with 1.5 spacing. Endnotes or bibliography should not be used.",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: Scale,
      title: "Citation Mode",
      content: "ILI Footnoting Style",
      link: "https://ili.ac.in/cstyle.pdf",
      color: "from-purple-500 to-pink-600"
    }
  ];

  const requirements = [
    {
      title: "File Format",
      description: "The file must be in MS Word format (*.doc or *.docx) with spacing 1.5 on A4-size page. File name must include author name & title."
    },
    {
      title: "Word Limits",
      description: "Including footnotes",
      list: [
        "Article: 7,000 – 8,000 words",
        "Short Comments / Notes: up to 3,500 words",
        "Book Review: up to 2,000 words"
      ]
    },
    {
      title: "Co-authorship",
      description: "Co-authorship allowed up to two. In empirical studies, up to three."
    },
    {
      title: "Blind Review",
      description: "To ensure blind review, author names & details should appear only on the first page."
    },
    {
      title: "Email Subject",
      description: "Submissions must be emailed with subject: \"Submission Article/Comment/Book Review: Title & Name\"."
    }
  ];

  const importantNotes = [
    "If accepted, authors will be emailed separately for further formalities.",
    "Editorial Board reserves the right to make necessary changes.",
    "Plagiarism will be checked. Authors must cite references properly. Violations may attract penal action.",
    "Authors must adhere to UGC guidelines.",
    "Abstract and full paper must be in the same file.",
    "All publication-related queries should be sent via email with a clear subject.",
    "Non-compliance with guidelines may lead to rejection.",
    "Editorial Board's decision will be final."
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
              <FileText className="w-16 h-16 text-amber-400 animate-bounce" />
              <CheckCircle className="w-12 h-12 text-amber-300 animate-pulse" />
            </div>

            <h1 className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-amber-400 via-red-500 to-amber-600 bg-clip-text text-transparent mb-6">
              Submission Guidelines
            </h1>

            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Follow these guidelines to ensure your research meets our publication standards and receives proper consideration.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative -mt-10 z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Key Guidelines Grid */}
          <section className={`mb-12 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="grid md:grid-cols-2 gap-6">
              {guidelines.map((guideline, index) => (
                <div
                  key={index}
                  className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                  onMouseEnter={() => setActiveSection(index)}
                  onMouseLeave={() => setActiveSection(null)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${guideline.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>

                  <div className="relative z-10">
                    <div className={`w-12 h-12 bg-gradient-to-br ${guideline.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <guideline.icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-lg font-semibold text-gray-800 mb-3">{guideline.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{guideline.content}</p>

                    {guideline.link && (
                      <a
                        href={guideline.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 text-red-600 hover:text-red-700 font-semibold text-sm underline"
                      >
                        View Citation Guide →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Requirements Section */}
          <section className={`bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 mb-12 overflow-hidden transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <header className="bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 px-8 py-6">
              <h2 className="text-2xl font-bold text-white uppercase tracking-wide flex items-center">
                <Clipboard className="w-8 h-8 mr-3 text-amber-400" />
                Technical Requirements
              </h2>
            </header>

            <div className="p-8">
              <div className="space-y-6">
                {requirements.map((req, idx) => (
                  <div
                    key={idx}
                    className={`group relative p-6 rounded-xl transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02] ${
                      idx % 2 ? 'bg-gradient-to-r from-blue-50 to-indigo-50' : 'bg-gradient-to-r from-slate-50 to-gray-50'
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-red-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                    <div className="relative z-10">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-red-600 rounded-full mr-3"></div>
                        {req.title}
                      </h3>

                      <p className="text-gray-700 leading-relaxed ml-5">{req.description}</p>

                      {req.list && (
                        <ul className="mt-3 ml-8 space-y-2">
                          {req.list.map((item, i) => (
                            <li key={i} className="text-gray-600 flex items-start">
                              <span className="text-amber-600 mr-2">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Important Notes Section */}
          <section className={`bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 mb-12 overflow-hidden transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <header className="bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 px-8 py-6">
              <h2 className="text-2xl font-bold text-white uppercase tracking-wide flex items-center">
                <AlertCircle className="w-8 h-8 mr-3 text-amber-400" />
                Important Notes
              </h2>
            </header>

            <div className="p-8">
              <div className="grid gap-4">
                {importantNotes.map((note, idx) => (
                  <div
                    key={idx}
                    className="group relative flex items-start p-4 rounded-xl bg-gradient-to-r from-amber-50 to-red-50 transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-red-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

                    <div className="relative z-10 flex items-start w-full">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-amber-500 to-red-600 rounded-full flex items-center justify-center mr-4 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700 leading-relaxed flex-1">{note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className={`text-center py-16 transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gradient-to-r from-amber-500 via-red-500 to-amber-600 rounded-3xl p-8 shadow-2xl">
              <div className="flex justify-center mb-4">
                <Mail className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Submit?</h3>
              <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
                Ensure your submission follows all guidelines above and send it to our editorial team.
              </p>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
                <p className="text-white font-semibold mb-2">Email your submission to:</p>
                <a
                  href="mailto:editor.lexrevolution@gmail.com"
                  className="text-white text-lg font-bold hover:text-amber-200 transition-colors duration-300"
                >
                  editor.lexrevolution@gmail.com
                </a>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default Submission;
