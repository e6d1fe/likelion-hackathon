import { styled } from "styled-components";

import { useNavigate } from "react-router-dom";

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  overflow-y: scroll;
  height: 100dvh;
  background-color: #f8f8f8;
`;

const MobileScreen = styled.div`
  width: 360px;
  height: 100%;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 21px;
`;

const TextContainer = styled.div`
  background-color: #f9e45f;
  width: 239px;
  height: 195px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: #000;
  line-height: 150%;
`;

const Red = styled.div`
  color: red;
  font-size: 23px;
  font-weight: 600;
`;

const NextButton = styled.button`
  background-color: #f9e45f;
  width: 239px;
  height: 50px;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  color: #000;
`;

function BeforeSelectRides() {
  const navigate = useNavigate();

  function toNextPage() {
    navigate("/selectrides");
  }

  return (
    <PageContainer>
      <MobileScreen>
        <TextContainer>
          마지막으로,
          <br />
          인원수 선택을 끝냈다면
          <br />
          열차를 선택해 볼게요!
          <br />
          <Red>18시 27분 열차를</Red>
          예매해 볼까요?
        </TextContainer>
        <NextButton onClick={toNextPage}>다음</NextButton>
      </MobileScreen>
    </PageContainer>
  );
}

export default BeforeSelectRides;
