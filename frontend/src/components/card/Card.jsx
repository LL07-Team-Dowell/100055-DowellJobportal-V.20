import style from "../card/card.module.css";
const Card = () => {
  return (
    <div className={style.card} style={{ width: "400px", height: "220px" }}>
      <h3
        style={{ marginRight: "35px", paddingTop: "15px", fontWeight: "bold" }}
      >
        Junior <span style={{ fontSize: "23px", fontWeight: "bold" }}>UI</span>/
        <span style={{ fontSize: "23px", fontWeight: "bold" }}>UX</span>{" "}
        Designer
      </h3>
      <span style={{ marginRight: "60px" }}>
        Information Technology - UX Living Lab
      </span>
      <div
        style={{ display: "grid", justifyContent: "start", marginLeft: "35px" }}
      >
        <span style={{ display: "flex", gap: "12px" }}>
          <span
            style={{
              borderRadius: "50%",
              marginTop: "5px",
              justifyContent: "left",
              width: "10px",
              height: "10px",
              backgroundColor: "#7C7C7C",
            }}
          ></span>
          Duration: 6 months
        </span>
        <span
          style={{
            background: "#7C7C7C",
            width: "3.5px",
            height: "28px",
            marginLeft: "3px",
          }}
        ></span>
        <span style={{ display: "flex", gap: "12px" }}>
          {" "}
          <span
            style={{
              borderRadius: "50%",
              marginTop: "5px",
              justifyContent: "left",
              width: "10px",
              height: "10px",
              backgroundColor: "#7C7C7C",
            }}
          ></span>
          Skills: BBA, MBS, PGDM
        </span>
        <span
          style={{
            background: "#7C7C7C",
            width: "3.5px",
            height: "28px",
            marginLeft: "3px",
          }}
        ></span>
        <span style={{ display: "flex", gap: "12px" }}>
          {" "}
          <span
            style={{
              borderRadius: "50%",
              marginTop: "5px",
              justifyContent: "left",
              width: "10px",
              height: "10px",
              backgroundColor: "#7C7C7C",
            }}
          ></span>
          <div style={{ display: "flex", gap: "50px" }}>
            Stipend: 15000 Rs
            <button className={style.btngreen}>Full time</button>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Card;
