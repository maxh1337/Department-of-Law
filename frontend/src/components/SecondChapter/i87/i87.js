import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i87 from "../../../images/PART 2/i87.webp";
import { doc87, doc87o1 } from "../../ui/allFiles2";

const I87 = () => {
  const navigate = useNavigate();
  const documents = JSON.parse(localStorage.getItem("documents"));
  const newDocuments = [...documents, doc87, doc87o1];
  const nextPage = () => {
    localStorage.setItem("documents", JSON.stringify(newDocuments));
    navigate("/i88");
  };

  return (
    <div>
      <CriminalCase />
      <img src={i87} width="640px" height="542px" alt="i87" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Далее
        </button>
      </div>
    </div>
  );
};

export default I87;
