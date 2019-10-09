import React, { useState } from "react";
import "./App.css";

function App() {
  // Entrada, rodando, fim
  const [estado, setEstado] = useState("ENTRADA");
  const [palpite, setPalpite] = useState(150);
  const [numPalpites, setNumPalpites] = useState(1);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  function iniciarJogo() {
    setEstado("RODANDO");
    setMin(0);
    setMax(300);
    setNumPalpites(1);
    setPalpite(150);
  }

  function menor() {
    setNumPalpites(numPalpites + 1);
    setMax(palpite);
    const proximoPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proximoPalpite);
  }
  function maior() {
    setNumPalpites(numPalpites + 1);
    setMin(palpite);
    const proximoPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proximoPalpite);
  }
  function acertou() {
    setEstado("FIM");
  }

  if (estado === "ENTRADA") {
    return (
      <div className="App">
        <button onClick={iniciarJogo}>Começar a jogar</button>
      </div>
    );
  }

  if (estado === "FIM") {
    return (
      <div className="App">
        <p>Você acertou com {numPalpites} palpites.</p>
        <button onClick={iniciarJogo}>Jogar novamente</button>
      </div>
    );
  }

  return (
    <div className="App">
      <p>O seu número é: {palpite} ?</p>

      <div className="actions">
        <button onClick={menor}>Menor!</button>
        <button onClick={acertou}>Acertou!</button>
        <button onClick={maior}>Maior!</button>
      </div>
    </div>
  );
}

export default App;
