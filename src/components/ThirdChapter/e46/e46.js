import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e46 from "../../../images/PART 3/e46.webp";

const E46 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <CriminalCase />
      <img src={e46} width="640px" height="542px" alt="e46" />
      <div
        className="button-cloud"
        style={{
          position: "absolute",
          top: "170px",
          left: "calc(50% - 320px)",
          width: "300px",
          height: "80px",
        }}
        onClick={() => {
          //Ложный путь
          navigate("/e50");
          localStorage.setItem("e46", JSON.stringify(true));
        }}
      ></div>
      <div
        className="button-cloud"
        style={{
          position: "absolute",
          top: "175px",
          left: "calc(50% + 0px)",
          width: "300px",
          height: "200px",
        }}
        onClick={() => {
          navigate("/e47");
        }}
      ></div>
    </div>
  );
};

export default E46;
