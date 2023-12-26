import PayCard from "./PayCard";
import { useTranslation } from "react-i18next";

const Plan = () => {
  const { t } = useTranslation();
  return (
    <div
      data-aos="fade-up"
      className="mt-60 flex flex-col gap-24 lg:gap-12 lg:flex-row items-center justify-center"
    >
      <PayCard
        plan={t("plan-1")}
        price={20}
        description={t("plan-try")}
        features={[
          t("plan-try-feature1"),
          t("plan-try-feature2"),
          t("plan-try-feature3"),
        ]}
      />
      <PayCard
        plan={t("plan-2")}
        price={30}
        popular={true}
        description={t("plan-package")}
        features={[
          t("plan-package-feature1"),
          t("plan-package-feature2"),
          t("plan-package-feature3"),
        ]}
      />
      <PayCard
        plan={t("plan-3")}
        price={50}
        description={t("plan-all")}
        features={[
          t("plan-all-feature1"),
          t("plan-all-feature2"),
          t("plan-all-feature3"),
          t("plan-all-feature4"),
        ]}
      />
    </div>
  );
};

export default Plan;
