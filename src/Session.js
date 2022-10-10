import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Title from "./Title";
import Footer from "./Footer";
import Seat from "./Seat";
import { cpfMask } from "./mask";
import Button from "./Button";

export default function Session() {
  const [session, setSession] = useState([]);
  const [mov, setMov] = useState([]);
  const [day, setDay] = useState([]);
  const [seats, setSeats] = useState([]);
  const [selected, setSelected] = useState([]);
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");

  const { idSessao } = useParams();

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`
    );

    promise.then((res) => {
      setSession(res.data);
      setMov(res.data.movie);
      setDay(res.data.day);
      setSeats(res.data.seats);
    });

    promise.catch((err) => {
      console.log(err.response.data);
    });
  }, [idSessao]);

  function handleSubmit(e) {
    e.preventDefault();

    const aux = cpf.replace("-", "").replaceAll(".", "");

    const assets = {
      ids: selected,
      name,
      cpf: aux,
    };

    const promise = axios.post(
      "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",
      assets
    );

    promise.then(() => {
      console.log(assets);
    });
    promise.catch(() => {
      console.log("erro");
    });
  }

  return (
    <>
      <Title>Selecione o(s) assento(s)</Title>

      <Seats>
        {seats.map((s) => (
          <Seat
            key={s.id}
            name={s.name}
            isAvailable={s.isAvailable}
            setSelected={setSelected}
            selected={selected}
          />
        ))}
      </Seats>

      <Labels>
        <Label>
          <SeatLabel color="#1AAE9E" border="#0E7D71"></SeatLabel>
          <p>Selecionado</p>
        </Label>
        <Label>
          <SeatLabel color="#C3CFD9" border="#808F9D"></SeatLabel>
          <p>Disponível</p>
        </Label>
        <Label>
          <SeatLabel color="#FBE192" border="#F7C52B"></SeatLabel>
          <p>Indisponível</p>
        </Label>
      </Labels>
      {selected}
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome do comprador:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {name}
        <label htmlFor="cpf">CPF do comprador:</label>
        <input
          maxLength="14"
          type="text"
          id="cpf"
          value={cpf}
          onChange={(e) => setCpf(cpfMask(e.target.value))}
        />
        {cpf}
        <Button type="submit">Reservar assento(s)</Button>
      </Form>

      <Footer>
        <img src={mov.posterURL} alt="Poster" />
        <p>
          {mov.title} <br />
          {day.weekday} - {session.name}
        </p>
      </Footer>
    </>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 5px;

  label {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;

    color: #293845;
  }

  input {
    width: 327px;
    height: 51px;

    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 3px;
  }
  button {
    align-self: center;
  }
`;

const SeatLabel = styled.div`
  width: 26px;
  height: 26px;

  background: ${(props) => props.color};
  border: 1px solid ${(props) => props.border};
  border-radius: 12px;
`;

const Seats = styled.div`
  display: flex;
  height: fit-content;
  flex-wrap: wrap;
  gap: 26px 13px;
  max-width: 400px;
  margin: 20px;
`;

const Labels = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Label = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
