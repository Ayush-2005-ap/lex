import React from 'react'
import './Submission.css'

const Submission = () => {
  return (
    <div>
      <div className="submission-container">
      <div className="content">
        <h1>Submission Guidelines</h1>
        <div className="underline-sub"></div>
        <div className="content-guideline">
          <p>• Submission must be made in English only.</p>
          <p>• Each submission should be accompanied by an Abstract containing at least 5 keywords explaining the aims & objective of the paper and the Name of the Author(s), Designation, Institute, Contact details, etc.</p>
          <p>• The font shall be Times New Roman: font size 14 for headings & 12 for body. Footnotes should be size 10 with 1.5 spacing. Endnotes or bibliography should not be used.</p>
          <p>• Citation Mode - ILI Footnoting Style: <a className='content-guideline-link' href="https://ili.ac.in/cstyle.pdf" target="_blank">(https://ili.ac.in/cstyle.pdf)</a></p>
          <p>• The file must be in MS Word format (*.doc or *.docx) with spacing 1.5 on A4-size page. File name must include author name & title.</p>
          <p>• Word Limits (including footnotes):</p>
          <ul>
            <li>Article: 7000–8000 words</li>
            <li>Short Comments/Notes: up to 3500 words</li>
            <li>Book Review: up to 2000 words</li>
          </ul>
          <p>• Co-authorship allowed up to two. In empirical studies, up to three.</p>
          <p>• If accepted, authors will be emailed separately for further formalities.</p>
          <p>• To ensure blind review, author names & details should appear **only on the first page**.</p>
          <p>• Submissions must be emailed with subject: “Submission Article/Comment/Book Review: Title & Name”.</p>
          <p>• Editorial Board reserves the right to make necessary changes.</p>
          <p>• Plagiarism will be checked. Authors must cite references properly. Violations may attract penal action.</p>
          <p>• Authors must adhere to UGC guidelines.</p>
          <p>• Abstract and full paper must be in the same file.</p>
          <p>• All publication-related queries should be sent via email with a clear subject.</p>
          <p>• Non-compliance with guidelines may lead to rejection.</p>
          <p>• Editorial Board’s decision will be final.</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Submission
