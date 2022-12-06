import Ring from "../assets/ring.svg";

const Notifications = () => {
  return (
    <div>
      {" "}
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

export default Notifications;
