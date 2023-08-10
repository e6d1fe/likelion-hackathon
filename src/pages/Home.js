import { styled } from "styled-components";

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: scroll;
`;

const MobileScreen = styled.div`
  width: 360px;
`;

function Home() {
  return (
    <PageContainer>
      <MobileScreen>Home</MobileScreen>
    </PageContainer>
  );
}

export default Home;
