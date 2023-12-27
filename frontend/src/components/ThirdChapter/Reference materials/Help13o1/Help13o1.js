import e13o1 from "../../../../images/PART 3/Справочный материал/Кадр 13.1 спр_131.webp";
import { useNavigate } from "react-router-dom";

const Help13o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/e13");
  };

  return (
    <div>
      <img src={e13o1} width="640px" height="542px" alt="e3o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help13o1;
