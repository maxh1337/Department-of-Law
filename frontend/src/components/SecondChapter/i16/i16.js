import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i16 from "../../../images/PART 2/i16.webp";
import { doc16 } from "../../ui/allFiles2";

const I16 = () => {
  const navigate = useNavigate();
  const documents = JSON.parse(localStorage.getItem("documents"));
  const newDocuments = [...documents, doc16];
  const nextPage = () => {
    localStorage.setItem("documents", JSON.stringify(newDocuments));
    navigate("/i17");
  };
  return (
    <div>
      <CriminalCase />
      <img src={i16} width="640px" height="542px" alt="i16" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Дальше
        </button>
      </div>
    </div>
  );
};

export default I16;
