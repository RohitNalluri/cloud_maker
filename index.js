//update index.js to include chat component:

// add to pages/index.js

import Chat from "../components/Chat";

export default function Home() {
  return (
    <div>
      <h1>CloudMaker AI Chat</h1>
      <Chat />
    </div>
  );
}
