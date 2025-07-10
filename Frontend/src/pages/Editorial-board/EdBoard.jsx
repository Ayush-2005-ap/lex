import React from 'react'
import './EdBoard.css'

const EdBoard = () => {
  
  return (
    <div>
      <h1>Welcome to Editorial Board</h1>
      <div className="edboard-container">
        <div className="hr"><hr /></div>

        <div className="body-1">
          <div className="main">
            <div className="container">
            </div>

            <section className="patron-in-cheif">
              <h2>Patron-in-Chief</h2>
              <h3>Prof. Gopal Krishna Chandani</h3>
              <h4>Professor of Law (Retd.) University of Lucknow</h4>
            </section>

            <section className="patron">
              <h2>Patron</h2>
              <h3>Mr. Kamal Nayan Chaubey</h3>
              <h4>Sr. Advocate, Patna High Court, Patna</h4>
            </section>

            <div className="underline"></div>

            <section className="content">
              <div className="managers">
                <div className="cheif">
                  <a href="https://www.linkedin.com/in/advanimeshkumar/" target="_blank" rel="noopener noreferrer">
                    <img className="editor-in-cheif" src="/images/editor-in-chief.jpg" alt="editor-in-chief" />
                  </a>

                  <h2>Animesh Kumar</h2>
                  <h3>Editor-in-Chief</h3>
                  <h4>Email: animesh.kumar@anagh.in</h4>
                  <p>Advocate @ Patna High Court & Director @ Anagh Forum for Sustainable Outreach</p>
                </div>
                <div className="executive">
                  <a href=": https://www.linkedin.com/in/mayuri-gupta-52064160/" target="_blank" rel="noopener noreferrer">
                    <img className="executive-editor" src="/images/executive-editor.jpg" alt="executive-editor" />
                  </a>

                  <h2>Mayuri Gupta</h2>
                  <h3>Chief Executive Editor</h3>
                  <h4>Email: mayuri.gupta@vidhilegalpolicy.in</h4>
                  <p>MKB Senior Resident Fellow @ Vidhi Centre for Legal Policy</p>
                </div>
              </div>

              {/* Editors */}
              <div className="board">
                <h2>Editors</h2>
                <div className="underline-2"></div>
                <div className="main-board">
                  <div className="editors">
                    <div className="editors">
                      <img src="/images/jayanta-ghosh.jpg" alt="Dr. Jayanta Ghosh" />
                      <h3>Dr. Jayanta Ghosh</h3>
                      <p>Research Fellow, WBNUJS, Kolkata</p>
                      <p>Email: jayanta.ghosh@example.com</p>
                    </div>
                    <div className='editors'>
                      <img src="/images/Ankita-Sharma.jpg" alt="Dr. Ankita Sharma" />
                      <h3>Dr. Ankita Sharma</h3>
                      <p>Associate Professor @ G.D. Goenka University, Gurugram</p>
                      <p>Email: ankitasharma.law@gmail.com</p>
                    </div>
                    <div className='editors'>
                      <img src="/images/juhi singh.jpg" alt="Juhi Singh" />
                      <h3>Juhi Singh</h3>
                      <p>Legal Counsel @ Penguin Random House India</p>
                      <p>Email: juhi248@gmail.com </p>
                    </div>
                    <div className='editors'>
                      <img src="/images/avnishsir-final.jpg" alt="Dr. Avnish Singh" />
                      <h3>Dr. Avnish Singh</h3>
                      <p>Assistant Professor @ Bennett University, Greater Noida</p>
                      <p>Email: singh.avnish94@gmail.com   </p>
                    </div>
                    <div className='editors'>
                      <img src="/images/Dr. sumit.png" alt="Dr. Sumit Agarwal" />
                      <h3>Dr. Sumit Agarwal</h3>
                      <p>Assistant Professor @ The Assam Royal Global University, Guwahati</p>
                      <p>Email: sumit_agarwal2008@rediff.com  </p>
                    </div>
                    <div className='editors'>
                      <img src="/images/Dr. shailesh.png" alt="Dr. Shailesh Mishra" />
                      <h3>Dr. Shailesh Mishra</h3>
                      <p>Assistant Professor @ ICFAI University, Dehradun</p>
                      <p>Email: adv.shaileshmishra@gmail.com </p>
                    </div>
                    <div className='editors'>
                      <img src="/images/dr.preeti-final.jpg" alt="Dr. Preeti Singh" />
                      <h3>Dr. Preeti Singh</h3>
                      <p>Assistant Professor @ Bennett University, Greater Noida</p>
                      <p>Email: singh.preeti1092@gmail.com </p>
                    </div>
                    <div className='editors'>
                      <img src="/images/Aprajita.jpg" alt="Aprajita Kumari" />
                      <h3>Aprajita Kumari</h3>
                      <p>Zahid Law Firm, Toronto, Ontario, Canada</p>
                      <p>Email:  aparajitaktr@gmail.com  </p>
                    </div>
                    <div className='editors'>
                      <img src="/images/Ravi-prakash-chaubey.jpg" alt="Dr. Ravi Prakash Chaubey" />
                      <h3>Dr. Ravi Prakash Chaubey</h3>
                      <p>Assistant Professor (Indic Studies), Gurugram University, Gurugram</p>
                      <p>Email:  ravipchaube@gmail.com </p>
                    </div>
                    <div className='editors'>
                      <img src="/images/Bhupali-Saikia.jpg" alt="Dr. Bhupali Saikia" />
                      <h3>Dr. Bhupali Saikia</h3>
                      <p>Assistant Professor @ The Assam Royal Global University, Guwahati</p>
                      <p>Email: saikiabhupali2@gmail.com  </p>
                    </div>
                    <div className='editors'>
                      <img src="/images/Rachit-Sharma.jpg" alt="Rachit Sharma" />
                      <h3>Rachit Sharma</h3>
                      <p>Assistant Professor @ IILM University, Greater Noida</p>
                      <p>Email: 7rachitsharma@gmail.com   </p>
                    </div>
                  </div>
                </div>

                {/* Associate Editors */}
                <h2>Associate Editors</h2>
                <div className="underline-2"></div>
                <div className="main-board-associate">
                  <div className="associate-editors">
                    {[
                      'Ashish Sharma',
                      'Harsha Manav',
                      'Shivam Kumar Gupta',
                      'Sandhya Sharma',
                      'Rajshree',
                      'Gaurav Yadav'
                    ].map((name, index) => (
                      <h3 key={index}>{name}</h3>
                    ))}
                  </div>
                </div>

                {/* Advisory Board */}
                <h2>Advisory Board</h2>
                <div className="underline-2"></div>
                <div className="main-board-advisory">
                  <div className="advisory-editor">
                    <div class="advisory-1">
                      <h3>Prof. (Dr.) Arun Gupto</h3>
                      <h4>Professor of English, IACER, Pokhra University, Kathmandu</h4>
                    </div>
                    <div class="advisory-2">
                      <h3>Dr. Andrea Zappalaglio</h3>
                      <h4>Associate Professor, Intellectual Property Law, University of Leeds (U.K.)</h4>
                    </div>
                    <div class="advisory-3">
                      <h3>Prof. (Dr.) Manirani Dasgupta</h3>
                      <h4>Professor of Law, Dept. of Law, University of Calcutta, Kolkata</h4>
                    </div>
                    <div class="advisory-4">
                      <h3>Prof. (Dr.) Sudarsan Verma</h3>
                      <h4>Professor of Law, BBAU, Lucknow</h4>
                    </div>
                    <div class="advisory-5">
                      <h3>Prof. (Dr.) Rashmi Nagpal</h3>
                      <h4>Director (I/C) SVKM’s NMIMS Chandigarh</h4>
                    </div>
                    <div class="advisory-6">
                      <h3>Prof (Dr). Pradeep Kulshrestha</h3>
                      <h4>Dean & Professor of Law, SoL, Bennett University,Greater Noida</h4>
                    </div>
                    <div class="advisory-7">
                      <h3>Dr. Deepak K. Srivastava</h3>
                      <h4>Associate Professor of Law, Dean & Registrar (I/C), HNLU, Raipur</h4>
                    </div>
                    <div class="advisory-8">
                      <h3>Dr. Nawal Kishor Mishra</h3>
                      <h4>Associate Professor of Law, Faculty of Law, BHU, Varanasi</h4>
                    </div>
                    <div class="advisory-9">
                      <h3>Dr. Santosh K. Tripathi</h3>
                      <h4>Associate Professor, Amity University Haryana, Gurugram.</h4>
                    </div>
                    <div class="advisory-10">
                      <h3>Dr. Sangeeta Sharma</h3>
                      <h4>Human Rights & Social Activist, Lucknow</h4>
                    </div>
                    <div class="advisory-11">
                      <h3>Mr. Ajay Kumar Mishra</h3>
                      <h4>Advocate, Calcutta High Court, Kolkata.</h4>
                    </div>
                    <div class="advisory-12">
                      <h3>Dr. Ritu Agarwal</h3>
                      <h4>Asst. Professor of Sociology, Lucknow</h4>
                    </div>
                    <div class="advisory-13">
                      <h3>Md. Abdul Hafiz Gandhi</h3>
                      <h4>Social & Political Rights Activist, Lucknow</h4>
                    </div>
                    <div class="advisory-14">
                      <h3>Mr. Siddharth Harsh</h3>
                      <h4> Advocate, Patna High Court, Patna</h4>
                    </div>
                    <div class="advisory-15">
                      <h3>Dr. Suresh M. Tripathi</h3>
                      <h4>Asst. Professor of Law, Chhattisgarh Academy of Administration, Raipur</h4>
                    </div>
                    <div class="advisory-16">
                      <h3>Dr. Bhanu Pratap</h3>
                      <h4>Asst. Professor of Law, University of Lucknow</h4>
                    </div>
                    <div class="advisory-17">
                      <h3>Dr. Ankit Awasthi</h3>
                      <h4>Head, Centre for WTO/WIPO Studies (SLT), HNLU, Raipur</h4>
                    </div>
                    <div class="advisory-18">
                      <h3>Dr. Pranshul Pathak</h3>
                      <h4>Asst. Professor of Law, Amity University Haryana, Gurugram</h4>
                    </div>
                    <div class="advisory-19">
                      <h3>Dr. Bineet Kedia</h3>
                      <h4>Asst. Professor of Law, KIIT University, Bhubaneswar</h4>
                    </div>
                    <div class="advisory-20">
                      <h3>Dr. Mudra Singh</h3>
                      <h4>Asst. Professor of Law, Amity Law School, Lucknow</h4>
                    </div>
                    <div class="advisory-21">
                      <h3>Mrs. Annpurna Sinha</h3>
                      <h4>Advocate, Allahabad High Court, Lucknow</h4>
                    </div>
                    <div class="advisory-22">
                      <h3>Dr. Neha Mishra</h3>
                      <h4>Asst. Professor of Law, Amity University Haryana, Gurugram</h4>
                    </div>
                    <div class="advisory-23">
                      <h3>Dr. Mayank Dubey</h3>
                      <h4>Advocate, Allahabad High Court, Prayagraj</h4>
                    </div>
                    <div class="advisory-24">
                      <h3>Mr. Pratik Mishra</h3>
                      <h4>Advocate, Patna High Court, Patna</h4>
                    </div>
                    <div class="advisory-25">
                      <h3>Mr. Nishith Pandit</h3>
                      <h4>Advocate, Gujarat High Court, Ahmedabad</h4>
                    </div>
                    <div class="advisory-26">
                      <h3>Dr. Sarvesh K. Shahi</h3>
                      <h4>Asst. Professor of Law, KIIT University, Bhubaneswar</h4>
                    </div>
                    <div class="advisory-27">
                      <h3>Dr. Aparajita Singh</h3>
                      <h4>Asst. Professor of Law, UPES, Dehradun</h4>
                    </div>
                    <div class="advisory-27b">
                      <h3>Dr. Rishi Raj Bhardwaj</h3>
                      <h4>Asst. Professor of Law, Mahindra University, Hyderabad</h4>
                    </div>
                    <div class="advisory-28">
                      <h3>Dr. Shilpika Pandey</h3>
                      <h4>Asst. Professor of Law, UPES, Dehradun</h4>
                    </div>
                    <div class="advisory-29">
                      <h3>Dr. Manisha Patawari</h3>
                      <h4>Asst. Professor of Law, ILNU, Nirma University, Ahmedabad</h4>
                    </div>
                    <div class="advisory-30">
                      <h3>Mr. Anoop Yadav</h3>
                      <h4>Prosecution Officer, CBI, New Delhi</h4>
                    </div>
                    <div class="advisory-31">
                      <h3>Dr. Razia Chauhan</h3>
                      <h4>Asst. Professor of Law, Sharda University, Greater NOIDA.</h4>
                    </div>
                    <div class="advisory-32">
                      <h3>Mrs. Yashi M. Tripathi</h3>
                      <h4>Asst. Professor of Law, Faculty of Law, United University, Prayagraj</h4>
                    </div>
                    <div class="advisory-33">
                      <h3>Ms. Sameera Fatima</h3>
                      <h4>Asst. Professor of Law, Arka Jain University, Ranchi</h4>
                    </div>
                    <div class="advisory-34">
                      <h3>Dr. Aditya Mishra</h3>
                      <h4>Advocate, Supreme Court of India</h4>
                    </div>
                    <div class="advisory-35">
                      <h3>Dr. Vartika Saxena</h3>
                      <h4>Asst.Professor, Amity Law School, Amity University Madhya, Gwalior</h4>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="hr"><hr /></div>

        {/* You already have Footer component in App.jsx, so no need to repeat it here */}
      </div>
    </div>
  )
}

export default EdBoard
