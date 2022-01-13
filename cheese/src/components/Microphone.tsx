import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import NeonButton from "./NeonButton";
import GptConfig from "../gpt3.json";

export default function Microphone(): React.ReactElement {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const [startedRecording, setStartedRecording] = useState(false);
  const [fullTranscript, setFullTranscript] = useState("");

  const OpenAI = require('openai-api');
  const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
  const openai = new OpenAI(OPENAI_API_KEY);

  useEffect(() => {
    if (!listening && startedRecording) {
      // Pause detected
      setFullTranscript((fullTranscript) => fullTranscript + " " + transcript);
      SpeechRecognition.startListening();

      requestTranscriptHumorScore();
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

  const requestTranscriptHumorScore = async () => {
    if (transcript === "") return;

    const updatedPrompt = GptConfig.prompt + "\nSentence: " + transcript + "\nScore:";

    const configCopy = { ...GptConfig };
    configCopy.prompt = updatedPrompt

    const response = await openai.complete(configCopy);
    const score = parseInt(response.data['choices'][0]['text']);

    console.log(score);
  }

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
