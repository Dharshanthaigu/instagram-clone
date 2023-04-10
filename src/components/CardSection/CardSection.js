import React, { useEffect, useState } from "react";
import "./CardSection.css";
import { ENDPOINT_URL } from "../../Api";
import ProfilePic from "../../assest/insta_profile_pic.jpg";

function CardSection() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    const data = await fetch(`${ENDPOINT_URL}/users/1`);
    const json = await data.json();
    setUser(json);
  }

  return (
    <>
      <div className="CardSection">
        <section className="image">
          <img src={ProfilePic} alt="profileimage" className="profile_image" />
        </section>
        <div>
          <section className="user_data">
            <summary>{user.name}</summary>
            <section className="user_btn">
              <button className="btns">Follow</button>
              <button className="btns">Message</button>
            </section>
          </section>
          <section className="profile_posts margining">
            <span>1,506 posts</span>
            <span>245M followers</span>
            <span>276 following</span>
          </section>
          <section className="profile_link margining">
            <span>{user.name}</span>
            <br />
            <span>Carpediem!</span>
            <br />
            <span>
              <a className="user_link" href="https://one8.com/">
                one8.com
              </a>
            </span>
          </section>
        </div>
      </div>
    </>
  );
}

export default CardSection;
