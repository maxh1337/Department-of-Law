import styles from "./DocumentPopup.css";
import stylesCar from "./carousel.module.scss";
import { useState } from "react";
import join from "../../../images/buttons/arrow.svg";

const DocumentPopup = ({ href, isVisible, closePopup, children }) => {
  let count;
  const [offset, setOffset] = useState(0);

  const PAGE_WIDTH = 288;

  const forward = () => {
    count = children.length;

    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE_WIDTH;

      const maxOffset = -(PAGE_WIDTH * (count - 1));

      return Math.max(newOffset, maxOffset);
    });
  };

  const backward = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + PAGE_WIDTH;
      return Math.min(newOffset, 0);
    });
  };

  return (
    <section
      className={
        isVisible
          ? "popup popup_type_image popup_opened"
          : "popup popup_type_image"
      }
      onClick={closePopup}
    >
      <figure className="popup__figure" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="popup__close-button popup__close-button_parent-corners_straight"
          onClick={() => console.log("wk")}
        />
        <div className={stylesCar.arrowsContainer}>
          <button onClick={backward}>
            <img alt="Arrow backward" src={join} className={stylesCar.arrow} />
          </button>
          <button onClick={forward}>
            <img alt="Arrow forward" src={join} />
          </button>
        </div>
        <div className={stylesCar.container}>
          <div
            className={stylesCar.allDocumentsContainer}
            style={{
              transform: `translateX(${offset}px)`,
            }}
          >
            {children}
          </div>
        </div>
        <a
          className="popup__caption"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginLeft: "10px" }}
        >
          Ссылка на Google Disk
        </a>
      </figure>
    </section>
  );
};

export default DocumentPopup;
