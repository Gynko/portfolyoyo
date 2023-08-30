import styles from "../styles/Home.module.css";
import imageDev from "../public/images/dev-midjourney.webp";
import Image from "next/image";
import Button from "../components/button/button";

export default function Home() {
  return (
    <section aria-labelledby="main-heading" className={styles.section}>
      <h1 id="main-heading" className={`${styles.textCommon} ${styles.h1}`}>
        Yoann Godiet
      </h1>
      <main>
        <p
          className={`${styles.textCommon} ${styles.p1} ${styles.pLineHeight}`}
        >
          Front-end developer
        </p>
        <p
          className={`${styles.textCommon} ${styles.p2} ${styles.pLineHeight}`}
        >
          Backend Lover
        </p>

        <p
          className={`${styles.textCommon} ${styles.p3} ${styles.pLineHeight}`}
        >
          Productivity Agile & AI
        </p>
        <p
          className={`${styles.textCommon} ${styles.p4} ${styles.pLineHeight}`}
        >
          2D & 3D Art
        </p>
      </main>
      <Image
        src={imageDev}
        alt="Picture of developer surrounded by apps, wires, clouds"
        width={250}
        height={250}
      />
      <div className={styles.buttonContainer}>
        <Button text="Resume" path="/resume" />
        <Button text="Contact" path="/contact" />
      </div>
    </section>
  );
}
