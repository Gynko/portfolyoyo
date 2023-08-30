import { useState, useEffect, useRef } from "react";
import styles from "./menuIconMobile.module.css";

export default function MenuIconMobile() {
  const [isActive, setIsActive] = useState(false);
  const dropdownRef = useRef(null);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav ref={dropdownRef} className={styles.nav}>
      <button
        className={styles.menuIcon}
        onClick={handleClick}
        aria-label="Toggle Menu"
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
      <ul className={`${styles.dropdownMenu} ${isActive ? styles.active : ""}`}>
        <li className={styles.dropdownLink}>
          <a href="#">Link 1</a>
        </li>
        <li className={styles.dropdownLink}>
          <a href="#">Link 2</a>
        </li>
        <li className={styles.dropdownLink}>
          <a href="#">Link 3</a>
        </li>
      </ul>
    </nav>
  );
}
