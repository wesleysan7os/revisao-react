export default function SomentePar(props) {
  const numeroPar = props.numero % 2 === 0;

  return <div>{numeroPar ? <h2>{props.numero}</h2> : null}</div>;
}
