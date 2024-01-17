import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e51 from "../../../images/PART 3/e51.webp";
import { doc51 } from "../../ui/allFiles3";

const E51 = () => {
  const navigate = useNavigate();
  const documents = JSON.parse(localStorage.getItem("documents"));
  const newDocuments = [...documents, doc51];
  const nextPage = () => {
    localStorage.setItem("documents", JSON.stringify(newDocuments));
    navigate("/e52");
  };
  return (
    <div>
      <CriminalCase />
      <img src={e51} width="640px" height="542px" alt="e51" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Дальше
        </button>
      </div>
    </div>
  );
};

export default E51;
