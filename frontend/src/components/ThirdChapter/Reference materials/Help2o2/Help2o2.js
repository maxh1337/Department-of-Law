import e2o2 from "../../../../images/PART 3/Справочный материал/Кадр 2.2 спр_140.webp";
import { useNavigate } from "react-router-dom";

const Help2o2 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/e2");
  };

  return (
    <div>
      <img src={e2o2} width="640px" height="542px" alt="e2o2" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help2o2;
