import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="ksathvikreddy31@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 9014-392-891" Image={FiPhone} />
      <SingleInfo text="Hyderabad,Telangana,India" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
