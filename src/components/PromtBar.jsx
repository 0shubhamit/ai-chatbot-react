import { useState } from "react";

export default function PromptBar({ onSend }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  return (
    <div className="p-3 bg-white flex gap-2">
      <input
        className="flex-1 border rounded px-3 py-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={handleSend} className="bg-blue-600 text-white px-4 rounded">Send</button>
    </div>
  );
}
