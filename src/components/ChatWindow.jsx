import MessageBubble from "./MessageBubble";

export default function ChatWindow({ messages }) {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-3">
      {messages.map((msg, i) => (
        <MessageBubble key={i} role={msg.role} content={msg.content}  />
      ))}
    </div>
  );
}
