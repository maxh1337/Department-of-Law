import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i33 from "../../../images/PART 2/i33.webp";
import { doc33 } from "../../ui/allFiles2";

const I33 = () => {
  const navigate = useNavigate();
  const documents = JSON.parse(localStorage.getItem("documents"));
  const newDocuments = [...documents, doc33];
  const nextPage = () => {
    localStorage.setItem("documents", JSON.stringify(newDocuments));
    navigate("/i34");
  };

  return (
    <div>
      <CriminalCase />
      <img src={i33} width="640px" height="542px" alt="i33" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Далее
        </button>
      </div>
    </div>
  );
};

export default I33;
