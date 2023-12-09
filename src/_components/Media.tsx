interface MediaProps {
  heading: string;
}

const Media = ({ heading }: MediaProps) => {
  return (
    <div className="flex flex-row">
      <img
        className="w-16 f-1 relative -top-14"
        src="/binggan-01.svg"
        alt="cooking rice"
      />
      <div>
        <h1 className="text-3xl text-slate-100 p-3">{heading}</h1>
        <p className="text-xl text-slate-400 p-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quibusdam, quia, quae voluptates voluptatibus consequuntur
          quos voluptate quod doloribus quas. Quisquam voluptatum, quibusdam,
          quia, quae voluptates voluptatibus consequuntur quos voluptate quod
          doloribus quas.
        </p>
      </div>
    </div>
  );
};

export default Media;
