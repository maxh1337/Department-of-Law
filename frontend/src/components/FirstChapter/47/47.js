import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import molodec from "../../../images/p46.webp";
import neMolodec from "../../../images/конец игры_ты не справился.png";
import Criminal from "../../ui/criminal-case/criminal-case";

const Fortyseven = () => {
  const navigate = useNavigate();
  const choose = JSON.parse(localStorage.getItem("choose"));
  const documents = JSON.parse(localStorage.getItem("documents"));
  const [final, setFinal] = useState("");

  const WrongWays = [
    "Протокол уcтного заявления о преступлении",
    "Рапорт об обнаружении признаков преступления",
    "Протокол допроса потерпевшей",
  ];
  let j;

  function contains(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (
        arr[i].name === WrongWays[0] ||
        arr[i].name === WrongWays[1] ||
        arr[i].name === WrongWays[2]
      ) {
        return true;
      }
    }
    return false;
  }

  useEffect(() => {
    if (choose === "reject") {
      setFinal("Ты не справился");
    } else {
      if (documents) {
        if (contains(documents)) {
          setFinal("Ты не справился");
          console.log(final);
        } else {
          setFinal("Ты справился");
          console.log(final);
        }
      }
    }
  }, []);

  return (
    <div>
      <Criminal />
      {final === "Ты справился" ? (
        <img width="640px" height="542px" src={molodec} alt="p47" />
      ) : final === "Ты не справился" ? (
        <img width="640px" height="542px" src={neMolodec} alt="p47" />
      ) : null}
      <div className="Buttons">
        <button onClick={() => navigate("/start")}>Продолжить</button>
      </div>
    </div>
  );
};

export default Fortyseven;
