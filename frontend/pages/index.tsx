import styles from "../styles/Home.module.scss";

const Home = () => {
  return (
    <div className={styles.homeWrapper}>
      <div className={styles.title}>
        <p>Welcome</p>
      </div>
      <div className={styles.bodyText}>
        <article>
          Hello, my name is Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Neque, quaerat dignissimos praesentium distinctio consectetur
          eos vitae enim sit officia maiores saepe! Quisquam aliquam, veniam
          nemo deserunt repellendus debitis quas! Incidunt. Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Quos, quisquam? Omnis aliquid
          rerum voluptatibus est corporis dolores sapiente ullam! Recusandae
          numquam quos alias eius excepturi aliquid quibusdam officiis fuga
          maiores?
        </article>
      </div>
      <div className={styles.shopbtn}>
        <button>Check out the shop</button>
      </div>
    </div>
  );
};
export default Home;
