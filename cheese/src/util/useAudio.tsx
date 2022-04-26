/**
 * Play laugh track based on score of humor
 * @param score humor score given by GPT3
 */
export function playAudio(score: number): void {
  if (score === 0) return;

  const randomTrack = Math.floor(Math.random() * 3);
  const track = require(`../assets/laugh_${score}_${randomTrack}.mp3`);
  const audio = new Audio(track);

  audio.volume = 0.5;
  audio.play();
}
