import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        Hello! I'm K. Sathvik Reddy, a passionate and curious Computer Science student specializing in Artificial Intelligence and Machine Learning at CMR College of Engineering and Technology. I love turning innovative ideas into impactful projects by combining smart algorithms with clean and practical design.
        With experience in building real-time applications like Face Mask Detection and Nirva-Agni (an AI-based fire detection and suppression system), I enjoy exploring the intersection of hardware and AI. I’ve participated in multiple hackathons such as IET Karmaveer, HackSavvy, and Ideothon, where I got the opportunity to pitch and build tech solutions under pressure.
        From full-stack development to AI-driven systems, I strive to create meaningful and efficient solutions. My goal is to keep learning, building, and contributing to real-world problems with technology.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
