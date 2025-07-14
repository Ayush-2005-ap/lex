import React from 'react';

const Editor = () => {
  return (
    <div className="p-4 bg-white">
      <h1 className="text-[60px] text-[#a90c0c] text-center p-5 font-bold">Welcome to Editorial Board</h1>

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
            <h4 className="text-black text-sm">animesh.kumar@anagh.in</h4>
            <p className="text-center text-sm text-black">Advocate , Patna High Court , Director , Anagh Forum for Sustainable Outreach</p>
          </div>

          {/* Executive */}
          <div className="flex flex-col items-center p-4 w-[250px] bg-white rounded shadow-md hover:scale-105 hover:bg-gray-400 transition duration-300">
            <a href="https://www.linkedin.com/in/mayuri-gupta-52064160/" target="_blank" rel="noopener noreferrer">
              <img src="/Images/executive-editor.jpg" alt="executive-editor" className="w-full rounded shadow-md" />
            </a>
            <h2 className="text-[#11ACD5] font-semibold text-lg mt-3">Mayuri Gupta</h2>
            <h3 className="text-[#a90c0c] font-[cursive] text-lg">Chief Executive Editor</h3>
            <h4 className="text-black text-sm">mayuri.gupta@vidhilegalpolicy.in</h4>
            <p className="text-center text-sm text-black">MKB Senior Resident Fellow, Vidhi Centre for Legal Policy</p>
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
                title: 'Research Fellow, WBNUJS, Kolkata',
                email: 'jayanta.ghosh@example.com',
                img: '/Images/jayanta-ghosh.jpg',
              },
              {
                name: 'Dr. Ankita Sharma',
                title: 'Associate Professor , G.D. Goenka University, Gurugram',
                email: 'ankitasharma.law@gmail.com',
                img: '/Images/Ankita-Sharma.jpg',
              },
              {
                name: 'Juhi Singh',
                title: 'Legal Counsel, Penguin Random House India',
                email: 'juhi248@gmail.com',
                img: '/Images/juhi singh.jpg',
              },
              {
                name: 'Dr. Avnish Singh',
                title: 'Assistant Professor, Bennett University, Greater Noida',
                email: 'singh.avnish94@gmail.com',
                img: '/Images/avnishsir-final.jpg',
              },
              {
                name: 'Dr. Sumit Agarwal',
                title: 'Assistant Professor, The Assam Royal Global University, Guwahati',
                email: 'sumit_agarwal2008@rediff.com',
                img: '/Images/Dr. sumit.png',
              },
              {
                name: 'Dr. Shailesh Mishra',
                title: 'Assistant Professor, ICFAI University, Dehradun',
                email: 'adv.shaileshmishra@gmail.com',
                img: '/Images/Dr. shailesh.png',
              },
              {
                name: 'Dr. Preeti Singh',
                title: 'Assistant Professor, Bennett University, Greater Noida',
                email: 'singh.preeti1092@gmail.com',
                img: '/Images/dr.preeti-final.jpg',
              },
              {
                name: 'Aprajita Kumari',
                title: 'Zahid Law Firm, Toronto, Ontario, Canada',
                email: 'aparajitaktr@gmail.com',
                img: '/Images/Aprajita.jpg',
              },
              {
                name: 'Dr. Ravi Prakash Chaubey',
                title: 'Assistant Professor (Indic Studies), Gurugram University, Gurugram',
                email: 'ravipchaube@gmail.com',
                img: '/Images/Ravi-prakash-chaubey.jpg',
              },
              {
                name: 'Dr. Bhupali Saikia',
                title: 'Assistant Professor, The Assam Royal Global University, Guwahati',
                email: 'saikiabhupali2@gmail.com',
                img: '/Images/Bhupali-Saikia.jpg',
              },
              {
                name: 'Rachit Sharma',
                title: 'Assistant Professor, IILM University, Greater Noida',
                email: '7rachitsharma@gmail.com',
                img: '/Images/Rachit-Sharma.jpg',
              },
            ].map((editor, idx) => (
              <div key={idx} className="min-w-[300px] flex flex-col items-center bg-white rounded p-4 shadow hover:scale-105 hover:bg-gray-300 transition duration-300">
                <img src={editor.img} alt={editor.name} className="w-full rounded" />
                <h3 className="text-[#11ACD5] font-semibold text-base mt-3">{editor.name}</h3>
                <p className="text-sm text-black text-center">{editor.title}</p>
                <p className="text-sm text-black">{editor.email}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Associate Editors */}
        <div className="mt-10 text-center">
          <h2 className="text-[40px] text-[#a90c0c] font-semibold">Associate Editors</h2>
          <div className="w-[20%] h-[4px] bg-[#806262] mx-auto my-4 rounded"></div>
          <div className="flex flex-col items-center gap-2">
            {[
              'Ashish Sharma',
              'Harsha Manav',
              'Shivam Kumar Gupta',
              'Sandhya Sharma',
              'Rajshree',
              'Gaurav Yadav',
            ].map((name, idx) => (
              <h3 key={idx} className="text-[30px] text-[#11ACD5]">{name}</h3>
            ))}
          </div>
        </div>

        {/* Advisory Board */}
        <div className="mt-10 text-center">
          <h2 className="text-[40px] text-[#a90c0c] font-semibold">Advisory Board</h2>
          <div className="w-[20%] h-[4px] bg-[#806262] mx-auto my-4 rounded"></div>
          {/* Continue rendering advisory board data similarly here... */}
        </div>
      </div>

      <div className="w-full h-[2px] bg-black my-6"></div>
    </div>
  );
};

export default Editor;
