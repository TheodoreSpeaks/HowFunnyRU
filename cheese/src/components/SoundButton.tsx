import React, { useContext } from "react";
import { MuteContext } from "../context/MuteContext";
import SoundImage from "../assets/volume-icon.png";
import MuteImage from "../assets/mute-icon.png";

type Props = {
  className?: string;
};

export default function SoundButton({ className }: Props): React.ReactElement {
  const { isMute, setIsMute } = useContext(MuteContext);

  const SoundIcon = (
    <img
      alt="Sound"
      className={className}
      onClick={() => setIsMute(true)}
      src={SoundImage}
    />
  );
  const MuteIcon = (
    <img
      alt="Mute"
      className={className}
      onClick={() => setIsMute(false)}
      src={MuteImage}
    />
  );

  return isMute ? MuteIcon : SoundIcon;
}
