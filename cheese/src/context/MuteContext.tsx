import { createContext } from "react";

export const MuteContext = createContext({
  isMute: false,
  setIsMute: (_b: boolean) => {},
});
