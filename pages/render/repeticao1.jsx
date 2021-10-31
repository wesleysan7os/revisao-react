export default function repeticao1() {
  const listaAprovados = ["João", "Carlos", "Bia", "Ana", "Laura", "Daniel"];

  function renderizarLista() {
    return listaAprovados.map((nome, i) => <li key={i}>{nome}</li>);
  }

  return <ul>{renderizarLista()}</ul>;
}
