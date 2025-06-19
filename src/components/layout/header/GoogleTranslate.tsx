"use client";

import { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    const addScript = () => {
      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      (window as any).googleTranslateElementInit = () => {
        new (window as any).google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,ur,it,fr,de,es", // Add languages here
            layout: (window as any).google.translate.TranslateElement
              .InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      };
    };

    addScript();
  }, []);

  return <div id="google_translate_element" className="translate-dropdown" />;
};

export default GoogleTranslate;
