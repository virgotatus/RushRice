import style from "./animation.module.css";

const Animation = () => {
  return (
    <div>
      <div className={style.door}>
        <div className={style.doorPanel + " " + style.doorPanelLeft}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ut
          esse distinctio vel molestias rerum necessitatibus, sequi quas!
          Perferendis, facilis.
        </div>
        <div className={style.doorPanel + " " + style.doorPanelRight}>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ut
          esse distinctio vel molestias rerum necessitatibus, sequi quas!
          Perferendis, facilis.
        </div>
      </div>
      <div className={style.popBox}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ullam!
      </div>
      <div className={style.square}></div>
    </div>
  );
};

export default Animation;
