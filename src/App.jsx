import { useState } from "react";

function App() {
  const [question, setQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User asked:", question);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "4rem" }}>
      <h1>Ask a Question</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Type your question..."
          style={{
            padding: "0.5rem 1rem",
            fontSize: "1rem",
            width: "300px",
            marginRight: "1rem",
          }}
        />
        <button type="submit" style={{ padding: "0.5rem 1rem", fontSize: "1rem" }}>
          Ask
        </button>
      </form>
    </div>
  );
}

export default App;
