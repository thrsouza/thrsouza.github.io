import { SectionType } from "@/@types/containers/Section";
import { Heading2 } from "@/components/Heading";
import { Link } from "@/components/Link";

import portfolioData from "@/data/portfolio";

import styles from "./styles.module.css";

export function Portfolio({ id, title }: SectionType) {
  return (
    <section id={id} className={styles.portfolioSection}>
      <div>
        <Heading2 text={title} />
        <div>
          {portfolioData.map((item, index) => (
            <article
              key={index}
              style={{ backgroundImage: `url(${item.banner})` }}
            >
              <div className={styles.hoverContent}>
                <img src={item.logo} alt={item.name} height="64" width="64" />
                <strong>{item.name}</strong>
                <Link text="Access Page" href={item.href} size="small" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
