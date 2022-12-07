import { Link } from "react-router-dom";
import Apply from "../assets/apply.svg";

const Applied = () => {
  return (
    <div>
      <div
        style={{
          color: "#FFFFFF",
          display: "grid",
          justifyContent: "center",
          height: "52px",
        }}
      >
        <Link to="/appliedPage">
          <img src={Apply} alt="" style={{ cursor: "pointer" }} />
        </Link>

        <div style={{ marginTop: "5px" }}>Applied</div>
      </div>
    </div>
  );
};

export default Applied;
