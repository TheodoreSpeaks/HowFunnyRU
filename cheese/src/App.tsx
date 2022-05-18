import React from "react";

import ApiContextProvider from "./context/ApiContextProvider";
import ConfigForm from './components/ConfigForm';
import Logo from './assets/logo.png'
import Microphone from "./components/Microphone";
import MuteContextProvider from "./context/MuteContextProvider";
// import NeonButton from "./components/NeonButton";
// import SoundButton from "./components/SoundButton";

import "./App.css";

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
