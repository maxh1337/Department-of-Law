import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i58 from "../../../images/PART 2/i58.webp";
import { doc58, doc58o1 } from "../../ui/allFiles2";

const I58 = () => {
  const navigate = useNavigate();
  const documents = JSON.parse(localStorage.getItem("documents"));
  const newDocuments = [...documents, doc58, doc58o1];
  const nextPage = () => {
    localStorage.setItem("documents", JSON.stringify(newDocuments));
    navigate("/i59");
  };

  return (
    <div>
      <CriminalCase />
      <img src={i58} width="640px" height="542px" alt="i58" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Далее
        </button>
      </div>
    </div>
  );
};

export default I58;
