import LinkArrow from "./(ex)/linkArrow";
import FeatureCard from "./FeatureCard";

const Feature = () => {
  return (
    <>
      <div className="flex flex-col bg-orange-50 lg:flex-row gap-6 mt-48">
        <section className="flex flex-col justify-start">
          <img
            src="/bangbangtang-01.svg"
            width="50px"
            className="bg-slate-200 rounded-xl p-2"
          ></img>
          <h1 className="text-7xl text-[--color-headings] font-bold leading-snug">
            Super good to Eat
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
            <img src="/Menu.png" alt=" Menu" />
            <img
              src="/Milanote.png"
              alt=" Melanote"
              className="inline-block top-[40%] -right-[7%] absolute w-[240px]"
            />
          </div>
        </section>
      </div>
      <FeatureCard
        heading="Nice Cheap Discount"
        icon_src="/baomihua-01.svg"
        direction={false}
        img_src="/cooking-rice.gif"
      />
      <FeatureCard
        heading="Nice People, Talk small"
        icon_src="/baozi-01.svg"
        direction={true}
        img_src="/beer.jpg"
      />
    </>
  );
};

export default Feature;
