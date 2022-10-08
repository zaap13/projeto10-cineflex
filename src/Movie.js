import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "./Title";
import Day from "./Day";
import styled from "styled-components";
import Footer from "./Footer";

export default function Movie() {
  const [movie, setMovie] = useState([]);
  const [day, setDay] = useState([]);
  const { idFilme } = useParams();

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`
    );

    promise.then((res) => {
      setDay(res.data.days);
      setMovie(res.data);
    });

    promise.catch((err) => {
      console.log(err.response.data);
    });
  }, [idFilme]);
  return (
    <>
      <Title>Selecione o horário</Title>
      <Days>
        {day.map((i) => (
          <Day key={i.id} day={i}></Day>
        ))}
      </Days>
      <Footer>
        <img src={movie.posterURL} alt="Poster" />
        <p>{movie.title}</p>
      </Footer>
    </>
  );
}

const Days = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;
