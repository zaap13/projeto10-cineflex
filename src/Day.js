import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function Day({ day }) {
  return (
    <DayContainer>
      <Date>
        {day.weekday} - {day.date}
      </Date>
      <Times>
        {day.showtimes.map((i) => (
          <Link key={i.id} to={`/sessao/${i.id}`}>
            <Button>{i.name}</Button>
          </Link>
        ))}
      </Times>
    </DayContainer>
  );
}

const DayContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Date = styled.p`
  width: fit-content;
  height: 35px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;

  color: #293845;
`;

const Times = styled.div`
  display: flex;
  gap: 10px;
`;
