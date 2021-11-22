import styles from "../styles/Sidebar.module.scss";
import AllInclusiveRoundedIcon from "@mui/icons-material/AllInclusiveRounded";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import AppsIcon from "@mui/icons-material/Apps";

function Sidebar({ setNavigator, setToggle, toggle }) {
  return (
    <div
      className={styles.sidebar_container}
      style={{ display: toggle ? "flex" : "none" }}
    >
      <AppsIcon
        className={styles.muiToggle}
        onClick={() => {
          setToggle(false);
        }}
      />
      <div className={styles.picture}>
        <img src="./sidebarpic.jpg" alt="" />
      </div>

      <div className={styles.sidebar_text}>
        <h1>Wissem Rouabeh</h1>
        <p>
          25 yo, a <span>Fullstack Web Developer</span>, with a lot of coding
          skills in front-end and back-end developpement, such as advanced
          algorithms and design integration.
        </p>
      </div>
      <div className={styles.sidebar_hdivider}>
        <AllInclusiveRoundedIcon className={styles.muiAttach} />
      </div>
      <div className={styles.sidebar_icons}>
        <FacebookIcon
          className={styles.muiIcon}
          onClick={() => {
            window.open("https://www.facebook.com/Wissem.Rouabeh/", "_blanc");
          }}
        />
        <InstagramIcon
          className={styles.muiIcon}
          onClick={() => {
            window.open("https://www.instagram.com/Wissem_Rouabeh/", "_blanc");
          }}
        />
        <LinkedInIcon
          className={styles.muiIcon}
          onClick={() => {
            window.open("https://www.linkedin.com/in/Wissem-rouabeh", "_blanc");
          }}
        />
        <GitHubIcon
          className={styles.muiIcon}
          onClick={() => {
            window.open("https://www.github.com/WissemRouabeh/", "_blanc");
          }}
        />
      </div>

      <div className={styles.navigator}>
        <button
          onClick={() => {
            setNavigator(0);
          }}
        >
          <PersonSearchOutlinedIcon />
          About me
        </button>
        <button
          onClick={() => {
            setNavigator(1);
          }}
        >
          <DownhillSkiingIcon /> Skills and Competences
        </button>
        <button
          onClick={() => {
            setNavigator(2);
          }}
        >
          <AccountTreeIcon /> Projects
        </button>
        <button
          onClick={() => {
            setNavigator(3);
          }}
        >
          <ContactPhoneOutlinedIcon />
          Contact me
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
