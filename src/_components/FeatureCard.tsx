import LinkArrow from "./(ex)/linkArrow";

interface Props {
  heading: string;
  icon_src: string;
  img_src: string;
  direction?: boolean;
  description: string;
}

const FeatureCard = ({
  heading,
  icon_src,
  img_src,
  direction,
  description,
}: Props) => {
  return (
    <div
      className={
        " flex mt-48 bg-orange-50 " +
        `${
          direction
            ? "flex-col lg:flex-row gap-12"
            : "flex-col-reverse lg:flex-row-reverse gap-12"
        }`
      }
    >
      <section
        data-aos="fade-left"
        className="grow mt-24 flex flex-col justify-start"
      >
        <svg className="w-[50px] h-[50px] bg-slate-200 rounded-xl p-2">
          <use href={`/svg_sprite.svg#${icon_src}`}></use>
        </svg>
        <h1 className="text-7xl text-[--color-headings] font-bold leading-snug">
          {heading}
        </h1>
        <p className="text-3xl text-slate-400 mb-10">{description}</p>
        <LinkArrow />
      </section>
      <section data-aos="fade-right" className="mt-24 max-w-[600px] ">
        <div className="border-dotted border-sky-200 border-8 relative shadow-2xl">
          <img className="w-full " src={img_src} alt=" Menu" />
        </div>
      </section>
    </div>
  );
};

export default FeatureCard;
