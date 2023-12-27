import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e5 from "../../../images/PART 3/e5.webp";
import { doc5, doc5o1 } from "../../ui/allFiles3";

const E5 = () => {
  const navigate = useNavigate();
  const documents = JSON.parse(localStorage.getItem("documents"));
  const nextPage = () => {
    localStorage.setItem("documents", JSON.stringify([doc5, doc5o1]));
    navigate("/e6");
  };
  return (
    <div>
      <CriminalCase />
      <img src={e5} width="640px" height="542px" alt="e5" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Дальше
        </button>
      </div>
    </div>
  );
};

export default E5;
