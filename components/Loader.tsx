import styles from "@styles/Loader.module.css";

const Loader = ({ loading }) => {
  return (
    <ul
      className={`${
        loading ? `${styles.loading}` : styles.leave
      } fixed overflow-hidden top-0 left-0 w-full flex z-30 h-full  pointer-events-none`}
    >
      <li className={`bg-primary w-1/4 ${styles.list_item}`}></li>
      <li className={`bg-primary w-1/4 ${styles.list_item}`}></li>
      <li className={`bg-primary w-1/4 ${styles.list_item}`}></li>
      <li className={`bg-primary w-1/4 ${styles.list_item}`}></li>
      <div
        className={`${styles.loader} absolute top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
      >
        <p>l</p>
        <p>o</p>
        <p>a</p>
        <p>d</p>
        <p>i</p>
        <p>n</p>
        <p>g</p>
      </div>
    </ul>
  );
};

export default Loader;
