import { useNavigate } from "react-router-dom";
import { doc53 } from "../../ui/allFiles3";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e53 from "../../../images/PART 3/e53.webp";

const E571 = () => {
  const navigate = useNavigate();
  const falseWay = JSON.parse(localStorage.getItem("e46"));
  const nextPage = () => {
    console.log(falseWay);
    if (falseWay && falseWay === true) {
      navigate("/e60");
    } else {
      navigate("/e61");
    }
  };
  return (
    <div>
      <CriminalCase />
      <img src={e53} width="640px" height="542px" alt="e53" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Дальше
        </button>
      </div>
    </div>
  );
};

export default E571;
