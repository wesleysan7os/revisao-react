export default function Filho(props) {
  return (
    <div>
      <h1>Filho #alterado</h1>
      <button onClick={props.funcao}>Parametro default</button>
      <button onClick={() => props.funcao("cupcakes and milkshakes")}>
        Passando parametro
      </button>
    </div>
  );
}
