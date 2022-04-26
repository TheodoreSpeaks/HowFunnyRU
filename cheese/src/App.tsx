import React from "react";
import "./App.css";
import Microphone from "./components/Microphone";
import MuteContextProvider from "./context/MuteContextProvider";
import SoundButton from "./components/SoundButton";
import Logo from './assets/logo.png'

export default function App(): React.ReactElement {
  return (
    <MuteContextProvider>
      <div className="app main-background">
        {/* <SoundButton className="sound-button"/> */}
        {/* <h1>How funny are you?</h1> */}
        <img src={Logo} width={250} height={250}/>
        <Microphone />
      </div>
    </MuteContextProvider>
  );
}
