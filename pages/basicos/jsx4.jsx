export default function jsx4() {
  const subtitulo = "Estou no Javascript!";
  const trecho = <h3>{3 * 4}</h3>;
  return (
    <div>
      <h1>Integração JS e JSX</h1>
      <h2>{subtitulo}</h2>
      {trecho}
      <h4>{Math.max(3, 20)}</h4>
      <h4>{entre(10, 9, 18)}</h4>
    </div>
  );
}

function entre(valor, min, max) {
  if (valor >= min && valor < max) {
    return "Sim";
  } else {
    return "Não";
  }
}
