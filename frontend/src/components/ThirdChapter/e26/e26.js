import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e26 from "../../../images/PART 3/e26.webp";
import { doc26 } from "../../ui/allFiles3";

const E26 = () => {
  const navigate = useNavigate();
  const documents = JSON.parse(localStorage.getItem("documents"));
  const newDocuments = [...documents, doc26];
  const nextPage = () => {
    localStorage.setItem("documents", JSON.stringify(newDocuments));
    navigate("/e28");
  };
  return (
    <div>
      <CriminalCase />
      <img src={e26} width="640px" height="542px" alt="e26" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Дальше
        </button>
      </div>
    </div>
  );
};

export default E26;
