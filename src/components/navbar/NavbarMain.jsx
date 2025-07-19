// import NavbarLogo from "./NavbarLogo";
// import NavbarLinks from "./NavbarLinks";
// import NavbarBtn from "./NavbarBtn";
// import NavbarToggler from "./NavbarToggler";
// import { useSelector } from "react-redux";

// const NavbarMain = () => {
//   const menuOpen = useSelector((state) => state.menu.menuOpen);
//   return (
//     <nav className="max-w-[1300px] mx-auto w-full  px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
//       <div className="flex justify-between w-full max-w-[1200px] mx-auto  bg-black items-center p-6 rounded-r-full rounded-l-full border-orange border-[0.5px] ">
//         <NavbarLogo />
//         <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
//           <NavbarLinks />
//         </div>

//         <NavbarBtn />
//       </div>
//       <div className="flex lg:hidden sm:block p-6 bg-black items-center justify-center rounded-full  border-orange border-[0.5px] ">
//         <NavbarToggler />
//       </div>
//     </nav>
//   );
// };

// export default NavbarMain;
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  return (
    <nav className="max-w-[1300px] mx-auto w-full px-2 fixed left-[50%] -translate-x-[50%] z-20 flex gap-2 mt-2">
      {/* Changed px-4 to px-2, and gap-4 to gap-2 */}
      <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-4 rounded-r-full rounded-l-full border-orange border-[0.5px] ">
        {/* Changed p-6 to p-4 */}
        <NavbarLogo />
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>

        <NavbarBtn />
      </div>
      <div className="flex lg:hidden sm:block p-4 bg-black items-center justify-center rounded-full border-orange border-[0.5px] ">
        {/* Changed p-6 to p-4 */}
        <NavbarToggler />
      </div>
    </nav>
  );
};

export default NavbarMain;