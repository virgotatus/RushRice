const Testimonial = () => {
  return (
    <div className="my-48 px-12 py-24 shadow-2xl rounded-lg ">
      <div className="grid lg:grid-cols-2 md:grid-cols-1">
        <div className="relative">
          <img className="w-full" src="/showcase.jpg" alt="fried rice" />
          <span
            className="absolute -right-8 top-1/3 inline-flex w-16 h-16
              justify-center items-center text-5xl 
              rounded-full bg-red-500 text-violet-700"
          >
            “
          </span>
        </div>
        <div className="flex-1 ml-8">
          <p className="my-6 font-light italic columns-auto">
            "太好吃了太好吃了.太好吃了太好吃了.太好吃了太好吃了.太好吃了太好吃了.太好吃了太好吃了.太好吃了太好吃了.太好吃了太好吃了.太好吃了太好吃了.太好吃了太好吃了."
          </p>
          <div className="justify-end mt-12">
            <span className="bold">Jeffrey 面包 Matt 等118位群友</span>
            <span className="block">
              <span className="text-sky-700 font-extrabold">———</span>{" "}
              龙虎饭馆微信群、上海财经大学研究生公寓楼
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
