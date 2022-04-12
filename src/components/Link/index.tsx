import { LinkType } from "@/@types/components/Link";

import styles from "./styles.module.scss";

export function Link({ text, href, size, disabled }: LinkType) {
  return (
    <a
      href={href}
      target="_blank"
      className={[
        styles.link,
        size === "large" ? styles.large : styles.small,
        disabled ? styles.disabled : "",
      ].join(" ")}
    >
      {text}
    </a>
  );
}
