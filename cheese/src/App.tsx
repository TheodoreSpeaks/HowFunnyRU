import React from "react";
import "./App.css";
import Microphone from "./components/Microphone";
import MuteContextProvider from "./context/MuteContextProvider";
import SoundButton from "./components/SoundButton";
import Logo from './assets/logo.png'
import NeonButton from "./components/NeonButton";
import ConfigForm from './components/ConfigForm';
import ApiContextProvider from "./context/ApiContextProvider";

export default function App(): React.ReactElement {

  return (
    <MuteContextProvider>
      <ApiContextProvider>
        <div className="app main-background">
          {/* <SoundButton className="sound-button"/> */}
          {/* <h1>How funny are you?</h1> */}
          <img src={Logo} width={500} height={500}/>
          <Microphone />
          <ConfigForm />
        </div>
      </ApiContextProvider>
    </MuteContextProvider>

  );
}
