import { useNavigate } from "react-router-dom";
import p45 from "../../../images/кабинет прокурора.jpg";
import Criminal from "../../ui/criminal-case/criminal-case";

const Fortyfive = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Criminal />
      <img width="640px" height="542px" src={p45} alt="p45" />
      <div className="Buttons">
        <button
          onClick={() => {
            navigate("/46");
          }}
        >
          Продолжить
        </button>
      </div>
    </div>
  );
};

export default Fortyfive;
