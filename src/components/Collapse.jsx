import React, { useState, useRef } from "react";
import styles from "../styles/components/_collapse.module.scss";

const Collapse = ({ title, children, housingStyle }) => {
  ////////////////////////////////////////////////// STATE
  const [isOpen, setIsOpen] = useState(false);
  const [arrowDown, setArrowDown] = useState(false);
  const contentRef = useRef();
  const housingVersion = housingStyle ? styles.housingStyle : "";

  ////////////////////////////////////////////////// BEHAVIOR
  const toggle = () => {
    setIsOpen(!isOpen);
    setArrowDown(!arrowDown);
  };

  ////////////////////////////////////////////////// RENDER
  return (
    <div className={styles.collapse}>
      <div className={`${styles.collapseContainer} ${housingVersion}`}>
        <div className={`${styles.cover} ${housingVersion}`}>
          <h3 className={`${styles.category} ${housingVersion}`}>{title}</h3>
          <img
            className={`${styles.arrow} ${arrowDown && styles.reverseArrow}`}
            src='collapse-arrow.svg'
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
        <div className={`${styles.contentContainer} ${housingVersion}`}>
          <div className={`${styles.content} ${housingVersion}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
