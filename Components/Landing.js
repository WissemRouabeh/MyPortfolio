import styles from "../styles/Landing.module.scss";
import SendIcon from "@mui/icons-material/Send";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AppsIcon from "@mui/icons-material/Apps";
function Landing({ setNavigator, ineref, setToggle }) {
  return (
    <div className={styles.landing_container} ref={ineref}>
      <AppsIcon
        className={styles.muiToggle}
        onClick={() => {
          setToggle(true);
        }}
      />
      <div className={styles.leftside}>
        <div className={styles.leftcontents}>
          <h1>Wissem Rouabeh</h1>
          <h3>Fullstack Web Developer</h3>
          <p>
            Hi, my name is Wissem Rouabeh, i'm a{" "}
            <span>Fullstack Web Developer</span>. I build responsive web
            applications from creating APIs to integrating a design until
            deploying it, i also build applications that includes webRTC and
            Socket term like video-conference apps and realtime chat apps and
            more.
          </p>

          <div className={styles.actionsbtn}>
            <button
              className={styles.hiremebtn}
              onClick={() => {
                setNavigator(3);
              }}
            >
              {" "}
              <SendIcon className={styles.hiremeicon} /> Hire me
            </button>
            <button
              className={styles.resumebtn}
              onClick={() => {
                window.open(
                  "https://drive.google.com/drive/folders/1oDJJTce8N4oAEHuKRTsYlAXjEIpTtk78",
                  "_blank"
                );
              }}
            >
              <DescriptionOutlinedIcon className={styles.resumeicon} />
              Resume.pdf
            </button>
          </div>
        </div>
      </div>
      <div className={styles.rightside}>
        <div>
          <img className={styles.img1} src="./mypic.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Landing;
