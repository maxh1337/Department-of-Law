import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e7 from "../../../images/PART 3/e7.webp";
import { doc5, doc5o1, doc7 } from "../../ui/allFiles3";

const E7 = () => {
  const navigate = useNavigate();
  const documents = JSON.parse(localStorage.getItem("documents"));
  const newDocuments = [...documents, doc7];
  const nextPage = () => {
    localStorage.setItem("documents", JSON.stringify(newDocuments));
    navigate("/e8");
  };
  return (
    <div>
      <CriminalCase />
      <img src={e7} width="640px" height="542px" alt="e7" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Дальше
        </button>
      </div>
    </div>
  );
};

export default E7;
