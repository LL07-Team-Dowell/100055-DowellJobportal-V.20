import Homee from "../assets/home.svg";

const Home = () => {
  return (
    <div>
      {" "}
      <div
        style={{
          color: "#FFFFFF",
          marginTop: "30px",
          display: "grid",
          justifyContent: "center",
        }}
      >
        <img src={Homee} alt="" style={{ cursor: "pointer" }} />
        <div style={{ marginTop: "-54px" }}>home</div>
      </div>
    </div>
  );
};

export default Home;
