import OpenAI from "openai-api";
import GptConfig from "./gpt3.json";

const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
const openai = new OpenAI(OPENAI_API_KEY ?? "");

export async function requestTranscriptHumorScore(
  transcript: string
): Promise<number | null> {
  if (transcript === "") return null;

  const updatedPrompt = `${GptConfig.prompt}\nSentence: "${transcript}"\nScore:`;

  const configCopy = { ...GptConfig };
  configCopy.prompt = updatedPrompt;

  const response = await openai.complete(configCopy);
  const score = parseInt(response.data["choices"][0]["text"]);

  return score;
}
