import e2o1 from "../../../../images/PART 3/Справочный материал/кадр 2.1 спр_139.webp";
import { useNavigate } from "react-router-dom";

const Help2o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/e2");
  };

  return (
    <div>
      <img src={e2o1} width="640px" height="542px" alt="e2o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help2o1;
