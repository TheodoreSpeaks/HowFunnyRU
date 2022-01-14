import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import NeonButton from "./NeonButton";
import { requestTranscriptHumorScore } from "../util/useGptRequest";
import { playAudio } from "../util/useAudio";

export default function Microphone(): React.ReactElement {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const [startedRecording, setStartedRecording] = useState(false);
  const [fullTranscript, setFullTranscript] = useState("");
  const [humorScore, setHumorScore] = useState(-1);

  useEffect(() => {
    if (!listening && startedRecording) {
      // Pause detected
      setFullTranscript((fullTranscript) => `${fullTranscript} ${transcript}`);
      SpeechRecognition.startListening();

      console.log("pause");
      requestTranscriptHumorScore(transcript).then((score) => {
        if (score != null) {
          setHumorScore(score);
          playAudio(score);
        }
      });
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

  const resetFullTranscript = (): void => {
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
      {humorScore !== -1 ? <p>Score: {humorScore}</p> : null}
    </div>
  );
}
