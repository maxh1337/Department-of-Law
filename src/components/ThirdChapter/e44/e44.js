import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e44 from "../../../images/PART 3/e44.webp";
import { doc44 } from "../../ui/allFiles3";

const E44 = () => {
  const navigate = useNavigate();
  const documents = JSON.parse(localStorage.getItem("documents"));
  const newDocuments = [...documents, doc44];
  const nextPage = () => {
    localStorage.setItem("documents", JSON.stringify(newDocuments));
    navigate("/e45");
  };
  return (
    <div>
      <CriminalCase />
      <img src={e44} width="640px" height="542px" alt="e44" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Дальше
        </button>
      </div>
    </div>
  );
};

export default E44;
