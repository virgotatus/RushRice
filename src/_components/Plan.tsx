import PayCard from "./PayCard";

const Plan = () => {
  return (
    <div
      data-aos="fade-up"
      className="mt-60 flex flex-col gap-24 lg:gap-12 lg:flex-row items-center justify-center"
    >
      <PayCard
        plan="Dish"
        price={20}
        description="Try Try. give me a bite"
        features={["Fried Rice", "Great Beef", "fantacy porper"]}
      />
      <PayCard
        plan="Package"
        price={30}
        popular={true}
        description="Easy start on the cloud"
        features={["Rice or Noodles", "Fish Cake", "Coke Cola"]}
      />
      <PayCard
        plan="All in one Plus"
        price={50}
        description="All in one universe"
        features={[
          "Fired Rice",
          "Fried Dried Noodles",
          "Fish Cake",
          "Coke Cola",
        ]}
      />
    </div>
  );
};

export default Plan;
