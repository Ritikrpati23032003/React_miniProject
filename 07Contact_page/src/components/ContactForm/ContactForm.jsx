import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const ContactForm = () => {
  const [name, setName] = useState("Name");
  const [email, setEmail] = useState("Mail@");
  const [text, setText] = useState("text");
  const [callBtnText, setCallBtnText] = useState("VIA CALL");
  const [SubmitBtnText, setSubmitBtnText] = useState("SUBMIT");
  const [msg, setMsg] = useState("VIA SUPPORT CHAT");
  const [emailbtn,setEmailbtn]=useState("ANY PROBLEM EMAIL FORM");
  const onviacallSubmit = (e) => {
    e.preventDefault();
    e.target.style.color ="red";
    setCallBtnText("Call is ringing");
    console.log("Call is ringing...");
  };
  const onvialmsg = (e) => {
    e.preventDefault();
    e.target.style.color = "green";
    setMsg("+91 9348520919");
  };
  const onvialmail = (e) => {
    e.preventDefault();
    setEmailbtn("ritikranjanpati@gmail.com");
  };

  const Submit = (e) => {
    e.preventDefault();
    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setText(e.target[2].value);
    setSubmitBtnText("Submited");
    for (let index = 0; index < e.target.length; index++) {
      console.log(e.target[index].value);
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            onClick={onvialmsg}
            text={msg}
            icon={<MdMessage fontSize="22px" />}
          />
          <Button
            onClick={onviacallSubmit}
            text={callBtnText}
            icon={<IoMdCall fontSize="24px" />}
          />
        </div>
        <Button
        onClick={onvialmail}
          isOutline="true"
          text={emailbtn}
          icon={<MdEmail fontSize="22px" />}
        />
        <form onSubmit={Submit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" required />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email"  required/>
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="name" rows="6" />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text={SubmitBtnText} />
          </div>
          <div>{name + " " + email + " " + text}</div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="images/contact.svg" alt="contact" />
      </div>
    </section>
  );
};

export default ContactForm;
