import e42o1 from "../../../../images/PART 3/Справочный материал/Кадр 42 спр_164.webp";
import { useNavigate } from "react-router-dom";

const Help42o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/e42");
  };

  return (
    <div>
      <img src={e42o1} width="640px" height="542px" alt="e3o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help42o1;
