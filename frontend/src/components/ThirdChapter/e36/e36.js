import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e36 from "../../../images/PART 3/e36.webp";
import { doc36 } from "../../ui/allFiles3";

const E36 = () => {
  const navigate = useNavigate();
  const documents = JSON.parse(localStorage.getItem("documents"));
  const newDocuments = [...documents, doc36];
  const nextPage = () => {
    localStorage.setItem("documents", JSON.stringify(newDocuments));
    navigate("/e37");
  };
  return (
    <div>
      <CriminalCase />
      <img src={e36} width="640px" height="542px" alt="e36" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Дальше
        </button>
      </div>
    </div>
  );
};

export default E36;
