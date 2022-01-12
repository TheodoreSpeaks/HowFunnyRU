import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import NeonButton from "./NeonButton";

export default function Microphone(): React.ReactElement {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const [startedRecording, setStartedRecording] = useState(false);
  const [fullTranscript, setFullTranscript] = useState("");

  useEffect(() => {
    if (!listening && startedRecording) {
      // Pause detected
      setFullTranscript((fullTranscript) => fullTranscript + " " + transcript);
      SpeechRecognition.startListening();
    }
  }, [listening]);

  const startListening = (): void => {
    SpeechRecognition.startListening();
    setStartedRecording(true);
  };

  const stopListening = (): void => {
    SpeechRecognition.stopListening();
    setStartedRecording(false);
  };

  const resetFullTranscript = () => {
    resetTranscript();
    setFullTranscript("");
    stopListening();
  };

  if (!browserSupportsSpeechRecognition) {
    return <>Browser does not support speech recognition!</>;
  }

  return (
    <div>
      <p>Microphone: {listening ? "on" : "off"}</p>
      <NeonButton clickHandler={startListening}>Start</NeonButton>
      <NeonButton clickHandler={stopListening}>Stop</NeonButton>
      <NeonButton clickHandler={resetFullTranscript}>Reset</NeonButton>
      <p>
        {fullTranscript} {transcript}
      </p>
    </div>
  );
}
