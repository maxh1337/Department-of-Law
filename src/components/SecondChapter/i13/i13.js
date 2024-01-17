import CriminalCase from "../../ui/criminal-case/criminal-case";
import i13 from "../../../images/PART 2/i13.webp";
import { useNavigate } from "react-router-dom";
import p6read from "../../../images/buttons/exclamation.webp";
import { doc13 } from "../../ui/allFiles2";

const I13 = () => {
  const navigate = useNavigate();
  const documents = JSON.parse(localStorage.getItem("documents"));
  const newDocuments = [...documents, doc13];
  const nextPage = () => {
    localStorage.setItem("documents", JSON.stringify(newDocuments));
    navigate("/i14");
  };

  const helpPage = () => {
    navigate("/h13");
  };

  return (
    <div>
      <CriminalCase />
      <img src={i13} width="640px" height="542px" alt="i13" />
      <a>
        <img
          alt="Читать заявление"
          id="i2-exclamation"
          src={p6read}
          onClick={helpPage}
        />
      </a>
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Далее
        </button>
      </div>
    </div>
  );
};

export default I13;
