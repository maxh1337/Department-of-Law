import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i37 from "../../../images/PART 2/i37.webp";
import { doc37 } from "../../ui/allFiles2";

const I37 = () => {
  const navigate = useNavigate();
  const documents = JSON.parse(localStorage.getItem("documents"));
  const newDocuments = [...documents, doc37];
  const nextPage = () => {
    localStorage.setItem("documents", JSON.stringify(newDocuments));
    navigate("/i38");
  };

  return (
    <div>
      <CriminalCase />
      <img src={i37} width="640px" height="542px" alt="i37" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Далее
        </button>
      </div>
    </div>
  );
};

export default I37;
