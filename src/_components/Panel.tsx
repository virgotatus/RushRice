import Media from "./Media";
import style from "./Panel.module.css";

const Panel = () => {
  return (
    <div className="mx-0 my-24 block">
      <div className={style.panelBg} />
      <h1 className="py-24 text-5xl text-slate-100 flex justify-center font-semibold ">
        Customer-firendly Roadside Stands. Nice Steet Vendor.
      </h1>
      <div className="flex flex-col lg:flex-row gap-3">
        <div className="flex justify-center">
          <img className="w-3/4" src="/cooking-rice.webp" alt="cooking rice" />
        </div>
        <div className="my-12 flex flex-col justify-center lg:justify-start">
          <Media heading="Manage your Menu" icon_src="/baozi-01.svg" />
          <Media heading="Strong Power" icon_src="/jitui-01.svg" />
          <Media heading="Give and Take" icon_src="/kele-01.svg" />
        </div>
      </div>
    </div>
  );
};

export default Panel;
