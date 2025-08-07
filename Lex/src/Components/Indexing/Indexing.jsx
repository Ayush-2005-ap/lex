import React from 'react';

const Indexing = () => {
  // ‑‑‑ image / title pairs, edit paths if needed
  const services = [
      { src: '/Images/SSRN_Logo (1).png',        title: 'SSRN' },
      { src: '/Images/Academia-2.png',           title: 'Academia' },
      { src: '/Images/1024px-ResearchGate (1).png', title: 'Research Gate' },
      { src: '/Images/Scribd (1).png',           title: 'Scribd' },
      // { src: '/Images/ISSN_logo (1).png',        title: 'ISSN' },
      { src: '/Images/Google-Scholar (1).png',   title: 'Google Scholar' },
  ];

  return (
    <main className="bg-white py-10 px-4 sm:px-8 lg:px-12">
      {/* heading */}
      <h1 className="text-4xl font-bold text-center text-[#900001] mb-10 animate-fadeInUp">
        Indexing
      </h1>

      {/* grid */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {services.map(({ src, title }) => (
          <div
            key={title}
            className="flex flex-col items-center justify-center bg-sky-200 text-white
                       border-2 border-black rounded-lg p-6 w-full max-w-xs h-56
                       transition-transform hover:scale-105 hover:bg-sky-50 animate-fadeInUp"
          >
            <img
              src={src}
              alt={title}
              className="w-3/4 max-h-24 object-contain mb-4"
            />
            <h2 className="text-lg font-bold text-cyan-900">{title}</h2>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Indexing;
