import style from "./Collapse.module.css";
interface Props {
  togglerExpanded: (state: boolean) => void;
  state: boolean;
}
const CollapseHeader = ({ togglerExpanded, state }: Props) => {
  let collapseState = state;
  return (
    <div
      className="rotate-90 text-stone-50 md:hidden"
      onClick={() => {
        collapseState = !state;
        togglerExpanded(collapseState);
      }}
    >
      <span className="rounded-full aspect-square bg-slate-50">
        <span className="text-black">&raquo;</span>
      </span>
    </div>
  );
};

const CollapseBody = ({ items }: { items: string[] }) => {
  return (
    <body className={style.footerContanter}>
      <ul className="mt-2 flex flex-col gap-0">
        {items.map((item) => (
          <li className="inline-block ">
            <a href="#" className="m-0 text-base text-slate-50 hover:underline">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </body>
  );
};

export { CollapseHeader, CollapseBody };
