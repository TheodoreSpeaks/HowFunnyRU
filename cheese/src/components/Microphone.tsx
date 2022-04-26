import React, { useContext, useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import NeonButton from "./NeonButton";
import MuteButton from "./MuteButton";
import { requestTranscriptHumorScore } from "../util/useGptRequest";
import { playAudio } from "../util/useAudio";
import { MuteContext } from "../context/MuteContext";
import MicOnImage from "../assets/mic-on.png";
import MicOffImage from "../assets/mic-off.png";
import { ApiContext } from "../context/ApiContext";

export default function Microphone(): React.ReactElement {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const { isMute } = useContext(MuteContext);
  const { apiKey, apiConfig } = useContext(ApiContext);

  const [startedRecording, setStartedRecording] = useState(false);
  const [fullTranscript, setFullTranscript] = useState("");
  const [humorScore, setHumorScore] = useState(-1);

  useEffect(() => {
    if (!listening && startedRecording) {
      // Pause detected
      setFullTranscript((fullTranscript) => `${fullTranscript} ${transcript}`);
      SpeechRecognition.startListening();

      console.log("pause");
      requestTranscriptHumorScore(transcript, apiKey, apiConfig).then((score) => {
        if (score != null) {
          setHumorScore(score);
          if (!isMute) {
            playAudio(score);
          }
        }
      });
    }
  }, [listening]);

  const toggleListening = (): void => {
    if (startedRecording) {
      stopListening();
    } else {
      startListening();
    }
  }

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
      {/* <p>Microphone: {listening ? "on" : "off"}</p> */}
      <NeonButton clickHandler={toggleListening}>
        <img src={startedRecording ? MicOnImage : MicOffImage} height={160} width={160}/>
      </NeonButton>
      {/* <NeonButton clickHandler={startListening}>Start</NeonButton>
      <NeonButton clickHandler={stopListening}>Stop</NeonButton>
      <NeonButton clickHandler={resetFullTranscript}>Reset</NeonButton> */}
      <p>
        {fullTranscript} {transcript}
      </p>
      {humorScore !== -1 ? <p>Score: {humorScore}</p> : null}
    </div>
  );
}
