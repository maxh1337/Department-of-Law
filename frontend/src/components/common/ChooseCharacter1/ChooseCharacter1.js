import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ChooseCharacter1.css";
import res2 from "../../../images/buttons/Resurs_2_4x.webp";
import p3 from "../../../images/p3.webp";

function ChooseCharacter1() {
  const [currentCharacter, setCurrentCharacter] = useState(1);
  const navigate = useNavigate();
  const nextPage = () => {
    if (currentCharacter == 1) {
      navigate("/choosecharacter2");
    }
    if (currentCharacter == 2) {
      navigate("/choosecharacter1");
    }
    if (currentCharacter == 3) {
      navigate("/");
    }
  };

  return (
    <div>
      <img src={p3} width="640px" height="542px" alt="p3" />
      <a
        title="Следователь"
        target="_blank"
        rel="nooper noreferrer"
        href="https://docs.google.com/document/d/1LnsnWhw1XKrnIOVd8pDAr0llWaLJLKNN/edit?usp=share_link&ouid=103959558910814942921&rtpof=true&sd=true"
      >
        <img
          alt="Следователь"
          src={res2}
          style={{
            position: "absolute",
            width: "30px",
            top: "127px",
            left: "calc(50% - 132px)",
          }}
        />
      </a>
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Дальше
        </button>
      </div>
    </div>
  );
}

export default ChooseCharacter1;
