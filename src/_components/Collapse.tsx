import { useState } from "react";
import style from "./collapse.module.css";
interface Props {
  heading: string | null;
  items: string[];
}
const Collapse = ({ heading, items }: Props) => {
  const [expanded, setExpanded] = useState(true);
  return (
    <nav>
      <div
        className={`${style.navbar} ${
          expanded ? "" : style.collapse__Expanded
        }`}
      >
        <header className={style.navHeader}>
          <h2 className="m-3">{heading}</h2>
          <div
            className={style.collapseToggler}
            onClick={() => {
              setExpanded(!expanded);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-labelledby="Hamburger321250"
              role="img"
              viewBox="0 0 24 24"
              color="currentColor"
              fill="currentColor"
              width="20px"
              height="20px"
            >
              <title id="Hamburger321250">Hamburger</title>
              <path
                fill="#191919"
                d="M21.882 4a1.618 1.618 0 0 1 .095 3.233l-.095.003H1.618a1.618 1.618 0 0 1-.095-3.233L1.618 4h20.264ZM21.882 11a1.618 1.618 0 0 1 .095 3.233l-.095.003H1.618a1.618 1.618 0 0 1-.095-3.233L1.618 11h20.264ZM21.882 18a1.618 1.618 0 0 1 .095 3.233l-.095.003H1.618a1.618 1.618 0 0 1-.095-3.233L1.618 18h20.264Z"
              ></path>
            </svg>
          </div>
        </header>
        <body className={style.navContanter}>
          <ul className={style.navList}>
            {items.map((item) => (
              <li className="mt-3">
                <a href="#" className="hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </body>
      </div>
    </nav>
  );
};

export default Collapse;
