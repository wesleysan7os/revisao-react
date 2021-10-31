export default function Lista(props) {
  return (
    <div>
      <h3>Lista de algo</h3>
      <ul>{props.children}</ul>
    </div>
  );
}
