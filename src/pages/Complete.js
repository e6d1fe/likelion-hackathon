import { styled } from "styled-components";

import ServiceHeader from "../components/ServiceHeader";

import { useNavigate } from "react-router-dom";

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  overflow-y: scroll;
  height: 100%;
  background-color: #f8f8f8;
`;

const MobileScreen = styled.div`
  width: 360px;
  height: 100%;
  position: relative;
`;

const Container = styled.div`
  width: 100%;
  height: 665px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: #f1f1f1;
`;

const GoodbyeText = styled.div`
  background-color: #f9e45f;
  width: 300px;
  height: 400px;
  border-radius: 10px;
  font-size: 19px;
  font-weight: 500;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 200%;
`;

const GoHome = styled.button`
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
`;

function Complete() {
  const navigate = useNavigate();

  function goHome() {
    navigate("/");
  }

  return (
    <PageContainer>
      <MobileScreen>
        <ServiceHeader />
        <Container>
          <GoodbyeText>
            연습이 끝났습니다!
            <br />
            이제 코레일 앱으로 가서
            <br />
            연습한 대로 예매해 볼까요?
          </GoodbyeText>
          <GoHome onClick={goHome}>처음으로 돌아가기</GoHome>
        </Container>
      </MobileScreen>
    </PageContainer>
  );
}

export default Complete;
