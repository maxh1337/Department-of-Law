import e55o1 from "../../../../images/PART 3/Справочный материал/Кадр 55 спр_171.webp";
import { useNavigate } from "react-router-dom";

const Help55o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/e55");
  };

  return (
    <div>
      <img src={e55o1} width="640px" height="542px" alt="e3o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help55o1;
