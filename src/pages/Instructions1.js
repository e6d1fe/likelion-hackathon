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

const InstructText = styled.div`
  background-color: #f9e45f;
  width: 300px;
  height: 400px;
  border-radius: 10px;
  font-size: 22px;
  font-weight: 600;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 140%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const OptionText = styled.div`
  background-color: #f9e45f;
  width: 300px;
  height: 100px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 600;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 140%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const NextPage = styled.button`
  border: none;
  width: 300px;
  height: 50px;
  background-color: lightgray;
  border-radius: 10px;
  font-size: 19px;
  font-weight: 600;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

function Instructions1() {
  const navigate = useNavigate();

  function toNextPage() {
    navigate("/instructions2");
  }

  return (
    <PageContainer>
      <MobileScreen>
        <InstructText>
          안녕하세요!
          <br />
          코레일 예매 도우미
          <br />
          똑독입니다.
          <br />
          기차표 예매 연습을 해 볼게요!
          <br />
          우선 출발지부터 골라 볼까요?
        </InstructText>
        <OptionText>
          예매할 표의 조건은
          <br />
          화면 아래에서 확인할 수 있어요!
        </OptionText>
        <NextPage onClick={toNextPage}>다음</NextPage>
      </MobileScreen>
    </PageContainer>
  );
}

export default Instructions1;
