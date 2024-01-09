import { useState, useEffect, useRef } from "react";
import { marked } from "marked";
import "./index.css";
import Toolbar from "./components/Toolbar";

function App() {
  const [text, setText] = useState(localStorage.getItem("markdownText") || "# Olá, eu sou feito de markdown!");
  const textAreaRef = useRef(null);

  // converte o texto em html
  const rendeText = () => {
    return { __html: marked(text)}
  }

  useEffect(() => {
    localStorage.setItem("markdownText", text)
  }, [text])

  return (
    <div className="app-container">
      <Toolbar />
      <textarea
        ref={textAreaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div dangerouslySetInnerHTML={rendeText()} />
    </div>
  );
}

export default App;
