import { useTranslation } from "react-i18next";
const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col lg:flex-row">
      <section className="mt-48 flex text-center flex-col gap-5 lg:justify-start">
        <h1
          className="text-7xl text-slate-100 font-bold leading-snug"
          data-aos="zoom-in"
        >
          {t("hero-mov")} <span className="emphasis">{t("hero-tri")} </span>
          {t("hero-cooking")}{" "}
          <span className="emphasis">{t("hero-fried")}</span>
          <br></br> {t("hero-it")}{" "}
          <span className="emphasis">{t("hero-city")} </span>
          {t("hero-room")}
        </h1>
        <p className="text-3xl my-3 text-slate-200">{t("hero-para")}</p>
        <div className="mt-5">
          <button className=" bg-[--color-accent] w-fit border-0 px-12 py-4 rounded-full text-slate-50 uppercase">
            {t("buy-btn")}
          </button>
        </div>
      </section>
      <div className="flex items-center" data-aos="zoom-in">
        <picture>
          <img src="/screen-removebg.webp" alt="hero" />
        </picture>
      </div>
    </div>
  );
};

export default Hero;
