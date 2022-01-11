import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import NeonButton from "./NeonButton";

export default function Microphone(): React.ReactElement {
  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <>Browser does not support speech recognition!</>;
  }

  const startListening = (): void => {
    SpeechRecognition.startListening({ continuous: true });
  };

  const stopListening = (): void => {
    SpeechRecognition.stopListening();
  };

  return (
    <div>
      <p>Microphone: {listening ? "on" : "off"}</p>
      <div>
        <NeonButton clickHandler={startListening}>Start</NeonButton>
        <NeonButton clickHandler={stopListening}>Stop</NeonButton>
      </div>
      <p>{transcript}</p>
    </div>
  );
}
