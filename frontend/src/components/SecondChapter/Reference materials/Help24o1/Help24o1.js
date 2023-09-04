import i24o1 from "../../../../images/PART 2/справочный материал/Кадр 24.1.png";
import { useNavigate } from "react-router-dom";

const Help24o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i24");
  };
  return (
    <div>
      <img src={i24o1} width="640px" height="542px" alt="i24o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help24o1;
