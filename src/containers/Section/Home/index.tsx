import { SectionType } from "@/@types/containers/Section";
import { Heading1 } from "@/components/Heading";

import socialData from "@/data/social";

import styles from "./styles.module.css";

export function Home({ id }: SectionType) {
  return (
    <section id={id} className={styles.homeSection}>
      <img
        src="/assets/images/banner/logo.svg"
        alt="Thiago Souza"
        className={styles.logo}
        height="148"
        width="184"
      />
      <Heading1 text="Thiago Souza" />
      <img
        src="/assets/images/banner/subtitle.svg"
        alt="Full Stack Developer"
        className={styles.subTitle}
        height="34"
        width="360"
      />
      <ul>
        {socialData.map((item, index) => (
          <li key={index}>
            <a href={item.href} target="_blank">
              <img src={item.icon} alt={item.name} height="28" width="28" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Home;
