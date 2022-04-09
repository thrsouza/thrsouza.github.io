import { HeadingType } from "@/@types/components/Heading";

import styles from "./styles.module.css";

export function Heading1({ text }: HeadingType) {
  return (
    <h1 className={styles.heading1}>
      {text}
      <span>.</span>
    </h1>
  );
}

export function Heading2({ text }: HeadingType) {
  return <h2 className={styles.heading2}>{text}</h2>;
}
