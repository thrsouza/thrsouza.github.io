import { ButtonType } from "@/@types/components/Button";

import styles from "./styles.module.css";

export function Button({ text, size, submit, disabled }: ButtonType) {
  return (
    <button
      type={submit ? "submit" : "button"}
      className={[
        styles.button,
        size === "large" ? styles.large : styles.small,
        disabled ? styles.disabled : "",
      ].join(" ")}
    >
      {text}
    </button>
  );
}
