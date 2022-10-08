import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Image({ img }) {
  return (
    <ImgBox>
      <Link to={`/filme/${img.id}`}>
        <img src={img.posterURL} />
      </Link>
    </ImgBox>
  );
}

const ImgBox = styled.div`
  width: 145px;
  height: 209px;

  background: #ffffff;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 129px;
    height: 193px;
    align-self: center;
  }
`;
