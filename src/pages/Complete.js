import { styled } from "styled-components";

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

function Complete() {
  return (
    <PageContainer>
      <MobileScreen>
        <ServiceHeader />
        <Container></Container>
      </MobileScreen>
    </PageContainer>
  );
}

export default Complete;
