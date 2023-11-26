import { useNavigate } from "react-router-dom";
import vud2 from "../../../images/кадр-перед-первым-коллажем-модуль-2-и-3.webp";

const Vud2 = () => {
  const navigate = useNavigate();
  const currentCharacter = JSON.parse(localStorage.getItem("currentCharacter"));

  const nextPage = () => {
    console.log(currentCharacter);

    if (currentCharacter === 1) {
      navigate("/i1");
    } else if (currentCharacter === 2) {
      navigate("/e1");
    }
  };

  return (
    <div>
      <img src={vud2} width="640px" height="542px" alt="vud2" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Далее
        </button>
      </div>
    </div>
  );
};

export default Vud2;
