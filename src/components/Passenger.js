import { styled } from "styled-components";

import topchevron from "../assets/topchevron.svg";

const Container = styled.div`
  background-color: #e0e7ed;
  width: 100%;
  height: 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 14px;
  font-weight: 500;
  color: #3e8bc3;
`;

const Number = styled.p`
  display: block;
  font-size: 19px;
  font-weight: 500;
  color: #000;
`;

function Passenger() {
  return (
    <Container>
      <Title>승객 연령 및 좌석수</Title>
      <Number>경로 총 1명</Number>
      <img src={topchevron} width="14" height="5" alt="icon" />
    </Container>
  );
}

export default Passenger;
