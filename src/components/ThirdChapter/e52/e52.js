import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e52 from "../../../images/PART 3/e52.webp";
import { doc51, doc52 } from "../../ui/allFiles3";

const E52 = () => {
  const navigate = useNavigate();
  const documents = JSON.parse(localStorage.getItem("documents"));
  const newDocuments = [...documents, doc52];
  const nextPage = () => {
    localStorage.setItem("documents", JSON.stringify(newDocuments));
    navigate("/e53");
  };
  return (
    <div>
      <CriminalCase />
      <img src={e52} width="640px" height="542px" alt="e52" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Дальше
        </button>
      </div>
    </div>
  );
};

export default E52;
