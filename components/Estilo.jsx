export default function Estilo(props) {
  const classeAplicada = props.numero >= 0 ? "azul" : "vermelho";

  const estilos = {
    backgroundColor: props.numero >= 0 ? "#5D2" : "#D22",
    color: props.color,
    textAlign: props.direita ? "right" : "left",
  };

  return (
    <div>
      <h1 style={estilos}>Texto #01</h1>
      <h2 className={classeAplicada}>Texto #02</h2>
    </div>
  );
}
