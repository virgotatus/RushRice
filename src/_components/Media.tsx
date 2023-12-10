interface MediaProps {
  heading: string;
  icon_src: string;
}

const Media = ({ heading, icon_src }: MediaProps) => {
  return (
    <div className="flex flex-row">
      <svg className="flex-grow w-[100px] relative -top-14">
        <use href={`/svg_sprite.svg#${icon_src}`}></use>
      </svg>
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
