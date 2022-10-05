import { Link } from "react-router-dom";

export default function Main() {
  return (
    <>
      <Link to="/filme">Filme</Link>
      <br />
      <Link to="/sessao">Sessao</Link>
      <br />
      <Link to="/sucesso">Sucesso</Link>
    </>
  );
}
