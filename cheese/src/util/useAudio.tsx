/**
 * Play laugh track based on score of humor
 * @param score humor score given by GPT3
 */
export function playAudio(score: number): void {
  if (score === 0) return;

  const track = require(`../assets/laugh_${score}.mp3`);
  const audio = new Audio(track);

  console.log("playing");
  audio.volume = 0.5;
  audio.play();
}
