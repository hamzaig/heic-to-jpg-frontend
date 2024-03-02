import React from "react";
import Image from "next/image";
import Logo from "/public/assets/logo.png";

function Navbar() {
  return (
    <a href="https://heicinjpg.de">
      <div className="navbar bg-[#087E8B] py-4 sd:px-[6.25rem] flex align-center ">
        <Image src={Logo} alt="Heic in Jpg" width={75} height={75} priority />
        <p className="px-4 text-white text-xl self-center">
          HEIC in JPG konvertieren
        </p>
      </div>
    </a>
  );
}

export default Navbar;
