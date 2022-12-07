import style from "../sidebar/sideBar.module.css";
import Home from "../home/Home";
import Applied from "../applied/Applied";
import Notifications from "../notification/Notifications";

const SideBar = () => {
  return (
    <div className={style.sideBar}>
      <Home />

      <Applied />

      <Notifications />
    </div>
  );
};

export default SideBar;
