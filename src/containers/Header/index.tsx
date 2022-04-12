import { useState, useEffect } from "react";
import { Heading1 } from "@/components/Heading";

import { HeaderType } from "@/@types/containers/Header";

import styles from "./styles.module.scss";

export function Header({ navigation }: HeaderType) {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections: NodeListOf<HTMLElement> =
        document.querySelectorAll("main#app > section");

      const options: NodeListOf<HTMLElement> =
        document.querySelectorAll("nav > ul > li");

      let activeIndex = 0;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 76) {
          activeIndex = index;
        }
      });

      options.forEach((option, index) => {
        option.removeAttribute("active");
        if (activeIndex === index) {
          option.setAttribute("active", "");
        }
      });
    };

    handleScroll();
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      setShowMenu(false);
    }
  };

  return (
    <header className={styles.header}>
      <div>
        <Heading1 text="TS" />
        <nav className={showMenu ? styles.show : ""}>
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
          type="button"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <i className="icon-menu" />
        </button>
      </div>
    </header>
  );
}
