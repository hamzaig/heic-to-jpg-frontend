import React from "react";

function Comparison() {
  return (
    <div className="flex sm:flex-col md:flex-row mx-[165px] my-12 gap-6">
      <div>
        <h3 className="text-2xl	font-semibold	">HEIC</h3>
        <p className="text-base">
          HEIC (High Efficiency Image Format) ist ein modernes Bildformat, das
          sich durch die Erhaltung der Bildqualität bei gleichzeitiger
          Minimierung der Dateigrößen auszeichnet. Bekannt gemacht durch Apple,
          eignet es sich ideal für die Speichereffizienz auf ihren Geräten.
          Unser HEIC-zu-JPG-Konverter ermöglicht es Ihnen mühelos, HEIC-Dateien
          in universell kompatible JPGs umzuwandeln, damit Ihre visuellen
          Inhalte plattformübergreifend beeindruckend bleiben.
        </p>
      </div>
      <div>
        <h3 className="text-2xl	font-semibold	">JPG</h3>
        <p className="text-base">
          JPG (Joint Photographic Experts Group) ist bekannt für sein
          hervorragendes Verhältnis von Bildqualität zur Dateigröße. Es wird auf
          einer breiten Palette von Geräten unterstützt und ist die erste Wahl
          für verschiedene Zwecke. Nutzen Sie unseren HEIC-zu-JPG-Konverter, um
          HEIC-Dateien in dieses universell unterstützte Format umzuwandeln.
          Dies garantiert, dass Ihre Bilder unabhängig von Gerät oder Plattform
          außergewöhnlich erscheinen.
        </p>
      </div>
    </div>
  );
}

export default Comparison;
