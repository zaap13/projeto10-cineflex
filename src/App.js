import GlobalStyle from "./globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Movie from "./Movie";
import Session from "./Session";
import Success from "./Success";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      {/* Header */}

      <Routes>
        {/* Cada rota tem que estar em Route */}
        <Route path="/" element={<Main />} />
        <Route path="/filme" element={<Movie />} />
        <Route path="/sessao" element={<Session />} />
        <Route path="/sucesso" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}
