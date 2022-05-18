import React, { useContext } from "react";
import { ApiContext } from "../context/ApiContext";

type Props = {
  className?: string;
};

export default function ConfigForm({ className }: Props): React.ReactElement {
  const { apiKey, setApiKey, apiConfig, setApiConfig } = useContext(ApiContext);
  const afterSubmission = (event: React.FormEvent) => {
    event.preventDefault();
    alert("Config submitted!");
  };

  return (
    <form onSubmit={afterSubmission}>
      <label>
        API key:
        <input
          type="text"
          onChange={(event) => setApiKey(event.target.value)}
        />
      </label>
      <label>
        API configuration:
        <input
          type="text"
          onChange={(event) => setApiConfig(event.target.value)}
        />
      </label>
      <input type="submit" value="Submit" className="submit-button" />
    </form>
  );
}
