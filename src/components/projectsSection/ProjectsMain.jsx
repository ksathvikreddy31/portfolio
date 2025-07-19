import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Astro Ai",
    year: "May2025",
    align: "right",
    image: "/images/proj-1.png",
    link: "https://github.com/ksathvikreddy31/AI-Agent-for-Time-Series.git",
  },
  {
    name: "Nirva-Agni",
    year: "Jan2024",
    align: "left",
    image: "/images/proj-2.png",
    link: "https://youtu.be/ppQ95qvBmH8?si=fG9zFmnsldHJxKyk",
  },
  {
    name: "FaceMaskDetection",
    year: "Dec2024",
    align: "right",
    image: "/images/proj-3.png",
    link: "https://github.com/ksathvikreddy31/Face-Mask-Detection.git",
  },
  {
    name: "SentimentBasedModel-for-RecommenderSystems",
    year: "Jan2025",
    align: "left",
    image: "/images/proj-4.jpg",
    link: "https://github.com/ksathvikreddy31/Sentiment-Based-Model-for-Recommender-Systems.git",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
