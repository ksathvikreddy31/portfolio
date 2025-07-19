import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
// import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://linkedin.com/in/sathvik31" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/ksathvikreddy31" Icon={FiGithub} />
      {/* <SingleContactSocial link="#" Icon={FaInstagram} /> */}
    </div>
  );
};

export default ContactSocial;
