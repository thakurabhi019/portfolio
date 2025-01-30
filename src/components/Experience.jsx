const Experience = () => {
  const workExperience = [
    {
      id: 1,
      title: "UI/UX Designer",
      company: "Boffin Blocks",
      location: "On-site",
      date: "March 2024 - Nov 2024",
      responsibilities: [
        `Designed and created user-centric UI/UX experiences using Figma and Canva, ensuring visually appealing and intuitive designs.`,
        `Developed responsive web interfaces using HTML and CSS, enhancing usability and accessibility.`,
        `Collaborated with developers and stakeholders to translate design concepts into functional digital experiences.`,
      ],
    }
    
    
    // {
    //   id: 2,
    //   title: "Full Stack Developer Intern",
    //   company: "Corizo",
    //   location: "Remote",
    //   date: "July 2022 - Dec 2023",
    //   responsibilities: [
    //     `Implemented RESTful APIs using Node.js and Express, facilitating
    //     seamless communication between frontend and backend.
    //     `,
    //     `Collaborated with senior developers to integrate searching,sorting and Hash
    //     Maps algorithms into backend processes`,

    //     "Technology Used Node Js,Express Js, React Js, Tailwind CSS,Mongodb and TypeScript",
    //   ],
    // },
  ];
  return (
    <div className="bg-[#B4F2F1] min-h-screen overflow-hidden text-black " id="Experience">
      <div className="container ml-[10.5rem] ">
        <h1 className=" pt-12  md:text-2xl text-xl font-semibold ">
          Professional Journey.
        </h1>
        <p className="pt-3 md:text-xl text-lg text-text">
          Where I've Made an Impact.
        </p>
        <div className="mx-auto max-w-4xl">
          {workExperience.map((item) => (
            <div key={item.id} className="flex  mt-10">
              <div className="flex-1 md:flex [display:none]  items-center gap-2">
                {/* <Calendar /> */}
                {item.date}
              </div>
              <div className="border md:mr-28 mr-16 stepper" />
              <div className="flex-1">
                <h1 className="md:text-3xl text-2xl font-medium">
                  {item.title}{" "}
                </h1>
                <p className="md:text-xl text-lg md:mb-2">
                  {item.company} | {item.location}
                </p>
                <div className="flex-1 md:[display:none] flex items-center gap-2 mb-2">
                  {/* <Calendar /> */}
                  {item.date}
                </div>
                <ul className="list-disc">
                  {item.responsibilities.map((summery) => (
                    <li className="mb-2 md:text-lg text-sm">{summery}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
