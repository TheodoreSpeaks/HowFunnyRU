import React, { useState } from "react";
import { MuteContext } from "./MuteContext";

type Props = {
  children: React.ReactNode;
};

export default function MuteContextProvider({
  children,
}: Props): React.ReactElement {
  const [isMute, setIsMute] = useState(false);

  return (
    <MuteContext.Provider value={{ isMute, setIsMute }}>
      {children}
    </MuteContext.Provider>
  );
}
