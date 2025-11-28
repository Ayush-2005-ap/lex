import React from 'react';

const Editor = () => {

    const advisory = [
        {
            name:  'Dr. Arun Gupto',
            title: 'Professor of English, IACER, Pokhra University, Kathmandu',
        },
        {
            name:  'Dr. Andrea Zappalaglio',
            title: 'Associate Professor, Intellectual Property Law, University of Leeds (U.K.)',
        },
        {
            name:  'Dr. Manirani Dasgupta',
            title: 'Professor of Law, University of Calcutta, Kolkata',
        },
        {
            name:  'Dr Sudarsan Verma',
            title: 'Professor of Law, BBAU, Lucknow',
        },
        {
            name:  'Dr. Pradeep Kulshrestha',
            title: 'Dean & Professor of Law, SoL, Bennett University, G. Noida',
        },
        {
            name:  'Dr. Rashmi Nagpal',
            title: 'Director (I/C) SVKM’s NMIMS Chandigarh Campus',
        },
        {
            name: '	Dr. Deepak Kumar Srivastava',
            title: 'Associate Professor, Dean & Registrar (I/C), HNLU, Raipur',
        },
        {
            name: '	Dr. Nawal Kishor Mishra',
            title: 'Associate Professor of Law, Faculty of Law, BHU, Varanasi',
        },
        {
            name: '	Dr. Santosh K. Tripathi',
            title: 'Associate Professor, Amity University Haryana, Gurugram',
        },
        {
            name: '	Dr. Sangeeta Sharma',
            title: 'Human Rights & Social Activist, Lucknow',
        },
        {
            name: '	Dr. Ritu Agarwala',
            title: 'Asst. Professor of Sociology, Lucknow',
        },
        {
            name: '	Dr. Soma Dey Sarkar',
            title: 'Asst. Professor of Law, North Bengal University, Darjeeling',
        },
        {
            name: '	Dr. Suresh M. Tripathi',
            title: 'Asst. Professor of Law, Chhattisgarh Academy of Administration, Raipur',
        },
        {
            name: '	Dr. Bhanu Pratap',
            title: 'Asst. Professor of Law, University of Lucknow',
        },
        {
            name: '	Dr. Ankit Awasthi',
            title: 'Head, Centre for WTO/WIPO Studies (SLT), HNLU, Raipur',
        },
        {
            name: '	Dr. Pranshul Pathak',
            title: 'Associate Professor of Law, Amity University Haryana, Gurugram',
        },
        {
            name: '	Dr. Bineet Kedia',
            title: 'Associate Professor of Law, KIIT University, Bhubaneswar',
        },
        {
            name: '	Dr. Mudra Singh',
            title: 'Asst. Professor of Law, Amity Law School, Lucknow',
        },
        {
            name: '	Dr. Neha Mishra',
            title: 'Asst. Professor of Law, Amity University Haryana, Gurugram',
        },
        {
            name: '	Dr. Mayank Dubey',
            title: 'Advocate, Allahabad High Court, Prayagraj',
        },
        {
            name: '	Dr. Sarvesh K. Shahi',
            title: 'Asst. Professor of Law, KIIT University, Bhubaneswar',
        },
        {
            name: '	Dr. Aparajita Singh',
            title: 'Associate Professor of Law, UPES, Dehradun',
        },
        {
            name: '	Dr. Rishi Raj Bhardwaj',
            title: 'Asst. Professor of Law, Mahindra University, Hyderabad',
        },
        {
            name: '	Dr. Shilpika Pandey',
            title: 'Asst. Professor of Law, D.Y. Patil International University, Pune',
        },
        {
            name:'Dr. Manisha Patawari',
            title:' Asst. Professor of Law, ILNU, Nirma University, Ahmedabad'
        },
        {
            name: "Mr Anoop Yadav",
            title:'Prosecution Officer, CBI, New Delhi'
        },
        {
            name: 'Dr. Razia Chauhan',
            title: 'Asst. Professor of Law, Sharda University, Greater Noida'
        },
        {
            name: 'Mrs Yashi M. Tripathi',
            title: 'Asst. Professor of Law, Faculty of Law, United University, Prayagraj'
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
            name:'Dr. Vartika Saxena',
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
            title: 'Asst. Professor, Christ University, Pune (Lavasa Campus)',
        },
        {
            name: 'Gaurav Yadav',
            title: 'Asst. Professor, ICFAI University, Dehradun',
        },
    ];

    return (
        <div className="p-4 bg-white">
            <h1 className="text-3xl sm:text-4xl text-[#a90c0c] text-center p-5 font-bold animate-fadeInUp">Welcome to Editorial Board</h1>

            <div className="w-full h-[2px] bg-black my-6"></div>

            <div className="bg-white">
                <div className="text-center">
                    {/* Patron in Chief */}
                    <section className="text-center py-4">
                        <h2 className="text-[50px] text-[#a90c0c] font-semibold">Patron-in-Chief</h2>
                        <h3 className="text-[30px] text-[#11ACD5] py-2 font-semibold">Prof. Gopal Krishna Chandani</h3>
                        <h4 className="text-[20px] text-black font-[cursive]">Professor of Law (Retd.) University of Lucknow</h4>
                    </section>

                    {/* Patron */}
                    <section className="text-center py-4">
                        <h2 className="text-[50px] text-[#a90c0c] font-semibold">Patron</h2>
                        <h3 className="text-[30px] text-[#11ACD5] py-2 font-semibold">Mr. Kamal Nayan Chaubey</h3>
                        <h4 className="text-[20px] text-black font-[cursive]">Sr. Advocate, Patna High Court, Patna</h4>
                    </section>

                    <div className="w-[40%] h-[4px] bg-[#806262] mx-auto my-4 rounded"></div>
                </div>

                {/* Chief & Executive Editor */}
                <div className="flex flex-wrap justify-center items-center gap-10 p-5 bg-white rounded shadow-md">
                    {/* Chief */}
                    <div className="flex flex-col items-center p-4 w-[300px] bg-white rounded shadow-md hover:scale-105 hover:bg-gray-400 transition duration-300">
                        <a href="https://www.linkedin.com/in/advanimeshkumar/" target="_blank" rel="noopener noreferrer">
                            <img src="/Images/Dr_Animesh.png" alt="editor-in-chief" className="w-full h-[300px] rounded shadow-md" />
                        </a>
                        <h2 className="text-[#11ACD5] font-semibold text-lg mt-3">Dr. Animesh Kumar</h2>
                        <h3 className="text-[#a90c0c] font-[cursive] text-lg">Editor-in-Chief</h3>
                        <h4 className="text-black text-sm font-bold">animesh@ccs.in</h4>
                        <p className="text-center text-sm text-black">Advocate & Senior Legal Research Consultant</p>
                        <p className="text-center text-sm text-black">Policy Research Outreach</p>
                        <p className='text-center text-sm text-black'>Centre for Civil Society, A-69 <br />Hauz Khas, New Delhi</p>
                    </div>

                    {/* Executive */}
                    <div className="flex flex-col items-center p-4 w-[300px] bg-white rounded shadow-md hover:scale-105 hover:bg-gray-400 transition duration-300">
                        <a href="https://www.linkedin.com/in/mayuri-gupta-52064160/" target="_blank" rel="noopener noreferrer">
                            <img src="/Images/executive-editor.jpg" alt="executive-editor" className="w-full h-[300px] rounded shadow-md" />
                        </a>
                        <h2 className="text-[#11ACD5] font-semibold text-lg mt-3">Mayuri Gupta</h2>
                        <h3 className="text-[#a90c0c] font-[cursive] text-lg">Chief Executive Editor</h3>
                        <h4 className="text-black text-sm font-bold">mayuri.gupta@vidhilegalpolicy.in</h4>
                        <p className="text-center text-sm text-black">Advocate & Senior Resident Fellow</p>
                        <p className="text-center text-sm text-black">Charkha, Constitutional Law Research</p>
                        <p className='text-center text-sm text-black'>Vidhi Centre for Legal Policy, A-232 <br />Defence Colony, New Delhi</p>
                    </div>
                </div>

                {/* Editors */}
                <div className="text-center mt-10">
                    <h2 className="text-[40px] text-[#a90c0c] font-semibold">Editors</h2>
                    <div className="w-[15%] h-[4px] bg-[#806262] mx-auto my-4 rounded"></div>

                    <div className="bg-gray-400 p-4 rounded shadow-inner overflow-x-auto whitespace-nowrap flex gap-6 pb-6">
                        {[
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
                                university: 'Assam Royal Global University, Guwahati',
                                email: 'Email:sagarwala@rgu.ac',
                                department: "School of Law",
                                img: '/Images/Dr. sumit.png',
                                department2: "",
                                Address1: "Assam Royal Global University, NH-27",
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
                                university: 'University of Delhi, New Delhi',
                                email: 'Email:preeti@lc1.du.ac.in',
                                department: "School of Law",
                                img: '/Images/dr.preeti-final.jpg',
                                department2: "",
                                Address1: "Law Centre I",
                                Address2: "Faculty of Law, University of Delhi",
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
                                Address1: "Gurugram University",
                                Address2: "Gurugram, Haryana ",
                            },
                            {
                                name: 'Dr. Bhupali Saikia',
                                title: 'Assistant Professor',
                                university: 'Assam Royal Global University, Guwahati',
                                email: 'Email:bsaikia1@rgu.ac',
                                department: "School of Law",
                                img: '/Images/Bhupali-Saikia.jpg',
                                department2: "",
                                Address1: "Assam Royal Global University",
                                Address2: "Betkuchi, Guwahati, Assam "
                            },
                            {
                                name: 'Rachit Sharma',
                                title: 'Assistant Professor ',
                                university: 'IILM University, Greater Noida',
                                email: 'Email:rachit.sharma@iilm.ac.in',
                                department: "School of Law",
                                img: '/Images/Rachit-Sharma.jpg',
                                department2: "",
                                Address1: "IILM University, Knowledge Park II",
                                Address2: "Greater Noida, Uttar Pradesh",
                            },
                            {
                                name: 'Dr. Neha Garg',
                                title: 'HOD, Department of Law ',
                                university: 'BVIMR, Bharti Vidyapeeth, Pune',
                                email: 'Email:neha.garg@bharatividyapeeth.edu',
                                department: "School of Law",
                                img: '/Images/Nehagarg.jpg',
                                department2: "",
                                Address1: "BVIMR, Delhi NCR Campus",
                                Address2: "Bharti Vidyapeeth, Pune",
                            },
                        ].map((editor, idx) => (
                            <div key={idx} className="min-w-[280px] flex flex-col items-center bg-white rounded p-4 shadow hover:scale-105 hover:bg-gray-300 transition duration-300">
                                <img src={editor.img} alt={editor.name} className="w-full rounded" />
                                <h3 className="text-[#11ACD5] font-semibold text-base mt-4 p-2">{editor.name}</h3>
                                <p className="text-sm text-black text-center">{editor.title}</p>
                                <p className='text-sm text-black text-center'>{editor.department}</p>
                                <p className='text-sm text-black text-center'>{editor.department2}</p>
                                <p className='text-sm text-black text-center'>{editor.university}</p>
                                <p className="text-sm text-black font-semibold">{editor.email}</p>
                                <p className='text-sm text-black text-center'>{editor.Address1}</p>
                                <p className='text-sm text-black text-center'>{editor.Address2}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Managing Editor */}
                <div className="text-center mt-10">
                    <h2 className="text-[40px] text-[#a90c0c] font-semibold">Managing Editor</h2>
                    <div className="w-[20%] h-[4px] bg-[#806262] mx-auto my-4 rounded"></div>

                    {/* Wrap the editors in a responsive flexbox */}
                    <div className="flex justify-center">
                        <div
                            className={`${[
                                {
                                    name: "Snigdha Gupta",
                                    title: "Data Protection & AI Law Consultant",
                                    university: "Kolkata",
                                    email: "snigdhagupta0@gmail.com",
                                    img: "/Images/Snigdha-final.jpg",
                                },
                            ].length === 1
                                ? "bg-gray-100 p-6 rounded-lg w-fit"
                                : "bg-gray-400 p-4 rounded shadow-inner overflow-x-auto whitespace-nowrap flex gap-6 pb-6"
                                }`}
                        >
                            {[
                                {
                                    name: "Snigdha Gupta",
                                    title: "Data Protection & AI Law Consultant",
                                    university: "Kolkata",
                                    email: "snigdhagupta0@gmail.com",
                                    img: "/Images/Snigdha-final.jpg",
                                },
                            ].map((editor, idx) => (
                                <div
                                    key={idx}
                                    className="w-[250px] flex-shrink-0 flex flex-col items-center bg-white rounded-lg p-4 shadow hover:scale-105 hover:bg-gray-300 transition duration-300"
                                >
                                    <img
                                        src={editor.img}
                                        alt={editor.name}
                                        className="w-[220px] h-[220px] object-cover rounded-full border-4 border-gray-300"
                                    />
                                    <h3 className="text-[#11ACD5] font-semibold text-lg mt-4">{editor.name}</h3>
                                    <p className="text-base text-black text-center">{editor.title}</p>
                                    <p className="text-sm text-black text-center">{editor.university}</p>
                                    <p className="text-sm text-black mt-1">{editor.email}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                {/* Associate Editors */}
                <div className="mt-10 text-center">
                    <h2 className="text-[40px] text-[#a90c0c] font-semibold">Executive Editors</h2>
                    <div className="w-[20%] h-[4px] bg-[#806262] mx-auto my-4 rounded"></div>
                    <div className="flex lg:grid gap-6 lg:grid-cols-3 overflow-x-auto pb-6">

                        {associate.map((member, idx) => (
                            <div
                                key={idx}
                                className="flex-shrink-0 lg:flex-shrink lg:w-auto w-72 bg-white rounded p-4 shadow text-center hover:scale-105 hover:bg-gray-300 transition duration-300"
                            >
                                <h3 className="text-[#11ACD5] font-bold text-lg break-words">{member.name}</h3>
                                <h4 className="text-black font-semibold text-base mt-1 break-words">
                                    {member.title}
                                </h4>

                            </div>
                        ))}
                    </div>
                </div>

                




                {/* Advisory Board */}
                <div className="mt-10 text-center">
                    <h2 className="text-[40px] text-[#a90c0c] font-semibold">Advisory Board</h2>
                    <div className="w-[20%] h-[4px] bg-[#806262] mx-auto my-4 rounded"></div>



                    {/* Cards: scroll on mobile, wrap into grid on lg screens */}
                    <div className="flex lg:grid gap-6 lg:grid-cols-3 overflow-x-auto pb-6">
                        {advisory.map((member, idx) => (
                            <div
                                key={idx}
                                className="flex-shrink-0 lg:flex-shrink lg:w-auto w-72 bg-white rounded p-4 shadow text-center hover:scale-105 hover:bg-gray-300 transition duration-300" >
                                {/* If you later add photos, drop an <img> here */}
                                <h3 className="text-[#11ACD5] font-bold text-lg break-words">
                                    {member.name}
                                </h3>
                                <h4 className="text-black font-semibold text-base mt-1 break-words">
                                    {member.title}
                                </h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full h-[2px] bg-black my-6"></div>
        </div>
    );
};

export default Editor;
