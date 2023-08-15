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

const Text = styled.div`
  background-color: #f9e45f;
  width: 300px;
  height: 200px;
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

const Download = styled.button`
  border: none;
  background-color: #f9e45f;
  width: 300px;
  height: 80px;
  border-radius: 10px;
  font-size: 19px;
  font-weight: 600;
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
        <Container>
          <Text>
            연습이 끝났습니다!
            <br />
            이제 코레일 앱으로 가서
            <br />
            연습한 대로 예매해 볼까요?
          </Text>
          <a
            style={{ textDecoration: "none" }}
            href="https://play.google.com/store/apps/details?id=com.korail.talk"
            target="_blank"
            rel="noreferrer"
          >
            <Download>코레일 앱 받기 (안드로이드)</Download>
          </a>
          <a
            style={{ textDecoration: "none" }}
            href="https://apps.apple.com/us/app/%EC%BD%94%EB%A0%88%EC%9D%BC%ED%86%A14/id1000558562"
            target="_blank"
            rel="noreferrer"
          >
            <Download>코레일 앱 받기 (아이폰)</Download>
          </a>
          <GoHome onClick={goHome}>처음으로 돌아가기</GoHome>
        </Container>
      </MobileScreen>
    </PageContainer>
  );
}

export default Complete;
