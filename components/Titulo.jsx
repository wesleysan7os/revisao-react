export default function Titulo(props) {
  return props.pequeno ? (
    <>
      <p>{props.titulo}</p>
      <h5>{props.subtitulo}</h5>
    </>
  ) : (
    <>
      <h1>{props.titulo}</h1>
      <h2>{props.subtitulo}</h2>
    </>
  );
}
