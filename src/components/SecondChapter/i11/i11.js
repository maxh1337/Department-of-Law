import i11 from "../../../images/PART 2/i11.webp";
import { useNavigate } from "react-router-dom";
import { doc11 } from "../../ui/allFiles2";
import CriminalCase from "../../ui/criminal-case/criminal-case";

const I11 = () => {
  const navigate = useNavigate();
  const documents = JSON.parse(localStorage.getItem("documents"));
  const newDocuments = [...documents, doc11];
  const nextPage = () => {
    localStorage.setItem("documents", JSON.stringify(newDocuments));
    navigate("/i12");
  };
  return (
    <div>
      <CriminalCase />
      <img src={i11} width="640px" height="542px" alt="i11" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Далее
        </button>
      </div>
    </div>
  );
};

export default I11;
