import Logo from "./Logo";
import { Mainmenu } from "./MainMenu";
import MobileHeader from "../header/mobileHeader/index";

export default function Header() {
  return (
    <div className=" mx-auto container w-full ">
      <div className=" flex justify-between items-center py-4 max-sm:ml-3">
        <Logo />
        <Mainmenu />
        <MobileHeader />
      </div>
    </div>
  );
}
