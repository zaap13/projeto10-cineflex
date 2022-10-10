import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Success() {
  const location = useLocation();

  return (
    <>
      <div>
        {location.state.name}
        {location.state.ids}
        {location.state.cpf}
        {location.state.movie}
        {location.state.weekday}
        {location.state.session}
      </div>

      <Link to="/">Voltar</Link>
    </>
  );
}
