import { Heading1 } from "@/components/Heading";

import { HeaderType } from "@/@types/containers/Header";

import styles from "./styles.module.css";

export function Header({ navigation }: HeaderType) {
  const optionHandleClick = (event: any) => {
    event.preventDefault();
    const [, sectionId] = event.target.href.split("#");

    const headerElement = document.querySelector("header");
    const sectionElement = document.getElementById(sectionId);

    if (sectionElement && headerElement) {
      var topElement = sectionElement.offsetTop - headerElement.offsetHeight;
      window.scroll({ top: topElement, behavior: "smooth" });
    }
  };

  return (
    <header className={styles.header}>
      <div>
        <Heading1 text="TS" />
        <nav>
          <ul>
            {navigation.map((option, index) => (
              <li key={index}>
                <a href={`#${option.id}`} onClick={optionHandleClick}>
                  {option.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
