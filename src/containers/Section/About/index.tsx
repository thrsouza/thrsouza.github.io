import { SectionType } from "@/@types/containers/Section";
import { Heading2 } from "@/components/Heading";

import technologiesData from "@/data/technologies";

import styles from "./styles.module.css";

export function About({ id, title }: SectionType) {
  return (
    <section id={id} className={styles.aboutSection}>
      <div>
        <Heading2 text={title} />
        <div className={styles.content}>
          <img
            src="/assets/images/profile.webp"
            alt="Thiago Souza"
            className={styles.avatar}
            height="148"
            width="148"
          />
          <div className={styles.description}>
            <h1>Hello, I'm Thiago Souza!</h1>
            <p>
              Working in the development area, always seeking to achieve the
              goals proposed by the company and, in parallel, I seek to improve
              myself and achieve professional growth, continuously maintaining
              commitment, agility and responsibility
              <span>.</span>
            </p>
            <p>
              In addition to coding, I enjoy listening to great music, watching
              movies / series and exploring new technologies
              <span>.</span>
            </p>
          </div>
        </div>
        <ul className={styles.footer}>
          {technologiesData.map((item, index) => (
            <li key={index}>
              <i className={item.icon} />
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
