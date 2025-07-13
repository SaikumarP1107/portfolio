import React from "react";
import TimelineItem from "./Timeline-Item";

function Experience() {
  const experienceData = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "TCS",
      date: "March 2022 - Present",
      description:
        "Led full-stack development, automation and cloud migration initiatives, achieving cost savings and improved performance with Azure DevOps and Kubernetes.",
    },
    {
      id: 2,
      title: "FrontEnd Developer",
      company: "TCS",
      date: "May 2021 - March 2022",
      description:
        "Developed responsive web applications using React.js and Material UI, ensuring timely delivery and enhanced performance.",
    }
  ];

  return (
    <section id="experience" className="bg-gray-200 relative w-[100%] mx-auto py-3">
      {/* ✅ Move Vertical Line HERE at the top level */}

      {/* Title */}
      <h2 className="text-2xl font-bold text-center mb-12 relative z-10">
        <span className="text-cyan-800">Experience</span> <br />
        <span className="text-[16px]">Work Experience</span>
      </h2>
      <div className="relative min-h-full mx-auto">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-cyan-800 h-full z-0"></div>

        {/* Timeline Items */}
        <div className="relative z-10 mx-40 py-5">
          {experienceData.map((item, index) => (
            <TimelineItem key={item.id} data={item} isLeft={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
