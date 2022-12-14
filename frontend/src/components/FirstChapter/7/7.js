import { useNavigate } from "react-router-dom";
import doc1 from "../../../images/doc1.webp";

function Seven() {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/8");
    localStorage.setItem("step", 2);
  };
  return (
    <div>
      <img src={doc1} alt="2" width="640px" height="542px" />
      <div className="doc-content">
        <div className="Buttons">
          <a
            href="https://drive.google.com/file/d/1ogUDREkHV6kWEG-wtAslDpj2FrXNxiS1/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Открыть заявление о преступлении</button>
          </a>
          <br />
          <br />
          <button onClick={nextPage}>Продолжить</button>
        </div>
      </div>
    </div>
  );
}
export default Seven;
