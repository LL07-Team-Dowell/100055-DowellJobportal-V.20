import style from "../sidebar/sideBar.module.css";
import Home from "../assets/home.svg";
import Apply from "../assets/apply.svg";
import Ring from "../assets/ring.svg";
const SideBar = () => {
  return (
    <div className={style.sideBar}>
      <div
        style={{
          color: "#FFFFFF",
          marginTop: "30px",
          display: "grid",
          justifyContent: "center",
        }}
      >
        <img src={Home} alt="" style={{ cursor: "pointer" }} />
        <div style={{ marginTop: "-54px" }}> Home</div>
      </div>
      <div
        style={{
          color: "#FFFFFF",
          display: "grid",
          justifyContent: "center",
          height: "52px",
        }}
      >
        <img
          src={Apply}
          alt=""
          style={{ cursor: "pointer", marginLeft: "7px" }}
        />
        <div style={{ marginTop: "5px" }}>Applied</div>
      </div>
      <div
        style={{
          color: "#FFFFFF",
          display: "grid",
          justifyContent: "center",
          height: "183px",
        }}
      >
        <img
          src={Ring}
          alt=""
          style={{ cursor: "pointer", marginLeft: "7px" }}
        />
        <div style={{ marginTop: "-69px" }}>
          Notific
          <br />
          ations
        </div>
      </div>
    </div>
  );
};

export default SideBar;
