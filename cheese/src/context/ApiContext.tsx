import { createContext } from "react";

export const ApiContext = createContext({
  apiKey: "",
  setApiKey: (_s: string) => {},
  apiConfig: "",
  setApiConfig: (_s: string) => {},
});
