/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import p20 from "../../../images/p20.webp";
import p20а from "../../../images/p20а.webp";
import p20б from "../../../images/p20б.webp";

const Twenty = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();
  return currentPage === 0 ? (
    <div>
      <img width="640px" height="542px" src={p20} alt="p20" />
      <div className="Buttons">
        <button
          onClick={() => {
            navigate("/21");
          }}
        >
          Дальше
        </button>
      </div>
      <a
        data-to-page="p20a"
        onClick={() => setCurrentPage(1)}
        style={{
          position: "absolute",
          top: 53,
          left: "calc(50% - 285px)",
          width: 200,
          height: 450,
          color: "white",
        }}
      ></a>
      <a
        data-to-page="p20б"
        onClick={() => setCurrentPage(2)}
        style={{
          position: "absolute",
          top: 200,
          left: "calc(50% - 50px)",
          width: 100,
          height: 300,
        }}
      ></a>
    </div>
  ) : currentPage === 1 ? (
    <div>
      <img width="640px" height="542px" src={p20а} alt="p20a" />
      <div className="Buttons">
        <button data-to-page="p22a" onClick={() => setCurrentPage(0)}>
          Дальше
        </button>
      </div>
    </div>
  ) : (
    <div>
      <img width="640px" height="542px" src={p20б} alt="p20б" />
      <div className="Buttons">
        <button data-to-page="p22a" onClick={() => setCurrentPage(0)}>
          Дальше
        </button>
      </div>
    </div>
  );
};
export default Twenty;
