import styled from "styled-components";

export default function Button({ children }) {
  return <But>{children}</But>;
}

const But = styled.button`
  width: fit-content;
  height: 43px;
  padding: 0 10px;

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
