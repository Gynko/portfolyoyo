import Link from "next/link";
import MenuIconMobile from "../menu-icon-mobile/menuIconMobile";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={`${styles.logo} ${styles.li}`}>
            <Link href="/" className={styles.logo}>
              Yoann Godiet
              <span className={styles.spanLogo}>Portfolio</span>
            </Link>
          </li>
          <li className={styles.liDesktop}>
            <Link href="/"> Home</Link>
          </li>
          <li className={styles.liDesktop}>
            <Link href="/resume"> Resume</Link>
          </li>
          <li className={styles.liDesktop}>
            <Link href="/contact"> Contact</Link>
          </li>
          <li className={styles.menuMobile}>
            <MenuIconMobile></MenuIconMobile>
          </li>
        </ul>
      </nav>
    </header>
  );
}
