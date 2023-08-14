import { styled } from "styled-components";

import rightarrow from "../assets/rightarrow.svg";

const Container = styled.div`
  background-color: #c5eff5;
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 500;
  color: #023d6a;
`;

function FromTo() {
  return (
    <Container>
      <p>서울</p>
      <img src={rightarrow} width="11" height="11" alt="icon" />
      <p>대전</p>
    </Container>
  );
}

export default FromTo;
