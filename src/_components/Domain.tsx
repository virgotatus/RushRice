const Domain = () => {
  return (
    <div className="mt-96">
      <section className="text-center">
        <h1 className="text-[--color-headings] text-5xl font-semibold">
          {" "}
          Starting at ￥20 per Dish
        </h1>
        <p className="text-slate-700 my-8">
          {" "}
          beef, rice, Sichuan bean , Wanderful porper gam, fantastic smell
          <br></br> 移动炒饭摊，城市会客厅
        </p>
      </section>
      <section className="flex justify-center flex-col text-center">
        <div className="border-0 shadow-lg rounded-full w-3/4 flex mx-auto">
          <input
            placeholder="www..."
            className="px-8 flex-1 outline-0 rounded-full focus:border-0"
          ></input>
          <button
            className="rounded-full fl
               bg-[--color-accent] 
               px-12 py-4 uppercase
              text-[white]
              "
          >
            <div className="flex flex-nowrap items-center">
              <svg
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                fill="rgb(195,25,26)"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.1"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM11.5 7.75C9.42893 7.75 7.75 9.42893 7.75 11.5C7.75 13.5711 9.42893 15.25 11.5 15.25C13.5711 15.25 15.25 13.5711 15.25 11.5C15.25 9.42893 13.5711 7.75 11.5 7.75Z"
                  fill="currentColor"
                />
                <path
                  d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <path
                  d="M14 14L16 16"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 11.5C15 13.433 13.433 15 11.5 15C9.567 15 8 13.433 8 11.5C8 9.567 9.567 8 11.5 8C13.433 8 15 9.567 15 11.5Z"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
              <span>Search</span>
            </div>
          </button>
        </div>
        <div className="mt-12">
          <ul className="inline-grid gap-3 grid-cols-2 lg:grid-cols-4">
            <li>
              <a href="$" className="btn__secondary">
                Fried Rice
              </a>
            </li>
            <li>
              <a href="#" className="btn__secondary">
                Fried Dried Noodles
              </a>
            </li>
            <li>
              <a href="#" className="btn__secondary">
                Wenzhou Fish Cake
              </a>
            </li>
            <li>
              <a href="#" className="btn__secondary">
                Coke Cola & Beer
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Domain;
