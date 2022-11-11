import React from 'react';
import coverImage from "../../assets/cover/DSC09521.jpg";
function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <img src={coverImage} className="my-2" style={{  width: 120, height: 180}} alt="cover" />
      <p>My Name is Sam Rebilas, I am based out of the Chapel Hill area. I am a graduate from UNC Greensboro With a Business degree in Information Systems and A certificate from UNC Chapel Hill coding bootcamp. I am proficient in HTML, CSS, Git, JavaScript, Server-side and third-party API's, Node.js, Express.js, SQL, NoSql, React, MERN, and State.</p>
      <p>I enjoy playing the guitar, as well as hiking, or playing videogames with friends.</p>
      <p>Feel Free to reach out and contact me below!</p>

    </section>
    

  );
}

export default About;