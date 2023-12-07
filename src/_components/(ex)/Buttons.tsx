const Buttons = () => {
  return (
    <>
      <div className="flex justify-center ">
        <button
          className="w-full  rounded-full bg-[--color-accent]
        border-0 px-20 py-4 text-white uppercase
        "
        >
          get started
        </button>
      </div>
      <button
        className="flex justify-center rounded-full
    border-[--color-headings] px-20
    py-4 uppercase text-[--color-headings]
    outline whitespace-nowrap
    "
      >
        buy now
      </button>
      <button
        className="mt-8 flex justify-center rounded-full
     border-2 border-[--color-headings] bg-[--color-headings]
     px-20 py-4 uppercase
    text-[white]
    "
      >
        buy now
      </button>
      <button
        className="mt-8 flex justify-center rounded-full
     bg-[--color-secondary] 
     px-20 py-4 uppercase
    text-[white]
    "
      >
        get started
      </button>
    </>
  );
};

export default Buttons;
