import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import nezakonno from "../../../images/p47.webp";
import Criminal from "../../ui/criminal-case/criminal-case";
import zakonno from "../../../images/Законно.png";

const Fortysix = () => {
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
      {choose === "accept" && final === "Ты справился" ? (
        <img width="640px" height="542px" src={zakonno} alt="p46" />
      ) : (
        <img width="640px" height="542px" src={nezakonno} alt="p46" />
      )}
      <div className="Buttons">
        <button onClick={() => navigate("/47")}>Продолжить</button>
      </div>
    </div>
  );
};

export default Fortysix;

// choose === "accept" && final === "Ты справился" ?
