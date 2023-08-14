import { styled } from "styled-components";

import { useNavigate } from "react-router-dom";

import ServiceHeader from "../components/ServiceHeader";

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

const InstructText = styled.div`
  background-color: #f9e45f;
  width: 300px;
  height: 400px;
  border-radius: 10px;
  font-size: 19px;
  font-weight: 500;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 120%;
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

const Red = styled.p`
  display: block;
  color: red;
  font-size: 35px;
  font-weight: 600;
`;

function Instructions() {
  const navigate = useNavigate();

  function toNextPage() {
    navigate("/");
  }

  return (
    <PageContainer>
      <MobileScreen>
        <ServiceHeader />
        <Container>
          <InstructText>
            <Red>빨간색 버튼을</Red>
            <br />잘 따라가 주세요!
          </InstructText>
          <NextPage onClick={toNextPage}>다음</NextPage>
        </Container>
      </MobileScreen>
    </PageContainer>
  );
}

export default Instructions;
