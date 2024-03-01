"use client";
import React, { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questionsAnswers = [
    {
      question: "Kann ich HEIC-Dateien kostenlos in JPG umwandeln?",
      answer:
        "Ja, unser Tool bietet eine kostenlose Basisversion für die einfache Umwandlung.",
    },
    {
      question: "Wie funktioniert die Umwandlung auf einem iPhone?",
      answer:
        "Laden Sie Ihre HEIC-Dateien hoch und wählen Sie JPG als Zielformat – unser Tool erledigt den Rest.",
    },
    {
      question: "Unterstützt das Tool HEIC-Dateien von Samsung-Geräten?",
      answer:
        "Ja, HEIC-Dateien von Samsung-Geräten können problemlos in JPG umgewandelt werden.",
    },
    {
      question:
        "Ist eine Softwareinstallation erforderlich, um HEIC in JPG umzuwandeln?",
      answer:
        "Nein, für die Online-Konvertierung ist keine Installation erforderlich. Für Desktop-Versionen kann eine einfache Installation notwendig sein.",
    },
    {
      question:
        "Werden die Bildqualität und -auflösung beim Umwandeln beibehalten?",
      answer:
        "Ja, unser Tool zielt darauf ab, die bestmögliche Qualität und Auflösung Ihrer Originalbilder beizubehalten",
    },
    {
      question: "Kann ich das Tool auch auf Android-Geräten verwenden?",
      answer:
        "Ja, unser Tool ist kompatibel mit Android-Geräten und ermöglicht eine unkomplizierte Umwandlung.",
    },
    {
      question: "Wie lange dauert die Umwandlung von HEIC in JPG?",
      answer:
        "Die Umwandlungszeit kann je nach Dateigröße und Anzahl der Dateien variieren, ist jedoch in der Regel sehr schnell.",
    },
    {
      question:
        "Kann ich auch HEIC-Dateien umwandeln, die auf iCloud gespeichert sind?",
      answer:
        "Ja, wenn Sie Zugriff auf Ihre iCloud-Dateien haben, können Sie diese für die Umwandlung in unser Tool hochladen.",
    },
    {
      question:
        "Wie sicher ist die Umwandlung von HEIC in JPG mit diesem Tool?",
      answer:
        "Wir legen großen Wert auf Datensicherheit und gewährleisten den Schutz Ihrer Dateien während des gesamten Umwandlungsprozesses",
    },
    // Add more questions and answers here
  ];

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqs sm:mx-8 md:mx-12 lg:mx-24 2xl:mx-80 my-24 p-6 bg-white rounded-lg shadow-md">
      <h2 className="sm:text-lg lg:text-xl xl:text-2xl  md:mx-20  xl:mx-36 font-semibold text-gray-900  mb-16">
        HEIC in JPG Umwandlung:FAQS
      </h2>
      <div className="mt-4">
        {questionsAnswers.map((qa, index) => (
          <div key={index} className="margin-bottom border-b mb-8">
            <button
              className="py-3  w-full sm:text-md lg:text-xl xl:text-2xl text-left text-black font-medium focus:outline-none"
              onClick={() => toggle(index)}
            >
              <h3 className="font-medium"> {qa.question} </h3>
            </button>
            <p
              id="answer-text"
              className={`text-gray-500 sm:text-sm lg:text-md xl:text-lg pl-4 pr-2 py-2 ${
                activeIndex === index ? "block" : "hidden"
              }`}
            >
              {qa.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
