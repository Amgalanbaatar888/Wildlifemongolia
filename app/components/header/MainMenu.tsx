"use client";
import { mainMenuitems } from "../header/mainMenuitems";
import { usePathname } from "next/navigation";

export function Mainmenu() {
  const pathname = usePathname();

  return (
    <>
      <div className=" flex justify-center items-center max-lg:hidden">
        {mainMenuitems.map((item) => (
          <a
            key={item.id}
            className={`px-2  ${
              pathname === item.link ? "text-[#D75800]" : ""
            }`}
            href={item.link}
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}
