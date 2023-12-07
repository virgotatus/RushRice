import styles from "./grid.module.css";

const Grid = () => {
  return (
    <>
      <div className={styles.cusGrid}>
        <div className={` bg-blue-500`}>A</div>
        <div className={` bg-orange-500 "`}>B</div>
        <div className={` bg-red-500 "`}>C</div>
      </div>
      <div className={styles.cusGrid}>
        <div className={`${styles.header} bg-blue-500`}>A</div>
        {<div className={`${styles.sidebar} bg-orange-500 "`}>B</div>}
        <div className={`${styles.main} bg-gold"`}>D</div>
        <div className={`${styles.footer}  bg-red-500 "`}>C</div>
      </div>
    </>
  );
};

export default Grid;
