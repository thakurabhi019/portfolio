import ProjectsCard from "./ProjectsCard";
import chatAppImage from '/src/assets/image/Screenshot_16-11-2024_2064_liquid-health.vercel.app.jpeg';
import FigmaImage from '/src/assets/image/Screenshot 2024-11-17 210326.png'
import tatamotors from '/src/assets/image/tatamotarsimage.jpeg'
import flightnetwork from '/src/assets/image/Screenshot_28-11-2024_143057_us-en.flightnetwork.com.jpeg'
const Projects = () => {
  const portfolioData = {
    portfolioCards: [
     
      {
        id: 1,
        name: "Plagiarism Detector - Frontend",
        description:
          "The Frontend for the Plagiarism and AI Detection Website is a fully responsive, user-centric interface designed to provide an intuitive and seamless experience for users across all devices. Developed using **Angular**, **Tailwind CSS**, and **HTML**, this frontend ensures fast rendering, easy navigation, and a visually appealing design while allowing users to easily upload documents and receive real-time plagiarism and AI detection results. The platform's interface integrates directly with the backend to process and display results efficiently.",
        imageUrl:
          "https://res.cloudinary.com/gk35044/image/upload/v1722430210/Screenshot_from_2024-07-31_18-15-18_mwmbtd.png",
        techStack: [
          "Angular", 
          "Tailwind CSS", 
          "HTML5", 
          "Responsive Design",
        ],
        DemoLink: [
          "https://dashboard.skylineacademic.com/user/dashboard",
          "https://dashboard.skylineacademic.com/user/dashboard"
        ]
      },
      {
        id: 2, 
        name: "Liquid Health",
        description:
          "The Liquid Health frontend, built with React, Tailwind CSS, and HTML, offers a fully responsive, user-friendly design. It ensures fast, smooth interactions across all devices, delivering an engaging, performance-optimized experience for users",
        imageUrl:
          chatAppImage,
          techStack: [
            "React Js", 
            "Tailwind CSS", 
            "HTML5", 
            "Responsive Design",
          ],
        DemoLink: [
          "https://liquid-health.vercel.app/",
          "https://liquid-health.vercel.app/",
        ],
      },
      {
        id: 3, 
        name: "Flight Network",
        description:
          "The Flight Network website, designed in Figma, includes a versatile section where users can browse hotels and discover visiting places. This feature enhances the travel experience by combining flight booking with accommodation and destination insights",
        imageUrl:
        flightnetwork,
          techStack: [
            "Figma",
            "Prototyping",
            "Design",
          ],
        DemoLink: [
          "https://www.figma.com/proto/M9HCaE0yJBPBIJcxl2Spds/Untitled?node-id=2-2&node-type=canvas&t=Zj4bleRwVgGT6LPQ-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2",
          "https://www.figma.com/proto/M9HCaE0yJBPBIJcxl2Spds/Untitled?node-id=2-2&node-type=canvas&t=Zj4bleRwVgGT6LPQ-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2",
        ],
      },
      {
        id: 4, 
        name: "Tata Motors",
        description:
          "I'm designing a Tata Motors website in Figma, focusing on creating an interactive and seamless user experience. The prototype includes dynamic real-time data updates, and intuitive navigation. It emphasizes smooth transitions and engaging interactions.",
        imageUrl:
        tatamotors,
          techStack: [
            "Figma",
            "Prototyping",
            "Design",
          ],
        DemoLink: [
          "https://www.figma.com/proto/pFKsghHlwCiCxBfqouJjqD/Untitled?node-id=2-3&node-type=canvas&t=ATb53FVbMNk2b2c4-0&scaling=min-zoom&content-scaling=fixed&page-id=2%3A2&starting-point-node-id=2%3A3",
          "https://www.figma.com/proto/pFKsghHlwCiCxBfqouJjqD/Untitled?node-id=2-3&node-type=canvas&t=ATb53FVbMNk2b2c4-0&scaling=min-zoom&content-scaling=fixed&page-id=2%3A2&starting-point-node-id=2%3A3",
        ],
      },
      {
        id: 5, 
        name: "Trading View",
        description:
          "I'm designing a TradingView-inspired website in Figma, focusing on creating an interactive and seamless user experience. The prototype includes dynamic charts, real-time data updates, and intuitive navigation. It emphasizes smooth transitions and engaging interactions to provide users with an efficient and immersive trading platform",
        imageUrl:
        FigmaImage,
          techStack: [
            "Figma",
            "Prototyping",
            "Design",
          ],
        DemoLink: [
          "https://www.figma.com/proto/w8l7gdX4UEMrZLup3rBrgd/Untitled?node-id=8-95&node-type=canvas&t=kkSbDjKMDuH7fUdO-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=8%3A95",
          "https://www.figma.com/proto/w8l7gdX4UEMrZLup3rBrgd/Untitled?node-id=8-95&node-type=canvas&t=kkSbDjKMDuH7fUdO-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=8%3A95",
        ],
      },
     
      
    ],
  };
  return (
    <div className="flex flex-col  w-full h-auto  bg-[#B4F2F1]" id="Projects">
      <div className="ml-[10.5rem] pt-12">
        <h1 className=" text-2xl font-bold ">MY PROJECTS</h1>
        <h2 className=" text-lg ">
          Each project is a unique piece of development
        </h2>
      </div>
      <div className="w-[80%] ml-[10.5rem] flex flex-col justify-center items-center text-center py-10 gap-20 rounded bg-[#B4F2F1] mb-20">
        {portfolioData.portfolioCards.map((card) => (
          <ProjectsCard key={card.id} cardData={card} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
