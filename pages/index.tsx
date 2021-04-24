import styles from '@styles/Home.module.css'

const Home = () => {
  return (
    <section className="min-h-screen w-full flex items-center">
      <div className="max-w-screen-2xl px-4 w-full mx-auto">
        <div>
        <h1 className="text-7xl leading-normal mb-4 font-black font-main text-black uppercase">
        Web <br/> developer <br/> ui designer
      </h1>
      <p className="text-xl text-gray-400 mb-10 font-main font-bold capitalize">
        front-end reactjs developer
      </p>
      <button className={`${styles.btn} relative px-6 py-2 font-semibold text-xl font-main capitalize rounded bg-primary`}>
        view work
      </button>
        </div>
      </div>
    </section>
  )
}

export default Home
