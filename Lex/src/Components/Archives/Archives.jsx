import React, { useState } from 'react';
import { ChevronRight, ArrowLeft, FileText, Calendar, Book } from 'lucide-react';

const Archives = () => {
  const [currentView, setCurrentView] = useState('volumes');
  const [selectedVolume, setSelectedVolume] = useState(null);
  const [selectedIssue, setSelectedIssue] = useState(null);

  // Complete data structure for all volumes - UPDATE PAPER DATA HERE
  const volumes = [
    {
      id: 1,
      number: "I",
      year: 2015,
      issues: [
        { 
          id: 1, 
          number: 1, 
          period: "JAN-MAR", 
          year: 2015, 
          pdf: "/Pdfs/LR_(1)_2015.pdf",
          papers: [
            { id: 1, title: "Research Paper 1", author: "Ashutosh Kumar Shukla", pages: "9", pdf: "/Pdfs/Papers/1.pdf" },
            { id: 2, title: "Research Paper 2", author: "Animesh Kumar", pages: "9", pdf: "/Pdfs/Papers/2.pdf" },
            { id: 3, title: "Research Paper 3", author: "Shubham Shrivastava", pages: "19", pdf: "/Pdfs/Papers/3.pdf" },
            { id: 4, title: "Research Paper 4", author: "Maushmi Chatterjee", pages: "17", pdf: "/Pdfs/Papers/4.pdf" },
            { id: 5, title: "Research Paper 5", author: "Juhi Singh", pages: "19", pdf: "/Pdfs/Papers/5.pdf" },
            { id: 6, title: "Research Paper 6", author: "Mayuri Gupta", pages: "16", pdf: "/Pdfs/Papers/6.pdf" },
            { id: 7, title: "Research Paper 7", author: "Pihu Mishra & Akshay Soni", pages: "17", pdf: "/Pdfs/Papers/7.pdf" },
            { id: 8, title: "Research Paper 8", author: "Nishit Pandit", pages: "9", pdf: "/Pdfs/Papers/8.pdf" },
            { id: 9, title: "Research Paper 9", author: "Siddhant Khetawat & Vinayak Ojha", pages: "15", pdf: "/Pdfs/Papers/9.pdf" },
            { id: 10, title: "Research Paper 10", author: "Aparajita Kumari", pages: "14", pdf: "/Pdfs/Papers/10.pdf" },
            { id: 11, title: "Research Paper 11", author: "Garima Shrivastava", pages: "17", pdf: "/Pdfs/Papers/11.pdf" },
            { id: 12, title: "Research Paper 12", author: "Harshit Gupta", pages: "10", pdf: "/Pdfs/Papers/12.pdf" },
            { id: 13, title: "Research Paper 13", author: "Medha Bhat", pages: "17", pdf: "/Pdfs/Papers/13.pdf" },
            { id: 14, title: "Research Paper 14", author: "Partha Sarthi Mishra", pages: "19", pdf: "/Pdfs/Papers/14.pdf" },
          ]
        },
        { 
          id: 2, 
          number: 2, 
          period: "APR-JUN", 
          year: 2015, 
          pdf: "/Pdfs/LR_(2)_2015.pdf",
          papers: [
            { id: 15, title: "Research Paper 1", author: "Saket Dang", pages: "9", pdf: "/Pdfs/Papers2/1.pdf" },
            { id: 16, title: "Research Paper 2", author: "Richa Sharma", pages: "9", pdf: "/Pdfs/Papers2/2.pdf" },
            { id: 17, title: "Research Paper 3", author: "Ms. Shalini Goyal & Mr. Siddharth Bapna", pages: "19", pdf: "/Pdfs/Papers2/3.pdf" },
            { id: 18, title: "Research Paper 4", author: "Rahul Agarwal & Siddhant Nanodkar", pages: "17", pdf: "/Pdfs/Papers2/4.pdf" },
            { id: 19, title: "Research Paper 5", author: "Pooja Ghosh & Poonam Bera", pages: "19", pdf: "/Pdfs/Papers2/5.pdf" },
            { id: 20, title: "Research Paper 6", author: "Kanika Satyan & Abhishek Mishra", pages: "16", pdf: "/Pdfs/Papers2/6.pdf" },
            { id: 21, title: "Research Paper 7", author: "Ms. Bhawana Chouhan", pages: "17", pdf: "/Pdfs/Papers2/7.pdf" },
            { id: 22, title: "Research Paper 8", author: "Etisha Khaneja", pages: "9", pdf: "/Pdfs/Papers2/8.pdf" },
            { id: 23, title: "Research Paper 9", author: "Aastha Singhal", pages: "15", pdf: "/Pdfs/Papers2/9.pdf" },
            { id: 24, title: "Research Paper 10", author: "Mishika Bajpai & Anish Vohra", pages: "14", pdf: "/Pdfs/Papers2/10.pdf" },
            { id: 25, title: "Research Paper 11", author: "Saif Rasool Khan", pages: "17", pdf: "/Pdfs/Papers2/11.pdf" },
            { id: 26, title: "Research Paper 12", author: "Arpan Kamal", pages: "10", pdf: "/Pdfs/Papers2/12.pdf" },
            { id: 27, title: "Research Paper 13", author: "Nishtha Chaturvedi", pages: "17", pdf: "/Pdfs/Papers2/13.pdf" },
            { id: 28, title: "Research Paper 14", author: "SauroBroto Dutta & Gargi Agarwal", pages: "19", pdf: "/Pdfs/Papers2/14.pdf" },
            { id: 29, title: "Research Paper 15", author: "Aarzoo Thareja & Sana Sharma", pages: "19", pdf: "/Pdfs/Papers2/15.pdf" },
            { id: 30, title: "Research Paper 16", author: "Josephine Shreela", pages: "19", pdf: "/Pdfs/Papers2/16.pdf" },
            { id: 31, title: "Research Paper 17", author: "Siddhi Suman & Nalini chandrakar", pages: "19", pdf: "/Pdfs/Papers2/17.pdf" },
            { id: 32, title: "Research Paper 18", author: "Kundhavi Suresh", pages: "19", pdf: "/Pdfs/Papers2/18.pdf" },
            { id: 33, title: "Research Paper 19", author: "Swapnil Tripathi", pages: "19", pdf: "/Pdfs/Papers2/19.pdf" },
            { id: 34, title: "Research Paper 20", author: "Ragisha Soni & Siddharth A. Trivedi", pages: "19", pdf: "/Pdfs/Papers2/20.pdf" },
            { id: 35, title: "Research Paper 21", author: "Priyank Kumar Saxena", pages: "19", pdf: "/Pdfs/Papers2/21.pdf" },
          ]
        },
        { 
          id: 3, 
          number: 3, 
          period: "JUL-SEP", 
          year: 2015, 
          pdf: "/Pdfs/LR_(3)_2015.pdf",
          papers: [
            { id: 36, title: "Research Paper 1", author: "Ayalew Abate Bishaw", pages: "9", pdf: "/Pdfs/Papers3/1.pdf" },
            { id: 37, title: "Research Paper 2", author: "Dr. Gopal Kumar", pages: "9", pdf: "/Pdfs/Papers3/2.pdf" },
            { id: 38, title: "Research Paper 3", author: "Dr. Ritu Agarwal", pages: "19", pdf: "/Pdfs/Papers3/3.pdf" },
            { id: 39, title: "Research Paper 4", author: "Sarvesh Kumar Shahi", pages: "17", pdf: "/Pdfs/Papers3/4.pdf" },
            { id: 40, title: "Research Paper 5", author: "Sundaramurthy Purushothaman", pages: "19", pdf: "/Pdfs/Papers3/5.pdf" },
            { id: 41, title: "Research Paper 6", author: "Mohit Saini & Nidhi", pages: "16", pdf: "/Pdfs/Papers3/6.pdf" },
            { id: 42, title: "Research Paper 7", author: "Sumbul Khare & Nishith Pandit", pages: "17", pdf: "/Pdfs/Papers3/7.pdf" },
            { id: 43, title: "Research Paper 8", author: "Syed Zeeshan & Aabid Ali Haider", pages: "9", pdf: "/Pdfs/Papers3/8.pdf" },
            { id: 44, title: "Research Paper 9", author: "Mayuri Gupta", pages: "15", pdf: "/Pdfs/Papers3/9.pdf" },
            { id: 45, title: "Research Paper 10", author: "Akshara Vaishnavi Baru", pages: "14", pdf: "/Pdfs/Papers3/10.pdf" },
            { id: 46, title: "Research Paper 11", author: "Srishti Vaishnav", pages: "17", pdf: "/Pdfs/Papers3/11.pdf" },
            { id: 47, title: "Research Paper 12", author: "Lahama Mazumdar & Ritika Mohanty", pages: "10", pdf: "/Pdfs/Papers3/12.pdf" },
            { id: 48, title: "Research Paper 13", author: "Jacob Reji Olaserimannil & Parvathy Manoj", pages: "17", pdf: "/Pdfs/Papers3/13.pdf" },
            { id: 49, title: "Research Paper 14", author: "Vegadarshi", pages: "19", pdf: "/Pdfs/Papers3/14.pdf" },
            { id: 50, title: "Research Paper 15", author: "Ashita Bali & Devanjali Chadha", pages: "19", pdf: "/Pdfs/Papers3/15.pdf" },
            { id: 51, title: "Research Paper 16", author: "Aviral Arora", pages: "19", pdf: "/Pdfs/Papers3/16.pdf" },
            { id: 52, title: "Research Paper 17", author: "Madhulika Mishra", pages: "19", pdf: "/Pdfs/Papers3/17.pdf" },
            { id: 53, title: "Research Paper 18", author: "Etisha Khaneja", pages: "19", pdf: "/Pdfs/Papers3/18.pdf" },
            { id: 54, title: "Research Paper 19", author: "Anuttama Ghose & Satya Prakash Mishra", pages: "19", pdf: "/Pdfs/Papers3/19.pdf" },
            { id: 55, title: "Research Paper 20", author: "Atrayee De", pages: "19", pdf: "/Pdfs/Papers3/20.pdf" },
            { id: 56, title: "Research Paper 21", author: "Pratheek Maddhi Reddy", pages: "19", pdf: "/Pdfs/Papers3/21.pdf" },
            { id: 57, title: "Research Paper 21", author: "Raagya P. Zadu", pages: "19", pdf: "/Pdfs/Papers3/22.pdf" },
            { id: 58, title: "Research Paper 21", author: "Diksha Dwivedi & Ashutosh Bajaj", pages: "19", pdf: "/Pdfs/Papers3/23.pdf" },
            { id: 59, title: "Research Paper 21", author: "Manisha Chava & Sparshi Agarwal", pages: "19", pdf: "/Pdfs/Papers3/24.pdf" },
            { id: 60, title: "Research Paper 21", author: "Sana Sharma", pages: "19", pdf: "/Pdfs/Papers3/25.pdf" },
            { id: 61, title: "Research Paper 21", author: "Gayathree P Thamp", pages: "19", pdf: "/Pdfs/Papers3/26.pdf" },
            { id: 62, title: "Research Paper 21", author: "Sujeet Kumar", pages: "19", pdf: "/Pdfs/Papers3/27.pdf" },
            { id: 63, title: "Research Paper 21", author: "Kruthika Vasireddy", pages: "19", pdf: "/Pdfs/Papers3/28.pdf" },
            { id: 64, title: "Research Paper 21", author: "Saira Kausar & Rucha A. Gam", pages: "19", pdf: "/Pdfs/Papers3/29.pdf" },
            { id: 65, title: "Research Paper 21", author: "Aashna Jainy", pages: "19", pdf: "/Pdfs/Papers3/30.pdf" },
            { id: 66, title: "Research Paper 21", author: "Rudra Dutta & Priyanshu Gupta", pages: "19", pdf: "/Pdfs/Papers3/31.pdf" },
          ]
        },
        { 
          id: 4, 
          number: 4, 
          period: "OCT-DEC", 
          year: 2015, 
          pdf: "/Pdfs/LR_(4)_2015.pdf",
          papers: [
            { id: 67, title: "Research Paper 1", author: "Prof. S. K. Gaur", pages: "9", pdf: "/Pdfs/Papers4/1.pdf" },
            { id: 68, title: "Research Paper 2", author: "Akanksha Jumde", pages: "9", pdf: "/Pdfs/Papers4/2.pdf" },
            { id: 69, title: "Research Paper 3", author: "Dr. C. P. Gupta", pages: "19", pdf: "/Pdfs/Papers4/3.pdf" },
            { id: 70, title: "Research Paper 4", author: "Dr. Y. Papa Rao & Ankit Awasthi", pages: "17", pdf: "/Pdfs/Papers4/4.pdf" },
            { id: 71, title: "Research Paper 5", author: "Mayuri Gupta & Aparajita Vardhan", pages: "19", pdf: "/Pdfs/Papers4/5.pdf" },
            { id: 72, title: "Research Paper 6", author: "Raumita Dey", pages: "16", pdf: "/Pdfs/Papers4/6.pdf" },
            { id: 73, title: "Research Paper 7", author: "Tishta Tandon", pages: "17", pdf: "/Pdfs/Papers4/7.pdf" },
            { id: 74, title: "Research Paper 8", author: "Torsha Sinha", pages: "9", pdf: "/Pdfs/Papers4/8.pdf" },
            { id: 75, title: "Research Paper 9", author: "Animesh Kumar", pages: "15", pdf: "/Pdfs/Papers4/9.pdf" },
            { id: 76, title: "Research Paper 10", author: "Utkarsh Tiwari", pages: "14", pdf: "/Pdfs/Papers4/10.pdf" },
            { id: 77, title: "Research Paper 11", author: "Shubham Bharti & Shalini Singh", pages: "17", pdf: "/Pdfs/Papers4/11.pdf" },
            { id: 78, title: "Research Paper 12", author: "Prabhav Ralli & Manu Rajvansh", pages: "10", pdf: "/Pdfs/Papers4/12.pdf" },
            { id: 79, title: "Research Paper 13", author: "Ekta Rathore", pages: "17", pdf: "/Pdfs/Papers4/13.pdf" },
            { id: 80, title: "Research Paper 14", author: "Nikhil B. Gangai", pages: "19", pdf: "/Pdfs/Papers4/14.pdf" },
            { id: 81, title: "Research Paper 15", author: "Satendra Pratap Singh & Neha Arora", pages: "19", pdf: "/Pdfs/Papers4/15.pdf" },
            { id: 82, title: "Research Paper 16", author: "Anurag Pandey", pages: "19", pdf: "/Pdfs/Papers4/16.pdf" },
            { id: 83, title: "Research Paper 17", author: "Sitikantha Mitra & Piyali Pan", pages: "19", pdf: "/Pdfs/Papers4/17.pdf" },
            { id: 84, title: "Research Paper 18", author: "Milind Gaur & Kriti Gangwar", pages: "19", pdf: "/Pdfs/Papers4/18.pdf" },
            { id: 85, title: "Research Paper 19", author: "Prof. G. K. Chandani & Dr. Ritu Agrawal", pages: "19", pdf: "/Pdfs/Papers4/19.pdf" },
            { id: 86, title: "Research Paper 20", author: "Kratika Singhal", pages: "19", pdf: "/Pdfs/Papers4/20.pdf" },
            { id: 87, title: "Research Paper 21", author: "Raj Ranjan & Harsh Vardhan Dhanik", pages: "19", pdf: "/Pdfs/Papers4/21.pdf" },
          ]
        }
      ]
    },
    {
      id: 2,
      number: "II",
      year: 2016,
      issues: [
        { 
          id: 5, 
          number: 1, 
          period: "JAN-MAR", 
          year: 2016, 
          pdf: "/Pdfs/LR_(1)_2016.pdf",
          papers: [
            { id: 88, title: "Research Paper 1", author: "Jyoti", pages: "1-9", pdf: "/Pdfs/Papers5/1.pdf" },
            { id: 89, title: "Research Paper 2", author: "Dr. Deepak Kumar Srivastava & Ankit Awasthi ", pages: "10-17", pdf: "/Pdfs/Papers5/2.pdf" },
            { id: 90, title: "Research Paper 3", author: "Aesha Patel", pages: "18-28", pdf: "/Pdfs/Papers5/3.pdf" },
            { id: 91, title: "Research Paper 4", author: "Ekta Rathore", pages: "29-33", pdf: "/Pdfs/Papers5/4.pdf" },
            { id: 92, title: "Research Paper 5", author: "Archita Prajapati", pages: "34-43", pdf: "/Pdfs/Papers5/5.pdf" },
            { id: 93, title: "Research Paper 6", author: "Dr. Meena Ketan Sahu", pages: "44-51", pdf: "/Pdfs/Papers5/6.pdf" },
            { id: 94, title: "Research Paper 7", author: "Iti Batra ", pages: "52-62", pdf: "/Pdfs/Papers5/7.pdf" },
            { id: 95, title: "Research Paper 8", author: "Vijay Shekhar Jha", pages: "63-76", pdf: "/Pdfs/Papers5/8.pdf" },
            { id: 96, title: "Research Paper 9", author: "Palak Jain", pages: "77-85", pdf: "/Pdfs/Papers5/9.pdf" },
            { id: 97, title: "Research Paper 10", author: "Anish Ghosh", pages: "86-92", pdf: "/Pdfs/Papers5/10.pdf" },
            { id: 98, title: "Research Paper 11", author: "Harshit Kumar", pages: "93-102", pdf: "/Pdfs/Papers5/11.pdf" },
            { id: 99, title: "Research Paper 12", author: "Prachi Shekhawat & Shefali Munde", pages: "103-111", pdf: "/Pdfs/Papers5/12.pdf" },
            { id: 100, title: "Research Paper 13", author: "Kartik Raghuwanshi & Priyam Jhudele", pages: "112-118", pdf: "/Pdfs/Papers5/13.pdf" },
            { id: 101, title: "Research Paper 14", author: "Dr. Narendra Kumar Verma", pages: "119-126", pdf: "/Pdfs/Papers5/14.pdf" },
            { id: 102, title: "Research Paper 15", author: "B Pallavi Patro & Vikalp Srivastava", pages: "127-136", pdf: "/Pdfs/Papers5/15.pdf" },
            { id: 103, title: "Research Paper 16", author: "Shafaque Raza", pages: "137-145", pdf: "/Pdfs/Papers5/16.pdf" },
            { id: 104, title: "Research Paper 17", author: "Mitali Jain", pages: "146-155", pdf: "/Pdfs/Papers5/17.pdf" },
            { id: 105, title: "Research Paper 18", author: "Namrata Chakraborty", pages: "156-165", pdf: "/Pdfs/Papers5/18.pdf" },
            { id: 106, title: "Research Paper 19", author: "Shubham Singh & Pallavi Singh", pages: "166-173", pdf: "/Pdfs/Papers5/19.pdf" },
            { id: 107, title: "Research Paper 20", author: "Yogendra Kumar Kumawat", pages: "174-181", pdf: "/Pdfs/Papers5/20.pdf" },
            { id: 108, title: "Research Paper 21", author: "Utkarsh Kumar Sonkar", pages: "182-191", pdf: "/Pdfs/Papers5/21.pdf" },
            { id: 109, title: "Research Paper 22", author: "Bhavinee", pages: "192-196", pdf: "/Pdfs/Papers5/22.pdf" },
            { id: 110, title: "Research Paper 23", author: "Aanal Desai ", pages: "197-204", pdf: "/Pdfs/Papers5/23.pdf" },
            { id: 111, title: "Research Paper 24", author: "Shafali R. N.", pages: "205-216", pdf: "/Pdfs/Papers5/24.pdf" },
            { id: 112, title: "Research Paper 25", author: "T. Deekshitha", pages: "217-225", pdf: "/Pdfs/Papers5/25.pdf" },
          ]
        },
        { 
          id: 6, 
          number: 2, 
          period: "APR-JUN", 
          year: 2016, 
          pdf: "/Pdfs/LR_(2)_2016.pdf",
          papers: [
            { id: 113, title: "Research Paper 1", author: "Tandra Seetharam & Prof. A. Rajendra Prasad", pages: "1-6", pdf: "/Pdfs/Papers6/1.pdf" },
            { id: 114, title: "Research Paper 2", author: "Dr. Suresh Mani Tripathi", pages: "7-15", pdf: "/Pdfs/Papers6/2.pdf" },
            { id: 115, title: "Research Paper 3", author: "Animesh Kumar & Juhi Singh", pages: "16-24", pdf: "/Pdfs/Papers6/Two.pdf" },
            { id: 116, title: "Research Paper 4", author: "Dr. S. P. Mishra", pages: "25-37", pdf: "/Pdfs/Papers6/3.pdf" },
            { id: 117, title: "Research Paper 5", author: "Shital Priyadarshi", pages: "38-46", pdf: "/Pdfs/Papers6/4.pdf" },
            { id: 118, title: "Research Paper 6", author: "Joyjoti Hore", pages: "47-59", pdf: "/Pdfs/Papers6/5.pdf" },
            { id: 119, title: "Research Paper 7", author: "Dhruv B. Goswami", pages: "60-69", pdf: "/Pdfs/Papers6/6.pdf" },
            { id: 120, title: "Research Paper 8", author: "Ghan Shyam Pal", pages: "70-85", pdf: "/Pdfs/Papers6/7.pdf" },
            { id: 121, title: "Research Paper 9", author: "Isha Oza", pages: "86-98", pdf: "/Pdfs/Papers6/8.pdf" },
            { id: 122, title: "Research Paper 10", author: "Tandra Seetharam & Prof. A. Rajendra Prasad", pages: "99-110", pdf: "/Pdfs/Papers6/9.pdf" },
            { id: 123, title: "Research Paper 11", author: "Shailesh Mishra", pages: "111-121", pdf: "/Pdfs/Papers6/10.pdf" },
            { id: 124, title: "Research Paper 12", author: "Nidhi Tewari & Srishti Vaishnav", pages: "122-145", pdf: "/Pdfs/Papers6/11.pdf" },
            { id: 125, title: "Research Paper 13", author: "Aniruddh Shastree", pages: "146-157", pdf: "/Pdfs/Papers6/12.pdf" },
            { id: 126, title: "Research Paper 14", author: "Swati Singh Parmar", pages: "158-168", pdf: "/Pdfs/Papers6/13.pdf" },
          ]
        },
        { 
          id: 7, 
          number: 3, 
          period: "JUL-SEP", 
          year: 2016, 
          pdf: "/Pdfs/LR_(3)_2016.pdf",
          papers: [
            // UPDATE: Add actual paper data here
            { id: 44, title: "Paper Title", author: "Author Name", pages: "1-24", pdf: "/Pdfs/Papers_2016_3/1.pdf" },
            { id: 45, title: "Paper Title", author: "Author Name", pages: "25-42", pdf: "/Pdfs/Papers_2016_3/2.pdf" },
            // Add more papers...
          ]
        },
        { 
          id: 8, 
          number: 4, 
          period: "OCT-DEC", 
          year: 2016, 
          pdf: "/Pdfs/LR_(4)_2016.pdf",
          papers: [
            // UPDATE: Add actual paper data here
            { id: 46, title: "Paper Title", author: "Author Name", pages: "1-28", pdf: "/Pdfs/Papers_2016_4/1.pdf" },
            { id: 47, title: "Paper Title", author: "Author Name", pages: "29-45", pdf: "/Pdfs/Papers_2016_4/2.pdf" },
            // Add more papers...
          ]
        }
      ]
    },
    {
      id: 3,
      number: "III",
      year: 2017,
      issues: [
        { 
          id: 9, 
          number: 1, 
          period: "JAN-MAR", 
          year: 2017, 
          pdf: "/Pdfs/LR_(1)_2017.pdf",
          papers: [
            // UPDATE: Add actual paper data here
            { id: 48, title: "Paper Title", author: "Author Name", pages: "1-20", pdf: "/Pdfs/Papers_2017_1/1.pdf" },
            // Add more papers...
          ]
        },
        { 
          id: 10, 
          number: 2, 
          period: "APR-JUN", 
          year: 2017, 
          pdf: "/Pdfs/LR_(2)_2017.pdf",
          papers: [
            // UPDATE: Add actual paper data here
            { id: 49, title: "Paper Title", author: "Author Name", pages: "1-25", pdf: "/Pdfs/Papers_2017_2/1.pdf" },
            // Add more papers...
          ]
        },
        { 
          id: 11, 
          number: 3, 
          period: "JUL-SEP", 
          year: 2017, 
          pdf: "/Pdfs/LR_(3)_2017.pdf",
          papers: [
            // UPDATE: Add actual paper data here
            { id: 50, title: "Paper Title", author: "Author Name", pages: "1-30", pdf: "/Pdfs/Papers_2017_3/1.pdf" },
            // Add more papers...
          ]
        },
        { 
          id: 12, 
          number: 4, 
          period: "OCT-DEC", 
          year: 2017, 
          pdf: "/Pdfs/LR_(4)_2017.pdf",
          papers: [
            // UPDATE: Add actual paper data here
            { id: 51, title: "Paper Title", author: "Author Name", pages: "1-22", pdf: "/Pdfs/Papers_2017_4/1.pdf" },
            // Add more papers...
          ]
        }
      ]
    },
    {
      id: 4,
      number: "IV",
      year: 2018,
      issues: [
        { 
          id: 13, 
          number: 1, 
          period: "JAN-MAR", 
          year: 2018, 
          pdf: "/Pdfs/LR_(1)_2018.pdf",
          papers: [
            // UPDATE: Add actual paper data here
            { id: 52, title: "Paper Title", author: "Author Name", pages: "1-18", pdf: "/Pdfs/Papers_2018_1/1.pdf" },
            // Add more papers...
          ]
        },
        { 
          id: 14, 
          number: 2, 
          period: "APR-JUN", 
          year: 2018, 
          pdf: "/Pdfs/LR_(2)_2018.pdf",
          papers: [
            // UPDATE: Add actual paper data here
            { id: 53, title: "Paper Title", author: "Author Name", pages: "1-24", pdf: "/Pdfs/Papers_2018_2/1.pdf" },
            // Add more papers...
          ]
        },
        { 
          id: 15, 
          number: 3, 
          period: "JUL-SEP", 
          year: 2018, 
          pdf: "/Pdfs/LR_(3)_2018.pdf",
          papers: [
            // UPDATE: Add actual paper data here
            { id: 54, title: "Paper Title", author: "Author Name", pages: "1-26", pdf: "/Pdfs/Papers_2018_3/1.pdf" },
            // Add more papers...
          ]
        },
        { 
          id: 16, 
          number: 4, 
          period: "OCT-DEC", 
          year: 2018, 
          pdf: "/Pdfs/LR_(4)_2018.pdf",
          papers: [
            // UPDATE: Add actual paper data here
            { id: 55, title: "Paper Title", author: "Author Name", pages: "1-21", pdf: "/Pdfs/Papers_2018_4/1.pdf" },
            // Add more papers...
          ]
        }
      ]
    },
    {
      id: 5,
      number: "V",
      year: 2019,
      issues: [
        { 
          id: 17, 
          number: 1, 
          period: "JAN-MAR", 
          year: 2019, 
          pdf: "/Pdfs/LR_2019.pdf",
          papers: [
            // UPDATE: Add actual paper data here
            { id: 56, title: "Paper Title", author: "Author Name", pages: "1-23", pdf: "/Pdfs/Papers_2019_1/1.pdf" },
            // Add more papers...
          ]
        },
        { 
          id: 18, 
          number: 2, 
          period: "APR-JUN", 
          year: 2019, 
          pdf: "/Pdfs/LR_2019.pdf",
          papers: [
            // UPDATE: Add actual paper data here
            { id: 57, title: "Paper Title", author: "Author Name", pages: "1-19", pdf: "/Pdfs/Papers_2019_2/1.pdf" },
            // Add more papers...
          ]
        },
        { 
          id: 19, 
          number: 3, 
          period: "JUL-SEP", 
          year: 2019, 
          pdf: "/Pdfs/LR_2019.pdf",
          papers: [
            // UPDATE: Add actual paper data here
            { id: 58, title: "Paper Title", author: "Author Name", pages: "1-27", pdf: "/Pdfs/Papers_2019_3/1.pdf" },
            // Add more papers...
          ]
        },
        { 
          id: 20, 
          number: 4, 
          period: "OCT-DEC", 
          year: 2019, 
          pdf: "/Pdfs/LR_2019.pdf",
          papers: [
            // UPDATE: Add actual paper data here
            { id: 59, title: "Paper Title", author: "Author Name", pages: "1-25", pdf: "/Pdfs/Papers_2019_4/1.pdf" },
            // Add more papers...
          ]
        }
      ]
    },
    {
      id: 6,
      number: "VI",
      year: 2020,
      issues: [
        { 
          id: 21, 
          number: 1, 
          period: "JAN-MAR", 
          year: 2020, 
          pdf: "/Pdfs/LR_(1)_2020.pdf",
          papers: [
            // UPDATE: Add actual paper data here
            { id: 60, title: "Paper Title", author: "Author Name", pages: "1-20", pdf: "/Pdfs/Papers_2020_1/1.pdf" },
            // Add more papers...
          ]
        },
        { 
          id: 22, 
          number: 2, 
          period: "APR-JUN", 
          year: 2020, 
          pdf: "/Pdfs/LR_(2)_2020.pdf",
          papers: [
            // UPDATE: Add actual paper data here
            { id: 61, title: "Paper Title", author: "Author Name", pages: "1-22", pdf: "/Pdfs/Papers_2020_2/1.pdf" },
            // Add more papers...
          ]
        },
        { 
          id: 23, 
          number: 3, 
          period: "JUL-SEP", 
          year: 2020, 
          pdf: "/Pdfs/LR_(3)_2020.pdf",
          papers: [
            // UPDATE: Add actual paper data here
            { id: 62, title: "Paper Title", author: "Author Name", pages: "1-28", pdf: "/Pdfs/Papers_2020_3/1.pdf" },
            // Add more papers...
          ]
        },
        { 
          id: 24, 
          number: 4, 
          period: "OCT-DEC", 
          year: 2020, 
          pdf: "/Pdfs/LR_(4)_2020.pdf",
          papers: [
            // UPDATE: Add actual paper data here
            { id: 63, title: "Paper Title", author: "Author Name", pages: "1-24", pdf: "/Pdfs/Papers_2020_4/1.pdf" },
            // Add more papers...
          ]
        }
      ]
    },
    {
      id: 7,
      number: "VII",
      year: 2021,
      issues: [
        { 
          id: 25, 
          number: 1, 
          period: "JAN-MAR", 
          year: 2021,
          // pdf: null, // Not available
          papers: [
            // UPDATE: Add actual paper data here if available
          ]
        },
        { 
          id: 26, 
          number: 2, 
          period: "APR-JUN", 
          year: 2021,
          // pdf: null, // Not available
          papers: [
            // UPDATE: Add actual paper data here if available
          ]
        },
        { 
          id: 27, 
          number: 3, 
          period: "JUL-SEP", 
          year: 2021,
          // pdf: null, // Not available
          papers: [
            // UPDATE: Add actual paper data here if available
          ]
        },
        { 
          id: 28, 
          number: 4, 
          period: "OCT-DEC", 
          year: 2021,
          // pdf: null, // Not available
          papers: [
            // UPDATE: Add actual paper data here if available
          ]
        }
      ]
    },
    {
      id: 8,
      number: "VIII",
      year: 2022,
      issues: [
        { 
          id: 29, 
          number: 1, 
          period: "JAN-MAR", 
          year: 2022, 
          pdf: "/Pdfs/LR_2022.pdf",
          papers: [
            // UPDATE: Add actual paper data here
            { id: 64, title: "Paper Title", author: "Author Name", pages: "1-26", pdf: "/Pdfs/Papers_2022_1/1.pdf" },
            // Add more papers...
          ]
        },
        { 
          id: 30, 
          number: 2, 
          period: "APR-JUN", 
          year: 2022, 
          pdf: "/Pdfs/LR_2022.pdf",
          papers: [
            // UPDATE: Add actual paper data here
            { id: 65, title: "Paper Title", author: "Author Name", pages: "1-23", pdf: "/Pdfs/Papers_2022_2/1.pdf" },
            // Add more papers...
          ]
        },
        { 
          id: 31, 
          number: 3, 
          period: "JUL-SEP", 
          year: 2022, 
          pdf: "/Pdfs/LR_2022.pdf",
          papers: [
            // UPDATE: Add actual paper data here
            { id: 66, title: "Paper Title", author: "Author Name", pages: "1-29", pdf: "/Pdfs/Papers_2022_3/1.pdf" },
            // Add more papers...
          ]
        },
        { 
          id: 32, 
          number: 4, 
          period: "OCT-DEC", 
          year: 2022, 
          pdf: "/Pdfs/LR_2022.pdf",
          papers: [
            // UPDATE: Add actual paper data here
            { id: 67, title: "Paper Title", author: "Author Name", pages: "1-21", pdf: "/Pdfs/Papers_2022_4/1.pdf" },
            // Add more papers...
          ]
        }
      ]
    },
    {
      id: 9,
      number: "IX",
      year: 2023,
      issues: [
        { 
          id: 33, 
          number: 1, 
          period: "JAN-MAR", 
          year: 2023, 
          pdf: "/Pdfs/LR_(1)_2023.pdf",
          papers: [
            // UPDATE: Add actual paper data here
            { id: 68, title: "Paper Title", author: "Author Name", pages: "1-25", pdf: "/Pdfs/Papers_2023_1/1.pdf" },
            // Add more papers...
          ]
        },
        { 
          id: 34, 
          number: 2, 
          period: "APR-JUN", 
          year: 2023, 
          pdf: "/Pdfs/LR_(2)_2023.pdf",
          papers: [
            // UPDATE: Add actual paper data here
            { id: 69, title: "Paper Title", author: "Author Name", pages: "1-27", pdf: "/Pdfs/Papers_2023_2/1.pdf" },
            // Add more papers...
          ]
        },
        { 
          id: 35, 
          number: 3, 
          period: "JUL-SEP", 
          year: 2023, 
          pdf: "/Pdfs/LR_(3)_2023.pdf",
          papers: [
            // UPDATE: Add actual paper data here
            { id: 70, title: "Paper Title", author: "Author Name", pages: "1-30", pdf: "/Pdfs/Papers_2023_3/1.pdf" },
            // Add more papers...
          ]
        },
        { 
          id: 36, 
          number: 4, 
          period: "OCT-DEC", 
          year: 2023, 
          pdf: "/Pdfs/LR_(4)_2023.pdf",
          papers: [
            // UPDATE: Add actual paper data here
            { id: 71, title: "Paper Title", author: "Author Name", pages: "1-22", pdf: "/Pdfs/Papers_2023_4/1.pdf" },
            // Add more papers...
          ]
        }
      ]
    },
    {
      id: 10,
      number: "X",
      year: 2024,
      issues: [
        { 
          id: 37, 
          number: 1, 
          period: "JAN-MAR", 
          year: 2024, 
          pdf: "/Pdfs/LR_(1)_2024.pdf",
          papers: [
            // UPDATE: Add actual paper data here
            { id: 72, title: "Paper Title", author: "Author Name", pages: "1-24", pdf: "/Pdfs/Papers_2024_1/1.pdf" },
            // Add more papers...
          ]
        },
        { 
          id: 38, 
          number: 2, 
          period: "APR-JUN", 
          year: 2024, 
          pdf: "/Pdfs/LR_(2)_2024.pdf",
          papers: [
            // UPDATE: Add actual paper data here
            { id: 73, title: "Paper Title", author: "Author Name", pages: "1-28", pdf: "/Pdfs/Papers_2024_2/1.pdf" },
            // Add more papers...
          ]
        },
        { 
          id: 39, 
          number: 3, 
          period: "JUL-SEP", 
          year: 2024, 
          pdf: "/Pdfs/LR_(3-4)_2024.pdf",
          papers: [
            // UPDATE: Add actual paper data here
            { id: 74, title: "Paper Title", author: "Author Name", pages: "1-26", pdf: "/Pdfs/Papers_2024_3/1.pdf" },
            // Add more papers...
          ]
        },
        { 
          id: 40, 
          number: 4, 
          period: "OCT-DEC", 
          year: 2024, 
          pdf: "/Pdfs/LR_(3-4)_2024.pdf",
          papers: [
            // UPDATE: Add actual paper data here
            { id: 75, title: "Paper Title", author: "Author Name", pages: "1-23", pdf: "/Pdfs/Papers_2024_4/1.pdf" },
            // Add more papers...
          ]
        }
      ]
    },
    {
      id: 11,
      number: "XI",
      year: 2025,
      issues: [
        { 
          id: 41, 
          number: 1, 
          period: "JAN-MAR", 
          year: 2025, 
          pdf: "/Pdfs/LR_(1)_2025.pdf",
          papers: [
            // UPDATE: Add actual paper data here
            { id: 76, title: "Paper Title", author: "Author Name", pages: "1-25", pdf: "/Pdfs/Papers_2025_1/1.pdf" },
            // Add more papers...
          ]
        },
        { 
          id: 42, 
          number: 2, 
          period: "APR-JUN [Current Published Issues]", 
          year: 2025, 
          pdf: "/Pdfs/LR_XI_(2)_2025_(1).pdf",
          papers: [
            // UPDATE: Add actual paper data here
            { id: 77, title: "Paper Title", author: "Author Name", pages: "1-27", pdf: "/Pdfs/Papers_2025_2/1.pdf" },
            // Add more papers...
          ]
        }
        // Note: Issues 3 and 4 for 2025 not yet available
      ]
    }
  ];

  const handleVolumeClick = (volume) => {
    setSelectedVolume(volume);
    setCurrentView('issues');
  };

  const handleIssueClick = (issue) => {
    setSelectedIssue(issue);
    setCurrentView('papers');
  };

  const handleBackToVolumes = () => {
    setCurrentView('volumes');
    setSelectedVolume(null);
    setSelectedIssue(null);
  };

  const handleBackToIssues = () => {
    setCurrentView('issues');
    setSelectedIssue(null);
  };

  const renderBreadcrumb = () => (
    <div className="flex items-center gap-2 mb-8 text-sm text-gray-600">
      <button 
        onClick={handleBackToVolumes}
        className="hover:text-[#900001] transition-colors flex items-center gap-1"
      >
        <Book className="w-4 h-4" />
        Archives
      </button>
      {selectedVolume && (
        <>
          <ChevronRight className="w-4 h-4" />
          <button 
            onClick={handleBackToIssues}
            className="hover:text-[#900001] transition-colors"
          >
            Volume {selectedVolume.number} ({selectedVolume.year})
          </button>
        </>
      )}
      {selectedIssue && (
        <>
          <ChevronRight className="w-4 h-4" />
          <span className="text-[#900001] font-medium">
            Issue {selectedIssue.number} ({selectedIssue.period})
          </span>
        </>
      )}
    </div>
  );

  const renderVolumes = () => (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-center text-[#900001] mb-8">
        Journal Archives
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Browse our comprehensive collection of journal volumes published from 2015 to present. 
        Each volume contains quarterly issues with academic papers and research articles.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {volumes.map((volume) => (
          <div
            key={volume.id}
            onClick={() => handleVolumeClick(volume)}
            className="group bg-white p-6 rounded-xl border-2 border-gray-100 shadow-sm hover:shadow-xl hover:border-[#900001] transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-[#900001] text-white rounded-full mb-4 mx-auto group-hover:bg-[#700001] transition-colors">
              <span className="text-xl font-bold">{volume.number}</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 text-center mb-2">
              Volume {volume.number}
            </h3>
            <div className="flex items-center justify-center gap-2 text-gray-600 mb-4">
              <Calendar className="w-4 h-4" />
              <span>{volume.year}</span>
            </div>
            <div className="text-center text-sm text-gray-500">
              {volume.issues.length} Issues Available
            </div>
            <div className="flex items-center justify-center mt-4 text-[#900001] group-hover:text-[#700001] transition-colors">
              <span className="text-sm font-medium mr-2">View Issues</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderIssues = () => {
    if (!selectedVolume) return null;

    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={handleBackToVolumes}
            className="flex items-center gap-2 text-gray-600 hover:text-[#900001] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Volumes
          </button>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#900001] mb-4">
            Volume {selectedVolume.number} ({selectedVolume.year})
          </h1>
          <p className="text-gray-600">
            Select an issue to view and download individual papers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {selectedVolume.issues.map((issue) => (
            <div
              key={issue.id}
              onClick={() => issue.pdf && handleIssueClick(issue)}
              className={`group p-6 rounded-xl border-2 shadow-sm transition-all duration-300 transform hover:-translate-y-1 ${
                issue.pdf 
                  ? 'bg-white border-gray-100 hover:shadow-xl hover:border-[#900001] cursor-pointer' 
                  : 'bg-gray-50 border-gray-200 cursor-not-allowed opacity-60'
              }`}
            >
              <div className={`flex items-center justify-center w-12 h-12 rounded-full mb-4 mx-auto transition-colors ${
                issue.pdf 
                  ? 'bg-[#900001] text-white group-hover:bg-[#700001]' 
                  : 'bg-gray-400 text-white'
              }`}>
                <span className="font-bold">{issue.number}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 text-center mb-2">
                Issue {issue.number}
              </h3>
              <p className="text-sm text-gray-600 text-center mb-4">
                {issue.period} {issue.year}
              </p>
              
              {issue.pdf ? (
                <div className="text-center">
                  <div className="flex items-center justify-center text-[#900001] group-hover:text-[#700001] transition-colors">
                    <span className="text-sm font-medium mr-2">View Papers</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              ) : (
                <div className="text-center text-xs text-gray-400">
                  Not Available
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderPapers = () => {
    if (!selectedIssue || !selectedVolume) return null;

    const papers = selectedIssue.papers || [];

    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={handleBackToIssues}
            className="flex items-center gap-2 text-gray-600 hover:text-[#900001] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Issues
          </button>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#900001] mb-2">
            Volume {selectedVolume.number} - Issue {selectedIssue.number}
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            {selectedIssue.period} {selectedIssue.year}
          </p>
          <p className="text-gray-600">
            Download papers and articles from this issue
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Complete Issue Download */}
          {selectedIssue.pdf && (
            <div className="mb-8 p-6 bg-gradient-to-r from-[#900001] to-[#700001] text-white rounded-xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Complete Issue PDF</h3>
                  <p className="text-gray-200">Download the entire issue as a single PDF file</p>
                </div>
                <a
                  href={selectedIssue.pdf}
                  download
                  className="bg-white text-[#900001] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
                >
                  <FileText className="w-5 h-5" />
                  Download Complete Issue
                </a>
              </div>
            </div>
          )}

          {/* Individual Papers */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Individual Papers</h3>
            <p className="text-gray-600 mb-6">
              Browse and download individual research papers from this issue
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {papers.map((paper) => (
              <a
                key={paper.id}
                href={paper.pdf}
                download
                className="group flex items-center gap-4 p-6 bg-white border-2 border-gray-100 rounded-xl shadow-sm hover:shadow-lg hover:border-[#900001] transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[#900001] text-white rounded-lg flex items-center justify-center group-hover:bg-[#700001] transition-colors">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {paper.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">
                    By {paper.author}
                  </p>
                  <p className="text-xs text-gray-500">
                    Pages: {paper.pages}
                  </p>
                </div>
                <div className="flex items-center text-[#900001] group-hover:text-[#700001] transition-colors">
                  <span className="text-sm font-medium mr-2">Download PDF</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
          
          {papers.length === 0 && (
            <div className="text-center py-12 bg-gray-50 rounded-xl">
              <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-600 mb-2">No Individual Papers Available</h3>
              <p className="text-gray-500">
                Individual papers for this issue are not yet available. Please download the complete issue above.
              </p>
            </div>
          )}
          
          {papers.length > 0 && (
            <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">About this Issue</h4>
              <p className="text-gray-600 text-sm">
                This issue contains {papers.length} research papers and academic contributions from various authors. 
                You can download individual papers above or get the complete issue PDF from the top section.
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {currentView !== 'volumes' && renderBreadcrumb()}
        
        <div className="transition-all duration-500 ease-in-out">
          {currentView === 'volumes' && renderVolumes()}
          {currentView === 'issues' && renderIssues()}
          {currentView === 'papers' && renderPapers()}
        </div>
      </div>
    </div>
  );
};

export default Archives;