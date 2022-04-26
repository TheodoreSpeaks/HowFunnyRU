import OpenAI from "openai-api";
// import GptConfig from "./gpt3.json";

// const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
// const openai = new OpenAI(OPENAI_API_KEY ?? "");

/**
 * Gets the generated score from GPT3
 * @param transcript transcript of recorded audio from microphone
 * @returns a score from 1-10 based on humor
 */
export async function requestTranscriptHumorScore(
  transcript: string,
  apiKey: string,
  apiConfig: string
): Promise<number | null> {
  if (transcript === "") return null;

  const openai = new OpenAI(apiKey ?? "");
  const GptConfig = JSON.parse(apiConfig);

  const updatedPrompt = `${GptConfig.prompt}\nSentence: "${transcript}"\nScore:`;

  const configCopy = { ...GptConfig };
  configCopy.prompt = updatedPrompt;

  const response = await openai.complete(configCopy);
  const score = parseInt(response.data["choices"][0]["text"]);

  return score;
}
