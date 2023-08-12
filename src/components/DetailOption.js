import { styled } from "styled-components";

import bottomchevron from "../assets/bottomchevron.svg";

const Container = styled.div`
  background-color: #f8f8f8;
  width: 100%;
  height: 88px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-top: 1px solid #cdcdcd;
`;

const Title = styled.h1`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #3e8bc3;
`;

const Text = styled.p`
  font-size: 19px;
  font-weight: 500;
  color: #000;
`;

function DetailOption() {
  return (
    <Container>
      <Title>상세 옵션</Title>
      <Text>인접역 표출, SR 연계 표출</Text>
      <img src={bottomchevron} width="14" height="4" alt="icon" />
    </Container>
  );
}

export default DetailOption;
