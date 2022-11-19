import "./intro.css";
import Me from "../../img/me.png";
import React, { useState } from "react";
import Pdf from "./resume.pdf";
import Button from '@mui/material/Button';
import Emoji from "../emoji/Emoji";
import { View, TouchableOpacity } from "react-native";
import { SocialIcon } from 'react-social-icons';

const Intro = () => {
  const [resumeURL] = useState(Pdf);

  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro"><Emoji symbol="👋"/>Hello, My name is</h2>
          <View style={{ flexDirection: 'row', padding: 20 }}>
            <h1 className="i-name" >Yu Xi Gui</h1>
          </View>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Software Developer<Emoji symbol="👩🏻‍💻"/></div>
              <div className="i-title-item">Student<Emoji symbol="✏️"/></div>
              <div className="i-title-item">Photographer<Emoji symbol="📸"/></div>
            </div>
          </div>
          <p className="i-desc" font-size="100px">
          I am currently a senior majoring in Computer Science at UC Berkeley. 

          This past summer, I was a Software Developer intern at Hulu working on the User State team. 

          At Berkeley, I am part of the Delta Sigma sorority and Undergraduate Research Apprentice Program.

          In my free time, I like to to go to the gym, concerts, and play piano.
          </p>
          <View style={{ alignItems: 'center', justifyContent: "space-evenly" }}>
            <View style={{ flexDirection: 'row', padding: 30 }}>
                    <TouchableOpacity onPress={() => { }}>
                    <SocialIcon url="https://www.linkedin.com/in/yu-xi-gui/" style={{ marginRight:"20px" }}/>
                    </TouchableOpacity>
                    {"      "}
                    <TouchableOpacity onPress={() => { }}>
                    <SocialIcon url="https://github.com/yuxigui" />
                    </TouchableOpacity>
            </View>
        </View>
        {resumeURL && 
          ( <Button href = {Pdf} variant="outlined"><Emoji symbol="📃"/> Resume </Button>)
          }

        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
