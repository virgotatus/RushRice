import Logo from "./Logo";

const Footer = () => {
  return (
    <>
      <footer className="my-24 relative">
        <div
          className="pointer-events-none absolute -top-64 left-0 -z-10 h-[350px]
  w-full bg-stone-950"
        />
        <div className="mx-24 y-24 flex flex-row items-center">
          <div className="shrink">
            <Logo />
          </div>
          <div className="grow ml-10 flex">
            <div className="basis-1/3">
              <h2 className="text-slate-50 text-2xl font-semibold">About</h2>
              <ul className="list text-base flex flex-col  text-slate-50">
                <li className="list__item hover:underline">About Us</li>
                <li className="list__item hover:underline">Our Mission</li>
                <li className="list__item hover:underline">Our Vision</li>
              </ul>
            </div>
            <div className="basis-1/3">
              <h2 className="text-slate-50 text-2xl font-semibold">Contact</h2>
              <ul className="list text-base flex flex-col text-slate-50">
                <li className="list__item hover:underline">Contact Us</li>
                <li className="list__item hover:underline">Support</li>
                <li className="list__item hover:underline">Locations</li>
              </ul>
            </div>
            <div className="basis-1/3">
              <h2 className="text-slate-50 text-2xl font-semibold">Social</h2>
              <ul className="list text-base flex flex-col text-slate-50">
                <li className="list__item hover:underline">
                  Wechat: 18967834347
                </li>
                <li className="list__item hover:underline">Twitter</li>
                <li className="list__item hover:underline">Instagram</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
