// import { motion } from "framer-motion";
// import { fadeIn } from "../../framerMotion/variants";

// const HeroText = () => {
//   return (
//     <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
//       <motion.h2
//         variants={fadeIn("down", 0.2)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0 }}
//         className="lg:text-2xl sm:text-xl  uppercase text-lightGrey "
//       >
//         Software Developer
//       </motion.h2>
//       <motion.h1
//         variants={fadeIn("right", 0.4)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0 }}
//         className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
//       >
//         KANTAREDDY <br className="sm:hidden md:block" />
//         SATHVIK REDDY
//       </motion.h1>
//       <motion.p
//         variants={fadeIn("up", 0.6)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0 }}
//         className="text-lg mt-4"
//       >
//         A Passionate FullStack Developer <br /> 
//       </motion.p>
//     </div>
//   );
// };

// export default HeroText;
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaDownload } from "react-icons/fa"; // React Icon for Resume Download

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl  uppercase text-lightGrey "
      >
        Software Developer
      </motion.h2>

      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
      >
        KANTAREDDY <br className="sm:hidden md:block" />
        SATHVIK REDDY
      </motion.h1>

      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4"
      >
        A Passionate FullStack Developer <br />
      </motion.p>

      {/* Resume Button */}
      <motion.div
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <a
          href="/resume.pdf" // make sure resume.pdf is inside public folder
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-orange hover:bg-darkBrown text-white px-5 py-2 mt-2 rounded-lg transition duration-300 text-lg"
        >
          <FaDownload />
          Resume
        </a>
      </motion.div>
    </div>
  );
};

export default HeroText;
