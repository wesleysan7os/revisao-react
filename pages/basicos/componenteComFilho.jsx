import Item from "../../components/Item";
import Lista from "../../components/Lista";

export default function componenteComFilho() {
  return (
    <Lista>
      <Item conteudo={"Item #11"} />
      <Item conteudo={"Item #12"} />
      <Item conteudo={"Item #13"} />
      <Item conteudo={"Item #1"} />
      <Item conteudo={"Item #2"} />
      <Item conteudo={"Item #3"} />
    </Lista>
  );
}
