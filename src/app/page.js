"use client";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import Cta from "./Components/cta";

import Uploader from "./Components/uploader";

import Faqs from "./faqs";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />

        <Cta />
        <Uploader />

        <div className="lists sm:mx-12 lg:mx-[165px] my-12">
          <h2 className="my-4 sm:text-2xl md:text-4xl font-bold">
            HEIC in JPG: Umwandeln mit Leichtigkeit
          </h2>
          <ul
            className="md:text-2xl  leading-10 list-disc
"
          >
            <li className="">
              Für Mac-Benutzer: Wandeln Sie HEIC-Dateien direkt auf Ihrem Mac in
              JPG um. Die Bedienung ist einfach und erfordert keine zusätzliche
              Software.
            </li>
            <li>
              Für Windows-Nutzer: Besonders für Windows 10 optimiert, ermöglicht
              unser Tool eine reibungslose und schnelle Konvertierung Ihrer
              HEIC-Bilder.
            </li>
            <li>
              Online-Konvertierung: Für diejenigen, die eine sofortige Lösung
              ohne Installation suchen, bieten wir eine Online-Konvertierung von
              HEIC in JPG an.
            </li>
          </ul>
        </div>
        {/* <Comparison /> */}
        <Faqs />
        <Footer />
      </div>
    </>
  );
}
