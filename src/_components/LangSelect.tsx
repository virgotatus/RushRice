import { useTranslation } from "react-i18next";

const langs: { [key: string]: { nativeName: string } } = {
  en: { nativeName: "English" },
  zh: { nativeName: "中文" },
};

const LangSelect = () => {
  const { i18n } = useTranslation();
  return (
    <select
      className="rounded-md bg-[rgb(244,127,40)] text-slate-50 text-base px-2 py-1"
      onChange={(evt) => {
        i18n.changeLanguage(evt.target.value);
      }}
      value={i18n.resolvedLanguage}
    >
      {Object.keys(langs).map((lng) => (
        <option
          key={lng}
          value={lng}
          label={langs[lng].nativeName}
          style={{
            fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
          }}
        />
      ))}
    </select>
  );
};

export default LangSelect;
