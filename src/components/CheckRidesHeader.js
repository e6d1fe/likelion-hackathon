import { styled } from "styled-components";

import leftchevron from "../assets/leftchevron.svg";
import hamburgermenu from "../assets/hamburgermenu.svg";

const Container = styled.div`
  background-color: #0c3c60;
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 400;
  color: #fff;
`;

function CheckRidesHeader() {
  return (
    <Container>
      <img src={leftchevron} width="18" height="13" alt="icon" style={{ marginLeft: "19px" }} />
      <p>열차 조회</p>
      <img src={hamburgermenu} width="15" height="14" alt="icon" style={{ marginRight: "19px" }} />
    </Container>
  );
}

export default CheckRidesHeader;
