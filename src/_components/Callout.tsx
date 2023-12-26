import { useTranslation } from "react-i18next";

const Callout = () => {
  const { t } = useTranslation();
  return (
    <div className="z-10 border-0 w-full min-h-[15rem] rounded-md bg-blue-500 flex flex-col sm:flex-row">
      <div className="grow ">
        <h1 className="m-8 text-4xl text-white font-bold">
          {t("callout-heading")}
        </h1>
        <p className="m-8 text-2xl max-sm:text-base text-white">
          {t("hero-para")}
        </p>
      </div>
      <div className="flex items-center justify-center p-10">
        <button className="bg-sky-400 text-xl font-semibold uppercase rounded-full text-slate-100 px-12 py-3 whitespace-nowrap">
          {t("buy-btn")}
        </button>
      </div>
    </div>
  );
};

export default Callout;
