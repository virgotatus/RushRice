const Box = () => {
  return (
    <div
      id="boxes"
      className="border-4 border-gray-300
      "
    >
      <div
        id="box"
        className=" w-[10em] h-[10vh] bg-[gold]  border-t-4
        border-solid border-orange-300"
      />
      <div
        id="box"
        className="w-[10em] h-[10vh] bg-red-300  border-t-4 
        fixed
        right-0 top-0 z-10
        border-solid border-orange-300"
      ></div>
      <div
        id="box"
        className="w-[10em] h-[10vh] bg-blue-300  border-t-4
        border-solid border-orange-300 "
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          deserunt.
        </p>
      </div>
    </div>
  );
};

export default Box;
