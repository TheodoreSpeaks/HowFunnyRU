import React from "react";
import "./App.css";
import Microphone from "./components/Microphone";

export default function App(): React.ReactElement {
  return (
    <div className="app main-background">
      <h1>How funny are you?</h1>
      <Microphone />
    </div>
  );
}
