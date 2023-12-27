import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e9 from "../../../images/PART 3/e9.webp";
import { doc9 } from "../../ui/allFiles3";

const E9 = () => {
  const navigate = useNavigate();
  const documents = JSON.parse(localStorage.getItem("documents"));
  const newDocuments = [...documents, doc9];
  const nextPage = () => {
    localStorage.setItem("documents", JSON.stringify(newDocuments));
    navigate("/e10");
  };
  return (
    <div>
      <CriminalCase />
      <img src={e9} width="640px" height="542px" alt="e9" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Дальше
        </button>
      </div>
    </div>
  );
};

export default E9;
