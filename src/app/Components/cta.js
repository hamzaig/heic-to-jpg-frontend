import React from "react";
import Image from "next/image";
import CtaImage from "/public/assets/cta.svg";
function Cta() {
  return (
    <div className=" sm:mx-12 xl:mx-[165px] mb-12 mt-24 ">
      <h1 className="cta-hding sm:text-xl  md:text-2xl xl:text-3xl 2xl:text-4xl	font-black sm:mx-8 md:mx-20 lg:mx-28 xl:mx-40 2xl:mx-52 my-12">
        HEIC in JPG Umwandeln
      </h1>
      <div className="cta-content flex  sm:flex-col lg:flex-row items-center  xl:gap-28 gap-36">
        <p className="text text-2xl">
          "Mit unserem Tool wandeln Sie mühelos <strong> HEIC in JPG </strong>{" "}
          um. Diese schnelle und benutzerfreundliche Lösung ist perfekt für die
          Umwandlung Ihrer HEIC-Dateien in das universell kompatible JPG-Format.
          Geeignet für Mac, Windows und sogar für die Online-Konvertierung, ist
          unser Tool die ideale Wahl für alle Ihre
          Bildkonvertierungsbedürfnisse."
        </p>
        <Image
          src={CtaImage}
          priority
          width={250}
          height={250}
          alt="HEIC in JPG Umwandeln"
        />
      </div>
    </div>
  );
}

export default Cta;
