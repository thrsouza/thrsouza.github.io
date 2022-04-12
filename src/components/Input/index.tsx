import { InputType } from "@/@types/components/Input";

import styles from "./styles.module.scss";

export function Input({ name, type, label, required, placeholder }: InputType) {
  if (type === "multiline") {
    return (
      <>
        <label>{label}</label>
        <textarea
          name={name}
          placeholder={placeholder}
          autoComplete="off"
          required={required}
          rows={10}
          className={styles.textArea}
        ></textarea>
      </>
    );
  }

  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        autoComplete="off"
        required={required}
        className={styles.input}
      />
    </>
  );
}
