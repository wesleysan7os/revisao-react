import { useState } from "react";

export default function formulario() {
  const [valor, setValor] = useState("inicial");

  return (
    <div>
      <input
        type="text"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      <span>{valor}</span>
    </div>
  );
}
