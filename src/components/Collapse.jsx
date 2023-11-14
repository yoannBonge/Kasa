import React, { useState, useRef } from "react";
import styles from "../styles/components/_collapse.module.scss";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [arrowDown, setArrowDown] = useState(false);
  const contentRef = useRef();
  const toggle = () => {
    setIsOpen(!isOpen);
    setArrowDown(!arrowDown);
  };

  return (
    <div className={styles.collapse}>
      <div className={styles.collapseContainer}>
        <div className={styles.cover}>
          {title && <h3 className={styles.category}>{title}</h3>}
          <img
            className={`${styles.arrow} ${arrowDown && styles.reverseArrow}`}
            src='arrow.svg'
            alt='Flèche pour ouvrir/fermer le contenu'
            onClick={toggle}
          />
        </div>
      </div>
      <div
        className={styles.collapseContent}
        ref={contentRef}
        style={
          isOpen
            ? { height: contentRef.current.scrollHeight + "px" }
            : { height: "0px" }
        }
      >
        <div className={styles.contentContainer}>
          <p className={styles.content}>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Collapse;