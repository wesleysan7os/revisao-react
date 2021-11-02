import Pessoa from "../../components/Pessoa";

export default function exemploTS() {
  return (
    <div>
      <Pessoa nome="Wes" idade={29} />
      <Pessoa nome="Juan" />
    </div>
  );
}
