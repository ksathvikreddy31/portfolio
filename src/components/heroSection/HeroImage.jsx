// import { PiHexagonThin } from "react-icons/pi";

// const HeroImage = () => {
//   return (
//     <div className="relative self-end h-full w-full items-center justify-center">
//       <div className=" h-full w-full">
//         <img
//           src="../../public/images/me.png"
//           alt="K Sathvik Reddy"
//           className="w-auto h-auto md:max-w-[570px] sm:max-w-[380px] absolute bottom-[0px] z-10 left-[50%] -translate-x-[50%]"
//         />
//         <div className="w-full h-full absolute  bottom-[-20%] -z-10 flex justify-center items-center rotate-90">
//           <PiHexagonThin className=" md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-orange opacity-70  animate-[spin_20s_linear_infinite] " />
//         </div>
//         <div className="w-full h-full absolute  bottom-[-20%] -z-10 flex justify-center items-center rotate-90">
//           <PiHexagonThin className=" md:h-[90%] sm:h-[120%] blur-lg min-h-[600px] w-auto text-orange opacity-70  animate-[spin_20s_linear_infinite] " />
//         </div>
//         <div className="w-full h-full absolute  bottom-[-20%] -z-10 flex justify-center items-center">
//           <PiHexagonThin className=" md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan opacity-70  animate-[spin_20s_linear_infinite] " />
//         </div>
//         <div className="w-full h-full absolute  bottom-[-20%] -z-10 flex justify-center items-center">
//           <PiHexagonThin className=" md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan opacity-70 blur-lg  animate-[spin_20s_linear_infinite] " />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroImage;
import { PiHexagonThin } from "react-icons/pi";

const HeroImage = () => {
  return (
    // Outer container: Centers the entire component and hides overflow
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden">
      {/* Inner container for both the image and the hexagons.
          This ensures they share a common center point for rotation and positioning. */}
      <div className="relative flex items-center justify-center w-full h-full">

        {/* The main image: Positioned absolutely and centered.
            z-index is higher than hexagons to ensure it's on top.
            Added clip-path to shape the image into a hexagon. */}
        <img
          src="/images/HexaPic.png" // Verify this path is correct for your project setup
          alt="K Sathvik Reddy"
          className="
            absolute
            top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 // Centering utility, adjusted top to move image higher
            z-20 // Ensures image is above hexagons
            w-[250px] h-[250px] // Fixed size for the image to fit within the hexagon crop
            md:w-[350px] md:h-[350px] // Responsive sizing for larger screens
            object-cover // Ensures the image covers the hexagon area, cropping if necessary
            // Apply clip-path for a hexagon shape
          "
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
        />

        {/* Orange Hexagon Layers: Positioned absolutely and centered, behind the image. */}
        {/* First orange hexagon: Rotates */}
        <div className="
            absolute
            top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 // Centering utility
            -z-10 // Ensures hexagons are behind the image
            flex justify-center items-center
            rotate-90 // Initial rotation for one set of hexagons
            transform-gpu // Enables hardware acceleration for smoother animation
          ">
          <PiHexagonThin className="
              h-[300px] w-[300px] // Adjusted size to revolve around the image
              md:h-[400px] md:w-[400px] // Responsive sizing for larger screens
              text-orange opacity-70 // Custom orange color, ensure 'text-orange' is defined in your Tailwind config
              animate-[spin_20s_linear_infinite] // Spinning animation
            " />
        </div>
        {/* Second orange hexagon: Blurred version for depth effect */}
        <div className="
            absolute
            top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 // Centering utility
            -z-10 // Ensures hexagons are behind the image
            flex justify-center items-center
            rotate-90 // Initial rotation
            transform-gpu
          ">
          <PiHexagonThin className="
              h-[300px] w-[300px] // Adjusted size
              md:h-[400px] md:w-[400px] // Responsive sizing
              text-orange opacity-70 blur-lg // Blurred effect
              animate-[spin_20s_linear_infinite]
            " />
        </div>

        {/* Cyan Hexagon Layers: Positioned absolutely and centered, behind the image. */}
        {/* First cyan hexagon: Rotates (no initial rotate-90, for a different visual effect) */}
        <div className="
            absolute
            top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 // Centering utility
            -z-10 // Ensures hexagons are behind the image
            flex justify-center items-center
            transform-gpu
          ">
          <PiHexagonThin className="
              h-[300px] w-[300px] // Adjusted size
              md:h-[400px] md:w-[400px] // Responsive sizing
              text-cyan opacity-70 // Custom cyan color, ensure 'text-cyan' is defined in your Tailwind config
              animate-[spin_20s_linear_infinite]
            " />
        </div>
        {/* Second cyan hexagon: Blurred version for depth effect */}
        <div className="
            absolute
            top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 // Centering utility
            -z-10 // Ensures hexagons are behind the image
            flex justify-center items-center
            transform-gpu
          ">
          <PiHexagonThin className="
              h-[300px] w-[300px] // Adjusted size
              md:h-[400px] md:w-[400px] // Responsive sizing
              text-cyan opacity-70 blur-lg // Blurred effect
              animate-[spin_20s_linear_infinite]
            " />
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
