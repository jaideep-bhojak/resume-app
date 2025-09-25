import { FaAngular, FaDatabase, FaJava, FaSalesforce } from 'react-icons/fa';


import { FaCode } from "react-icons/fa";



const resumeData = {
  name: "Jaideep Bhojak",
  title: "I.T. Analyst",
  company: "Tata Consultancy Services",
  location: "Ahmedabad, India",
  available: true,
  contact: {
    email: "jaideepbhojakb@gmail.com",
    phone: "+91 7014768897",
    social: {
      linkedin: "https://www.linkedin.com/in/jaideep-b-646969173/"
    }
  },
  stats: {
    projects: 4,
    experience: 5
    
  },
  bio: "I specialize in creating clean architecture and structured logics in the C# and Salesforce tech stacks.",
  skills: [
  // { name: "UI/UX Design", level: 90, icon: MdDesignServices },
  // { name: "Framer", level: 85, icon: SiFramer },
  // { name: "Figma", level: 80, icon: FaFigma },
  // { name: "Adobe XD", level: 75, icon: SiAdobexd },
  // { name: "Prototyping", level: 88, icon: MdOutlineDesignServices },
  { name: "Salesforce Apex, Controllers, Test Classes, Static Resources, VF pages and components", level: 85, icon: FaSalesforce },
  { name: "Salesforce LWC", level: 82, icon: FaSalesforce },
  { name: "Salesforce Admin", level: 70, icon: FaSalesforce },
  { name: "C# backend", level: 90, icon: FaCode },
  { name: "Java backend", level: 90, icon: FaJava },
  { name: "Sql Server", level: 75, icon: FaDatabase },
  { name: "PostgeSQL", level: 70, icon: FaDatabase },
  { name: "Angular Javascript, Html, Css", level: 70, icon: FaAngular },

],


  experience: [
  {
    role: "Salesforce Developer",
    company: "Tata Consultancy Services",
    duration: "2022 – Present",
    description: "Developed and implemented a streamlined process for gathering business requirements, reducing project delivery time by 10%. Created a layered architecture with code separation principles to efficiently handle pricing data and reduce processing time. Integrated the C# backend with the Salesforce platform, enabling callback classes to manage dynamic pricing logic. Ensured efficient code writing with optimized exception handling. Enabled data injection via SQL queries and interfaces provided by subsidiaries. Maintained version control using GitHub repositories provided by clients. Worked on Apttus CPQ and handled a custom Salesforce application, developing Apex classes, triggers, Visualforce pages, and components."
  },
    {
      role: "Executive 1",
    company: "Secure Meters",
    duration: "2021 – 2022",
    description: [
      "Worked on an application used by UK clients to support elderly individuals living alone with better service access.",
      "Built on the .NET framework, the system collected data from a Tablet app via a Gateway and stored it in a central database.",
      "Developed a web application that fetched this data for Call Centre Service users to monitor client-generated alerts.",
      "Automated electric meter data collection and transmission to service users through the Gateway and database.",
      "Created secure Web APIs using HTTPCLIENT in .NET to transfer data to service users after JWT-based IAM authentication.",
      "Ensured seamless data flow from electric meters to service platforms via API integration.",
      "Contributed to improving service reliability and responsiveness for vulnerable users through backend enhancements."
    ]
    },
    {
      
    role: "Systems Engineer",
    company: "Infosys Ltd.",
    duration: "2021 – 2022",
    description: [
      "Worked on an application used by UK clients to support elderly individuals living alone with better service access.",
      "Built on the .NET framework, the system collected data from a Tablet app via a Gateway and stored it in a central database.",
      "Developed a web application that fetched this data for Call Centre Service users to monitor client-generated alerts.",
      "Automated electric meter data collection and transmission to service users through the Gateway and database.",
      "Created secure Web APIs using HTTPCLIENT in .NET to transfer data to service users after JWT-based IAM authentication.",
      "Ensured seamless data flow from electric meters to service platforms via API integration.",
      "Contributed to improving service reliability and responsiveness for vulnerable users through backend enhancements.",
      "Aided in the development of a full-stack application using C# in the .NET framework and Angular 7.",
      "Refactored faulty code to optimize performance and improve maintainability.",
      "Worked on .NET Framework 4.8 and created Web APIs to support application functionality.",
      "Designed and implemented stored procedures using MS SQL Server for backend operations.",
      "Worked with Views, Triggers, Clustered and Non-Clustered Indexes, and Transactions.",
      "Applied knowledge of Primary Keys, Unique Keys, Foreign Keys, and Normal Forms (NF1 to NF6), scalar-valued and table-valued functions.",
      "Implemented Three Layer Architecture (DAL, BL, and Logic layer MVC) for structured data flow from database to UI.",
      "Built functionality to pass data from CSV files (uploaded via UI) into the database.",
      "Used Microsoft Azure Cloud Services to connect storage accounts with data conversion apps and SQL Server."
    ]}
  ]
};

export default resumeData;
