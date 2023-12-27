import e54o2 from "../../../../images/PART 3/Справочный материал/Кадр 54.2 спр_170.webp";
import { useNavigate } from "react-router-dom";

const Help54o2 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/e54");
  };

  return (
    <div>
      <img src={e54o2} width="640px" height="542px" alt="e3o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help54o2;
