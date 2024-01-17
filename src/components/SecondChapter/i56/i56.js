import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i56 from "../../../images/PART 2/i56.webp";
import { doc56 } from "../../ui/allFiles2";

const I56 = () => {
  const navigate = useNavigate();
  const documents = JSON.parse(localStorage.getItem("documents"));
  const newDocuments = [...documents, doc56];
  const nextPage = () => {
    localStorage.setItem("documents", JSON.stringify(newDocuments));
    navigate("/i57");
  };

  return (
    <div>
      <CriminalCase />
      <img src={i56} width="640px" height="542px" alt="i56" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Далее
        </button>
      </div>
    </div>
  );
};

export default I56;
