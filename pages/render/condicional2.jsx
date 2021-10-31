import If from "../../components/If";
export default function condicional2() {
  const numero = 3;
  return (
    <div>
      <If teste={numero % 2 === 0}>
        <h2>O numero {numero} é par.</h2>
      </If>
      <If teste={numero % 2 === 1}>
        <h2>O numero {numero} é ímpar.</h2>
      </If>
    </div>
  );
}
