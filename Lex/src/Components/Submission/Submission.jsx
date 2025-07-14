import React from 'react';

const Submission = () => {
  return (
    <div className="py-10 px-4 sm:px-8 lg:px-16 bg-gray-50 text-gray-900 font-['Times_New_Roman']">
      {/* ---------- heading ---------- */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#900001]">
        Submission&nbsp;Guidelines
      </h1>
      <div className="h-1 w-32 bg-[#900001] rounded mx-auto my-6" />

      {/* ---------- guidelines ---------- */}
      <div className="max-w-3xl mx-auto space-y-4 text-[16px] leading-relaxed text-justify">
        <p>• Submission must be made in English only.</p>

        <p>
          • Each submission should be accompanied by an&nbsp;
          <span className="font-semibold">Abstract</span> containing at least
          5&nbsp;keywords explaining the aims&nbsp;&amp;&nbsp;objective of the
          paper and the&nbsp;Name of the Author(s), Designation, Institute,
          Contact details, etc.
        </p>

        <p>
          • The font shall be <span className="font-semibold">Times New Roman</span>:
          font size&nbsp;14 for headings &amp;&nbsp;12 for body. Footnotes
          should be size&nbsp;10 with 1.5&nbsp;spacing. Endnotes or bibliography
          should <span className="italic">not</span> be used.
        </p>

        <p>
          • Citation Mode – ILI Footnoting Style:&nbsp;
          <a
            href="https://ili.ac.in/cstyle.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#900001] underline"
          >
            https://ili.ac.in/cstyle.pdf
          </a>
        </p>

        <p>
          • The file must be in&nbsp;MS&nbsp;Word format (*.doc&nbsp;or *.docx)
          with spacing&nbsp;1.5 on A4‑size page. File name must include author
          name &amp;&nbsp;title.
        </p>

        {/* word limits */}
        <p className="font-semibold">• Word&nbsp;Limits (including footnotes):</p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Article: 7 000 – 8 000&nbsp;words</li>
          <li>Short Comments / Notes: up&nbsp;to 3 500&nbsp;words</li>
          <li>Book Review: up&nbsp;to 2 000&nbsp;words</li>
        </ul>

        <p>• Co‑authorship allowed up to two. In empirical studies, up to three.</p>
        <p>• If accepted, authors will be emailed separately for further formalities.</p>
        <p>• To ensure blind review, author names &amp; details should appear <span className="font-semibold">only on the first page</span>.</p>
        <p>• Submissions must be emailed with subject: <em>“Submission&nbsp;Article/Comment/Book&nbsp;Review: Title&nbsp;&amp;&nbsp;Name”</em>.</p>
        <p>• Editorial Board reserves the right to make necessary changes.</p>
        <p>• Plagiarism will be checked. Authors must cite references properly. Violations may attract penal action.</p>
        <p>• Authors must adhere to UGC guidelines.</p>
        <p>• Abstract and full paper must be in the same file.</p>
        <p>• All publication‑related queries should be sent via email with a clear subject.</p>
        <p>• Non‑compliance with guidelines may lead to rejection.</p>
        <p>• Editorial Board’s decision will be final.</p>
      </div>
    </div>
  );
};

export default Submission;
