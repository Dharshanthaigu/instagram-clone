import React from "react";
import ProfilePic from "../../assest/insta_profile_pic.jpg";
import "./Card.css";

function Card({ card }) {
  return (
    <>
      <div>
        <img src={card.url} alt="card_img" className="img" />
      </div>
    </>
  );
}

export default Card;
