import { styled } from "styled-components";

const Container = styled.div`
  position: fixed;
  bottom: 0;
  background-color: #f9e45f;
  width: 360px;
  height: 88px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const Text = styled.p`
  display: block;
  font-size: 19px;
  font-weight: 400;
  color: #000;
`;

function InstructionFooter() {
  return (
    <Container>
      <Text>출발지: 서울&nbsp;&nbsp;&nbsp;&nbsp;도착지: 대전</Text>
      <Text>출발시간: 7월 24일 18시 27분</Text>
      <Text>승객: 경로 1명</Text>
    </Container>
  );
}

export default InstructionFooter;
