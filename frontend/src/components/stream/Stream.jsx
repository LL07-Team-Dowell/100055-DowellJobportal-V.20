import style from "../stream/stream.module.css";
const Stream = ({ name, logo, project }) => {
  return (
    <div className={style.stream}>
      <span className={style.name}>{name}</span>
      <img src={logo} alt="manage" className={style.logo} />
      <span className={style.project}>{project}</span>
    </div>
  );
};

export default Stream;
