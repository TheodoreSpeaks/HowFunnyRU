import React from "react";
import "./App.css";
import Microphone from "./components/Microphone";
import MuteContextProvider from "./context/MuteContextProvider";
import SoundButton from "./components/SoundButton";

export default function App(): React.ReactElement {
  return (
    <MuteContextProvider>
      <div className="app main-background">
        <SoundButton className="sound-button"/>
        <h1>How funny are you?</h1>
        <Microphone />
      </div>
    </MuteContextProvider>
  );
}
