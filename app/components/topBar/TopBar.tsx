import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import EmailCopy from "./EmailCopy";
import PhoneCopy from "./PhoneCopy";
import { FaPhoneAlt } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="container max-w-full h-[50px] bg-[#D75800] p-4 max-sm:h-[70px]">
      <div className="flex justify-between mx-auto container">
        <div className="text-white text-xl flex gap-4 mx-auto container  items-center">
          <a href="">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/tumecotour/">
            <FaInstagram />
          </a>
          <a href="https://www.youtube.com/channel/UCjq7-20-UJOwd1kFRmN40hg">
            <FaYoutube />
          </a>
        </div>
        <div className="flex justify-between gap-3 max-sm:flex-col max-sm:gap-0 ">
          <div className="text-white text-sm flex gap-2 items-center">
            <IoMail />
            <EmailCopy />
          </div>
          <div className="text-white text-sm flex gap-2 items-center">
            <FaPhoneAlt />
            <PhoneCopy />
          </div>
        </div>
      </div>
    </div>
  );
}
