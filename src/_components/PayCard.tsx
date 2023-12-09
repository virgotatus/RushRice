import Badge from "./Badge";
import style from "./PayCard.module.css";
interface Props {
  plan: string;
  price: number;
  description: string;
  features: string[];
  popular?: boolean;
}

const PayCard = ({ plan, price, description, features, popular }: Props) => {
  return (
    <div className={(popular ? style.popular : "") + " w-2/3 shadow-lg"}>
      <div
        id="pay_card_header"
        className={
          `${style.payCardHeader} h-80 rounded-md flex flex-col justify-center` +
          (popular ? " bg-[--color-primary]" : " bg-[--color-headings]")
        }
      >
        <div className="ml-12">
          <p className="font-bold text-white">{plan}</p>
          <div className="inline-flex items-center gap-3 mt-5 mb-5">
            <span className="text-7xl text-white">￥{price} </span>
            <span className="text-white">/month </span>
            <span className=" text-[12px] px-2 py-1">
              <Badge text="20% OFF" />
            </span>
          </div>
          <p className="text-slate-300 opacity-60 text-md whitespace-nowrap">
            {description}
          </p>
        </div>
      </div>
      <div id="pay_card_body" className=" m-12 flex flex-col">
        <div>
          <ul className={style.payCardList}>
            {features.map((feature) => (
              <li className={style.payCardListItem}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="m-12 w-full mb-16 items-center">
          <button className="border-2 border-[--color-headings] rounded-full px-32 py-4 uppercase">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PayCard;
