import "/public/styles/styles.css";

export const metadata = {
  title: "HEIC in JPG Umwandeln: Ein Umfassendes Tool",
  description:
    "HEIC in JPG Umwandeln: Kostenlose Werkzeuge für Bildformatänderung. Einfache Konvertierung von HEIC-Dateien zu JPG. Qualitätserhalt. Schnell, sicher & effizient.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
