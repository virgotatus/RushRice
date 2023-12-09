import Media from "./Media";
import style from "./Panel.module.css";

const Panel = () => {
  return (
    <div className="mx-0 my-24 block">
      <div className={style.panelBg} />
      <h1 className="py-24 text-5xl text-slate-100 flex justify-center font-semibold ">
        User-firendly Control Panel
      </h1>
      <div className="flex flex-col lg:flex-row gap-3">
        <div className="flex justify-center">
          <img className="w-3/4" src="/cooking-rice.jpg" alt="cooking rice" />
        </div>
        <div className="my-12 flex flex-col justify-center lg:justify-start">
          <Media heading="Manage your Menu" />
          <Media heading="Strong Power" />
          <Media heading="Give and Take" />
        </div>
      </div>
    </div>
  );
};

export default Panel;
