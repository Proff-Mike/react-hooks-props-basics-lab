import React from "react";
import Links from "./Links";

function About(props) {
  const infoBio = (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.bio}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" /></p>
      {/* add your <Links /> component here */}
      <Links github = {props.links.github} linkedin = {props.links.linkedin} />
    </div>
  );
  
  const noBio = (
    <div id="about">
      <h2>About Me</h2>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github = {props.links.github} Linkedin = {props.links.Linkedin} />
    </div>
  )

  const showBio = props.bio
    if (showBio) {
      return infoBio
    }
    else {
      return noBio
    }   
}

export default About;
