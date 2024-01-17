import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i76 from "../../../images/PART 2/i76.webp";
import { doc76 } from "../../ui/allFiles2";

const I76 = () => {
  const navigate = useNavigate();
  const documents = JSON.parse(localStorage.getItem("documents"));
  const newDocuments = [...documents, doc76];
  const nextPage = () => {
    localStorage.setItem("documents", JSON.stringify(newDocuments));
    navigate("/i77");
  };

  return (
    <div>
      <CriminalCase />
      <img src={i76} width="640px" height="542px" alt="i76" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Далее
        </button>
      </div>
    </div>
  );
};

export default I76;
