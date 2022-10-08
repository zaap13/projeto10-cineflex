import GlobalStyle from "./globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Movie from "./Movie";
import Session from "./Session";
import Success from "./Success";
import styled from "styled-components";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header>CINEFLEX</Header>

      <Routes>
        {/* Cada rota tem que estar em Route */}
        <Route path="/" element={<Main />} />
        <Route path="/filme/:idFilme" element={<Movie />} />
        <Route path="/sessao" element={<Session />} />
        <Route path="/sucesso" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

const Header = styled.header`
  position: fixed;
  left: 0px;
  top: 0px;

  width: 100%;
  height: 67px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 40px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  color: #e8833a;

  background: #c3cfd9;
`;
