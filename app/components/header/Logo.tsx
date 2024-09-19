"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "../../public/images/Tumeco.png";

const Logo = () => {
  const router = useRouter();

  const refresh = () => {
    router.push("/");
  };

  return (
    <Image
      onClick={refresh}
      alt="TumEcoTour"
      className="cursor-pointer"
      height={70}
      width={146}
      src={logo}
    />
  );
};

export default Logo;
