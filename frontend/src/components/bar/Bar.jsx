import style from "../bar/bar.module.css";
import Bill from "../assets/photo.svg";
import Person from "../assets/person.svg";
import Dowell from "../assets/dowell.svg";
import Search from "../assets/search.svg";
const Bar = () => {
  return (
    <div className={style.bar}>
      <img src={Dowell} alt="dowellimage" />
      <form action="">
        <input
          style={{
            marginTop: "15px",
            width: "1050px",
            height: "35px",
            borderRadius: "5px",
            border: "none ",
            backgroundColor: "#F5F5F5",
          }}
          input="text"
          placeholder="       Search for job/project"
        />
      </form>
      <div style={{ display: "flex", gap: "35px" }}>
        <img
          style={{
            marginTop: "15px",
            width: "30px",
            height: "37px",
          }}
          src={Bill}
          alt="bill"
        />
        <img
          style={{
            marginTop: "10px",
            marginRight: "80px",
            width: "38px",
            height: "43px",
          }}
          src={Person}
          alt="person"
        />
      </div>
    </div>
  );
};

export default Bar;
