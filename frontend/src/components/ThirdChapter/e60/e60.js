import Error from "../../ui/error/error";
import e56561 from "../../../images/PART 3/e56 56.1.webp";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import { useNavigate } from "react-router-dom";

const E60 = () => {
  const navigate = useNavigate();
  const falseWay46 = JSON.parse(localStorage.getItem("e46"));
  const falseWay54 = JSON.parse(localStorage.getItem("e54"));
  const nextPage = () => {
    navigate("/e65");
  };

  return (
    <div>
      <CriminalCase />
      <Error
        loaded="true"
        image={e56561}
        onClick1={() => {
          if (falseWay46 === true && falseWay54 === true) {
            navigate("/he60o3");
          } else if (falseWay46 && falseWay46 === true) {
            navigate("/he60o1");
          } else if (falseWay54 && falseWay54 === true) {
            navigate("/he60o2");
          }
        }}
        button1="Не понятно"
        button2style={{ display: "none" }}
      />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Дальше
        </button>
      </div>
    </div>
  );
};

export default E60;
