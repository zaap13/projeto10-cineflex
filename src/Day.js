import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Day({ day }) {
  return (
    <DayContainer>
      <Date>
        {day.weekday} - {day.date}
      </Date>
      <Times>
        {day.showtimes.map((i) => (
          <Link key={i.id} to={`/sessao/${i.id}`}>
            <Showtime >{i.name}</Showtime>
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

const Showtime = styled.button`
  width: 83px;
  height: 43px;

  background: #e8833a;
  border-radius: 3px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;

  color: #ffffff;
  cursor: pointer;
`;

const Times = styled.div`
  display: flex;
  gap: 10px;
`;
