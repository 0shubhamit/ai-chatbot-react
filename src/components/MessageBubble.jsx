export default function MessageBubble({ role, content }) {
  const isUser = role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div className={`p-3 rounded-2xl max-w-xs ${isUser ? "bg-blue-500 text-white" : "bg-gray-300 text-black"}`}>
        {content}
      </div>
    </div>
  );
}
