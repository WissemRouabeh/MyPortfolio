import styles from "../styles/Contact.module.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import AppsIcon from "@mui/icons-material/Apps";
import SendIcon from "@mui/icons-material/Send";
import Snackbar from "@mui/material/Snackbar";

import MuiAlert from "@mui/material/Alert";
import { useState } from "react";

function Contact({ ineref, setToggle }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState({
    type: "success",
    message: "Email sent!",
  });
  const emailRegex = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const valid = () => {
    if (email == "") {
      setAlert({ type: "error", message: "Email required!" });
      handleClick();
      return false;
    } else if (!emailRegex.test(String(email).toLowerCase())) {
      setAlert({ type: "error", message: "Invalid email address!" });
      handleClick();
      return false;
    } else if (name == "") {
      setAlert({ type: "error", message: "Name required!" });
      handleClick();
      return false;
    } else {
      setAlert({ type: "success", message: "Email sent!" });
      handleClick();
      return true;
    }
  };
  const handle = (e) => {
    e.preventDefault();
    console.log("Sending");
    let data = {
      name,
      email,
      body,
    };
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setBody("");
      }
    });
  };
  return (
    <div ref={ineref} className={styles.contact_container}>
      <Snackbar open={open} autoHideDuration={1100} onClose={handleClose}>
        <MuiAlert elevation={6} variant="filled" severity={alert.type}>
          {alert.message}
        </MuiAlert>
      </Snackbar>

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
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name={email}
          />
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            name={name}
            required
          />
          <textarea
            style={{ width: "100px" }}
            type="text"
            placeholder="Body"
            onChange={(e) => {
              setBody(e.target.value);
            }}
            name={body}
            required
          />
          <button
            className={styles.sendmebtn}
            type="submit"
            onClick={(e) => {
              valid() && handle(e);
            }}
          >
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
