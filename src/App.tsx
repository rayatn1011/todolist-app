import React, { useState } from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <Button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: <SpanCount>{count}</SpanCount>
          </Button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}
const Button = styled.button`
  display: inline-block;
  background: #61dafb;
  color: #282c34;
  border: 0;
  border-radius: 999rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;
const SpanCount = styled.span`
  background-color: #282c34;
  border-radius: 999rem;
  padding-inline: 0.5rem;
  color: #fff;
  font-weight: bold;
`;
export default App;
