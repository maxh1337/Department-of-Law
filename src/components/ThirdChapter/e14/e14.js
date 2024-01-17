import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e14 from "../../../images/PART 3/e14.webp";
import { doc14 } from "../../ui/allFiles3";

const E14 = () => {
  const navigate = useNavigate();
  const documents = JSON.parse(localStorage.getItem("documents"));
  const newDocuments = [...documents, doc14];
  const nextPage = () => {
    localStorage.setItem("documents", JSON.stringify(newDocuments));
    navigate("/e15");
  };
  return (
    <div>
      <CriminalCase />
      <img src={e14} width="640px" height="542px" alt="e14" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Дальше
        </button>
      </div>
    </div>
  );
};

export default E14;
