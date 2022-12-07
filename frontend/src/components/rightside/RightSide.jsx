import style from "../rightside/rightSide.module.css";
import Stream from "../stream/Stream";
import Manage from "../assets/management.svg";
import Cloud from "../assets/cloud.svg";
import Analyze from "../assets/analyze.svg";
import HR from "../assets/hr.svg";
import Marketing from "../assets/marketing.svg";
import Develope from "../assets/develop.svg";
import Legal from "../assets/legal.svg";
import Pause from "../assets/pause.svg";

const RightSide = () => {
  return (
    <div className={style.rightSide}>
      <div>
        <h1
          className={style.header}
          style={{ marginTop: "0", textAlign: "left", marginLeft: "50px" }}
        >
          Join Dowell Team <br /> as a Freelancer
        </h1>
        <div style={{ display: "flex", gap: "50px", marginLeft: "50px" }}>
          <Stream name="stream1" logo={Manage} project="project" />
          <Stream name="stream1" logo={Cloud} project="project" />
          <div
            style={{
              width: "58%",

              background: "hsl(122.4, 64.10256410256409%, 84.70588235294117%)",
              // filter: "blur(26.748px)",
            }}
          >
            <img style={{ cursor: "pointer" }} src={Pause} alt="pause" />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginLeft: "50px",
            marginTop: "50px",
            gap: "50px",
          }}
        >
          <Stream name="stream1" logo={Analyze} project="project" />
          <Stream name="stream1" logo={HR} project="project" />
          <Stream name="stream1" logo={Marketing} project="project" />
          <Stream name="stream1" logo={Develope} project="project" />
          <Stream name="stream1" logo={Legal} project="project" />
        </div>
      </div>
    </div>
  );
};

export default RightSide;
