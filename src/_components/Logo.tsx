import { useTranslation } from "react-i18next";

const Logo = () => {
  const { t } = useTranslation();
  return (
    <span className="w-60 my-6 flex justify-center">
      <svg className="w-[80px] h-[40px] rounded-xl">
        <use href="/svg_sprite.svg#logo-bowl"></use>
      </svg>
      <h1 className="text-3xl mx-3 my-auto font-semibold whitespace-nowrap text-slate-50">
        {t("title")}
      </h1>
    </span>
  );
};

export default Logo;
