import '../App.css'
import React, { useState } from "react";

const ContactCard = (props) => {
  const [showAge, setShowAge] = useState(false);
  return (
    <>
      <div className="contact-card">
        <img src={props.avatarUrl} alt="profile"></img>
        <div className="user-details">
          <p>Name: {props.firstName}</p>
          <p>Email: {props.email}</p>

          <button onClick={() => setShowAge((prev) => !prev)}>Show Age</button>
          {showAge && <p>Age: {props.age}</p>}
        </div>
      </div>
    </>
  );
};

export default ContactCard;
