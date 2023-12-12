import { SideTitle } from "./constants";

const Callout = () => {
  return (
    <div className="z-10 border-0 w-full h-60 rounded-md bg-blue-500 flex flex-col sm:flex-row">
      <div className="grow">
        <h1 className="m-8 text-4xl text-white font-bold">
          Ready to get started?
        </h1>
        <p className="m-8 text-2xl max-sm:text-base text-white">{SideTitle}</p>
      </div>
      <div className="flex items-center justify-center p-10">
        <button className="bg-sky-400 text-xl font-semibold uppercase rounded-full text-slate-100 px-12 py-3">
          Buy One
        </button>
      </div>
    </div>
  );
};

export default Callout;
