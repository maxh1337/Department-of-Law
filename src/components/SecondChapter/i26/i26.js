import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i26 from "../../../images/PART 2/i26.webp";
import { doc26 } from "../../ui/allFiles2";

const I26 = () => {
  const navigate = useNavigate();
  const documents = JSON.parse(localStorage.getItem("documents"));
  const newDocuments = [...documents, doc26];
  const nextPage = () => {
    localStorage.setItem("documents", JSON.stringify(newDocuments));
    navigate("/i27");
  };
  return (
    <div>
      <CriminalCase />
      <img src={i26} width="640px" height="542px" alt="i26" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Дальше
        </button>
      </div>
    </div>
  );
};

export default I26;
