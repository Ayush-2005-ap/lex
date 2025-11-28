import React, { useState, useEffect } from 'react';
import { Shield, Users, CheckCircle, AlertCircle, Scale, BookOpen, Eye, Zap, Mail } from 'lucide-react';

const Ethical = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const pillars = [
    {
      icon: CheckCircle,
      title: "Originality",
      description: "All work must be original with proper acknowledgement of sources",
      color: "from-amber-500 to-red-600"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Honest presentation of research results and conclusions",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Users,
      title: "Transparency",
      description: "Clear communication and fair review processes",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: Scale,
      title: "Accountability",
      description: "Authors and editors maintain ethical responsibilities",
      color: "from-purple-500 to-pink-600"
    }
  ];

  const authorDuties = [
    "Ensure all submitted work is original with full references to existing content and proper source disclosure",
    "Provide accurate contact details for the corresponding author responsible for the paper's authorship",
    "Prevent duplicate submissions by not sending the same manuscript to multiple journals simultaneously",
    "Submit signed copyright form upon acceptance, transferring copyright to the journal publisher",
    "Present research results and conclusions honestly based on actual findings",
    "Cooperate with editors and publishers regarding data sources, authorship proof, and originality verification",
    "Obtain necessary third-party approvals for reproduction of authored content",
    "Expect transparency, efficiency, and integrity from the publisher and editor"
  ];

  const editorDuties = [
    "Maintain integrity and fairness required by the journal standards",
    "Protect the journal's reputation by publishing high-quality, intellectually sound work",
    "Give consideration to all significant contributors and ensure proper author attribution",
    "Ensure thorough, objective, and confidential peer review for all submissions",
    "Provide fair and impartial review with respect to authors",
    "Give prompt responses to author communications and timely decisions on submissions",
    "Accept papers based only on merit, quality, and content relevance",
    "Ensure third-party sanctions are obtained before publication",
    "Maintain good communication with publishers and authors"
  ];

  const reviewCommitteeDuties = [
    "Follow confidential peer review policy while keeping reviewer identity hidden from authors",
    "Avoid misappropriation of submitted work during review process",
    "Accept only work within their field of specialization and expertise",
    "Provide impartial and timely reviews with moral obligation to the process",
    "Accept duty to review future versions and provide follow-up advice if requested"
  ];

  const journalCommitments = [
    "Use plagiarism detection software for submissions at any stage of the publication process",
    "Provide detailed instruction manuals for authors with clear submission guidelines",
    "Maintain transparent submission and publication processes",
    "Investigate any allegations of ethical misconduct thoroughly",
    "Retain the right to retract unethical, misleading, or damaging articles",
    "Maintain good communication with editors, authors, reviewers, and partners"
  ];

  const SectionCard = ({ title, duties, index }) => (
    <div className={`bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 mb-8 overflow-hidden transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: `${index * 200}ms` }}>
      <header className="bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 px-8 py-6">
        <h2 className="text-2xl font-bold text-white uppercase tracking-wide">{title}</h2>
      </header>

      <div className="p-8">
        <div className="space-y-4">
          {duties.map((duty, idx) => (
            <div
              key={idx}
              className="group relative flex items-start p-4 rounded-xl bg-gradient-to-r from-slate-50 to-gray-50 transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-red-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

              <div className="relative z-10 flex items-start w-full">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-amber-500 to-red-600 rounded-full flex items-center justify-center mr-4 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed flex-1">{duty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

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
              <Shield className="w-16 h-16 text-amber-400 animate-bounce" />
              <Scale className="w-12 h-12 text-amber-300 animate-pulse" />
            </div>

            <h1 className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-amber-400 via-red-500 to-amber-600 bg-clip-text text-transparent mb-6">
              Ethical Policy
            </h1>

            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Commitment to scholarly integrity and ethical excellence in academic publishing.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative -mt-10 z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Introduction */}
          <section className={`bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 mb-12 overflow-hidden transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <header className="bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 px-8 py-6">
              <h2 className="text-2xl font-bold text-white uppercase tracking-wide flex items-center">
                <BookOpen className="w-8 h-8 mr-3 text-amber-400" />
                Our Commitment
              </h2>
            </header>

            <div className="px-8 py-8 space-y-6">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-amber-500 to-red-600 rounded-full"></div>
                <p className="text-lg text-gray-700 leading-relaxed pl-8">
                  Lex Revolution aims at publishing research that is original and in accordance with the scholarly integrity of the journal. Thus, the authors are requested to abide by the ethical duties and responsibilities and help maintain the scholarly integrity.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-amber-500 to-red-600 rounded-full"></div>
                <p className="text-lg text-gray-700 leading-relaxed pl-8">
                  The authors submitting their manuscripts for publication in the Journal are required to read and understand our ethics policy before submitting the manuscripts. Authors must be honest in presenting their results and conclusions of their research. Research misconduct is harmful for knowledge and could mislead other researchers. Submitted papers may be subjected to anti-plagiarism checks to detect overlapping and similarity in content. In case any such content is found to be similar, it shall be liable to be rejected.
                </p>
              </div>
            </div>
          </section>

          {/* Ethics Pillars */}
          <section className={`mb-12 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar, index) => (
                <div
                  key={index}
                  className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                  onMouseEnter={() => setActiveSection(index)}
                  onMouseLeave={() => setActiveSection(null)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>

                  <div className="relative z-10">
                    <div className={`w-12 h-12 bg-gradient-to-br ${pillar.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <pillar.icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{pillar.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Author Duties */}
          <SectionCard title="1. Ethical Duties of Authors" duties={authorDuties} index={5} />

          {/* Editor Duties */}
          <SectionCard title="2. Ethical Duties of Editors" duties={editorDuties} index={6} />

          {/* Review Committee */}
          <section className={`bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 mb-8 overflow-hidden transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '1400ms' }}>
            <header className="bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 px-8 py-6">
              <h2 className="text-2xl font-bold text-white uppercase tracking-wide">3. The Review Committee and Ethics</h2>
            </header>

            <div className="p-8">
              <div className="space-y-4">
                {reviewCommitteeDuties.map((duty, idx) => (
                  <div
                    key={idx}
                    className="group relative flex items-start p-4 rounded-xl bg-gradient-to-r from-slate-50 to-gray-50 transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-red-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                    <div className="relative z-10 flex items-start w-full">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-amber-500 to-red-600 rounded-full flex items-center justify-center mr-4 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                        <Eye className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700 leading-relaxed flex-1">{duty}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Journal Commitments */}
          <section className={`bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 mb-12 overflow-hidden transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '1600ms' }}>
            <header className="bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 px-8 py-6">
              <h2 className="text-2xl font-bold text-white uppercase tracking-wide">4. The Journal and Ethics</h2>
            </header>

            <div className="p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                It shall be ensured that the integrity and reputation of the journal is not jeopardized and that work of highest quality shall be published.
              </p>

              <div className="space-y-4">
                {journalCommitments.map((commitment, idx) => (
                  <div
                    key={idx}
                    className="group relative flex items-start p-4 rounded-xl bg-gradient-to-r from-slate-50 to-gray-50 transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-red-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                    <div className="relative z-10 flex items-start w-full">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-amber-500 to-red-600 rounded-full flex items-center justify-center mr-4 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700 leading-relaxed flex-1">{commitment}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Final Note */}
          <section className={`bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 mb-12 overflow-hidden transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '1800ms' }}>
            <header className="bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 px-8 py-6">
              <h2 className="text-2xl font-bold text-white uppercase tracking-wide flex items-center">
                <AlertCircle className="w-8 h-8 mr-3 text-amber-400" />
                Investigation & Resolution
              </h2>
            </header>

            <div className="px-8 py-8 space-y-6">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-amber-500 to-red-600 rounded-full"></div>
                <p className="text-lg text-gray-700 leading-relaxed pl-8">
                  In case any work is found to be unethical or plagiarized, the Journal shall reserve the rights to conduct a fair and transparent investigation into the same. Depending upon the decision/result of such investigation, the Journal may decide to either reject the manuscript or require the author to re-submit the same within the prescribed period. In case the paper is already published before the discovery of the unethical submission, the Journal reserves the right to retract the work, with a statement of explanation. The authors are expected to cooperate and render all support and cooperation sought from them by the Journal.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className={`text-center py-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '2000ms' }}>
            <div className="bg-gradient-to-r from-amber-500 via-red-500 to-amber-600 rounded-3xl p-8 shadow-2xl">
              <div className="flex justify-center mb-4">
                <Mail className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Questions About Ethics?</h3>
              <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
                For any further queries relating to ethical policies, submissions, review, or publication processes, contact our editorial team.
              </p>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
                <p className="text-white font-semibold mb-2">Email the Editor:</p>
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

export default Ethical;
