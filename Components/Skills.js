import styles from "../styles/Skills.module.scss";
import AppsIcon from "@mui/icons-material/Apps";
import GitHubIcon from "@mui/icons-material/GitHub";

function Skills({ ineref, setToggle }) {
  return (
    <div className={styles.skills_container} ref={ineref}>
      <div className={styles.skillscontent}>
        <h1>
          <AppsIcon
            className={styles.muiToggle}
            onClick={() => {
              setToggle(true);
            }}
          />
          Skills and Competences
        </h1>
        <p>
          Hi again, i got a lot of skills in web developpement specially with
          React.js or Next.js, i can work both offices front-end and back-end, i
          specialize also in video-conference application with screen sharing
          and realtime chatting using Peer.js and webRTC in aid with socket
          term.
        </p>
      </div>
      <div className={styles.grid}>
        <div className={styles.cards}>
          <div>
            <img src="./static/react.png" alt="" />
            <span>ReactJS</span>
          </div>
          <div>
            <img src="./static/next.png" alt="" />
            <span>nextjs</span>
          </div>
          <div>
            <img src="./static/angular.png" alt="" />
            <span>Angular</span>
          </div>
          <div>
            <img src="./static/nodejs.png" alt="" />
            <span>NodeJS</span>
          </div>
          <div>
            <img src="./static/spring.png" alt="" />
            <span>Spring boot</span>
          </div>
          <div>
            <img src="./static/sass.png" alt="" />
            <span>Sass</span>
          </div>
          <div>
            <img src="./static/mongodb.svg" alt="" />
            <span>MongoDB</span>
          </div>
          <div>
            <img src="./static/socket.png" alt="" />
            <span>Socket</span>
          </div>
          <div>
            <img src="./static/webrtc.png" alt="" />
            <span>webRTC</span>
          </div>
          <div>
            <img src="./static/tensorflow.png" alt="" />
            <span>Tensorflows</span>
          </div>
          <div>
            <img src="./static/htmlcss.png" alt="" />
            <span>Html{` & `}Css</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
