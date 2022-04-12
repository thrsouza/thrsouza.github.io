import styles from "./styles.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <span>Copyright © {new Date().getFullYear()} - Thiago Souza</span>
    </footer>
  );
}
