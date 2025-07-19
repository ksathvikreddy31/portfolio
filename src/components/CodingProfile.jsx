import React from "react";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../framerMotion/variants"; // Adjust path as per your structure

const CodingProfile = () => {
  return (
    // The ID here MUST match the 'section' value in NavbarLinks.jsx
    <div className="bg-[#2c2523] py-12 px-6" id="CodingProfile">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="text-[#00e6ff] text-4xl font-bold mb-8 text-center"
      >
        Coding Profile
      </motion.h2>

      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        className="flex justify-center gap-20 text-center text-white"
      >
        {/* LeetCode */}
        <div className="hover:scale-110 transition-transform duration-300">
          <a
            href="https://leetcode.com/u/ksathvikreddy/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2"
          >
            <SiLeetcode size={50} color="#FFA116" />
            <span className="text-lg mt-2">LeetCode</span>
          </a>
        </div>

        {/* CodeChef */}
        <div className="hover:scale-110 transition-transform duration-300">
          <a
            href="https://www.codechef.com/users/ksathvikreddy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2"
          >
            <SiCodechef size={50} color="#ffffff" />
            <span className="text-lg mt-2">CodeChef</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default CodingProfile;
// import React from "react";
// import { SiLeetcode, SiCodechef } from "react-icons/si";
// import { motion } from "framer-motion";
// import { fadeIn } from "../framerMotion/variants"; // Adjust path as per your structure

// const CodingProfile = () => {
//   return (
//     <div className="bg-[#2c2523] py-12 px-6" id="coding-profile">
//       <motion.h2
//         variants={fadeIn("down", 0.2)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0.7 }}
//         className="text-[#00e6ff] text-4xl font-bold mb-8 text-center"
//       >
//         Coding Profile
//       </motion.h2>

//       <motion.div
//         variants={fadeIn("up", 0.3)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0.5 }}
//         className="flex justify-center gap-20 text-center text-white"
//       >
//         {/* LeetCode */}
//         <div className="hover:scale-110 transition-transform duration-300">
//           <a
//             href="https://leetcode.com/u/ksathvikreddy/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex flex-col items-center gap-2"
//           >
//             <SiLeetcode size={50} color="#FFA116" />
//             <span className="text-lg mt-2">LeetCode</span>
//           </a>
//         </div>

//         {/* CodeChef */}
//         <div className="hover:scale-110 transition-transform duration-300">
//           <a
//             href="https://www.codechef.com/users/ksathvikreddy"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex flex-col items-center gap-2"
//           >
//             <SiCodechef size={50} color="#ffffff" />
//             <span className="text-lg mt-2">CodeChef</span>
//           </a>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default CodingProfile;
