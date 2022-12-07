import { Link } from "react-router-dom";
import Homee from "../assets/home.svg";

const Home = () => {
  return (
    <div>
      <div
        style={{
          color: "#FFFFFF",
          marginTop: "30px",
          display: "grid",
          justifyContent: "center",
        }}
      >
        <Link to="/homePage">
          <img src={Homee} alt="" style={{ cursor: "pointer" }} />
        </Link>
        <div>home</div>
      </div>
    </div>
  );
};

export default Home;
