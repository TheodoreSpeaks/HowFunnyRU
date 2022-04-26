import React, { useContext } from "react";
import { MuteContext } from "../context/MuteContext";
import MicOnImage from "../assets/mic-on.png";
import MicOffImage from "../assets/mic-off.png";
import { MouseEventHandler } from "react";

type Props = {
  children: React.ReactNode;
  clickHandler: MouseEventHandler<HTMLButtonElement>;
};

export default function NeonButton({
  children,
  clickHandler,
}: Props): React.ReactElement {
  return (
    <button className="neon-button" onClick={clickHandler}>
      {children}
    </button>
  );
}
