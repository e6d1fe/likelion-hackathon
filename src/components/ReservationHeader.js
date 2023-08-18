import { styled } from "styled-components";

import hamburgermenu from "../assets/hamburgermenu.svg";

const Container = styled.div`
  background-color: #0c3c60;
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 400;
  color: white;
  position: relative;
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 14px;
  right: 19px;
`;

function ReservationHeader() {
  return (
    <Container>
      승차권 예매
      <ImageContainer>
        <img src={hamburgermenu} width="15" height="14" alt="icon" />
      </ImageContainer>
    </Container>
  );
}

export default ReservationHeader;
