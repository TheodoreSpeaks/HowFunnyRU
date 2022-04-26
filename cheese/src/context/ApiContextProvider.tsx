import React, { useState } from "react";
import { ApiContext } from "./ApiContext";

type Props = {
  children: React.ReactNode;
};

export default function ApiContextProvider({ children }: Props): React.ReactElement {
//   const [isMute, setIsMute] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [apiConfig, setApiConfig] = useState('');

  return (
    <ApiContext.Provider value={{ apiKey, setApiKey, apiConfig, setApiConfig}}>
        {children}
    </ApiContext.Provider>
    // <MuteContext.Provider value={{ isMute, setIsMute }}>
    //   {children}
    // </MuteContext.Provider>
  );
}
