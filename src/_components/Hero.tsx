const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <section
        className="mt-48 flex text-center flex-col
       gap-5 lg:justify-start"
      >
        <h1
          className="text-7xl text-slate-100 font-bold leading-snug
        "
        >
          Moving <span className="emphasis">Tricycle </span>
          with Cooking <span className="emphasis">Fried Rice</span>.<br></br>{" "}
          It's <span className="emphasis">City Living </span>Room.
        </h1>
        <p className="text-2xl text-slate-200">
          Transform freedom and love by fire, hustle and meals.<br></br> Warm
          stomach and heart on People way home.
        </p>
        <div className="mt-5">
          <button
            className=" bg-[--color-accent] w-fit
          border-0 px-12 py-4 rounded-full text-slate-50 uppercase"
          >
            buy one
          </button>
        </div>
      </section>
      <div className="flex items-center">
        <img src="/screen-removebg-preview.png" alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
