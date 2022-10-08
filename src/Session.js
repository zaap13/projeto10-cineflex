import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Title from "./Title";
import Footer from "./Footer";
import Seat from "./Seat";

export default function Session() {
  const [session, setSession] = useState([]);
  const [mov, setMov] = useState([]);
  const [day, setDay] = useState([]);
  const [seats, setSeats] = useState([]);
  const [selected, setSelected] = useState([]);
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

const Seats = styled.div`
  display: flex;
  height: fit-content;
  flex-wrap: wrap;
  gap: 26px 13px;
  max-width: 400px;
  margin: 20px;
`;
