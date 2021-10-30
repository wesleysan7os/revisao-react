import Estilo from "../../components/Estilo";

export default function usandoEstilo() {
  return (
    <div>
      <Estilo numero={-2} color={"#fff"} />
      <Estilo numero={0} color={"#000"} direita={true} />
    </div>
  );
}
