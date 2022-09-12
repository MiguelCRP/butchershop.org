import { useState } from "react";
import { TextField } from "@mui/material";

export const App = () => {
  const [username, setUsername] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="grid grid-rows-5">
        <TextField
          className="row-span-2"
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Message"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        {username}
        {content}
      </div>
    </div>
  );
};
