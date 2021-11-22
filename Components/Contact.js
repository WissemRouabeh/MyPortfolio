import styles from "../styles/Contact.module.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import AppsIcon from "@mui/icons-material/Apps";
import SendIcon from "@mui/icons-material/Send";

function Contact({ ineref, setToggle }) {
  return (
    <div ref={ineref} className={styles.contact_container}>
      <div className={styles.topsection}>
        <h1>
          <AppsIcon
            className={styles.muiToggle}
            onClick={() => {
              setToggle(true);
            }}
          />
          Contact
        </h1>
        <div>
          <p>
            Interested in hiring me for your project or just want to say hi? You
            can fill in the contact form below or send me an email to
            <span> wissemrouabeh@gmail.com</span> also available on whatsapp:{" "}
            <span>+216 22 234 528</span>
            <br />
            Want to get connected? you can find me in
          </p>
          <div className={styles.contact_icons}>
            <FacebookIcon
              className={styles.muiIcon}
              onClick={() => {
                window.open(
                  "https://www.facebook.com/Wissem.Rouabeh/",
                  "_blanc"
                );
              }}
            />
            <InstagramIcon
              className={styles.muiIcon}
              onClick={() => {
                window.open(
                  "https://www.instagram.com/Wissem_Rouabeh/",
                  "_blanc"
                );
              }}
            />
            <LinkedInIcon
              className={styles.muiIcon}
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/Wissem-rouabeh",
                  "_blanc"
                );
              }}
            />{" "}
            <GitHubIcon
              className={styles.muiIcon}
              onClick={() => {
                window.open("https://www.github.com/WissemRouabeh/", "_blanc");
              }}
            />
          </div>
        </div>
      </div>
      <div className={styles.midsection}>
        <div className={styles.formulaire}>
          <h1>Get in touch</h1>
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Subject" />
          <textarea style={{ width: "100px" }} type="text" placeholder="Body" />
          <button className={styles.sendmebtn}>
            {" "}
            <SendIcon className={styles.sendmeicon} /> Send
          </button>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footert}>
          Copyright © 2021 - <span>Wissem Rouabeh</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
