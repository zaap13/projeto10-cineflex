import styled from "styled-components";

export default function Title({ children }) {
  return <Tit>{children}</Tit>;
}

const Tit = styled.div`
  width: 100%;
  height: 110px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;

  color: #293845;
  align-items: center;
  justify-content: center;
`;
