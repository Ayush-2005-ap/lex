import React from 'react';

const Archives = () => (
  <main className="flex flex-col items-center justify-center min-h-[60vh] bg-white px-4">
    {/* big headline with emoji */}
    <h1 className="text-4xl sm:text-5xl font-bold text-[#900001] tracking-wide flex items-center gap-3">
      Coming&nbsp;Soon <span role="img" aria-label="construction">🚧</span>
    </h1>

    {/* friendly sub‑tagline */}
    <p className="mt-4 text-lg text-gray-600 flex items-center gap-2">
      We’re working hard to bring this to you&nbsp;ASAP
      <span role="img" aria-label="hourglass">⏳</span>
    </p>
  </main>
);

export default Archives;
