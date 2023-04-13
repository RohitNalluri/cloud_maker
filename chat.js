// This creates a Chat component that can handle user inputs and displays the AI-generated response:

// components/Chat.js

import React, { useState } from "react";

const Chat = () => {
  const [query, setQuery] = useState("");
  const [responses, setResponses] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query })
    });

    const data = await response.json();
    setResponses([...responses, { query, response: data.response }]);
    setQuery("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      <div>
        {responses.map((item, index) => (
          <div key={index}>
            <p>User: {item.query}</p>
            <p>AI: {item.response}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
