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
        <img
          src={Apply}
          alt=""
          style={{ cursor: "pointer", marginLeft: "7px" }}
        />
        <div style={{ marginTop: "5px" }}>Applied</div>
      </div>
    </div>
  );
};

export default Applied;
