import axios from "axios";
import { useEffect, useState } from "react";
import Image from "./Image";
import styled from "styled-components";
import Title from "./Title";

export default function Main() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    );

    promise.then((res) => {
      setImages(res.data);
    });

    promise.catch((err) => {
      console.log(err.response.data);
    });
  }, []);

  return (
    <>
      <Title>Selecione o filme</Title>
      <Container>
        {images.map((img) => (
          <Image key={img.id} img={img} />
        ))}
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
