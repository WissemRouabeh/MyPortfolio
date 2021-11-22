import styles from "../styles/Projects.module.scss";
import Cardi from "./Cardi";
import SendIcon from "@mui/icons-material/Send";
import AppsIcon from "@mui/icons-material/Apps";
import { useState } from "react";
function Projects({ ineref, setToggle, setNavigator }) {
  const [prjcts, setprjcts] = useState([
    {
      id: 1,
      title: "VideoConference platform",
      description:
        "A completed platform for video-conference based on rooms in wich users can do CRUD functions, webRTC and socket term for communicate on realTime, realTimes chatting ,video-audio call and screen sharing.",
      img1: "./media/webrtc/2c.jpg",
      img2: "./media/webrtc/1c.jpg",
      tag: [
        "React",
        "Node",
        "Express",
        "MongoDB",
        "WebRTC",
        "PeerJS",
        ,
        "SocketIO",
        ,
        "styled-component",
        "Redux",
      ],
    },
    {
      id: 2,
      title: "Wissem's Portfolio",
      description:
        "As a developper i need a Portfolio to introduce me, for that i built a responsive portfolio with a side fixed bar and a snap scrollable sections based in ux/ui practicis.",
      img1: "./media/portfolio.jpg",
      img2: "./media/portfolio.jpg",
      tag: ["Next.js", "React hooks", "Sass", "MaterialUI", "javascript"],
    },
    {
      id: 3,
      title: "Landing with sign-up",
      description:
        "A reusable landing page with scroll to sign-up form build with formik and a smooth changable background color, a fixed navbar integrated with a dropdown sign-in form",
      img1: "./media/Reactscrollformik.jpg",
      img2: "./media/Reactscrollformik.jpg",
      tag: ["React", , "Redux", "Formik", "javascript", "CSS"],
    },
    {
      id: 4,
      title: "E-courses platform",
      description:
        "An e-commerce platform for courses, in wich you can find a bunch of IT courses, all CRUD functions integrated,",
      img1: "./media/ionic/1.jpg",
      img2: "./media/ionic/2.jpg",
      tag: ["Ionic", "Elasticsearch", "Typescript", "Bootstrap"],
    },
    {
      id: 5,
      title: "Student Management",
      description:
        "An application for Student management, one type of user can do all CRUD functions on student layer",
      img1: "./media/mangstudent.jpg",
      img2: "./media/mangstudent.jpg",
      tag: ["Angular", "Typescript", "Bootstrap", "CSS", "Forms"],
    },
    {
      id: 6,
      title: "Intro to  android dev",
      description:
        "A show case reusable application, glass landing page with flat design pages, one page application with scroll to section commanded from the navbar, with a contact form",
      img1: "./media/and/1.jpg",
      img2: "./media/and/2.jpg",
      tag: ["HTML", "javascript", "CSS"],
    },
  ]);
  return (
    <div ref={ineref} className={styles.projects_container}>
      <div className={styles.topsection}>
        <h1>
          <AppsIcon
            className={styles.muiToggle}
            onClick={() => {
              setToggle(true);
            }}
          />
          Projects
        </h1>
        <div className={styles.p}>
          Welcome to my portfolio <br />
          <span>
            below a bunch of projects that i've made, you can hire me if you
            need a hand on your project.
          </span>
          <br />
          <button className={styles.hiremebtn}>
            <div>
              <SendIcon
                onClick={() => {
                  setNavigator(3);
                }}
                className={styles.hiremeicon}
              />{" "}
              Hire me
            </div>
          </button>
        </div>
      </div>
      <div className={styles.bottomsection}>
        {prjcts.map((object) => {
          return <Cardi key={object.id} object={object} tags={object.tag} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
