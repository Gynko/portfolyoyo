import Link from "next/link";
import styles from "./buttonLink.module.css";

const ButtonLink = ({ text, path }) => {
  return (
    <div className={styles.roundedButtonContainer}>
      <Link className={styles.roundedButton} href={path}>
        {text}
      </Link>
    </div>
  );
};

export default ButtonLink;
