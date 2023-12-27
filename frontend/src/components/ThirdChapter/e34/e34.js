import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e34 from "../../../images/PART 3/e34.webp";
import { doc34, doc34o1 } from "../../ui/allFiles3";

const E34 = () => {
  const navigate = useNavigate();
  const documents = JSON.parse(localStorage.getItem("documents"));
  const newDocuments = [...documents, doc34, doc34o1];
  const nextPage = () => {
    localStorage.setItem("documents", JSON.stringify(newDocuments));
    navigate("/e35");
  };
  return (
    <div>
      <CriminalCase />
      <img src={e34} width="640px" height="542px" alt="e34" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Дальше
        </button>
      </div>
    </div>
  );
};

export default E34;
