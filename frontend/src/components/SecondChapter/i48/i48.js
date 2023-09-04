import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i48 from "../../../images/PART 2/i48.webp";
import { doc48 } from "../../ui/allFiles2";

const I48 = () => {
  const navigate = useNavigate();
  const documents = JSON.parse(localStorage.getItem("documents"));
  const newDocuments = [...documents, doc48];
  const nextPage = () => {
    localStorage.setItem("documents", JSON.stringify(newDocuments));
    navigate("/i49");
  };

  return (
    <div>
      <CriminalCase />
      <img src={i48} width="640px" height="542px" alt="i48" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Далее
        </button>
      </div>
    </div>
  );
};

export default I48;
