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
          <div className="mr-48">
            <Logo />
          </div>
          <div className="flex-1 ml-10 flex flex-row">
            <div className="basis-1/3">
              <h2 className="text-slate-50 text-2xl font-semibold">About</h2>
              <ul className="list text-base flex flex-col underline text-slate-50">
                <li className="list__item">About Us</li>
                <li className="list__item">Our Mission</li>
                <li className="list__item">Our Vision</li>
              </ul>
            </div>
            <div className="basis-1/3">
              <h2 className="text-slate-50 text-2xl font-semibold">Contact</h2>
              <ul className="list text-base flex flex-col underline text-slate-50">
                <li className="list__item">Contact Us</li>
                <li className="list__item">Support</li>
                <li className="list__item">Locations</li>
              </ul>
            </div>
            <div className="basis-1/3">
              <h2 className="text-slate-50 text-2xl font-semibold">Social</h2>
              <ul className="list text-base flex flex-col underline text-slate-50">
                <li className="list__item">Facebook</li>
                <li className="list__item">Twitter</li>
                <li className="list__item">Instagram</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
