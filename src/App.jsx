import { useState } from "react";

function App() {
  const [question, setQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User asked:", question);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f9fafb",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem", color: "#111827" }}>
        Ask Anything
      </h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: "9999px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
          padding: "0.5rem 1rem",
          width: "min(90%, 500px)",
          transition: "box-shadow 0.2s ease-in-out",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.12)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.08)";
        }}
      >
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Type your question..."
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            fontSize: "1rem",
            padding: "0.5rem",
            color: "#111827",
            background: "transparent",
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "9999px",
            padding: "0.5rem 1.25rem",
            cursor: "pointer",
            fontWeight: "500",
            fontSize: "1rem",
            transition: "background-color 0.2s ease-in-out",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1d4ed8")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")}
        >
          Ask
        </button>
      </form>
      <p style={{ marginTop: "1rem", color: "#6b7280", fontSize: "0.875rem" }}>
        Powered by Cloudflare Pages
      </p>
    </div>
  );
}

export default App;
