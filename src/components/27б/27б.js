import { useState } from "react";
import { useNavigate } from "react-router-dom";
import p27a from "../../images/p27а.jpg";
import Criminal from "../ui/criminal-case/criminal-case";
const step = JSON.parse(localStorage.getItem("step"));
if (step !== 13) {
  localStorage.setItem("step", 13);
}

function TwentySevenB() {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/28");
  };
  return (
    <div>
      <Criminal />
      {page === 1 ? (
        <>
          <img width="640px" height="542px" src={p27a} alt="p27a" />
          <div className="Buttons">
            <button
              onClick={() => {
                navigate("/28");
              }}
            >
              Дальше
            </button>
          </div>
        </>
      ) : (
        <>

        </>
      )}
    </div>
  );
}
export default TwentySevenB;
