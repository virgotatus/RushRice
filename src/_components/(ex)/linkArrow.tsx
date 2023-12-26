import style from "./linkArrow.module.css";
import { useTranslation } from "react-i18next";

const LinkArrow = () => {
  const { t } = useTranslation();
  return <div className={style.linkArrow}>{t("feature-learn")}</div>;
};

export default LinkArrow;
