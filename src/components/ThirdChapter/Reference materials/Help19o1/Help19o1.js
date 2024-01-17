import e19o1 from "../../../../images/PART 3/Справочный материал/Кадр 19 спр_136.webp";
import { useNavigate } from "react-router-dom";

const Help19o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/e19");
  };

  return (
    <div>
      <img src={e19o1} width="640px" height="542px" alt="e3o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help19o1;
