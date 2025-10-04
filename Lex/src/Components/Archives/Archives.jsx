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
            { id: 127, title: "Research Paper 1", author: "Lipika Sharma", pages: "1-6", pdf: "/Pdfs/Papers7/1.pdf" },
            { id: 128, title: "Research Paper 2", author: "Aastha Dube", pages: "7-15", pdf: "/Pdfs/Papers7/2.pdf" },
            { id: 129, title: "Research Paper 3", author: "Sargam Jain", pages: "16-24", pdf: "/Pdfs/Papers7/3.pdf" },
            { id: 130, title: "Research Paper 4", author: "Dr. Manish Yadav", pages: "25-37", pdf: "/Pdfs/Papers7/4.pdf" },
            { id: 131, title: "Research Paper 5", author: "Sarvesh Kumar Shah", pages: "38-46", pdf: "/Pdfs/Papers7/5.pdf" },
            { id: 132, title: "Research Paper 6", author: "Meet A. Shah & Harpalsinh R. Parmar", pages: "47-59", pdf: "/Pdfs/Papers7/6.pdf" },
            { id: 133, title: "Research Paper 7", author: "Agampreet Singh & Lakhan Mittal", pages: "60-69", pdf: "/Pdfs/Papers7/7.pdf" },
            { id: 134, title: "Research Paper 8", author: "Prakash Chandra Kasera", pages: "70-85", pdf: "/Pdfs/Papers7/8.pdf" },
            { id: 135, title: "Research Paper 9", author: "S. Aruna Sri & Prof. A. Subrahmanyam", pages: "86-98", pdf: "/Pdfs/Papers7/9.pdf" },
            { id: 136, title: "Research Paper 10", author: "Aparajita Kumari ", pages: "99-110", pdf: "/Pdfs/Papers7/10.pdf" },
            { id: 137, title: "Research Paper 11", author: "Mayuri Gupta ", pages: "111-121", pdf: "/Pdfs/Papers7/11.pdf" },
            { id: 138, title: "Research Paper 12", author: "S. Aruna Sri & Prof. A. Subrahmanyam", pages: "122-145", pdf: "/Pdfs/Papers7/12.pdf" },
          ]
        },
        {
          id: 8,
          number: 4,
          period: "OCT-DEC",
          year: 2016,
          pdf: "/Pdfs/LR_(4)_2016.pdf",
          papers: [
            { id: 139, title: "Research Paper 1", author: "Dr. Ritu Agarwal", pages: "1-6", pdf: "/Pdfs/Papers12/1.pdf" },
            { id: 140, title: "Research Paper 2", author: "Dr. Y. Papa Rao", pages: "7-15", pdf: "/Pdfs/Papers12/2.pdf" },
            { id: 141, title: "Research Paper 3", author: "Dr. Balwinder Kaur", pages: "16-24", pdf: "/Pdfs/Papers12/3.pdf" },
            { id: 142, title: "Research Paper 4", author: "Pallavi Kumari", pages: "25-37", pdf: "/Pdfs/Papers12/4.pdf" },
            { id: 143, title: "Research Paper 5", author: "Mayuri Gupta", pages: "38-46", pdf: "/Pdfs/Papers12/5.pdf" },
            { id: 144, title: "Research Paper 6", author: "Sanjana Shrivastava", pages: "47-59", pdf: "/Pdfs/Papers12/6.pdf" },
            { id: 145, title: "Research Paper 7", author: "Aparajita Kumari ", pages: "60-69", pdf: "/Pdfs/Papers12/7.pdf" },
            // { id: 134, title: "Research Paper 8", author: "Prakash Chandra Kasera", pages: "70-85", pdf: "/Pdfs/Papers7/8.pdf" },
            // { id: 135, title: "Research Paper 9", author: "S. Aruna Sri & Prof. A. Subrahmanyam", pages: "86-98", pdf: "/Pdfs/Papers7/9.pdf" },
            // { id: 136, title: "Research Paper 10", author: "Aparajita Kumari ", pages: "99-110", pdf: "/Pdfs/Papers7/10.pdf" },
            // { id: 137, title: "Research Paper 11", author: "Mayuri Gupta ", pages: "111-121", pdf: "/Pdfs/Papers7/11.pdf" },
            // { id: 138, title: "Research Paper 12", author: "S. Aruna Sri & Prof. A. Subrahmanyam", pages: "122-145", pdf: "/Pdfs/Papers7/12.pdf" },
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
            { id: 146, title: "Research Paper 1", author: "Animesh Kumar", pages: "1-6", pdf: "/Pdfs/Papers8/1.pdf" },
            { id: 147, title: "Research Paper 2", author: "Aditi Singhal ", pages: "7-15", pdf: "/Pdfs/Paper87/2.pdf" },
            { id: 148, title: "Research Paper 3", author: "Akanksha Pandey", pages: "16-24", pdf: "/Pdfs/Papers8/3.pdf" },
            { id: 149, title: "Research Paper 4", author: "Sagar Khanna & Akansha Srivastava ", pages: "25-37", pdf: "/Pdfs/Papers8/4.pdf" },
            { id: 150, title: "Research Paper 5", author: "Diksha Chadha", pages: "38-46", pdf: "/Pdfs/Papers8/5.pdf" },
            { id: 151, title: "Research Paper 6", author: "Tamanna Nayeem", pages: "47-59", pdf: "/Pdfs/Papers8/6.pdf" },
            { id: 152, title: "Research Paper 7", author: "Dr. Ritu Agarwal & Aisha Moonis", pages: "60-69", pdf: "/Pdfs/Papers8/7.pdf" },
            { id: 153, title: "Research Paper 8", author: "Prateek Gupta", pages: "70-85", pdf: "/Pdfs/Papers8/8.pdf" },
            { id: 154, title: "Research Paper 9", author: "Sahiba Shafique", pages: "86-98", pdf: "/Pdfs/Papers8/9.pdf" },
            { id: 155, title: "Research Paper 10", author: "Omar Munir & Rudra Dutta", pages: "99-110", pdf: "/Pdfs/Papers8/10.pdf" },
            { id: 156, title: "Research Paper 11", author: "Sakshi Goel", pages: "111-121", pdf: "/Pdfs/Papers8/11.pdf" },
            { id: 157, title: "Research Paper 12", author: "Tanaya Agrawal", pages: "122-145", pdf: "/Pdfs/Papers8/12.pdf" },
          ]
        },
        {
          id: 10,
          number: 2,
          period: "APR-JUN",
          year: 2017,
          pdf: "/Pdfs/LR_(2)_2017.pdf",
          papers: [
            { id: 158, title: "Research Paper 1", author: "Prof. S. K. Gaur", pages: "1-6", pdf: "/Pdfs/Papers9/1.pdf" },
            { id: 159, title: "Research Paper 2", author: "Divya Singh Rathor & Sarvesh Sahi", pages: "7-15", pdf: "/Pdfs/Papers9/2.pdf" },
            { id: 160, title: "Research Paper 3", author: "Tanaya Agrawal & Dr. P.K.Gautam", pages: "16-24", pdf: "/Pdfs/Papers9/3.pdf" },
            { id: 161, title: "Research Paper 4", author: "Aparajita Singh ", pages: "25-37", pdf: "/Pdfs/Papers9/4.pdf" },
            { id: 162, title: "Research Paper 5", author: "Vishrut Relan & Shiven Kaushik", pages: "38-46", pdf: "/Pdfs/Papers9/5.pdf" },
            { id: 163, title: "Research Paper 6", author: "Sumit Agarwala & Shilpy", pages: "47-59", pdf: "/Pdfs/Papers9/6.pdf" },
            { id: 164, title: "Research Paper 7", author: "Ashutosh Shukla & Sakshi Mishra", pages: "60-69", pdf: "/Pdfs/Papers9/7.pdf" },
            { id: 165, title: "Research Paper 8", author: "Lipika Sharma", pages: "70-85", pdf: "/Pdfs/Papers9/8.pdf" },
            { id: 166, title: "Research Paper 9", author: "Alvin Antony", pages: "86-98", pdf: "/Pdfs/Papers9/9.pdf" },
            { id: 167, title: "Research Paper 10", author: "Sumit Agarwala & Shilpy", pages: "99-110", pdf: "/Pdfs/Papers9/10.pdf" },
            { id: 168, title: "Research Paper 11", author: "Anshul Pande", pages: "111-121", pdf: "/Pdfs/Papers9/11.pdf" },
            { id: 169, title: "Research Paper 12", author: "Prabhat Dixit", pages: "122-145", pdf: "/Pdfs/Papers9/12.pdf" },
          ]
        },
        {
          id: 11,
          number: 3,
          period: "JUL-SEP",
          year: 2017,
          pdf: "/Pdfs/LR_(3)_2017.pdf",
          papers: [
            { id: 170, title: "Research Paper 1", author: "Prof. R. K. Singh & Bhanu Pratap", pages: "1-6", pdf: "/Pdfs/Papers10/1.pdf" },
            { id: 171, title: "Research Paper 2", author: "Dr. Ashutosh Hajela", pages: "7-15", pdf: "/Pdfs/Papers10/2.pdf" },
            { id: 172, title: "Research Paper 3", author: "Dr. Mazoor Ahmad Mansoori ", pages: "16-24", pdf: "/Pdfs/Papers10/3.pdf" },
            { id: 173, title: "Research Paper 4", author: "Dr. Meena Ketan Sahu ", pages: "25-37", pdf: "/Pdfs/Papers10/4.pdf" },
            { id: 174, title: "Research Paper 5", author: "Dr. Shefali Yadav & Pooja Kaushik", pages: "38-46", pdf: "/Pdfs/Papers10/5.pdf" },
            { id: 175, title: "Research Paper 6", author: "Priti Bhasker", pages: "47-59", pdf: "/Pdfs/Papers10/6.pdf" },
            { id: 176, title: "Research Paper 7", author: "Mukesh Shukla", pages: "60-69", pdf: "/Pdfs/Papers10/7.pdf" },
            { id: 177, title: "Research Paper 8", author: "Drishti Saxena", pages: "70-85", pdf: "/Pdfs/Papers10/8.pdf" },
            { id: 178, title: "Research Paper 9", author: "Meenakshi Awasthi & Aishwarya Pandey", pages: "86-98", pdf: "/Pdfs/Papers10/9.pdf" },
            { id: 179, title: "Research Paper 10", author: "Khaled Abdalhadi A. Hamad & Y.P. R. Subbaah", pages: "99-110", pdf: "/Pdfs/Papers10/10.pdf" },
            { id: 180, title: "Research Paper 11", author: "Khaled Abdalhadi A. Hamad", pages: "111-121", pdf: "/Pdfs/Papers10/11.pdf" },
            { id: 181, title: "Research Paper 12", author: "Diksha Dwivedi & Saumya Singhal", pages: "122-145", pdf: "/Pdfs/Papers10/12.pdf" },
            { id: 182, title: "Research Paper 12", author: "Dr. Manish Yadav & Dr. Himanshu Pandey", pages: "122-145", pdf: "/Pdfs/Papers10/12.pdf" },
          ]
        },
        {
          id: 12,
          number: 4,
          period: "OCT-DEC",
          year: 2017,
          pdf: "/Pdfs/LR_(4)_2017.pdf",
          papers: [
            { id: 183, title: "Research Paper 1", author: "Dr. Rashmi Khorana Nagpal", pages: "1-6", pdf: "/Pdfs/Papers11/1.pdf" },
            { id: 184, title: "Research Paper 2", author: "Dr. Ritu Agarwal ", pages: "7-15", pdf: "/Pdfs/Papers11/2.pdf" },
            { id: 185, title: "Research Paper 3", author: "Dr. Meena Ketan Sahu", pages: "16-24", pdf: "/Pdfs/Papers11/3.pdf" },
            { id: 186, title: "Research Paper 4", author: "Dr. Rashmi Khorana Nagpal ", pages: "25-37", pdf: "/Pdfs/Papers11/4.pdf" },
            { id: 187, title: "Research Paper 5", author: "Mrs. Rekha Thakur", pages: "38-46", pdf: "/Pdfs/Papers11/5.pdf" },
            { id: 188, title: "Research Paper 6", author: "Shailesh Mishra", pages: "47-59", pdf: "/Pdfs/Papers11/6.pdf" },
            { id: 189, title: "Research Paper 7", author: "P. Satheesh", pages: "60-69", pdf: "/Pdfs/Papers11/7.pdf" },
            { id: 190, title: "Research Paper 8", author: "Manish Kumar Kushwaha", pages: "70-85", pdf: "/Pdfs/Papers11/8.pdf" },
            { id: 191, title: "Research Paper 9", author: "Dr. Rohit P. Shabran & Axita Srivastava", pages: "86-98", pdf: "/Pdfs/Papers11/9.pdf" },
            { id: 192, title: "Research Paper 10", author: "Khaled Abdalhadi A. Hamad", pages: "99-110", pdf: "/Pdfs/Papers11/10.pdf" },
            { id: 193, title: "Research Paper 11", author: "Shameena Bano", pages: "111-121", pdf: "/Pdfs/Papers11/11.pdf" },
            { id: 194, title: "Research Paper 12", author: "Diksha Dwivedi & Jahnavi Singh", pages: "122-145", pdf: "/Pdfs/Papers11/12.pdf" },
            { id: 195, title: "Research Paper 12", author: "Dr. Shefali Yadav & Pooja Kaushik", pages: "122-145", pdf: "/Pdfs/Papers11/13.pdf" },
            { id: 196, title: "Research Paper 12", author: "Ritika Juneja", pages: "122-145", pdf: "/Pdfs/Papers11/14.pdf" },
            { id: 197, title: "Research Paper 12", author: "Tanmoy Roy", pages: "122-145", pdf: "/Pdfs/Papers11/15.pdf" },
            { id: 198, title: "Research Paper 12", author: "Shilpa Rao Rastogi", pages: "122-145", pdf: "/Pdfs/Papers11/16.pdf" },
            { id: 199, title: "Research Paper 12", author: "Apeksha Chauhan", pages: "122-145", pdf: "/Pdfs/Papers11/17.pdf" },
            { id: 200, title: "Research Paper 12", author: "Esmahan F. Alakab Khaniefr", pages: "122-145", pdf: "/Pdfs/Papers11/18.pdf" },
            { id: 201, title: "Research Paper 12", author: "Ridhima Verma & Yuvraaj Paul", pages: "122-145", pdf: "/Pdfs/Papers11/19.pdf" },
            { id: 202, title: "Research Paper 12", author: "Aishwarya Pandey", pages: "122-145", pdf: "/Pdfs/Papers11/20.pdf" },
            { id: 203, title: "Research Paper 12", author: "Gaurav Singh", pages: "122-145", pdf: "/Pdfs/Papers11/21.pdf" },
            { id: 204, title: "Research Paper 12", author: "Shreya Mehta", pages: "122-145", pdf: "/Pdfs/Papers11/22.pdf" },



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
            { id: 205, title: "Research Paper 1", author: "Dr. Ritu Agarwal", pages: "1-6", pdf: "/Pdfs/Papers13/1.pdf" },
            { id: 206, title: "Research Paper 2", author: "Preeti Singh ", pages: "7-15", pdf: "/Pdfs/Papers13/2.pdf" },
            { id: 207, title: "Research Paper 3", author: "Kanika Sharma", pages: "16-24", pdf: "/Pdfs/Papers13/3.pdf" },
            { id: 208, title: "Research Paper 4", author: "Dr. Pawandeep Kaur", pages: "25-37", pdf: "/Pdfs/Papers13/4.pdf" },
            { id: 209, title: "Research Paper 5", author: "Dr. Ashutosh Hajela", pages: "38-46", pdf: "/Pdfs/Papers13/5.pdf" },
            { id: 210, title: "Research Paper 6", author: "Priyanka Bhowmik", pages: "47-59", pdf: "/Pdfs/Papers13/6.pdf" },
            { id: 211, title: "Research Paper 7", author: "Anjum Hassan", pages: "60-69", pdf: "/Pdfs/Papers13/7.pdf" },
            { id: 212, title: "Research Paper 8", author: "Prof. (Dr.) Akil Saiyed", pages: "70-85", pdf: "/Pdfs/Papers13/8.pdf" },
            { id: 213, title: "Research Paper 9", author: "Manasvi Tyagi & Prof (Dr.) Shashikant Hajare", pages: "86-98", pdf: "/Pdfs/Papers13/9.pdf" },
            { id: 214, title: "Research Paper 10", author: "Harshit Singh Bhatia", pages: "99-110", pdf: "/Pdfs/Papers13/10.pdf" },
            { id: 215, title: "Research Paper 11", author: "N. Edwin", pages: "111-121", pdf: "/Pdfs/Papers13/11.pdf" },
            { id: 216, title: "Research Paper 12", author: "Diksha Dwivedi & Aarshi Chatterjee", pages: "122-145", pdf: "/Pdfs/Papers13/12.pdf" },
            { id: 217, title: "Research Paper 12", author: "Dr. Nabamita Paul Ray", pages: "122-145", pdf: "/Pdfs/Papers13/13.pdf" },
            { id: 218, title: "Research Paper 12", author: "Sonam Jain Bajpai", pages: "122-145", pdf: "/Pdfs/Papers13/14.pdf" },
            { id: 219, title: "Research Paper 12", author: "Shalbha Singh", pages: "122-145", pdf: "/Pdfs/Papers13/15.pdf" },
            { id: 220, title: "Research Paper 12", author: "Jahnavi Singh", pages: "122-145", pdf: "/Pdfs/Papers13/16.pdf" },
            { id: 221, title: "Research Paper 12", author: "Anish Ghosh", pages: "122-145", pdf: "/Pdfs/Papers13/17.pdf" },
            { id: 222, title: "Research Paper 12", author: "Neha Goswami", pages: "122-145", pdf: "/Pdfs/Papers13/18.pdf" },
            { id: 223, title: "Research Paper 12", author: "Ridhima Verma", pages: "122-145", pdf: "/Pdfs/Papers13/19.pdf" },
            { id: 224, title: "Research Paper 12", author: "Mayura Sabne-Botungale", pages: "122-145", pdf: "/Pdfs/Papers13/20.pdf" },
            { id: 225, title: "Research Paper 12", author: "Sujeet Kumar", pages: "122-145", pdf: "/Pdfs/Papers13/21.pdf" },
          ]
        },
        {
          id: 14,
          number: 2,
          period: "APR-JUN",
          year: 2018,
          pdf: "/Pdfs/LR_(2)_2018.pdf",
          papers: [
            { id: 226, title: "Research Paper 1", author: "Animesh Kumar & Mayuri Gupta", pages: "1-6", pdf: "/Pdfs/Papers27/1.pdf" },
            { id: 227, title: "Research Paper 2", author: "Ritu Agarwal & Sakshi Yadav", pages: "7-15", pdf: "/Pdfs/Papers27/2.pdf" },
            { id: 228, title: "Research Paper 3", author: "Aparajita Singh", pages: "16-24", pdf: "/Pdfs/Papers27/3.pdf" },
            { id: 229, title: "Research Paper 4", author: "Kashyop Bhattacharjee & Mrigankalekha Paul", pages: "25-37", pdf: "/Pdfs/Papers27/4.pdf" },
            { id: 230, title: "Research Paper 5", author: "Preeti Singh", pages: "38-46", pdf: "/Pdfs/Papers27/5.pdf" },
            { id: 231, title: "Research Paper 6", author: "Dr. Meena Ketan Sahu", pages: "47-59", pdf: "/Pdfs/Papers27/6.pdf" },
            { id: 232, title: "Research Paper 7", author: "Karabi Dihingia", pages: "60-69", pdf: "/Pdfs/Papers27/7.pdf" },
            { id: 233, title: "Research Paper 8", author: "Ankit Srivastava & Divyansha Kumar", pages: "70-85", pdf: "/Pdfs/Papers27/8.pdf" },
            { id: 234, title: "Research Paper 9", author: "Jyoti Yadav", pages: "86-98", pdf: "/Pdfs/Papers27/9.pdf" },
            { id: 235, title: "Research Paper 10", author: "Ashutosh Shukla", pages: "99-110", pdf: "/Pdfs/Papers27/10.pdf" },
            { id: 236, title: "Research Paper 11", author: "Ramya Eswaran", pages: "111-121", pdf: "/Pdfs/Papers27/11.pdf" },
            { id: 237, title: "Research Paper 12", author: "Mayura Manohar Sabne", pages: "122-145", pdf: "/Pdfs/Papers27/12.pdf" },
            { id: 238, title: "Research Paper 13", author: "Priyanka Bhowmik", pages: "122-145", pdf: "/Pdfs/Papers27/13.pdf" },
            { id: 239, title: "Research Paper 14", author: "Priya Kala", pages: "122-145", pdf: "/Pdfs/Papers27/14.pdf" },
            { id: 240, title: "Research Paper 15", author: "Diksha Dwivedi & Sonali Khanna", pages: "122-145", pdf: "/Pdfs/Papers27/15.pdf" },
            { id: 241, title: "Research Paper 16", author: "Pooja Ghosh", pages: "122-145", pdf: "/Pdfs/Papers27/16.pdf" },
            { id: 242, title: "Research Paper 17", author: "Sohini Mahapatra", pages: "122-145", pdf: "/Pdfs/Papers27/17.pdf" },
            { id: 243, title: "Research Paper 18", author: "Shusneha Sarkar", pages: "122-145", pdf: "/Pdfs/Papers27/18.pdf" },
            { id: 244, title: "Research Paper 19", author: "Abhivardhan", pages: "122-145", pdf: "/Pdfs/Papers27/19.pdf" },
            { id: 245, title: "Research Paper 20", author: "Lakshay Bansal", pages: "122-145", pdf: "/Pdfs/Papers27/20.pdf" },
            { id: 246, title: "Research Paper 21", author: "Pranav Kumar Kaushal", pages: "122-145", pdf: "/Pdfs/Papers27/21.pdf" },
            { id: 247, title: "Research Paper 22", author: "Shivesh Raghuvanshi & Divyangi Singh", pages: "122-145", pdf: "/Pdfs/Papers27/22.pdf" },
          ]
        },
        {
          id: 15,
          number: 3,
          period: "JUL-SEP",
          year: 2018,
          pdf: "/Pdfs/LR_(3)_2018.pdf",
          papers: [
            { id: 248, title: "Research Paper 1", author: "K.M. Chetana Rukshani Karunatilaka", pages: "1-6", pdf: "/Pdfs/Papers14/1.pdf" },
            { id: 249, title: "Research Paper 2", author: "Md. O. Faruque & Sk. Md. Habibullah ", pages: "7-15", pdf: "/Pdfs/Papers14/2.pdf" },
            { id: 250, title: "Research Paper 3", author: "Jennifer Inez Martina Ehrenström", pages: "16-24", pdf: "/Pdfs/Papers14/3.pdf" },
            { id: 251, title: "Research Paper 4", author: "Dr. P.R.L. Rajavenkatesan", pages: "25-37", pdf: "/Pdfs/Papers14/4.pdf" },
            { id: 252, title: "Research Paper 5", author: "Dr. Shabnam Mahlawat", pages: "38-46", pdf: "/Pdfs/Papers14/5.pdf" },
            { id: 253, title: "Research Paper 6", author: "Kiran Singh & Indra Kumar Singh", pages: "47-59", pdf: "/Pdfs/Papers14/6.pdf" },
            { id: 254, title: "Research Paper 7", author: "Dr. E. Prema", pages: "60-69", pdf: "/Pdfs/Papers14/7.pdf" },
            { id: 255, title: "Research Paper 8", author: "Aakriti Shahi", pages: "70-85", pdf: "/Pdfs/Papers14/8.pdf" },
            { id: 256, title: "Research Paper 9", author: "Shachi Singh", pages: "86-98", pdf: "/Pdfs/Papers14/9.pdf" },
            { id: 257, title: "Research Paper 10", author: "Dr. Shampa Dev & Mitraneshaa B. S", pages: "99-110", pdf: "/Pdfs/Papers14/10.pdf" },
            { id: 258, title: "Research Paper 11", author: "Teena", pages: "111-121", pdf: "/Pdfs/Papers14/11.pdf" },
            { id: 259, title: "Research Paper 12", author: "Pritam Mirdha & Yash Taleja", pages: "122-145", pdf: "/Pdfs/Papers14/12.pdf" },
            { id: 260, title: "Research Paper 13", author: "Swati Singh Parmar", pages: "122-145", pdf: "/Pdfs/Papers14/13.pdf" },
            { id: 261, title: "Research Paper 14", author: "Manika Baliyan", pages: "122-145", pdf: "/Pdfs/Papers14/14.pdf" },
            { id: 262, title: "Research Paper 15", author: "Safia Tarannum Quraishi", pages: "122-145", pdf: "/Pdfs/Papers14/15.pdf" },
            { id: 263, title: "Research Paper 16", author: "Sonali Khanna & Diksha Dwivedi", pages: "122-145", pdf: "/Pdfs/Papers14/16.pdf" },
          ]
        },
        {
          id: 16,
          number: 4,
          period: "OCT-DEC",
          year: 2018,
          pdf: "/Pdfs/LR_(4)_2018.pdf",
          papers: [
            { id: 264, title: "Research Paper 1", author: "Maj. Gen. P. K. Sharma (Retd.) & Govind Kumar Saxena", pages: "1-6", pdf: "/Pdfs/Papers15/1.pdf" },
            { id: 265, title: "Research Paper 2", author: "Ashish Bansal & Sharmistha Sharma", pages: "7-15", pdf: "/Pdfs/Papers15/2.pdf" },
            { id: 266, title: "Research Paper 3", author: "Kashish Soni & Priyanka Meena ", pages: "16-24", pdf: "/Pdfs/Papers15/3.pdf" },
            { id: 267, title: "Research Paper 4", author: "Anumeet Kaur", pages: "25-37", pdf: "/Pdfs/Papers15/4.pdf" },
            { id: 268, title: "Research Paper 5", author: "Rachi Singh & Apoorva Singh", pages: "38-46", pdf: "/Pdfs/Papers15/5.pdf" },
            { id: 269, title: "Research Paper 6", author: "Nabin Bhandari", pages: "47-59", pdf: "/Pdfs/Papers15/6.pdf" },
            { id: 270, title: "Research Paper 7", author: "Prem Singh Bisht", pages: "60-69", pdf: "/Pdfs/Papers15/7.pdf" },
            { id: 271, title: "Research Paper 8", author: "Jelis Subhan", pages: "70-85", pdf: "/Pdfs/Papers15/8.pdf" },
            { id: 272, title: "Research Paper 9", author: "Prashant Rahangdale", pages: "86-98", pdf: "/Pdfs/Papers15/9.pdf" },
            { id: 273, title: "Research Paper 10", author: "Safia Tarannum Quraishi & Swapnil Pattanayak", pages: "99-110", pdf: "/Pdfs/Papers15/10.pdf" },
            { id: 274, title: "Research Paper 11", author: "Shanya Agarwal & Shweta Singh", pages: "111-121", pdf: "/Pdfs/Papers15/11.pdf" },
            { id: 275, title: "Research Paper 12", author: "Dr. Ajay Bhatt & Apoorv Bhardwaj", pages: "122-145", pdf: "/Pdfs/Papers15/12.pdf" },
            { id: 276, title: "Research Paper 13", author: "Ankit Shrivastava", pages: "122-145", pdf: "/Pdfs/Papers15/13.pdf" },
            { id: 277, title: "Research Paper 14", author: "Dr. Jaishree Umale", pages: "122-145", pdf: "/Pdfs/Papers15/14.pdf" },
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
            { id: 278, title: "Research Paper 1", author: "Deepika Dwivedi & Dr. Vivek Kumar", pages: "1-6", pdf: "/Pdfs/Papers16/1.pdf" },
            { id: 279, title: "Research Paper 2", author: "Lakshya Bansal", pages: "7-15", pdf: "/Pdfs/Papers16/2.pdf" },
            { id: 280, title: "Research Paper 3", author: "Pranav Kumar Kaushal", pages: "16-24", pdf: "/Pdfs/Papers16/3.pdf" },
            { id: 281, title: "Research Paper 4", author: "Pragati Tripathi", pages: "25-37", pdf: "/Pdfs/Papers16/4.pdf" },
            { id: 282, title: "Research Paper 5", author: "Leena Latwal", pages: "38-46", pdf: "/Pdfs/Papers16/5.pdf" },
            { id: 283, title: "Research Paper 6", author: "Abhivardhan", pages: "47-59", pdf: "/Pdfs/Papers16/6.pdf" },
          ]
        },
        {
          id: 18,
          number: 2,
          period: "APR-JUN",
          year: 2019,
          pdf: "/Pdfs/LR_2019.pdf",
          papers: [
            { id: 278, title: "Research Paper 1", author: "Deepika Dwivedi & Dr. Vivek Kumar", pages: "1-6", pdf: "/Pdfs/Papers16/1.pdf" },
            { id: 279, title: "Research Paper 2", author: "Lakshya Bansal", pages: "7-15", pdf: "/Pdfs/Papers16/2.pdf" },
            { id: 280, title: "Research Paper 3", author: "Pranav Kumar Kaushal", pages: "16-24", pdf: "/Pdfs/Papers16/3.pdf" },
            { id: 281, title: "Research Paper 4", author: "Pragati Tripathi", pages: "25-37", pdf: "/Pdfs/Papers16/4.pdf" },
            { id: 282, title: "Research Paper 5", author: "Leena Latwal", pages: "38-46", pdf: "/Pdfs/Papers16/5.pdf" },
            { id: 283, title: "Research Paper 6", author: "Abhivardhan", pages: "47-59", pdf: "/Pdfs/Papers16/6.pdf" },
          ]
        },
        {
          id: 19,
          number: 3,
          period: "JUL-SEP",
          year: 2019,
          pdf: "/Pdfs/LR_2019.pdf",
          papers: [
            { id: 278, title: "Research Paper 1", author: "Deepika Dwivedi & Dr. Vivek Kumar", pages: "1-6", pdf: "/Pdfs/Papers16/1.pdf" },
            { id: 279, title: "Research Paper 2", author: "Lakshya Bansal", pages: "7-15", pdf: "/Pdfs/Papers16/2.pdf" },
            { id: 280, title: "Research Paper 3", author: "Pranav Kumar Kaushal", pages: "16-24", pdf: "/Pdfs/Papers16/3.pdf" },
            { id: 281, title: "Research Paper 4", author: "Pragati Tripathi", pages: "25-37", pdf: "/Pdfs/Papers16/4.pdf" },
            { id: 282, title: "Research Paper 5", author: "Leena Latwal", pages: "38-46", pdf: "/Pdfs/Papers16/5.pdf" },
            { id: 283, title: "Research Paper 6", author: "Abhivardhan", pages: "47-59", pdf: "/Pdfs/Papers16/6.pdf" },
          ]
        },
        {
          id: 20,
          number: 4,
          period: "OCT-DEC",
          year: 2019,
          pdf: "/Pdfs/LR_2019.pdf",
          papers: [
            { id: 278, title: "Research Paper 1", author: "Deepika Dwivedi & Dr. Vivek Kumar", pages: "1-6", pdf: "/Pdfs/Papers16/1.pdf" },
            { id: 279, title: "Research Paper 2", author: "Lakshya Bansal", pages: "7-15", pdf: "/Pdfs/Papers16/2.pdf" },
            { id: 280, title: "Research Paper 3", author: "Pranav Kumar Kaushal", pages: "16-24", pdf: "/Pdfs/Papers16/3.pdf" },
            { id: 281, title: "Research Paper 4", author: "Pragati Tripathi", pages: "25-37", pdf: "/Pdfs/Papers16/4.pdf" },
            { id: 282, title: "Research Paper 5", author: "Leena Latwal", pages: "38-46", pdf: "/Pdfs/Papers16/5.pdf" },
            { id: 283, title: "Research Paper 6", author: "Abhivardhan", pages: "47-59", pdf: "/Pdfs/Papers16/6.pdf" },
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
            { id: 284, title: "Research Paper 1", author: "Mr. Abdulrahman Abdo Shawqi Subih & Dr.Visitsak Nueangnong", pages: "1-6", pdf: "/Pdfs/Papers14/1.pdf" },
            { id: 285, title: "Research Paper 2", author: "Dr. Nighat Rasheed", pages: "7-15", pdf: "/Pdfs/Papers14/2.pdf" },
            { id: 286, title: "Research Paper 3", author: "Dr. A. Vijayalalshmi", pages: "16-24", pdf: "/Pdfs/Papers14/3.pdf" },
            { id: 287, title: "Research Paper 4", author: "Dr. Anu Prasannan", pages: "25-37", pdf: "/Pdfs/Papers14/4.pdf" },
            { id: 288, title: "Research Paper 5", author: "Dr. Santosh Kumar Tripathi", pages: "38-46", pdf: "/Pdfs/Papers14/5.pdf" },
            { id: 289, title: "Research Paper 6", author: "Dr. Chandni Sengupta", pages: "47-59", pdf: "/Pdfs/Papers14/6.pdf" },
            { id: 290, title: "Research Paper 7", author: "Dr. Jaishree Umale", pages: "60-69", pdf: "/Pdfs/Papers14/7.pdf" },
            { id: 291, title: "Research Paper 8", author: "Dr. M. Kalimullah & Aqsa Sikandar Fatima", pages: "70-85", pdf: "/Pdfs/Papers14/8.pdf" },
            { id: 292, title: "Research Paper 9", author: "Dr. Gurmeet Kaur & Manjula Raghav", pages: "86-98", pdf: "/Pdfs/Papers14/9.pdf" },
            { id: 293, title: "Research Paper 10", author: "Sugato Mukherjee", pages: "99-110", pdf: "/Pdfs/Papers14/10.pdf" },
            { id: 294, title: "Research Paper 11", author: "Dr. Shiv Raman", pages: "111-121", pdf: "/Pdfs/Papers14/11.pdf" },
            { id: 295, title: "Research Paper 12", author: "Dr. M. Kalimullah & Afreen Rizvi", pages: "122-145", pdf: "/Pdfs/Papers14/12.pdf" },
            { id: 296, title: "Research Paper 13", author: "Dr. Vijay Pal Singh", pages: "122-145", pdf: "/Pdfs/Papers14/13.pdf" },
            { id: 297, title: "Research Paper 14", author: "Rishabh Jain & Sanjum Bedi", pages: "122-145", pdf: "/Pdfs/Papers14/14.pdf" },
            { id: 298, title: "Research Paper 15", author: "Nitin Agarwal & Prof. (Dr.) Ajay Bhatt", pages: "122-145", pdf: "/Pdfs/Papers14/15.pdf" },
            { id: 299, title: "Research Paper 16", author: "Prashant Rahangdale", pages: "122-145", pdf: "/Pdfs/Papers14/16.pdf" },
            { id: 300, title: "Research Paper 17", author: "Pranjal Sharma & Hemendra Singh Sever", pages: "122-145", pdf: "/Pdfs/Papers14/17.pdf" },
            { id: 301, title: "Research Paper 18", author: "Monica Yadav & Aalamjit Singh Thethi", pages: "122-145", pdf: "/Pdfs/Papers14/18.pdf" },
            { id: 302, title: "Research Paper 19", author: "Sunidhi Hegde", pages: "122-145", pdf: "/Pdfs/Papers14/19.pdf" },
            { id: 303, title: "Research Paper 20", author: "Papiya Golder", pages: "122-145", pdf: "/Pdfs/Papers14/20.pdf" },
            { id: 304, title: "Research Paper 21", author: "Prof. (Dr.) Komal Audichya", pages: "122-145", pdf: "/Pdfs/Papers14/21.pdf" },
            { id: 305, title: "Research Paper 22", author: "Neha Mishra", pages: "122-145", pdf: "/Pdfs/Papers14/22.pdf" },
            { id: 306, title: "Research Paper 23", author: "Atul Jain", pages: "122-145", pdf: "/Pdfs/Papers14/23.pdf" },
            { id: 307, title: "Research Paper 24", author: "Kapil Bissa & Kamayani Tripathi", pages: "122-145", pdf: "/Pdfs/Papers14/24.pdf" },
            { id: 308, title: "Research Paper 25", author: "Sanjay Pandey", pages: "122-145", pdf: "/Pdfs/Papers14/25.pdf" },
            { id: 309, title: "Research Paper 26", author: "Anusree Telfy.C", pages: "122-145", pdf: "/Pdfs/Papers14/26.pdf" },
            { id: 310, title: "Research Paper 27", author: "Asha Meena", pages: "122-145", pdf: "/Pdfs/Papers14/27.pdf" },
            { id: 311, title: "Research Paper 28", author: "Rachi Singh", pages: "122-145", pdf: "/Pdfs/Papers14/28.pdf" },
            { id: 312, title: "Research Paper 29", author: "Govind Kumar Saxena", pages: "122-145", pdf: "/Pdfs/Papers14/29.pdf" },
            { id: 313, title: "Research Paper 30", author: "Dr. Deepak Miglani & Divyansh Mahajan", pages: "122-145", pdf: "/Pdfs/Papers14/30.pdf" },
            { id: 314, title: "Research Paper 31", author: "Pranshul Pathak", pages: "122-145", pdf: "/Pdfs/Papers14/31.pdf" },
            { id: 315, title: "Research Paper 32", author: "Rachi Singh", pages: "122-145", pdf: "/Pdfs/Papers14/21.pdf" },
          ]
        },
        {
          id: 22,
          number: 2,
          period: "APR-JUN",
          year: 2020,
          pdf: "/Pdfs/LR_(2)_2020.pdf",
          papers: [
            { id: 316, title: "Research Paper 1", author: "Kaanchi Ahuja", pages: "1-6", pdf: "/Pdfs/Papers18/1.pdf" },
            { id: 317, title: "Research Paper 2", author: "Nandini Modi & Vasundhara Gupta ", pages: "7-15", pdf: "/Pdfs/Papers18/2.pdf" },
            { id: 318, title: "Research Paper 3", author: "Vaishnavi Bansal & Swikruti Nayak", pages: "16-24", pdf: "/Pdfs/Papers18/3.pdf" },
            { id: 319, title: "Research Paper 4", author: "Kavya Budhiraja", pages: "25-37", pdf: "/Pdfs/Papers18/4.pdf" },
            { id: 320, title: "Research Paper 5", author: "Manisha Patawari", pages: "38-46", pdf: "/Pdfs/Papers18/5.pdf" },
            { id: 321, title: "Research Paper 6", author: "Ozasvi Amol & Fariya Sharaf", pages: "47-59", pdf: "/Pdfs/Papers18/6.pdf" },
            { id: 322, title: "Research Paper 7", author: "Priyanka", pages: "38-46", pdf: "/Pdfs/Papers18/7.pdf" },
            { id: 323, title: "Research Paper 8", author: "Amita Namdeo & Ananya Saxena", pages: "47-59", pdf: "/Pdfs/Papers18/8.pdf" },
          ]
        },
        {
          id: 23,
          number: 3,
          period: "JUL-SEP",
          year: 2020,
          pdf: "/Pdfs/LR_(3)_2020.pdf",
          papers: [
            { id: 324, title: "Research Paper 1", author: "Nitumoni Gogoi & Bhupali Saikia", pages: "1-6", pdf: "/Pdfs/Papers19/1.pdf" },
            { id: 325, title: "Research Paper 2", author: "Rima Ghosh & Dr. Shova Devi  ", pages: "7-15", pdf: "/Pdfs/Papers19/2.pdf" },
            { id: 326, title: "Research Paper 3", author: "Samiksha Mathur ", pages: "16-24", pdf: "/Pdfs/Papers19/3.pdf" },
            { id: 327, title: "Research Paper 4", author: "Misha Jain", pages: "25-37", pdf: "/Pdfs/Papers19/4.pdf" },
            { id: 328, title: "Research Paper 5", author: "Palak Agrawal", pages: "38-46", pdf: "/Pdfs/Papers19/5.pdf" },
            { id: 329, title: "Research Paper 6", author: "Priyanka", pages: "47-59", pdf: "/Pdfs/Papers19/6.pdf" },
          ]
        },
        {
          id: 24,
          number: 4,
          period: "OCT-DEC",
          year: 2020,
          pdf: "/Pdfs/LR_(4)_2020.pdf",
          papers: [
            { id: 330, title: "Research Paper 1", author: "Dr. Jasdeep Kaur", pages: "1-6", pdf: "/Pdfs/Papers20/1.pdf" },
            { id: 331, title: "Research Paper 2", author: "Snigdha Gupta & Mayuri Gupta", pages: "7-15", pdf: "/Pdfs/Papers20/2.pdf" },
            { id: 332, title: "Research Paper 3", author: "Akshay Bhargava ", pages: "16-24", pdf: "/Pdfs/Papers20/3.pdf" },
            { id: 333, title: "Research Paper 4", author: "Vinal Sharma", pages: "25-37", pdf: "/Pdfs/Papers20/4.pdf" },
            { id: 334, title: "Research Paper 5", author: "Palak Agrawal", pages: "38-46", pdf: "/Pdfs/Papers20/5.pdf" },
            { id: 345, title: "Research Paper 6", author: "Kanchan Thakur & Prof. Dr. N. L. Gurjar", pages: "47-59", pdf: "/Pdfs/Papers20/6.pdf" },
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
          pdf: "/Pdfs/LR_(4)_2021.pdf",
          papers: [
            { id: 346, title: "Research Paper 1", author: "Dr. Y. Papa Rao", pages: "1-6", pdf: "/Pdfs/Papers21/1.pdf" },
            { id: 347, title: "Research Paper 2", author: "Naman Kumar ", pages: "7-15", pdf: "/Pdfs/Papers21/2.pdf" },
            { id: 348, title: "Research Paper 3", author: "Shalanki Prasad & Suraj Singh Pundir", pages: "16-24", pdf: "/Pdfs/Papers21/3.pdf" },
            { id: 349, title: "Research Paper 4", author: "Reena Dangal & Durjay Kumar Deb", pages: "25-37", pdf: "/Pdfs/Papers21/4.pdf" },
          ]
        },
        {
          id: 26,
          number: 2,
          period: "APR-JUN",
          year: 2021,
          pdf: "/Pdfs/LR_(4)_2021.pdf",
          papers: [
            { id: 350, title: "Research Paper 1", author: "Kumar Kunal", pages: "1-6", pdf: "/Pdfs/Papers22/1.pdf" },
            { id: 351, title: "Research Paper 2", author: "Indibar Saraswati Phukan", pages: "7-15", pdf: "/Pdfs/Papers22/2.pdf" },
            { id: 352, title: "Research Paper 3", author: "Shipra Mishra", pages: "16-24", pdf: "/Pdfs/Papers22/3.pdf" },
            { id: 353, title: "Research Paper 4", author: "Shiva Joshi", pages: "25-37", pdf: "/Pdfs/Papers22/4.pdf" },
            { id: 354, title: "Research Paper 5", author: "Dr. Satish Chandra Upadhyay", pages: "1-6", pdf: "/Pdfs/Papers22/5.pdf" },
            { id: 355, title: "Research Paper 6", author: "Divyansh", pages: "7-15", pdf: "/Pdfs/Papers22/6.pdf" },
            { id: 356, title: "Research Paper 7", author: "Paritosh Prakash", pages: "16-24", pdf: "/Pdfs/Papers22/7.pdf" },
            { id: 357, title: "Research Paper 8", author: "Siddharth Anand", pages: "25-37", pdf: "/Pdfs/Papers22/8.pdf" },
          ]
        },
        {
          id: 27,
          number: 3,
          period: "JUL-SEP",
          year: 2021,
          pdf: "/Pdfs/LR_(4)_2021.pdf",
          papers: [
            { id: 358, title: "Research Paper 1", author: "M. Pranov Vishnu Arjun & Mrs. Chameli ", pages: "1-6", pdf: "/Pdfs/Papers23/1.pdf" },
            { id: 359, title: "Research Paper 2", author: "Priyanka", pages: "7-15", pdf: "/Pdfs/Papers23/2.pdf" },
            { id: 360, title: "Research Paper 3", author: "Ashutosh Shukla", pages: "16-24", pdf: "/Pdfs/Papers23/3.pdf" },
            { id: 361, title: "Research Paper 4", author: "Kanchan Thakur & Dr. N. L. Gurger", pages: "25-37", pdf: "/Pdfs/Papers23/4.pdf" },
            { id: 362, title: "Research Paper 5", author: "Snigdha Gupta", pages: "1-6", pdf: "/Pdfs/Papers23/5.pdf" },
          ]
        },
        {
          id: 28,
          number: 4,
          period: "OCT-DEC",
          year: 2021,
          pdf: "/Pdfs/LR_(4)_2021.pdf",
          papers: [
            { id: 363, title: "Research Paper 1", author: "Tanvin Anand & Nidhi Kaushik ", pages: "1-6", pdf: "/Pdfs/Papers24/1.pdf" },
            { id: 364, title: "Research Paper 2", author: "Ms. Muskaan Pandeya", pages: "7-15", pdf: "/Pdfs/Papers24/2.pdf" },
            { id: 365, title: "Research Paper 3", author: "Ms. Chhavi Chauhan", pages: "16-24", pdf: "/Pdfs/Papers24/3.pdf" },
            { id: 366, title: "Research Paper 4", author: "Ms. Aswathi Sudheer", pages: "25-37", pdf: "/Pdfs/Papers24/4.pdf" },
            { id: 367, title: "Research Paper 5", author: "Mr. Mayank Mishra", pages: "1-6", pdf: "/Pdfs/Papers24/5.pdf" },
            { id: 368, title: "Research Paper 6", author: "Mr. Dharam Vashisht", pages: "7-15", pdf: "/Pdfs/Papers24/6.pdf" },
            { id: 369, title: "Research Paper 7", author: "Dr. Vinay Sharma", pages: "16-24", pdf: "/Pdfs/Papers24/7.pdf" },
            { id: 370, title: "Research Paper 8", author: "Dr. Narender Kumar", pages: "25-37", pdf: "/Pdfs/Papers24/8.pdf" },
            { id: 371, title: "Research Paper 9", author: "Dr. AK Vashishta", pages: "1-6", pdf: "/Pdfs/Papers24/9.pdf" },
            { id: 372, title: "Research Paper 10", author: "Dr. Santosh K Tripathi", pages: "7-15", pdf: "/Pdfs/Papers24/10.pdf" },
            { id: 373, title: "Research Paper 11", author: "Mr. Sanjay Kumar Pandey", pages: "16-24", pdf: "/Pdfs/Papers24/11.pdf" },
            { id: 374, title: "Research Paper 12", author: "Ms Sanjum Bedi", pages: "25-37", pdf: "/Pdfs/Papers24/12.pdf" },
            { id: 375, title: "Research Paper 13", author: "Mr. Zeeshan Hussain Hashmi", pages: "1-6", pdf: "/Pdfs/Papers24/13.pdf" },
            { id: 376, title: "Research Paper 14", author: "Dr. Vijay Pal Singh & Ms. Asha Meena", pages: "7-15", pdf: "/Pdfs/Papers24/14.pdf" },
            { id: 377, title: "Research Paper 15", author: "Ms. Nidhi Sharma & Dr. Shiv Raman ", pages: "16-24", pdf: "/Pdfs/Papers24/15.pdf" },
            { id: 378, title: "Research Paper 16", author: "Prof. (Dr.) Ajay Kumar Bhatt ", pages: "25-37", pdf: "/Pdfs/Papers24/16.pdf" },
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
            { id: 379, title: "Research Paper 1", author: "Dr. Akhilesh Yadav", pages: "1-6", pdf: "/Pdfs/Papers25/1.pdf" },
            { id: 380, title: "Research Paper 2", author: "Adrija Ghosh", pages: "7-15", pdf: "/Pdfs/Papers25/2.pdf" },
            { id: 381, title: "Research Paper 3", author: "Richa Kaur", pages: "16-24", pdf: "/Pdfs/Papers25/3.pdf" },
            { id: 382, title: "Research Paper 4", author: "Rakesh Kumar Choudhary", pages: "25-37", pdf: "/Pdfs/Papers25/4.pdf" },
            { id: 383, title: "Research Paper 5", author: "Shikha Saharawat", pages: "1-6", pdf: "/Pdfs/Papers25/5.pdf" },
            { id: 384, title: "Research Paper 6", author: "Aryan Sinha", pages: "7-15", pdf: "/Pdfs/Papers25/6.pdf" },
            { id: 385, title: "Research Paper 7", author: "Srishti Sori", pages: "16-24", pdf: "/Pdfs/Papers25/7.pdf" },
            { id: 386, title: "Research Paper 8", author: "Priyanka", pages: "25-37", pdf: "/Pdfs/Papers25/8.pdf" },
            { id: 387, title: "Research Paper 9", author: "Manish Kumar", pages: "1-6", pdf: "/Pdfs/Papers25/9.pdf" },
          ]
        },
        {
          id: 30,
          number: 2,
          period: "APR-JUN",
          year: 2022,
          pdf: "/Pdfs/LR_2022.pdf",
          papers: [
            { id: 379, title: "Research Paper 1", author: "Dr. Akhilesh Yadav", pages: "1-6", pdf: "/Pdfs/Papers25/1.pdf" },
            { id: 380, title: "Research Paper 2", author: "Adrija Ghosh", pages: "7-15", pdf: "/Pdfs/Papers25/2.pdf" },
            { id: 381, title: "Research Paper 3", author: "Richa Kaur", pages: "16-24", pdf: "/Pdfs/Papers25/3.pdf" },
            { id: 382, title: "Research Paper 4", author: "Rakesh Kumar Choudhary", pages: "25-37", pdf: "/Pdfs/Papers25/4.pdf" },
            { id: 383, title: "Research Paper 5", author: "Shikha Saharawat", pages: "1-6", pdf: "/Pdfs/Papers25/5.pdf" },
            { id: 384, title: "Research Paper 6", author: "Aryan Sinha", pages: "7-15", pdf: "/Pdfs/Papers25/6.pdf" },
            { id: 385, title: "Research Paper 7", author: "Srishti Sori", pages: "16-24", pdf: "/Pdfs/Papers25/7.pdf" },
            { id: 386, title: "Research Paper 8", author: "Priyanka", pages: "25-37", pdf: "/Pdfs/Papers25/8.pdf" },
            { id: 387, title: "Research Paper 9", author: "Manish Kumar", pages: "1-6", pdf: "/Pdfs/Papers25/9.pdf" },
          ]
        },
        {
          id: 31,
          number: 3,
          period: "JUL-SEP",
          year: 2022,
          pdf: "/Pdfs/LR_2022.pdf",
          papers: [
            { id: 379, title: "Research Paper 1", author: "Dr. Akhilesh Yadav", pages: "1-6", pdf: "/Pdfs/Papers25/1.pdf" },
            { id: 380, title: "Research Paper 2", author: "Adrija Ghosh", pages: "7-15", pdf: "/Pdfs/Papers25/2.pdf" },
            { id: 381, title: "Research Paper 3", author: "Richa Kaur", pages: "16-24", pdf: "/Pdfs/Papers25/3.pdf" },
            { id: 382, title: "Research Paper 4", author: "Rakesh Kumar Choudhary", pages: "25-37", pdf: "/Pdfs/Papers25/4.pdf" },
            { id: 383, title: "Research Paper 5", author: "Shikha Saharawat", pages: "1-6", pdf: "/Pdfs/Papers25/5.pdf" },
            { id: 384, title: "Research Paper 6", author: "Aryan Sinha", pages: "7-15", pdf: "/Pdfs/Papers25/6.pdf" },
            { id: 385, title: "Research Paper 7", author: "Srishti Sori", pages: "16-24", pdf: "/Pdfs/Papers25/7.pdf" },
            { id: 386, title: "Research Paper 8", author: "Priyanka", pages: "25-37", pdf: "/Pdfs/Papers25/8.pdf" },
            { id: 387, title: "Research Paper 9", author: "Manish Kumar", pages: "1-6", pdf: "/Pdfs/Papers25/9.pdf" },
          ]
        },
        {
          id: 32,
          number: 4,
          period: "OCT-DEC",
          year: 2022,
          pdf: "/Pdfs/LR_2022.pdf",
          papers: [
            { id: 379, title: "Research Paper 1", author: "Dr. Akhilesh Yadav", pages: "1-6", pdf: "/Pdfs/Papers25/1.pdf" },
            { id: 380, title: "Research Paper 2", author: "Adrija Ghosh", pages: "7-15", pdf: "/Pdfs/Papers25/2.pdf" },
            { id: 381, title: "Research Paper 3", author: "Richa Kaur", pages: "16-24", pdf: "/Pdfs/Papers25/3.pdf" },
            { id: 382, title: "Research Paper 4", author: "Rakesh Kumar Choudhary", pages: "25-37", pdf: "/Pdfs/Papers25/4.pdf" },
            { id: 383, title: "Research Paper 5", author: "Shikha Saharawat", pages: "1-6", pdf: "/Pdfs/Papers25/5.pdf" },
            { id: 384, title: "Research Paper 6", author: "Aryan Sinha", pages: "7-15", pdf: "/Pdfs/Papers25/6.pdf" },
            { id: 385, title: "Research Paper 7", author: "Srishti Sori", pages: "16-24", pdf: "/Pdfs/Papers25/7.pdf" },
            { id: 386, title: "Research Paper 8", author: "Priyanka", pages: "25-37", pdf: "/Pdfs/Papers25/8.pdf" },
            { id: 387, title: "Research Paper 9", author: "Manish Kumar", pages: "1-6", pdf: "/Pdfs/Papers25/9.pdf" },
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
            { id: 388, title: "BANK GUARANTEE WITH SPECIAL REFERENCE TO EXCEPTION III OF SECTION 28, INDIAN CONTRACT ACT, 1872", author: "Dr. Y. Papa Rao & Manish Kumar Mahto", pages: "1-6", pdf: "/Pdfs/Papers26/1.pdf" },
            { id: 389, title: "ASSESSING THE ROLE OF ACTION RESEARCH IN EDUCATIONAL AND LEGAL FIELDS", author: "Dr. Ankit Awasthi, Smriti Kashyap & Barkha Dodai", pages: "7-15", pdf: "/Pdfs/Papers26/2.pdf" },
            { id: 390, title: "AN ANALYSIS OF TECHNOLOGICAL CHANGES AND INDUSTRIAL RELATIONS IN NIGERIA", author: "Fanisi Babatunde", pages: "16-24", pdf: "/Pdfs/Papers26/3.pdf" },
            { id: 391, title: "IMPACT OF PRIVACY VIOLATIONS ON SOCIAL MEDIA USERS", author: "Dr. Preeti Singh & Dr. Avnish Singh", pages: "25-37", pdf: "/Pdfs/Papers26/4.pdf" },
            { id: 392, title: "CLIMATE CHANGE AND WOMEN’S HUMAN RIGHTS: A CALL FOR GENDER-RESPONSIVE SOLUTIONS", author: "Shivpriya & Prof. (Dr.) Preeti Misra", pages: "1-6", pdf: "/Pdfs/Papers26/5.pdf" },
            { id: 393, title: "THE HISTORICAL PERSPECTIVE OF THE CIVIL AVIATION SECTOR ACROSS THE GLOBE AND THE BEGINNING OF LEGISLATIVE POLICIES IN INDIA", author: "Dr. Nitin R Kumbhar", pages: "7-15", pdf: "/Pdfs/Papers26/6.pdf" },
            { id: 394, title: "GENDER INEQUALITY IN GLOBAL EYE HEALTH", author: "Priyanka", pages: "16-24", pdf: "/Pdfs/Papers26/8.pdf" },
            { id: 395, title: "IMPLEMENTATION OF MGNREGA SCHEME: A CASE STUDY OF TISSA DEVELOPMENT BLOCK OF DISTRICT CHAMBA OF HIMACHAL PRADESH", author: "Anil Kapoor, Narender Kumar & Naren Zangm", pages: "25-37", pdf: "/Pdfs/Papers26/9.pdf" },
            { id: 396, title: "ROOT CAUSE OF WOMEN DISCRIMINATION: A CASE OF SOCIAL ENTREPRENEURS", author: "Ghanshyam Dos & Dr. Doa Naqvi", pages: "1-6", pdf: "/Pdfs/Papers26/10.pdf" },
            { id: 397, title: "SOCIAL MEDIA PROMOTES FREEDOM OF SPEECH AND EXPRESSION: MYTH OR REALITY", author: "Sujata Paul", pages: "1-6", pdf: "/Pdfs/Papers26/11.pdf" },
            { id: 398, title: "CHALLENGES IN THE IMPLEMENTATION OF LABOUR CODES IN INDIA", author: "Shambhavi Tripathi & Meher Sachdev", pages: "7-15", pdf: "/Pdfs/Papers26/12.pdf" },
            { id: 399, title: "SSB: INDIA’S SWORD AND SHIELD AT BORDER", author: "Sukriti Agrawal", pages: "16-24", pdf: "/Pdfs/Papers26/13.pdf" },
          ]
        },
        {
          id: 34,
          number: 2,
          period: "APR-JUN",
          year: 2023,
          pdf: "/Pdfs/LR_(2)_2023.pdf",
          papers: [
            { id: 400, title: "A WAR OVER WORSHIP IN INDIA: A SPECIAL REFERENCE TO THE PLACES OF WORSHIP ACT, 1991", author: "Dr. Simmi Virk", pages: "1-6", pdf: "/Pdfs/Papers28/1.pdf" },
            { id: 401, title: "ARMED CONFLICT AND ITS IMPACT ON THE PROTECTION OF THE RIGHT OF PWD TO SOCIO-ECONOMIC INTEGRATION IN CAMEROON:EMPIRICAL OBSERVATIONS FROM MEZAM DIVISION", author: "M. T. Thomas & N. L. MUNTING", pages: "7-15", pdf: "/Pdfs/Papers28/2.pdf" },
            { id: 402, title: "RIGHTS OF THE VICTIM PRESENT DAYS IN INDIAN JUDICIAL SYSTEM", author: "Ashwini Kumar Sahu & Dr. Laxmikanta Das", pages: "16-24", pdf: "/Pdfs/Papers28/3.pdf" },
            { id: 403, title: "COMPARATIVE ANALYSIS BETWEEN MITAKSHARA AND DAYABHAGA: ANCIENT SCHOOL OF INDIAN JURISPRUDENCE", author: "Rahul Jain", pages: "25-37", pdf: "/Pdfs/Papers28/4.pdf" },
            { id: 404, title: "ECONOMICS OF COMPETITION LAW IN INDIA: PREVENTION OF EXPLOITATION IN THE GENERAL MARKET", author: "Debarun Mukherjee", pages: "1-6", pdf: "/Pdfs/Papers28/5.pdf" },
            { id: 405, title: "JUDICIAL ACTIVISM & PROTECTION OF RIGHTS OF PEOPLE IN INDIA: AN OVERVIEW", author: "Dr. Krishna Mohan Malviya & Dr. Sushim Shukla", pages: "7-15", pdf: "/Pdfs/Papers28/6.pdf" },
            { id: 406, title: "UNDER COOKIES’ COMMAND: SURVEILLANCE CAPITALISM AND THE RIGHT TO PRIVACY", author: "Vedanti Singhal", pages: "16-24", pdf: "/Pdfs/Papers28/7.pdf" },
            { id: 407, title: "JUSTIFICATION FOR PROTECTING FOLK DANCE PERFORMERS AND THEIR PROTECTION UNDER INTERNATIONAL COPYRIGHT LAW", author: "Shreeya", pages: "25-37", pdf: "/Pdfs/Papers28/8.pdf" },
            { id: 408, title: "SHORT COMMENTS ON ENVIRONMENTAL GOVERNANCE", author: "Priyanka", pages: "1-6", pdf: "/Pdfs/Papers28/9.pdf" },
            { id: 409, title: "GENDER RESPONSIVE PROGRAMMING IN JAIL A NORM IN 21ST CENTURY", author: "Rohit Sharma & Prabhat Deep", pages: "1-6", pdf: "/Pdfs/Papers28/10.pdf" },
            { id: 410, title: "RIGHTS OF CHILDREN AND REQUIRED AMENDMENTS", author: "Sava Vishnu Vardhan & Chejarla Sowmya Sree", pages: "7-15", pdf: "/Pdfs/Papers28/11.pdf" },
            { id: 411, title: "ENFORCEMENT OF MEDIATION SETTLEMENT AGREEMENTS IN FOREIGN JURISDICTIONS", author: "Bhavya Goswami", pages: "16-24", pdf: "/Pdfs/Papers28/12.pdf" },
          ]
        },
        {
          id: 35,
          number: 3,
          period: "JUL-SEP",
          year: 2023,
          pdf: "/Pdfs/LR_(3)_2023.pdf",
          papers: [
            { id: 412, title: "ROLE OF CASTE IN INDIAN POLITICS: AN OVERVIEW OF HIMACHAL PRADESH", author: "Anil Kapoor, Naren Zangmo, & Kailash Chand ", pages: "1-6", pdf: "/Pdfs/Papers29/1.pdf" },
            { id: 413, title: "RIGHT TO ABORTION IN INDIA – A STUDY AS WOMEN’S RIGHT VIS-A-VIS HUMAN RIGHT", author: "Dr. Caesar Roy", pages: "7-15", pdf: "/Pdfs/Papers29/2.pdf" },
            { id: 414, title: "ROLE OF POCSO ACT IN CASE OF JUVENILE JUSTICE AND CHILD SEXUAL ABUSES: A CRITICAL ANALYSIS", author: "Niraj Pandey", pages: "16-24", pdf: "/Pdfs/Papers29/3.pdf" },
            { id: 415, title: "THE POLICY DISCOURSE OF COMMUNITY BASED BIODIVERSITY CONSERVATION IN INDIA", author: "Priyanka", pages: "25-37", pdf: "/Pdfs/Papers29/4.pdf" },
            { id: 416, title: "RESEARCH ON THE USE OF ARTIFICIAL INTELLIGENCE (AI) IN DRUG INDUSTRY", author: "Prof Sunita Yadav", pages: "1-6", pdf: "/Pdfs/Papers29/5.pdf" },
            { id: 417, title: "ROLE OF LOCAL BODIES IN FEDERAL POLITICS: A STUDY OF SHIMLA MC ELECTION (2023)", author: "Dr. Mridula Sharda & Ankita Dhawan", pages: "7-15", pdf: "/Pdfs/Papers29/6.pdf" },
            { id: 418, title: "RIGHTS OF WOMEN PRISONERS AND SOME ISSUES FACED BY THEM IN INDIA", author: "Ram Dular Sonkarl", pages: "16-24", pdf: "/Pdfs/Papers29/7.pdf" },
            { id: 429, title: "REGULATIONS OF SPORTS BETTING & IT’S VARIOUS FORMS: A STUDY OF INTERNATIONAL & NATIONAL SAFEGUARDS", author: "Dr. Aarushi Batra, Shubham Bishnoi, & Sai Jahnavi Thota", pages: "25-37", pdf: "/Pdfs/Papers29/8.pdf" },
          ]
        },
        {
          id: 36,
          number: 4,
          period: "OCT-DEC",
          year: 2023,
          pdf: "/Pdfs/LR_(4)_2023.pdf",
          papers: [
            { id: 430, title: "ELECTORAL REFORM, ISSUES AND CHALLENGES IN INDIA: A CRITICAL STUDY", author: "Krishna Kumar Bhasker & Dr. Shiv Bahadur Tiwari ", pages: "1-6", pdf: "/Pdfs/Papers30/1.pdf" },
            { id: 431, title: "OUTLINING EUTHANASIA AND THE COUNTRIES WITH EXISTING STATUTORY FRAMEWORK TO POSITIVELY REGULATE ‘ACTIVE EUTHANASIA'", author: "Mayank Dubey", pages: "7-15", pdf: "/Pdfs/Papers30/2.pdf" },
            { id: 432, title: "FUNDAMENTAL RIGHT WITH SPECIAL REFRENCE TO RIGHT TO SLEEP", author: "Anita Verma ", pages: "16-24", pdf: "/Pdfs/Papers30/3.pdf" },
            { id: 433, title: "GOVERNORS: ARCHITECTS OR GUARDIANS? RETHINKING POWER AND PROGRESS IN INDIA’S STATES", author: "Rohan Rajeev Ghosh", pages: "25-37", pdf: "/Pdfs/Papers30/4.pdf" },
            { id: 434, title: "BEHIND CLOSED CURTAINS: THE UNTOLD REALITIES OF RAPE TRIALS IN INDIA", author: "Vanshika Shukla", pages: "1-6", pdf: "/Pdfs/Papers30/5.pdf" },
            { id: 435, title: "CASTE DISCRIMINATION, HUMAN RIGHTS AND CONSTITUTIONAL RIGHTS: A STUDY ON INDIAN PERSPECTIVE", author: "Anil Kapoor", pages: "7-15", pdf: "/Pdfs/Papers30/6.pdf" },
            { id: 436, title: "FREEDOM OF SPEECH AND EXPRESSION: RIGHT TO RAISE OUR VOICE", author: "Dr. Satish Chandra Upadhyay", pages: "16-24", pdf: "/Pdfs/Papers30/7.pdf" },
            { id: 437, title: "EXAMINING THE REMEDY OF ‘RESTITUTION OF CONJUGAL RIGHTS’ UNDER HINDU LAW IN LIGHT OF GENDER JUSTICE AND CONSTITUTIONAL IMPERATIVES", author: "Ana Sisodia & Prof. (Dr.) Reena Bishnoi", pages: "25-37", pdf: "/Pdfs/Papers30/8.pdf" },
            { id: 438, title: "AN ANALYSIS OF THE POSSIBILITY OF A CONSOLIDATED & COMPREHENSIVE LEGISLATION ON TOURISM IN INDIA AND THE PROTECTION OF THE RIGHTS OF FOREIGN TOURISTS", author: "Dr. Manu Sharma & Dr. R. K. Singh", pages: "1-6", pdf: "/Pdfs/Papers30/9.pdf" },
            { id: 439, title: "MARINE INSURANCE WITH SPECIAL REFERENCE TO ‘PERILS OF THE SEA AND PERILS ON THE SEA’ AND THE LIABILITY OF INSURER", author: "Dr. Yamala Papa Rao & Ritika Yadu", pages: "1-6", pdf: "/Pdfs/Papers30/10.pdf" },
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
            { id: 440, title: "A LOOK AT THE INDIAN GENERAL ELECTIONS, 2024", author: "Prantik Basak & Jhilike Saha", pages: "1-6", pdf: "/Pdfs/Papers31/1.pdf" },
            { id: 441, title: "SOCIO-ECONOMIC CHALLENGES POST COVID-19 PANDEMIC AND OPPORTUNITIES FOR SUSTAINABLE DEVELOPMENT IN INDIA", author: "Dr. Rajwinder Kaur", pages: "7-15", pdf: "/Pdfs/Papers31/2.pdf" },
            { id: 442, title: "A SOCIO-LEGAL ANALYSIS OF SATI PRATHA WITH SPECIAL REFERENCE TO THE VIOLATION OF THE RIGHT TO LIVE", author: "Dr. Rachna Sharma & Jashandeep Kaur", pages: "16-24", pdf: "/Pdfs/Papers31/3.pdf" },
            { id: 443, title: "DISASTER MANAGEMENT ACT, 2005: A FAILED LEGISLATION", author: "Akansha Pandey", pages: "25-37", pdf: "/Pdfs/Papers31/4.pdf" },
            { id: 444, title: "CHARTING PATHWAYS FOR GENDER EQUALITY: EXPLORING THE INFLUENCE OF HUMAN RIGHTS ON WOMEN’S EMPOWERMENT IN INDIA", author: "Anita Verma", pages: "1-6", pdf: "/Pdfs/Papers31/5.pdf" },
            { id: 445, title: "UNVEILING THE DRAWBACKS OF SURROGACY ACT 2021:NAVIGATING THE COMPLEXITIES AND CONTROVERSIES", author: "Vineeta Kumari Chowdhary", pages: "7-15", pdf: "/Pdfs/Papers31/6.pdf" },
            { id: 446, title: "STRIKING A BALANCE: PROMISSORY ESTOPPELS’ INFLUENCE ON STATE AUTHORITY AND INDIVIDUAL RIGHTS IN INDIAN GOVERNANCE", author: "Dr. Priyanka Mohod & Ayushi", pages: "16-24", pdf: "/Pdfs/Papers31/7.pdf" },
            { id: 447, title: "BEYOND THE MEKONG: A LITMUS TEST FOR TRANSBOUNDARY ENVIRONMENTAL GOVERNANCE", author: "Shikha Vasishta", pages: "25-37", pdf: "/Pdfs/Papers31/8.pdf" },
            { id: 448, title: "AN ANALYSIS ON THE EFFECTIVENESS OF SECTION 309 CrPC IN DELIVERING JUSTICE", author: "Ritu Muppidi & Shivani Pranesh", pages: "1-6", pdf: "/Pdfs/Papers31/9.pdf" },
            { id: 449, title: "IMPLICATIONS OF SARBANANDA SONOWAL v. UNION OF INDIA, A.I.R. 2005 SC 2920: A CRITICAL REVIEW", author: "Aditya Kumar", pages: "1-6", pdf: "/Pdfs/Papers31/10.pdf" },
          ]
        },
        {
          id: 38,
          number: 2,
          period: "APR-JUN",
          year: 2024,
          pdf: "/Pdfs/LR_(2)_2024.pdf",
          papers: [
            { id: 450, title: "SOCIO-LEGAL STUDY OF MIGRANTS AND CONSTRUCTION WORKERS IN THE STATE OF HIMACHAL PRADESH", author: "Anil Kapoor & Dr. Pawan Kumar", pages: "1-6", pdf: "/Pdfs/Papers32/1.pdf" },
            { id: 451, title: "HATE CRIMES: A CHALLENGE TO INDIAN LEGAL SYSTEM", author: "Aman Singh ", pages: "7-15", pdf: "/Pdfs/Papers32/2.pdf" },
            { id: 452, title: "PROTECTION OF FLORA AND FAUNA: A NATIONAL LEGAl PERSPECTIVE", author: "Dr. Shiv Shankar Singh", pages: "16-24", pdf: "/Pdfs/Papers32/3.pdf" },
            { id: 453, title: "IMPACT OF THE OCCUPATIONAL SAFETY, HEALTH AND WORKING CONDITIONS CODE, 2020 ON CONTRACT LABOUR: ACOMPARATIVE ANALYSIS WITH THE CONTRACT LABOURER (REGULATION AND ABOLITION) ACT, 1970", author: "Jasmine Gill & Arnav Goel", pages: "25-37", pdf: "/Pdfs/Papers32/4.pdf" },
            { id: 454, title: "THE LAW GOVERNING TOURISM IN OUTER SPACE: AN OVERVIEW", author: "Dr. Sandeep Kumar & Akanksha Sharma", pages: "1-6", pdf: "/Pdfs/Papers32/5.pdf" },
            // { id: 455, title: "", author: "Priya Tiwari", pages: "7-15", pdf: "/Pdfs/Papers32/6.pdf" },
            { id: 456, title: "PERFECT JUSTICE THROUGH THE USE OF FORENSIC SCIENCE: A MYTH OR REALITY", author: "Dr. Shruti Goyal & Dr. Geetika Walia", pages: "16-24", pdf: "/Pdfs/Papers32/7.pdf" },
            { id: 457, title: "CONCEPT OF ADR IN INDIA", author: "Khushboo Dudeja", pages: "25-37", pdf: "/Pdfs/Papers32/8.pdf" },
            // { id: 458, title: "Research Paper 9", author: "Yerragudla Vikranth & Dr. Ankit Awasthi", pages: "1-6", pdf: "/Pdfs/Papers32/9.pdf" },
          ]
        },
        {
          id: 39,
          number: 3,
          period: "JUL-SEP",
          year: 2024,
          pdf: "/Pdfs/LR_(3-4)_2024.pdf",
          papers: [
            { id: 459, title: "Research Paper 1", author: "Tanya Mittal", pages: "1-6", pdf: "/Pdfs/Papers33/1.pdf" },
            { id: 460, title: "SEALED COVER JURISDICTION AND ITS IMPLICATION FOR THE JUDICIAL PROCESS IN INDIA", author: "Dr. Farhana & Khushboo", pages: "7-15", pdf: "/Pdfs/Papers33/2.pdf" },
            { id: 461, title: "LEGAL ACCOUNTABILITY FOR DISHONOURING POST-DATED CHEQUE WITHOUT SUFFICIENT BALANCE", author: "Dr. Preeti Singh", pages: "16-24", pdf: "/Pdfs/Papers33/3.pdf" },
            { id: 462, title: "NTERNAL DISPLACEMENT IN KASHMIR POST-2019: THE IMPACT OF REVOCATION OF ARTICLE 370 ON LOCAL POPULATIONS AND MIGRATION PATTERNS", author: "Dr. Nitin Ramling Kumbhar", pages: "25-37", pdf: "/Pdfs/Papers33/4.pdf" },
            { id: 463, title: "ATF PRICES & CIVIL AVIATION SECTOR: A CRITICAL STUDY OF GOVERNMENT POLICIES", author: "Dr. Avnish Singh", pages: "1-6", pdf: "/Pdfs/Papers33/5.pdf" },
            { id: 464, title: "THE ROLE OF HISTORY IN SHAPING LEGAL SYSTEMS: A STUDY OF ITS IMPORTANCE IN LEGAL EDUCATION", author: "Dr. Puja Prerna", pages: "7-15", pdf: "/Pdfs/Papers33/6.pdf" },
            { id: 465, title: "PLURALISM AND INDIA: AN EXAMINATION OF THE NATION’S CONSTITUTIONAL FRAMEWORK", author: "Pallavi Yadav", pages: "16-24", pdf: "/Pdfs/Papers33/7.pdf" },
          ]
        },
        {
          id: 40,
          number: 4,
          period: "OCT-DEC",
          year: 2024,
          pdf: "/Pdfs/LR_(3-4)_2024.pdf",
          papers: [
            { id: 459, title: "SEALED COVER JURISDICTION AND ITS IMPLICATION FOR THE JUDICIAL PROCESS IN INDIA", author: "Tanya Mittal", pages: "1-6", pdf: "/Pdfs/Papers33/1.pdf" },
            { id: 460, title: "LEGAL ACCOUNTABILITY FOR DISHONOURING POST-DATED CHEQUE WITHOUT SUFFICIENT BALANCE", author: "Dr. Farhana & Khushboo", pages: "7-15", pdf: "/Pdfs/Papers33/2.pdf" },
            { id: 461, title: "INTERNAL DISPLACEMENT IN KASHMIR POST-2019: THE IMPACT OF REVOCATION OF ARTICLE 370 ON LOCAL POPULATIONS AND MIGRATION PATTERNS", author: "Dr. Preeti Singh", pages: "16-24", pdf: "/Pdfs/Papers33/3.pdf" },
            { id: 462, title: "ATF PRICES & CIVIL AVIATION SECTOR: A CRITICAL STUDY OF GOVERNMENT POLICIES", author: "Dr. Nitin Ramling Kumbhar", pages: "25-37", pdf: "/Pdfs/Papers33/4.pdf" },
            { id: 463, title: "SUPREME COURT’S STANDPOINT IN EFFECTUATING GENDER NEUTRALITY VIS-À-VIS GUARDIANSHIP IN INDIA: CHANGING STATUS OF WOMEN IN 21ST CENTURY", author: "Dr. Avnish Singh", pages: "1-6", pdf: "/Pdfs/Papers33/5.pdf" },
            { id: 464, title: "THE ROLE OF HISTORY IN SHAPING LEGAL SYSTEMS: A STUDY OF ITS IMPORTANCE IN LEGAL EDUCATION", author: "Dr. Puja Prerna", pages: "7-15", pdf: "/Pdfs/Papers33/6.pdf" },
            { id: 465, title: "PLURALISM AND INDIA: AN EXAMINATION OF THE NATION’S CONSTITUTIONAL FRAMEWORK", author: "Pallavi Yadav", pages: "16-24", pdf: "/Pdfs/Papers33/7.pdf" },
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
            { id: 466, title: "HARMONIZING TRADE, ENVIRONMENTAL GOALS, AND CARBON TAXATION: A PERSPECTIVE ON THE EU’S CBAM POLICY", author: "Dr. Ankit Awasthi & Ms. Sriradha Rai Choudhuri", pages: "1-6", pdf: "/Pdfs/Papers34/1.pdf" },
            { id: 467, title: "LEGAL REGIME ON MOB LYNCHING: A COMPARATIVE ANALYSIS OF INDIAN AND AMERICAN SCENARIO", author: "Anoop Kumar & Harinath Prasad", pages: "7-15", pdf: "/Pdfs/Papers34/2.pdf" },
            { id: 468, title: "PUBLIC POLICY EXCEPTIONS IN JUDICIAL REVIEW OF INTERSTATE ARBITRATION AWARDS: “THEIR ROLE AND IMPACT", author: "Kumari Neha & Dr. Suneel Kumar", pages: "16-24", pdf: "/Pdfs/Papers34/3.pdf" },
            { id: 469, title: "REVEALING WOMEN’S MARGINALISATION IN THE INDIAN JUDICIARY: OBSTACLES AND POSSIBILITIES FOR PARITY", author: "Rimjhim Rana Singh & Dr. Sanya Yadav", pages: "25-37", pdf: "/Pdfs/Papers34/4.pdf" },
            { id: 470, title: "CORPORATE LIABILITY FOR DATA BREACHES IN INDIA: LEGAL FRAMEWORK, CHALLENGES AND IMPLICATIONS", author: "Manisha Debnath", pages: "1-6", pdf: "/Pdfs/Papers34/5.pdf" },
            { id: 471, title: "HUMAN RIGHTS IN INDIA: CONTEMPORARY CHALLENGES AND SOLUTIONS", author: "Vanshika Dhiman", pages: "7-15", pdf: "/Pdfs/Papers34/6.pdf" },
            { id: 472, title: "A COMPARATIVE LEGAL ANALYSIS OF LIABILITY AND INSURANCE REGIMES IN SPACE TOURISM: EVOLVING DOCTRINES AND REGULATORY CHALLENGES IN INDIAN NATIONAL LEGISLATION AND U.S. FEDERAL LEGISLATION", author: "Dr. Nitin Ramling Kumbhar ", pages: "16-24", pdf: "/Pdfs/Papers34/7.pdf" },
            { id: 473, title: "TRANSGENDER INCLUSION IN INDIA: CHALLENGES IN EMPLOYMENT, EDUCATION, AND HEALTHCARE", author: "Urvashi Pacherya & Dr. D. P. Gupta ", pages: "16-24", pdf: "/Pdfs/Papers34/8.pdf" },
          ]
        },
        {
          id: 42,
          number: 2,
          period: "APR-JUN [Current Published Issues]",
          year: 2025,
          pdf: "/Pdfs/LR_XI_(2)_2025_(1).pdf",
          papers: [
            { id: 474, title: "BALANCING FREEDOM OF RELIGION AND FREEDOM OF EXPRESSION: REVIEW OF THE BLASPHEMY LAWS IN NIGERIA", author: "Sophia Chima", pages: "1-6", pdf: "/Pdfs/Papers35/1.pdf" },
            { id: 475, title: "ALGORITHMIC ACCOUNTABILITY IN CORPORATE DECISION-MAKING: RECONSTRUCTING LIABILITY FRAMEWORKS FOR AI-DRIVEN GOVERNANCE", author: "Lakshya Kaushish & Deepanshi Tiwari", pages: "7-15", pdf: "/Pdfs/Papers35/2.pdf" },
            { id: 476, title: "THE GREEN PARADOX: THE ENVIRONMENTAL IMPLICATIONS OF FDI IN A GLOBALISING WORLD", author: "Dhairya Jain & Dr Ankit Awasthi ", pages: "16-24", pdf: "/Pdfs/Papers35/3.pdf" },
            { id: 477, title: "KAMAKHYA: THE CRADLE OF TANTRA IN NORTHEAST INDIA", author: "Dr Keshav Jha", pages: "25-37", pdf: "/Pdfs/Papers35/4.pdf" },
            { id: 478, title: "AVATARS IN THE EYES OF THE LAW RE-IMAGINING INTELLECTUAL PROPERTY FOR FICTIONAL CHARACTERS IN INDIA’S DIGITAL AGE", author: "Pankaj Kaushish & Alayna Amin", pages: "1-6", pdf: "/Pdfs/Papers35/5.pdf" },
            { id: 479, title: "LEGAL PROTECTION OF “KOKBOROK”: THE PRIDE OF NORTHEAST INDIA", author: "Dr Keshav Jha", pages: "7-15", pdf: "/Pdfs/Papers35/6.pdf" },
            { id: 480, title: "CONFLICT TO CONSENSUS: MEDIATION PRACTICES IN JHARKHAND’S FAMILY DISPUTES", author: "Bishnanand Dubey & Dr Laxmikanta Das", pages: "16-24", pdf: "/Pdfs/Papers35/7.pdf" },
            { id: 481, title: "GEOGRAPHICAL INDICATIONS AND TRADE LAW: LEGALGEOGRAPHICAL INDICATIONS AND TRADE LAW: LEGAL CHALLENGES IN PROMOTING UTTAR PRADESH’S GI-TAGGED HANDICRAFTS IN GLOBAL MARKETS", author: "Nikki Kumar & Dr Anis Ahmad", pages: "16-24", pdf: "/Pdfs/Papers35/8.pdf" },
            { id: 482, title: "NAVIGATING TRANSFER PRICING: ISSUES AND CHALLENGES IN THE ERA OF BEPS 2.0", author: "Ramya S. R. & Dr Sanjay Kumar", pages: "1-6", pdf: "/Pdfs/Papers35/9.pdf" },
            { id: 483, title: "NAVIGATING ETHICAL AI AND CORPORATE GOVERNANCE: DESIGNING INTERNAL COMPLIANCE FOR RESPONSIBLE AI USE", author: "Plabanee Patnaik & Sidhant Soin", pages: "7-15", pdf: "/Pdfs/Papers35/10.pdf" },
            { id: 484, title: "NORTHEAST INDIA’S TANTRIC TEXT AND ITS INTERPRETATION THROUGH MIMANSA", author: "Dr Keshav Jha", pages: "16-24", pdf: "/Pdfs/Papers35/11.pdf" },
            { id: 485, title: "UNFAIR PRACTICES IN THE GIG ECONOMY: WORKER RIGHTS AND CONSUMER IMPACT", author: "Pradeep Dixit ", pages: "25-37", pdf: "/Pdfs/Papers35/12.pdf" },
            { id: 486, title: "THE LEGAL FRAMEWORK OF EMPLOYMENT CONTRACTS: RIGHTS AND OBLIGATIONS", author: "P Gokulapriya ", pages: "1-6", pdf: "/Pdfs/Papers35/13.pdf" },
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
              className={`group p-6 rounded-xl border-2 shadow-sm transition-all duration-300 transform hover:-translate-y-1 ${issue.pdf
                ? 'bg-white border-gray-100 hover:shadow-xl hover:border-[#900001] cursor-pointer'
                : 'bg-gray-50 border-gray-200 cursor-not-allowed opacity-60'
                }`}
            >
              <div className={`flex items-center justify-center w-12 h-12 rounded-full mb-4 mx-auto transition-colors ${issue.pdf
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
          {/* {selectedIssue.pdf && (
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
          )} */}

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
                  {/* <p className="text-xs text-gray-500">
                    Pages: {paper.pages}
                  </p> */}
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