import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e45 from "../../../images/PART 3/e45.webp";
import { doc45 } from "../../ui/allFiles3";

const E45 = () => {
  const navigate = useNavigate();
  const documents = JSON.parse(localStorage.getItem("documents"));
  const newDocuments = [...documents, doc45];
  const nextPage = () => {
    localStorage.setItem("documents", JSON.stringify(newDocuments));
    navigate("/e46");
  };
  return (
    <div>
      <CriminalCase />
      <img src={e45} width="640px" height="542px" alt="e45" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Дальше
        </button>
      </div>
    </div>
  );
};

export default E45;
