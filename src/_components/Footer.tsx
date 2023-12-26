import Logo from "./Logo";
import { CollapseHeader, CollapseBody } from "./Collapse";
import style from "./Collapse.module.css";
import { useState } from "react";
import { Trans } from "react-i18next";

const Footer = () => {
  const [aboutExpanded, setAboutExpanded] = useState(true);
  const [contactExpanded, setContactExpanded] = useState(true);
  const [socialExpanded, setSocialExpanded] = useState(true);
  return (
    <>
      <footer className="mt-24 relative">
        <div
          className="pointer-events-none absolute -top-64 left-0 -z-10 h-[350px]
  w-full bg-stone-950"
        />
        <div className="mx-24 y-24 flex flex-row items-center max-md:flex-col-reverse">
          <div className="shrink">
            <Logo />
          </div>
          <div className="grow ml-10 flex max-md:flex-col gap-3">
            <div
              className={`${
                aboutExpanded ? "" : style.collapse__Expanded
              } basis-1/3`}
            >
              <div className="flex items-center gap-3">
                <h2 className="text-slate-50 text-2xl font-semibold">About</h2>
                <CollapseHeader
                  togglerExpanded={setAboutExpanded}
                  state={aboutExpanded}
                />
              </div>
              <CollapseBody items={["Our Mission", "Our Value", "About Us"]} />
            </div>
            <div
              className={`${
                contactExpanded ? "" : style.collapse__Expanded
              } basis-1/3`}
            >
              <div className="flex items-center gap-3">
                <h2 className="text-slate-50 text-2xl font-semibold">
                  <Trans i18nKey="author"></Trans>
                </h2>
                <CollapseHeader
                  togglerExpanded={setContactExpanded}
                  state={contactExpanded}
                />
              </div>
              <CollapseBody items={["Email", "Location", "Time"]} />
            </div>
            <div
              className={`${
                socialExpanded ? "" : style.collapse__Expanded
              } basis-1/3`}
            >
              <div className="flex items-center gap-3">
                <h2 className="text-slate-50 text-2xl font-semibold">
                  Social Media
                </h2>
                <CollapseHeader
                  togglerExpanded={setSocialExpanded}
                  state={socialExpanded}
                />
              </div>
              <CollapseBody items={["Wechat", "Telegram", "Email"]} />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
