import { useState } from "react";
import ChatWindow from "./components/ChatWindow";
import PromptBar from "./components/PromtBar";

export default function App() {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (text) => {
    const newMsg = { role: "user", content: text };
    setMessages([...messages, newMsg]);

    const res = await fetch("http://localhost:8787/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: [...messages, newMsg] })
    });
    const data = await res.json();
    setMessages([...messages, newMsg, { role: "assistant", content: data.reply }]);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <ChatWindow messages={messages} />
      <PromptBar onSend={sendMessage} />
    </div>
  );
}
