import Bar from "../bar/Bar";
import style from "../main/main.module.css";
import RightSide from "../rightside/RightSide";
import SideBar from "../sidebar/SideBar";
const Main = () => {
  return (
    <>
      <Bar />
      <div className={style.main}>
        <SideBar />
        <RightSide />
      </div>
    </>
  );
};

export default Main;
