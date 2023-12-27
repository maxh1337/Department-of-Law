import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e30 from "../../../images/PART 3/e30.webp";
import { doc30 } from "../../ui/allFiles3";

const E30 = () => {
  const navigate = useNavigate();
  const documents = JSON.parse(localStorage.getItem("documents"));
  const newDocuments = [...documents, doc30];
  const nextPage = () => {
    localStorage.setItem("documents", JSON.stringify(newDocuments));
    navigate("/e31");
  };
  return (
    <div>
      <CriminalCase />
      <img src={e30} width="640px" height="542px" alt="e30" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Дальше
        </button>
      </div>
    </div>
  );
};

export default E30;
