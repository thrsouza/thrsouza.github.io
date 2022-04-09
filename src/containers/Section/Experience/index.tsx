import { ExpericenceDataType } from "@/@types/data/experience";
import { SectionType } from "@/@types/containers/Section";
import { Heading2 } from "@/components/Heading";

import experieceData from "@/data/experience";

import styles from "./styles.module.css";

const leftList: ExpericenceDataType[] = [];
const rightList: ExpericenceDataType[] = [];

experieceData.forEach((item, index, array) => {
  if (index < array.length / 2) {
    leftList.push(item);
  } else {
    rightList.push(item);
  }
});

export function Experience({ id, title }: SectionType) {
  return (
    <section id={id} className={styles.experienceSection}>
      <div>
        <Heading2 text={title} />
        <div>
          <ul>
            {leftList.map((item, index) => (
              <li key={index}>
                <small>{item.period}</small>
                <strong>{item.enterprise}</strong>
                <span>{item.position}</span>
              </li>
            ))}
          </ul>
          <ul>
            {rightList.map((item, index) => (
              <li key={index}>
                <small>{item.period}</small>
                <strong>{item.enterprise}</strong>
                <span>{item.position}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
