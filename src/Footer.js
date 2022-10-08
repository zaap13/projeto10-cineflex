import styled from "styled-components";

export default function Footer({ children }) {
  return <Foot>{children}</Foot>;
}

const Foot = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  position: sticky;
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
    width: fit-content;
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
