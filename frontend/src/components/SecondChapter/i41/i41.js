import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i41 from "../../../images/PART 2/i41.webp";
import { doc41 } from "../../ui/allFiles2";

const I41 = () => {
  const navigate = useNavigate();
  const documents = JSON.parse(localStorage.getItem("documents"));
  const newDocuments = [...documents, doc41];
  const nextPage = () => {
    localStorage.setItem("documents", JSON.stringify(newDocuments));
    navigate("/i42");
  };

  return (
    <div>
      <CriminalCase />
      <img src={i41} width="640px" height="542px" alt="i41" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Далее
        </button>
      </div>
    </div>
  );
};

export default I41;
