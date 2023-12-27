import e40o1 from "../../../../images/PART 3/Справочный материал/Кадр 40 спр_163.webp";
import { useNavigate } from "react-router-dom";

const Help40o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/e40");
  };

  return (
    <div>
      <img src={e40o1} width="640px" height="542px" alt="e3o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help40o1;
