/**
 * Play laugh track based on score of humor
 * @param score humor score given by GPT3
 */
export function playAudio(score: number): void {
  const laughTrackNumber = Math.floor(Math.random() * 3);
  const track = require(`../assets/laugh_${laughTrackNumber}.mp3`);
  const audio = new Audio(track);

  console.log("playing");
  audio.volume = score / 10;
  audio.play();
}
