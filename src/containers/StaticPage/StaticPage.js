import React from "react";
import { useTranslation } from "react-i18next";

export default function StaticPage() {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <div className="App-header">
        <h2>{t("Introduction")}</h2>
        <button onClick={() => changeLanguage("ger")}>ger</button>
        <button onClick={() => changeLanguage("en")}>en</button>
      </div>
      <div className="App-intro">
        {t("Optionally cache the translations")}
      </div>
    </div>
  );
}
