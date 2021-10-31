import Filho from "./Filho";

export default function Pai(props) {
  return (
    <div>
      <h1>Familia {props.familia}</h1>
      <Filho nome="Juan" familia={props.familia} />
      <Filho nome="Iara" familia={props.familia} />
      <Filho nome="Wesley" familia={props.familia} />
    </div>
  );
}
