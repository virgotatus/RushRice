import LinkArrow from "./(ex)/linkArrow";
import FeatureCard from "./FeatureCard";

const Feature = () => {
  return (
    <>
      <div className="flex flex-col bg-orange-50 lg:flex-row gap-6 mt-48">
        <section className="flex flex-col justify-start mt-24">
          <svg className="w-[50px] h-[50px] bg-slate-200 rounded-xl p-2">
            <use href="/svg_sprite.svg#niupai-01"></use>
          </svg>
          <h1 className="text-7xl text-[--color-headings] font-bold leading-snug">
            Super amazing to Taste
          </h1>
          <p className="text-3xl text-slate-400 mb-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
            architecto iste vel repudiandae. 温州鱼饼牛肉炒饭炒粉干啤酒可乐
          </p>
          <LinkArrow />
        </section>
        <section className="mt-24">
          <div className="border-dotted border-sky-200 border-8 relative shadow-2xl">
            <img src="/Menu.webp" alt=" Menu" />
            <img
              src="/Milanote.webp"
              alt=" Melanote"
              className="inline-block top-[40%] -right-[7%] absolute w-[240px]"
            />
          </div>
        </section>
      </div>
      <FeatureCard
        heading="Nice Cheap Discount"
        icon_src="jiandan-01"
        direction={false}
        img_src="/cooking-rice.gif"
        description="进群抽红包手气减五元,快递小哥减五元。"
      />
      <FeatureCard
        heading="Nice People, Talk small"
        icon_src="pijiu-01"
        direction={true}
        img_src="/beer.webp"
        description="有趣的人,有趣的事,有趣的饭,有趣的酒。老板特别热情，特别爱分享生活，来的人也很有趣，蹦蹦跳跳快快乐乐吃饭"
      />
    </>
  );
};

export default Feature;
