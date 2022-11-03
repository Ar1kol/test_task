import React from "react";
import "./App.css";

import ConnectWallet from "./components/ConnectWallet";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Solana Examples</h1>
        <hr className="fullWidth" />

        <ConnectWallet />
        <p>Hello there</p>
      </header>
    </div>
  );
}

export default App;
