import LinkArrow from "./(ex)/linkArrow";

interface Props {
  heading: string;
  icon_src: string;
  img_src: string;
  direction?: boolean;
}

const FeatureCard = ({ heading, icon_src, img_src, direction }: Props) => {
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
      <section className="mt-24 flex flex-col justify-start">
        <img
          src={icon_src}
          width="50px"
          className="bg-slate-200 rounded-xl p-2"
        ></img>
        <h1 className="text-7xl text-[--color-headings] font-bold leading-snug">
          {heading}
        </h1>
        <p className="text-2xl text-slate-400 mb-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
          architecto iste vel repudiandae libero porro totam illo. Provident,
          culpa omnis.
        </p>
        <LinkArrow />
      </section>
      <section className="mt-24">
        <div className="border-dotted border-sky-200 border-8 relative shadow-2xl">
          <img src={img_src} alt=" Menu" />
        </div>
      </section>
    </div>
  );
};

export default FeatureCard;