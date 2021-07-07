import React, { useState } from 'react';
import './Resume.css';
function Resume() {
   return (
    <div className="resume-div">
      <h1> Who am I? </h1>
      <ul>
        <li> I was born on July 4th, 2002 in Las Vegas, NV </li>
        <li> My favorite sport is basketball and my favorite team is the Los Angeles lakers</li>
        <li> I love to hang out with friends and talk about our interests</li>
        <li> I love to read and watch tv </li>
        <ul>
          <li> My favorite book is Percy Jackson and my favorite show is Loki </li>
        </ul>
        <li> My biggest desire in life is to help as many people as possible succeed and find their best selves </li>

      </ul>
  
      <h2> Upcoming Project/Certification ideas: </h2>
      <ul>
        <li> An Email Automation App: Easily send updates to my supervisors at my Chapman Grand Office Assistant Position</li>
        <li> Logging in with Spotify: An app to teach myself how to leverage Spotify's API to log people into an app</li>
        <li> Getting the AWS Practioner Certificate: I love Cloud Computing and it's my dream to work in this field </li>
      </ul>
    </div>
  );
}


export default Resume;