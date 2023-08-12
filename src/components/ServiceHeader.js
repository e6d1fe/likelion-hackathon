import { styled } from "styled-components";

const Container = styled.div`
  background-color: #f9e45f;
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
`;

function ServiceHeader() {
  return <Container>코레일 연습도우미 똑독</Container>;
}

export default ServiceHeader;
