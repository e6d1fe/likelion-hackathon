import { styled } from "styled-components";

import ServiceHeader from "../components/ServiceHeader";
import ReservationHeader from "../components/ReservationHeader";
import OneWayHeader from "../components/OneWayHeader";

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
`;

const Container = styled.div`
  height: 100%;
  padding: 0px 34px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;
<<<<<<< HEAD:src/pages/Destination.js

=======
>>>>>>> e3e2f6fd1cabedb7c57cd2cf05fbaebb1b23fedc:src/pages/SelectDestination.js
const DepartArriveContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
`;

const Depart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: 600;
  color: #646464;
  padding: 20px;
`;

const RoundTripArrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: 600;
  color: #646464;
  padding: 20px;
`;

const Arrive = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: 600;
  color: #646464;
  padding: 20px;
`;

const DepartArriveButtonContainer = styled.div`
  width: 100%;
  height: 43px;
  display: flex;
  justify-content: space-around;
`;

const DepartDesButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 900;
  color: #023d6a;
  padding: 11px;
`;

const ArriveDes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 900;
  color: #023d6a;
  padding: 11px;
`;

const Arrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: 600;
  color: #646464;
  padding: 20px;
`;

const Map = styled.div`
  width: 100%;
  height: 30px;
  color: #646464;
  border: 1px solid #cdcdcd;
  border-radius: 50px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
`;

const Divider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0.3px;
  background-color: #cdcdcd;
`;

const InformChooseContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Information = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: 600;
  color: #3e8bc3;
  padding-top: 10px;
`;

const Choose = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 800;
  color: #000000;
  padding: 15px;
`;

const DownArrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5px;
  font-weight: 600;
  color: #646464;
  padding: 10px;
`;

function Destination() {
  return (
    <PageContainer>
      <MobileScreen>
        <ServiceHeader />
        <ReservationHeader />
        <OneWayHeader />
        <Container>
          <DepartArriveContainer>
            <Depart>출발</Depart>
            <RoundTripArrow>
              <img src="/images/destinationarrowimg.svg" alt="왕복 화살표" />
            </RoundTripArrow>

            <Arrive>도착</Arrive>
          </DepartArriveContainer>

          <DepartArriveButtonContainer>
            <DepartDesButton type="button">용산</DepartDesButton>
            <Arrow>
              <img src="\images\Arrow 1.svg" alt="화살표" />
            </Arrow>
            <ArriveDes>강릉</ArriveDes>
          </DepartArriveButtonContainer>

          <Map>KTX역 선택 지도</Map>

          <InformChooseContainer>
            <Information>출발일</Information>
            <Choose>2023년 7월 23일 (일) 21:43</Choose>
            <DownArrow></DownArrow>
          </InformChooseContainer>

          <Divider></Divider>

          <InformChooseContainer>
            <Information>승객 연령 및 좌석수</Information>
            <Choose>총 1명</Choose>
            <DownArrow></DownArrow>
          </InformChooseContainer>

          <Divider></Divider>

          <InformChooseContainer>
            <Information>상세옵션</Information>
            <Choose>인접역 표출, SR 연계 표출</Choose>
            <DownArrow></DownArrow>
          </InformChooseContainer>
        </Container>
      </MobileScreen>
    </PageContainer>
  );
}

export default Destination;
