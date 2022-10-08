import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "./Title";
import Day from "./Day";
import styled from "styled-components";

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
          <Day day={i}></Day>
        ))}
      </Days>
      <Footer>
        <img src={movie.posterURL} alt="Poster" />
        <p>{movie.title}</p>
      </Footer>
    </>
  );
}

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  position: fixed;
  width: 100%;
  height: 117px;
  left: 0px;
  bottom: 0px;
  padding: 10px;
  background: #dfe6ed;
  border: 1px solid #9eadba;

  img {
    height: 72px;
  }

  p {
    width: 169px;
    height: 40px;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    display: flex;
    align-items: center;

    color: #293845;
  }
`;

const Days = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;
