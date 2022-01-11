import React, { MouseEventHandler } from "react";
import "../App.css";

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
