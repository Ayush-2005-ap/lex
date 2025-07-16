import React from 'react';

const About = () => {
  /* ----------------- Journal particulars ----------------- */
  // Replace the values on the right with your actual data.
  const particulars = [
    { label: 'Title',                value: 'Lex Revolution' },
    { label: 'Frequency',            value: 'Quaterly' },
    { label: 'ISSN',                 value: '2394-997X' },
    { label: 'E-ISSN',               value: 'Applied For'},
    { label: 'Publisher',            value: 'Dr. Vijay Bahadur Pandey' },
    { label: 'Chief Editor',         value: 'Animesh Kumar' },
    { label: 'Copyright',            value: 'Lex Revolution' },
    { label: 'Starting Year',        value: '2015' },
    { label: 'Subject',              value: 'Social Science' },
    { label: 'Language',             value: 'English' },
    { label: 'Publication Format',   value: 'Print' },
    { label: 'Phone No.',            value: 'XXXXX' },
    { label: 'Email Id',             value: 'editor.lexrevolution@gmail.com' },
    { label: 'Mobile No.',           value: 'XXXXX' },
    { label: 'Website',              value: 'www.lexrevolution.in' },
    { label: 'Address',              value: 'Rimjhim Smriti, South NH‑922, At PO Nuaon Krishnabrahm, Buxar‑802111 (Bihar)' },
  ];

  return (
    <main className="bg-white py-10 px-4 sm:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto border border-gray-300 shadow-md">
        {/* ---------- Section: About the Journal ---------- */}
        <header className="bg-[#e7f2ff] border-b border-gray-300 px-4 py-3">
          <h1 className="text-xl font-bold text-[#900001] uppercase tracking-wide animate-fadeInUp">
            About the Journal
          </h1>
        </header>

        <section className="px-6 py-6 text-justify text-[15px] leading-relaxed">
          {/* Replace the paragraph below with your journal description */}
          <p className="text-gray-600">
          Lex Revolution is an international, peer-reviewed, quarterly research journal focusing on social and legal studies. It invites original, unpublished research papers, articles, short comments, and book reviews from students, scholars, teachers, and professionals in the fields of law, human rights, and social sciences.
          </p>
        </section>

        {/* ---------- Section: Journal Particulars ---------- */}
        <h2 className="text-center font-semibold text-[#900001] uppercase tracking-wide mb-4">
          Journal Particulars
        </h2>

        <dl className="w-full border-t border-gray-300">
          {particulars.map(({ label, value }, idx) => (
            <div
              key={label}
              className={`grid grid-cols-12 ${
                idx % 2 ? 'bg-[#f7fafe]' : 'bg-white'
              } border-b border-gray-300`}
            >
              <dt className="col-span-4 sm:col-span-3 lg:col-span-2 px-4 py-2 font-medium text-gray-700">
                {label}
              </dt>
              <dd className="col-span-8 sm:col-span-9 lg:col-span-10 px-4 py-2 text-gray-600">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </main>
  );
};

export default About;
