import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i80 from "../../../images/PART 2/i80.webp";
import { doc80 } from "../../ui/allFiles2";

const I80 = () => {
  const navigate = useNavigate();
  const documents = JSON.parse(localStorage.getItem("documents"));
  const newDocuments = [...documents, doc80];
  const nextPage = () => {
    localStorage.setItem("documents", JSON.stringify(newDocuments));
    navigate("/i81");
  };

  return (
    <div>
      <CriminalCase />
      <img src={i80} width="640px" height="542px" alt="i80" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Далее
        </button>
      </div>
    </div>
  );
};

export default I80;
