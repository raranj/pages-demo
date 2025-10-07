import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [question, setQuestion] = useState("");
  const chatEndRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    const newMessage = { role: "user", text: question };
    setMessages((prev) => [...prev, newMessage]);

    // Simulated assistant reply (mock)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "This is a mock response." },
      ]);
    }, 600);

    setQuestion("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat-container">
      <div className="chat-header">Cloudflare Pages Chat</div>

      <div className="chat-messages">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`message-row ${
              msg.role === "user" ? "user-message" : "assistant-message"
            }`}
          >
            <div className="message-bubble">{msg.text}</div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <footer className="chat-footer">
        <form className="input-form" onSubmit={handleSubmit}>
          <textarea
            className="input-box"
            placeholder="Message..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={1}
          />
          <button type="submit" className="send-btn">
            ➤
          </button>
        </form>
      </footer>
    </div>
  );
}

export default App;
