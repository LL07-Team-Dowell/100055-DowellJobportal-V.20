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
import "bootstrap/dist/css/bootstrap.min.css";
import Video from "../assets/video.mp4";
import Paus from "../assets/paus.svg";
import { useRef } from "react";
import { useState } from "react";
import Msg from "../assets/msg.svg";
import { Link } from "react-router-dom";
const RightSide = () => {
  const [play, setPlay] = useState(true);

  const videoRef = useRef();

  const handlePlay = () => {
    videoRef.current.play();
  };
  const handlePause = () => {
    videoRef.current.pause();
  };
  return (
    <div className={style.rightSide}>
      <div>
        <h1
          className={style.header}
          style={{
            marginTop: "0",
            textAlign: "left",
            marginLeft: "50px",
          }}
        >
          Join Dowell Team <br /> as a Freelancer
        </h1>
        <div
          style={{
            display: "flex",
            gap: "50px",
            marginLeft: "50px",
            marginBottom: "-20px",
            marginTop: "35px",
          }}
        >
          <Stream name="stream 1" logo={Manage} project="Project Management" />
          <Link to="informationTechnology">
            <Stream
              name="stream 2"
              logo={Cloud}
              project="Information Technology"
            />
          </Link>
          <div
            style={{
              width: "58%",
              marginBottom: "0px",
              position: "absolute",
              top: "80px",
              right: "230px",
            }}
          >
            <div
              style={{
                background:
                  "hsl(122.4, 64.10256410256409%, 84.70588235294117%)",
                filter: "blur(26.748px)",
                height: "308px",
                width: "66%",
                marginLeft: "310px",
                marginTop: "50px",
              }}
            >
              1
            </div>
            <video
              style={{
                position: "absolute",
                top: "25px",
                right: "-35px",
                borderRadius: "15px",
              }}
              width="66.7%"
              height="330"
              ref={videoRef}
            >
              <source src={Video} />
            </video>

            {play === true ? (
              <span onClick={() => setPlay(!play)}>
                <img
                  style={{
                    cursor: "pointer",
                    position: "absolute",
                    right: "210px",
                    top: "145px",
                  }}
                  src={Pause}
                  alt="play"
                  onClick={handlePlay}
                />
              </span>
            ) : (
              <span onClick={() => setPlay(!play)}>
                <img
                  style={{
                    cursor: "pointer",
                    width: "90px",
                    height: "90px",
                    position: "absolute",
                    right: "210px",
                    top: "145px",
                  }}
                  src={Paus}
                  alt="pause"
                  onClick={handlePause}
                />
              </span>
            )}
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
          <Stream name="stream 3" logo={Analyze} project="Data Analysis" />
          <Stream name="stream 4" logo={HR} project="    Human Resources  " />
          <Stream
            name="stream 5"
            logo={Marketing}
            project="Digital Marketing"
          />
          <Stream
            name="stream 6"
            logo={Develope}
            project="Business Development"
          />
          <Stream name="stream 7" logo={Legal} project="Legal Compliance" />
          <img
            src={Msg}
            alt="message"
            style={{
              width: "70px",
              height: "70px",
              position: "absolute",
              right: "160px",
              bottom: "10px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default RightSide;
