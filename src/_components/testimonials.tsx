const Testimonials = () => {
  return (
    <div>
      <div className="p-12 shadow-md rounded-lg ">
        <div className="grid lg:grid-cols-2 md:grid-cols-1">
          <div className="relative">
            <img className="w-full" src="images/rice.jpg" alt="fried rice" />
            <span
              className="absolute -right-8 top-1/3 inline-flex w-16 h-16
              justify-center items-center text-5xl 
              rounded-full bg-red-500 text-violet-700"
            >
              “
            </span>
          </div>
          <div className="flex-1 relative">
            <p className="italic columns-auto">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
            <div className="justify-end">
              <span className="bold">Jhone Lumeo</span>
              <span className="block">Mosh Company CEO</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
