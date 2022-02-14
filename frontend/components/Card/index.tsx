import Image from "next/image";
import styles from "./cardstyle.module.scss";

const Card = () => {
  return (
    <div className={styles.card}>
      <h1>.:Monkey:.</h1>
      <Image
        src="/../public/img/Untitled.png"
        alt="asd"
        width="240px"
        height="300px"
      />
      <button>Buy</button>
      <p>
        Price: <span>$50</span>
      </p>
      <article>
        Artist: John Denver
        <br />
        Created: 2022-02-11
      </article>
    </div>
  );
};

export default Card;
