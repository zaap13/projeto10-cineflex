import { useState } from "react";
import styled from "styled-components";

export default function Seat({ name, isAvailable, setSelected, selected }) {
  const [click, setClick] = useState(false);

  function handleSelect() {
    let selecteds = [];
    if (!click) {
      selecteds = [...selected, name];
    } else {
      selecteds = selected.map((item) => (item === name ? "" : item));
    }
    setClick(!click);
    setSelected(selecteds.filter((i) => i !== ""));
  }
  return (
    <>
      <SeatBox disabled={!isAvailable} onClick={handleSelect} click={click}>
        {name}
      </SeatBox>
    </>
  );
}

const SeatBox = styled.button`
  width: 26px;
  height: 26px;

  background: ${(props) => (props.click ? "#1AAE9E" : "#c3cfd9")};
  border: 1px solid ${(props) => (props.click ? "#0E7D71" : "#808F9D")};
  border-radius: 12px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: 0.04em;

  color: #000000;

  cursor: pointer;

  &:disabled {
    background: #fbe192;
    border: 1px solid #f7c52b;
    cursor: default;
  }
`;
