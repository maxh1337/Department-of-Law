import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i72 from "../../../images/PART 2/i72.webp";
import { doc72 } from "../../ui/allFiles2";

const I72 = () => {
  const navigate = useNavigate();
  const documents = JSON.parse(localStorage.getItem("documents"));
  const newDocuments = [...documents, doc72];
  const nextPage = () => {
    localStorage.setItem("documents", JSON.stringify(newDocuments));
    navigate("/i73");
  };

  return (
    <div>
      <CriminalCase />
      <img src={i72} width="640px" height="542px" alt="i72" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Далее
        </button>
      </div>
    </div>
  );
};

export default I72;
