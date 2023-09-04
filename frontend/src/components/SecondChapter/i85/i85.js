import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i85 from "../../../images/PART 2/i85.webp";
import { doc85 } from "../../ui/allFiles2";

const I85 = () => {
  const navigate = useNavigate();
  const documents = JSON.parse(localStorage.getItem("documents"));
  const newDocuments = [...documents, doc85];
  const nextPage = () => {
    localStorage.setItem("documents", JSON.stringify(newDocuments));
    navigate("/i86");
  };

  return (
    <div>
      <CriminalCase />
      <img src={i85} width="640px" height="542px" alt="i85" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Далее
        </button>
      </div>
    </div>
  );
};

export default I85;
