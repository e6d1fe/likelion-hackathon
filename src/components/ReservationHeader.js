import { styled } from "styled-components";

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
`;

function ReservationHeader() {
  return <Container>승차권 예매</Container>;
}

export default ReservationHeader;
