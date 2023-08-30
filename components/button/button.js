import Link from "next/link";
import styles from "./button.module.css";

const Button = ({ text, path }) => {
  return (
    <div className={styles.roundedButtonContainer}>
      <Link className={styles.roundedButton} href={path}>
        {text}
      </Link>
    </div>
  );
};

export default Button;
