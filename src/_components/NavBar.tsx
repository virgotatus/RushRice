import { useState } from "react";
import style from "./Collapse.module.css";
import Logo from "./Logo";

const NavBar = () => {
  const [expanded, setExpanded] = useState(true);
  const navItems = [
    "Home",
    "Place&Time",
    "Menu",
    "Opration",
    "Document",
    "About",
  ];
  return (
    <div className={style.navfix}>
      <nav
        className={`${style.navbar} ${
          expanded ? "" : style.collapse__Expanded
        }`}
      >
        <header className={style.navHeader}>
          <Logo />
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
        <section className={style.navContanter}>
          <ul className={style.navList}>
            {navItems.map((item) => (
              <li className="my-3 mx-0">
                <a
                  href="#"
                  className="flex justify-end hover:underline font-normal text-xl text-slate-50"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </nav>
    </div>
  );
};

export default NavBar;
