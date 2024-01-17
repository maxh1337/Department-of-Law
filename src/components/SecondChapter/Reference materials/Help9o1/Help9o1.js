import i9o1 from "../../../../images/PART 2/справочный материал/Кадр 9спр.png";
import { useNavigate } from "react-router-dom";

const Help9o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i9");
  };

  return (
    <div>
      <img src={i9o1} alt="15" width="640px" height="542px" alt="i9o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help9o1;
