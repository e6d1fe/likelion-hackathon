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

function BeforeSelectDate() {
  const navigate = useNavigate();

  function toNextPage() {
    navigate("/selectdate");
  }

  return (
    <PageContainer>
      <MobileScreen>
        <TextContainer>
          다음은 출발 시간을
          <br />
          정해볼게요!
          <Red>
            2023년 7월 24일
            <br />
            18시 27분
          </Red>
          기차를 예매해야 해요.
        </TextContainer>
        <NextButton onClick={toNextPage}>다음</NextButton>
      </MobileScreen>
    </PageContainer>
  );
}

export default BeforeSelectDate;
