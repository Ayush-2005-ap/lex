import React from 'react';

const Editor = () => {

    const advisory = [
        {
            name: 'Prof. (Dr.) Arun Gupto',
            title: 'Professor of English, IACER, Pokhra University, Kathmandu',
        },
        {
            name: 'Dr. Andrea Zappalaglio',
            title: 'Associate Professor, Intellectual Property Law, University of Leeds (U.K.)',
        },
        {
            name: 'Prof. (Dr.) Manirani Dasgupta',
            title: 'Professor of Law, University of Calcutta, Kolkata',
        },
        {
            name: 'Prof. (Dr.) Pradeep Kulshrestha',
            title: 'Dean & Professor of Law, SoL, Bennett University, G. Noida',
        },
        {
            name: '	Prof. (Dr.) Rashmi Nagpal',
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
            name: '	Mr. Ajay Kumar Mishra',
            title: 'Advocate, Calcutta High Court, Kolkata.',
        },
        {
            name: '	Dr. Ritu Agarwal',
            title: 'Asst. Professor of Sociology, Lucknow',
        },
        {
            name: '	Md. Abdul Hafiz Gandhi',
            title: 'Social & Political Rights Activist, Lucknow',
        },
        {
            name: '	Mr. Siddharth Harsh',
            title: 'Advocate, Patna High Court, Patna',
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
            name: '	Mrs. Annpurna Sinha',
            title: 'Advocate, Allahabad High Court, Lucknow',
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
            name: '	Mr. Pratik Mishra',
            title: 'Advocate, Patna High Court, Patna',
        },
        {
            name: '	Mr. Nishith Pandit',
            title: 'Advocate, Gujarat High Court, Ahmedabad',
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
            name:'Dr. Soma Dey Sarkar',
            title:' Assistant Professor, North Bengal University'
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
                    <div className="flex flex-col items-center p-4 w-[250px] bg-white rounded shadow-md hover:scale-105 hover:bg-gray-400 transition duration-300">
                        <a href="https://www.linkedin.com/in/advanimeshkumar/" target="_blank" rel="noopener noreferrer">
                            <img src="/Images/editor-in-chief.jpg" alt="editor-in-chief" className="w-full rounded shadow-md" />
                        </a>
                        <h2 className="text-[#11ACD5] font-semibold text-lg mt-3">Animesh Kumar</h2>
                        <h3 className="text-[#a90c0c] font-[cursive] text-lg">Editor-in-Chief</h3>
                        <h4 className="text-black text-sm font-bold">animesh.kumar@anagh.in</h4>
                        <p className="text-center text-sm text-black">Advocate, Patna High Court, Director, Anagh Forum for Sustainable Outreach</p>
                    </div>

                    {/* Executive */}
                    <div className="flex flex-col items-center p-4 w-[250px] bg-white rounded shadow-md hover:scale-105 hover:bg-gray-400 transition duration-300">
                        <a href="https://www.linkedin.com/in/mayuri-gupta-52064160/" target="_blank" rel="noopener noreferrer">
                            <img src="/Images/executive-editor.jpg" alt="executive-editor" className="w-full rounded shadow-md" />
                        </a>
                        <h2 className="text-[#11ACD5] font-semibold text-lg mt-3">Mayuri Gupta</h2>
                        <h3 className="text-[#a90c0c] font-[cursive] text-lg">Chief Executive Editor</h3>
                        <h4 className="text-black text-sm font-bold">mayuri.gupta@vidhilegalpolicy.in</h4>
                        <p className="text-center text-sm text-black">MKB Senior Resident Fellow, Vidhi Centre for Legal Policy, New Delhi</p>
                    </div>
                </div>

                {/* Editors */}
                <div className="text-center mt-10">
                    <h2 className="text-[40px] text-[#a90c0c] font-semibold">Editors</h2>
                    <div className="w-[20%] h-[4px] bg-[#806262] mx-auto my-4 rounded"></div>

                    <div className="bg-gray-400 p-4 rounded shadow-inner overflow-x-auto whitespace-nowrap flex gap-6 pb-6">
                        {[
                            {
                                name: 'Dr. Jayanta Ghosh',
                                title: 'Assistant Professor & Coordinator',
                                university: ' CRSGPP, WBNUJS, Kolkata',
                                email: 'jayantaghoshcool@gmail.com',
                                img: '/Images/jayanta-ghosh.jpg',
                            },
                            {
                                name: 'Dr. Ankita Sharma',
                                title: 'Associate Professor',
                                university: 'G.D. Goenka University, Gurugram',
                                email: 'ankitasharma.law@gmail.com',
                                img: '/Images/Ankita-Sharma.jpg',
                            },
                            {
                                name: 'Juhi Singh',
                                title: 'Legal Counsel',
                                university: 'Penguin Random House India',
                                email: 'juhi248@gmail.com',
                                img: '/Images/juhi singh.jpg',
                            },
                            {
                                name: 'Dr. Avnish Singh',
                                title: 'Assistant Professor',
                                university: 'Bennett University, Greater Noida',
                                email: 'singh.avnish94@gmail.com',
                                img: '/Images/avnishsir-final.jpg',
                            },
                            {
                                name: 'Dr. Sumit Agarwal',
                                title: 'Associate Professor',
                                university: 'The Assam Royal Global University, Guwahati',
                                email: 'sumit_agarwal2008@rediff.com',
                                img: '/Images/Dr. sumit.png',
                            },
                            {
                                name: 'Dr. Shailesh Mishra',
                                title: 'Assistant Professor',
                                university: 'ICFAI University, Dehradun',
                                email: 'adv.shaileshmishra@gmail.com',
                                img: '/Images/Dr. shailesh.png',
                            },
                            {
                                name: 'Dr. Preeti Singh',
                                title: 'Assistant Professor',
                                university: 'University of Delhi, Delhi',
                                email: 'singh.preeti1092@gmail.com',
                                img: '/Images/dr.preeti-final.jpg',
                            },
                            {
                                name: 'Aprajita Kumari',
                                title: 'Zahid Law Firm',
                                university: 'Toronto, Ontario, Canada',
                                email: 'aparajitaktr@gmail.com',
                                img: '/Images/Aprajita.jpg',
                            },
                            {
                                name: 'Dr. Ravi Prakash Chaubey',
                                title: 'Assistant Professor (Indic Studies)',
                                university: 'Gurugram University, Gurugram',
                                email: 'ravipchaube@gmail.com',
                                img: '/Images/Ravi-prakash-chaubey.jpg',
                            },
                            {
                                name: 'Dr. Bhupali Saikia',
                                title: 'Assistant Professor',
                                university: 'The Assam Royal Global University, Guwahati',
                                email: 'saikiabhupali2@gmail.com',
                                img: '/Images/Bhupali-Saikia.jpg',
                            },
                            {
                                name: 'Rachit Sharma',
                                title: 'Assistant Professor ',
                                university: 'IILM University, Greater Noida',
                                email: '7rachitsharma@gmail.com',
                                img: '/Images/Rachit-Sharma.jpg',
                            },
                        ].map((editor, idx) => (
                            <div key={idx} className="min-w-[300px] flex flex-col items-center bg-white rounded p-4 shadow hover:scale-105 hover:bg-gray-300 transition duration-300">
                                <img src={editor.img} alt={editor.name} className="w-full rounded" />
                                <h3 className="text-[#11ACD5] font-semibold text-base mt-3">{editor.name}</h3>
                                <p className="text-lg text-black text-center">{editor.title}</p>
                                <p className='text-sm text-black text-center'>{editor.university}</p>
                                <p className="text-sm text-black">{editor.email}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Managing Editor */}
                <div className="text-center mt-10">
                    <h2 className="text-[40px] text-[#a90c0c] font-semibold">Managing Editors</h2>
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
