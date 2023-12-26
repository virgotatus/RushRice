import LinkArrow from "./(ex)/linkArrow";
import FeatureCard from "./FeatureCard";
import { useTranslation } from "react-i18next";

const Feature = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-col bg-orange-50 lg:flex-row gap-6 mt-48">
        <section className="flex flex-col justify-start mt-24">
          <svg className="w-[50px] h-[50px] bg-slate-200 rounded-xl p-2">
            <use href="/svg_sprite.svg#niupai-01"></use>
          </svg>
          <h1 className="text-7xl text-[--color-headings] font-bold leading-snug">
            {t("feature-heading-1")}
          </h1>
          <p className="text-3xl text-slate-400 mb-10">{t("feature-para-1")}</p>
          <LinkArrow />
        </section>
        <section className="mt-24">
          <div className="border-dotted border-sky-200 border-8 relative shadow-2xl">
            <img src="/Menu.webp" alt=" Menu" />
            <img
              src="/Milanote.webp"
              alt=" Melanote"
              className="inline-block top-[40%] -right-[7%] absolute w-[240px]"
            />
          </div>
        </section>
      </div>
      <FeatureCard
        heading={t("feature-heading-2")}
        icon_src="jiandan-01"
        direction={false}
        img_src="/cooking-rice.gif"
        description={t("feature-para-2")}
      />
      <FeatureCard
        heading={t("feature-heading-3")}
        icon_src="pijiu-01"
        direction={true}
        img_src="/beer.webp"
        description={t("feature-para-3")}
      />
    </>
  );
};

export default Feature;
