import { useState } from "react";
import styles from "../Card/cardstyle.module.scss";

const Button = () => {
  const [purchased, setPurchased] = useState(false);
  if (purchased) {
    return (
      <button disabled className={styles.disabled}>
        Buy
      </button>
    );
  } else {
    return (
      <button
        onClick={() => {
          setPurchased(true);
        }}
      >
        Buy
      </button>
    );
  }
};

export default Button;
