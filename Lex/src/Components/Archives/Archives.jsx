import React from 'react';

const Archives = () => {
  const archives = [
    {
      id: 1,
      volume: "Vol I JAN-MAR 2015",
      pdf: "/Pdfs/LR_(1)_2015.pdf",
    },
    {
      id: 2,
      volume: "Vol I ARP-JUN 2015",
      pdf: "/Pdfs/LR_(2)_2015.pdf",
    },
    {
      id: 3,
      volume: "Vol I JUL-SEP 2015",
      pdf: "/Pdfs/LR_(3)_2015.pdf",
    },
    {
      id: 4,
      volume: "Vol I OCT-DEC 2015",
      pdf: "/Pdfs/LR_(4)_2015.pdf"
    },
    {
      id: 5,
      volume: "Vol II JAN-MAR 2016",
      pdf: "/Pdfs/LR_(1)_2016.pdf",
    },
    {
      id: 6,
      volume: "Vol II APR-JUN 2016",
      pdf: "/Pdfs/LR_(2)_2016.pdf",
    },
    {
      id: 7,
      volume: "Vol II JUL-SEP 2016",
      pdf: "/Pdfs/LR_(3)_2016.pdf",
    },
    {
      id: 8,
      volume: "Vol II OCT-DEC 2016",
      pdf: "/Pdfs/LR_(4)_2016.pdf",
    },
    {
      id: 9,
      volume: "Vol III JAN-MAR 2017",
      pdf: "/Pdfs/LR_(1)_2017.pdf"
    },
    {
      id: 10,
      volume: "Vol III APR-JUN 2017",
      pdf: "/Pdfs/LR_(2)_2017.pdf",
    },
    {
      id: 11,
      volume: "Vol III JUL-SEP 2017",
      pdf: "/Pdfs/LR_(3)_2017.pdf",
    },
    {
      id: 12,
      volume: "Vol III OCT-DEC 2017",
      pdf: "/Pdfs/LR_(4)_2017.pdf",
    },
    {
      id: 13,
      volume: "Vol IV JAN-MAR 2018",
      pdf: "/Pdfs/LR_(1)_2018.pdf",
    },
    {
      id: 14,
      volume: "Vol IV APR-JUN 2018",
      pdf: "/Pdfs/LR_(2)_2018.pdf",
    },
    {
      id: 15,
      volume: "Vol IV JUL-SEP 2018",
      pdf: "/Pdfs/LR_(3)_2018.pdf",
    },
    {
      id: 16,
      volume: "Vol IV OCT-DEC 2018",
      pdf: "/Pdfs/LR_(4)_2018.pdf",
    },
    {
      id: 17,
      volume: "Vol V JAN-MAR 2019",
      pdf: "/Pdfs/LR_2019.pdf",
    },
    {
      id: 18,
      volume: "Vol V APR-JUN 2019",
      pdf: "/Pdfs/LR_2019.pdf",
    },
    {
      id: 19,
      volume: "Vol V JUL-SEP 2019",
      pdf: "/Pdfs/LR_2019.pdf",
    },
    {
      id: 20,
      volume: "Vol V OCT-DEC 2019",
      pdf: "/Pdfs/LR_2019.pdf",
    },
    {
      id: 21,
      volume: "Vol VI JAN-MAR 2020",
      pdf: "/Pdfs/LR_(1)_2020.pdf",
    },
    {
      id: 22,
      volume: "Vol VI APR-JUN 2020",
      pdf: "/Pdfs/LR_(2)_2020.pdf",
    },
    {
      id: 23,
      volume: "Vol VI JUL-SEP 2020",
      pdf: "/Pdfs/LR_(3)_2020.pdf",
    },
    {
      id: 24,
      volume: "Vol VI OCT-DEC 2020",
      pdf: "/Pdfs/LR_(4)_2020.pdf",
    },
    {
      id: 25,
      volume: "Vol VII JAN-MAR 2021",
      // pdf: "/Pdfs/LR_(4)_2020.pdf",
    },
    {
      id: 26,
      volume: "Vol VII APR-JUN 2021",
      // pdf: "/Pdfs/LR_(4)_2020.pdf",
    },
    {
      id: 27,
      volume: "Vol VII JUL-SEP 2021",
      // pdf: "/Pdfs/LR_(4)_2020.pdf",
    },
    {
      id: 28,
      volume: "Vol VII OCT-DEC 2021",
      // pdf: "/Pdfs/LR_(4)_2020.pdf",
    },
    {
      id: 29,
      volume: "Vol VIII JAN-MAR 2022",
      pdf: "/Pdfs/LR_2022.pdf",
    },
    {
      id: 30,
      volume: "Vol VIII APR-JUN 2022",
      pdf: "/Pdfs/LR_2022.pdf",
    },
    {
      id: 31,
      volume: "Vol VIII JUL-SEP 2022",
      pdf: "/Pdfs/LR_2022.pdf",
    },
    {
      id: 32,
      volume: "Vol VIII OCT-DEC 2022",
      pdf: "/Pdfs/LR_2022.pdf",
    },
    {
      id: 33,
      volume: "Vol IX JAN-MAR 2023",
      pdf: "/Pdfs/LR_(1)_2023.pdf"
    },
    {
      id: 34,
      volume: "Vol IX APR-JUN 2023",
      pdf: "/Pdfs/LR_(2)_2023.pdf"
    },
    {
      id: 35,
      volume: "Vol IX JUL-SEP 2023",
      pdf: "/Pdfs/LR_(3)_2023.pdf"
    },
    {
      id: 36,
      volume: "Vol IX OCT-DEC 2023",
      pdf: "/Pdfs/LR_(4)_2023.pdf"
    },
    {
      id: 37,
      volume: "Vol X JAN-MAR 2024",
      pdf: "/Pdfs/LR_(1)_2024.pdf",
    },
    {
      id: 38,
      volume: "Vol X APR-JUN 2024",
      pdf: "/Pdfs/LR_(2)_2024.pdf",
    },
    {
      id: 39,
      volume: "Vol X JUL-SEP 2024",
      pdf: "/Pdfs/LR_(3-4)_2024.pdf",
    },
    {
      id: 40,
      volume: "Vol X OCT-DEC 2024",
      pdf: "/Pdfs/LR_(3-4)_2024.pdf",
    },
    {
      id: 41,
      volume: "Vol XI 2025 [Current Published Issues] 2025",
      pdf: "/Pdfs/LR_(1)_2025.pdf",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#900001] animate-fadeInUp">Archives</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {archives.map((item) => (
          <a
            key={item.id}
            href={item.pdf}
            download
            className="relative group bg-gray-300 p-4 rounded-lg border shadow hover:bg-gray-100 transition duration-300"
          >
            <div className="text-lg font-semibold mb-2 text-black animate-fadeInUp">{item.volume}</div>
            {/* <div className="relative h-48 overflow-hidden rounded border border-dashed">
              <img
                src={item.previewImage}
                alt={`Preview of ${item.volume}`}
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm group-hover:opacity-0">
                Hover to preview
              </div>
            </div> */}
            {/* <div className="mt-2 text-sm text-blue-600 group-hover:underline">
              Click to download PDF
            </div> */}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Archives;
