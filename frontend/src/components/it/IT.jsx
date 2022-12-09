import style from "../it/it.module.css";
import Arrow from "../assets/arrow.svg";
import Card from "../card/Card";
const IT = () => {
  return (
    <div className={style.it}>
      <div
        className={style.bar}
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "25px",
            marginTop: "20px",
            marginLeft: "50px",
          }}
        >
          <div style={{ marginTop: "18px" }}>
            <span className={style.shadow}></span>
            <span className={style.arim}>
              <img className={style.arr} src={Arrow} alt="arrow" />
            </span>
          </div>
          <h1 className={style.header}>IT Intern Jobs</h1>
        </div>
        <form action="">
          <input
            style={{
              marginTop: "35px",
              marginRight: "80px",
              width: "400px",
              height: "45px",
              borderRadius: "5px",
              border: "none ",
              backgroundColor: "#F5F5F5",
            }}
            input="text"
            placeholder="  Search by skill, job"
          />
        </form>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
          gap: "130px",
          marginBottom: "30px",
        }}
      >
        <button className={style.btngreen}>Full time</button>
        <button className={style.btngray}>Full time</button>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "120px",
            marginBottom: "30px",
          }}
        >
          <Card />
          <Card />
        </div>
        <div
          style={{ display: "flex", gap: "120px", justifyContent: "center" }}
        >
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default IT;
