import { styled } from "styled-components";

const Container = styled.div`
  background-color: #fff;
  width: 100%;
  height: 43px;
  display: flex;
  justify-content: space-between;
`;

const OneWay = styled.div`
  border-bottom: 2px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  font-size: 18px;
  font-weight: 500;
  color: #0c3c60;
`;

const RoundTrip = styled.div`
  border-bottom: 2px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  font-size: 18px;
  font-weight: 500;
  color: #979797;
`;

function OneWayHeader() {
  return (
    <Container>
      <OneWay>편도</OneWay>
      <RoundTrip>왕복</RoundTrip>
    </Container>
  );
}

export default OneWayHeader;
