import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e53 from "../../../images/PART 3/e53.webp";
import { doc53 } from "../../ui/allFiles3";

const E53 = () => {
  const navigate = useNavigate();
  const documents = JSON.parse(localStorage.getItem("documents"));
  const newDocuments = [...documents, doc53];
  const nextPage = () => {
    localStorage.setItem("documents", JSON.stringify(newDocuments));
    navigate("/e54");
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

export default E53;
