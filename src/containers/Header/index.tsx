import { useState } from 'react'
import { Heading1 } from "@/components/Heading";

import { HeaderType } from "@/@types/containers/Header";

import styles from "./styles.module.css";

export function Header({ navigation }: HeaderType) {
  const [showMenu, setShowMenu] = useState<boolean>(false)

  const optionHandleClick = (event: any) => {
    event.preventDefault();
    const [, sectionId] = event.target.href.split("#");

    const headerElement = document.querySelector("header");
    const sectionElement = document.getElementById(sectionId);

    if (sectionElement && headerElement) {
      var topElement = sectionElement.offsetTop - headerElement.offsetHeight;
      window.scroll({ top: topElement, behavior: "smooth" });
    }

    if (showMenu) {
      setShowMenu(false)
    }
  };

  return (
    <header className={styles.header}>
      <div>
        <Heading1 text="TS" />
        <nav className={showMenu ? styles.show : ''}>
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
        <button
          type='button'
          onClick={() => {
            setShowMenu(!showMenu)
          }}
        >
          <img
            src="/assets/icons/menu.svg"
            height={28}
            width={28}
            alt="Menu"
          />
        </button>
      </div>
    </header>
  );
}
