import React from "react";

import frontendIcon from "../assets/frontend.svg";
import backendIcon from "../assets/backend.svg";
import databaseIcon from "../assets/database.svg";
import cloudIcon from "../assets/cloud.svg";
import toolsIcon from "../assets/tools.svg";
import methodologiesIcon from "../assets/methodologies.svg";

const skills = [
  {
    category: "Frontend",
    image: frontendIcon,
    skills: ["React.js", "Angular.js", "HTML", "CSS", "JavaScript"],
  },
  {
    category: "Backend",
    image: backendIcon,
    skills: ["Node.js", "Express.js", "Koa.js", "Java", "Spring Boot"],
  },
  {
    category: "Database",
    image: databaseIcon,
    skills: ["PostgreSQL"],
  },
  {
    category: "Cloud & DevOps",
    image: cloudIcon,
    skills: ["Microsoft Azure", "Azure DevOps", "Kubernetes", "GitOps"],
  },
  {
    category: "Tools",
    image: toolsIcon,
    skills: [
      "Jira",
      "Grafana",
      "Kibana",
      "Postman",
      "VS Code",
      "Eclipse",
      "GitHub Desktop",
      "Lens",
      "K9s",
    ],
  },
  {
    category: "Methodologies",
    image: methodologiesIcon,
    skills: ["Agile Development", "RESTful API Design"],
  },
];

function Skills() {
  return (
    <section div id="skills" className="bg-gray-200 w-[100%] h-fit py-3">
      <div className="mx-19 my-8">
        <h2 className="text-cyan-800 text-2xl text-center uppercase font-bold mb-7 pb-5">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-10 mt-3">
          {skills.map((skillSet, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md relative"
            >
              <img
                src={skillSet.image}
                alt="skills icon"
                className="w-14 h-14 mb-2 absolute -top-7 left-0 right-0 mx-auto"
              />
              <h3 className="text-xl font-semibold mb-2">
                {skillSet.category}
              </h3>
              <ul className="list-disc pl-5 flex gap-2 flex-col flex-wrap h-40">
                {skillSet.skills.map((skill, idx) => (
                  <li key={idx} className="text-gray-700 list-none ">
                    &#10003;{skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
