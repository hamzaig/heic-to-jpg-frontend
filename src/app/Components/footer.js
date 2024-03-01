import React from "react";
import Image from "next/image";
import Logo from "/public/assets/logo.png";
// import FbIcon from "../Assets/fb.svg";
import Fblogo from "/public/assets/fbicon.svg";
import InstaLogo from "/public/assets/instaicon.svg";
import TwiterLogo from "/public/assets/twitericon.svg";
// import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#087E8B] py-6 sm:px-1 md:px-4 lg:px-8 xl:px-[6.25rem] flex items-center justify-between ">
      <div className="flex align-center">
        <Image
          width={75}
          height={75}
          priority
          src={Logo}
          alt="Heic in Jpg"
          className="sm:w-12 sm:h-12 lg:w-16 lg:h-16 xl:w-25 xl:h-25 Image"
        />
        <p className="sm:pl-0 md:pl-4 text-white sm:text-xs md:text-md lg:text-xl self-center footer-text	">
          {" "}
          HEIC in JPG konvertieren
        </p>
      </div>
      <p className=" sm:text-xs lg:text-sm text-white footer-text">
        © 2024 HeicinJpg.Alle Rechte vorbehalten .{" "}
      </p>
      <div className="flex">
        <a
          href="https://www.facebook.com/heicinjpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            width={75}
            height={75}
            priority
            src={Fblogo}
            alt="FB-LOGO"
            className="fb-logo sm:w-16 sm:h-16 lg:w-20 lg:h-20"
          />
        </a>
        {/* 
        <Image
          width={75}
          height={75}
          priority
          src={InstaLogo}
          alt="Insta-LOGO"
          className="sm:w-8 sm:h-8 lg:w-20 lg:h-20 Image"
        />
        <Image
          width={75}
          height={75}
          priority
          src={TwiterLogo}
          alt="Twitter-LOGO"
          className="sm:w-8 sm:h-8 lg:w-20 lg:h-20 Image"
        /> */}
      </div>
    </div>
  );
}

export default Footer;
