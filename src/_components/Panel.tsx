import Media from "./Media";
import style from "./Panel.module.css";
import { useTranslation } from "react-i18next";

const Panel = () => {
  const { t } = useTranslation();
  return (
    <div className="mx-0 my-24 block" data-aos="slide-up">
      <div className={style.panelBg} />
      <h1 className="py-24 text-5xl text-slate-100 flex justify-center font-semibold ">
        {t("panel-heading")}
      </h1>
      <div className="flex flex-col lg:flex-row gap-3">
        <div className="flex justify-center">
          <img className="w-3/4" src="/cooking-rice.webp" alt="cooking rice" />
        </div>
        <div className="my-12 flex flex-col justify-center lg:justify-start">
          <Media heading={t("panel-1")} icon_src="baozi-01" />
          <Media heading={t("panel-2")} icon_src="jitui-01" />
          <Media heading={t("panel-3")} icon_src="kele-01" />
        </div>
      </div>
    </div>
  );
};

export default Panel;
