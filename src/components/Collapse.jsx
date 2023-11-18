import React, { useState, useRef } from "react";
import styles from "../styles/components/_collapse.module.scss";

const Collapse = ({ title, children, housingStyle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [arrowDown, setArrowDown] = useState(false);
  const contentRef = useRef();
  const toggle = () => {
    setIsOpen(!isOpen);
    setArrowDown(!arrowDown);
  };

  return (
    <div className={styles.collapse}>
      <div
        className={`${styles.collapseContainer} ${
          housingStyle && styles.housingStyle
        }`}
      >
        <div
          className={`${styles.cover} ${housingStyle && styles.housingStyle}`}
        >
          {title && (
            <h3
              className={`${styles.category} ${
                housingStyle && styles.housingStyle
              }`}
            >
              {title}
            </h3>
          )}
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
        <div
          className={`${styles.contentContainer} ${
            housingStyle && styles.housingStyle
          }`}
        >
          <div
            className={`${styles.content} ${
              housingStyle && styles.housingStyle
            }`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
