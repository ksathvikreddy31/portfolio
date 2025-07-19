// import HeroText from "./HeroText";
// import HeroPic from "./HeroPic";

// const HeroMain = () => {
//   return (
//     <div className=" pt-40 pb-16">
//       <div className="flex md:flex-row sm:flex-col  max-w-[1200px] mx-auto justify-between items-center relative px-4">
//         <HeroText />
//         <HeroPic />
//       </div>
//     </div>
//   );
// };

// export default HeroMain;
import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

const HeroMain = () => {
  return (
    // Added id="home" to the outermost div
    <div className="pt-40 pb-16" id="home">
      <div className="flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-between items-center relative px-4">
        <HeroText />
        <HeroPic />
      </div>
    </div>
  );
};

export default HeroMain;