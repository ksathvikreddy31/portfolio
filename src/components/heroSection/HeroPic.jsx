// import { motion } from "framer-motion";
// import { fadeIn } from "../../framerMotion/variants";
// import { PiHexagonThin } from "react-icons/pi";

// const HeroPic = () => {
//   return (
//     <motion.div
//       variants={fadeIn("left", 0.1)}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: false, amount: 0 }}
//       className=" h-full flex items-center justify-center "
//     >
//       <img
//         src="../../public/images/HexaPic.png"
//         alt="K SATHVIK REDDY"
//         className="max-h-[450px] w-auto"
//       />

//       <div className=" absolute -z-10 flex justify-center items-center animate-pulse ">
//         <PiHexagonThin className=" md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite] " />
//       </div>
//     </motion.div>
//   );
// };

// export default HeroPic;
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { PiHexagonThin } from "react-icons/pi";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="relative h-full flex items-center justify-center" // 💡 Added 'relative' for correct positioning of hexagon
    >
      {/* ✅ Updated image size */}
      <img
        src="/images/HexaPic.png"
        alt="K SATHVIK REDDY"
        className="max-h-[380px] w-auto z-10 sm:max-h-[320px] md:max-h-[380px] lg:max-h-[450px]" // 💡 Decrease or increase max-h here
      />

      {/* ✅ Updated hexagon container size */}
      <div className="absolute z-0 flex justify-center items-center animate-pulse">
        <PiHexagonThin
          className="text-cyan blur-md animate-[spin_20s_linear_infinite]
                     h-[500px] w-[500px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px]" // 💡 Adjust h/w for hexagon size
        />
      </div>
    </motion.div>
  );
};

export default HeroPic;
