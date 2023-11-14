import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import res2 from "../../../images/buttons/Resurs_2_4x.webp";
import dozn from "../../../images/выбор-дела-для-дознавателя.webp";

function ChooseCharacterDoznavatel() {
  const [currentCharacter, setCurrentCharacter] = useState(3);
  const navigate = useNavigate();
  const nextPage = () => {
    if (currentCharacter == 1) {
      navigate("/choosecharacter2");
    }
    if (currentCharacter == 2) {
      navigate("/choosecharacter1");
    }
    if (currentCharacter == 3) {
      navigate("/vud2");
    }
  };

  return (
    <div>
      <img src={dozn} width="640px" height="542px" alt="dozn" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Дальше
        </button>
      </div>
    </div>
  );
}

export default ChooseCharacterDoznavatel;
