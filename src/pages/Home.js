import { styled } from "styled-components";

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  overflow-y: scroll;
  height: 100dvh;
  background-color: #f9e45f;
`;

const MobileScreen = styled.div`
  width: 360px;
  height: 100%;
`;

const Container = styled.div`
  height: 100%;
  padding: 40px 34px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 5px;
`;

const ServiceName = styled.h1`
  font-size: 33px;
  font-weight: 600;
`;

const ServiceDesc = styled.h2`
  font-size: 16px;
  font-weight: 600;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const PracticeType = styled.div`
  width: 100%;
  height: 76px;
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: 600;
`;

const InstructionContainer = styled.div`
  width: 242px;
  height: 360px;
  padding: 25px;
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Instruction = styled.div`
  font-size: 22px;
  font-weight: 600;
  text-align: center;
  line-height: 110%;
`;

const Location = styled.div`
  background-color: #f9e45f;
  width: 100%;
  height: 33px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: 600;
`;

const Time = styled.div`
  background-color: #f9e45f;
  width: 100%;
  height: 78px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: 600;
  text-align: center;
  line-height: 110%;
`;

const People = styled.div`
  background-color: #f9e45f;
  width: 100%;
  height: 33px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: 600;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 100%;
  height: 76px;
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: 600;
  border: none;
`;

function Home() {
  return (
    <PageContainer>
      <MobileScreen>
        <Container>
          <ServiceContainer>
            <ServiceName>똑독</ServiceName>
            <ServiceDesc>코레일 예매 도우미</ServiceDesc>
          </ServiceContainer>
          <DescriptionContainer>
            <PracticeType>편도 연습</PracticeType>
            <InstructionContainer>
              <Instruction>
                아래의 조건에 맞게
                <br />
                편도 표를 예매하는
                <br />
                연습을 합니다.
              </Instruction>
              <Location>출발지: 서울</Location>
              <Location>도착지: 대전</Location>
              <Time>
                출발시간:
                <br />
                7월 24일 18시 27분
              </Time>
              <People>승객: 경로 1명</People>
            </InstructionContainer>
            <ButtonContainer>
              <Button type="button">연습하기</Button>
            </ButtonContainer>
          </DescriptionContainer>
        </Container>
      </MobileScreen>
    </PageContainer>
  );
}

export default Home;
