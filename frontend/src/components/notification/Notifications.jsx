import { Link } from "react-router-dom";
import Ring from "../assets/ring.svg";

const Notifications = () => {
  return (
    <div>
      <div
        style={{
          color: "#FFFFFF",
          display: "grid",
          justifyContent: "center",
          height: "183px",
        }}
      >
        <Link to="/notificationPage">
          <img src={Ring} alt="" style={{ cursor: "pointer" }} />
        </Link>
        <div style={{ marginTop: "-69px" }}>
          Notific
          <br />
          ations
        </div>
      </div>
    </div>
  );
};

export default Notifications;
