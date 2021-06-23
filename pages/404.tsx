import styles from "@styles/Utils.module.css";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center text-center dark:bg-dark-theme">
      <div>
        <h1
          className={`mb-10 md:text-8xl text-5xl text-red-500 dark:text-gray-100 font-bold font-main ${styles.stroke}`}
        >
          404
        </h1>
        <p className="text-xl font-bold font-main dark:text-primary mb-6">
          Page Not Found
        </p>
        <button
          className={`focus:outline-none col-start-2 mt-8 place-self-start relative self-start align-start px-6 py-2 font-semibold text-md font-main capitalize rounded bg-primary`}
        >
          <Link href="/">
            <a>Back Home</a>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
