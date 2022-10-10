import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Title from "./Title";
import Button from "./Button";

export default function Success() {
  const location = useLocation();
  const seats = location.state.ids;
  return (
    <>
      <Title>
        <TitleEnd>Pedido feito com sucesso!</TitleEnd>
      </Title>

      <Container>
        <h1>Filme e sessão</h1>
        <p>{location.state.movie}</p>
        <p>
          {location.state.weekday} - {location.state.session}
        </p>
        <h1>Ingressos</h1>
        {seats.map((i, index) => (
          <p key={index}>Assento {i}</p>
        ))}
        <h1>Comprador</h1>
        <p>Nome: {location.state.name}</p>
        <p>CPF: {location.state.cpf}</p>
      </Container>

      <Link reloadDocument to="/">
        <Button>Voltar pra Home</Button>
      </Link>
    </>
  );
}

const TitleEnd = styled.p`
  font-weight: 700;
  color: #247a6b;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Roboto";
  font-style: normal;
  letter-spacing: 0.04em;
  gap: 5px;
  margin-bottom: 40px;

  color: #293845;
  h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    margin-top: 20px;
  }

  p {
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
  }
`;
