import CriminalCase from "../../ui/criminal-case/criminal-case";
import e25 from "../../../images/PART 3/e25.webp";
import { useNavigate } from "react-router-dom";
import { doc25 } from "../../ui/allFiles3";

const E25 = () => {
  const navigate = useNavigate();
  const documents = JSON.parse(localStorage.getItem("documents"));
  const newDocuments = [...documents, doc25];
  const nextPage = () => {
    localStorage.setItem("documents", JSON.stringify(newDocuments));
    navigate("/e26");
  };
  return (
    <div>
      <CriminalCase />
      <img src={e25} width="640px" height="542px" alt="e25" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Дальше
        </button>
      </div>
    </div>
  );
};

export default E25;
