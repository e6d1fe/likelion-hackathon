import { styled } from "styled-components";

import { useNavigate } from "react-router-dom";

import ServiceHeader from "../components/ServiceHeader";
import ReservationHeader from "../components/ReservationHeader";
import OneWayHeader from "../components/OneWayHeader";
import InstructionFooter from "../components/InstructionFooter";

import bottomchevron from "../assets/bottomchevron.svg";
import arrowleft from "../images/Arrow 1.svg";
import roundtriparrow from "../images/destinationarrowimg.svg";

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  overflow-y: scroll;
  height: 100dvh;
  background-color: #f8f8f8;
  height: 100vh;
`;

const MobileScreen = styled.div`
  background-color: #f8f8f8;
  width: 360px;
  height: 100%;
`;

const Container = styled.div`
  padding: 0px 34px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: center;
`;

const DepartArriveContainer = styled.div`
  width: 100%;
  height: 27px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Depart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: #646464;
  margin: 40px;
`;

const Arrive = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: #646464;
  margin: 40px;
`;

const DepartArriveButtonContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
`;

const DepartDesButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-size: 24px;
  font-weight: 500;
  color: #023d6a;
  padding: 11px;
`;

const ArriveDes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 500;
  color: #023d6a;
  padding: 11px;
`;

const Map = styled.div`
  width: 310px;
  height: 28px;
  color: #646464;
  border: 1px solid #cdcdcd;
  border-radius: 40px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
`;

const Divider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 311px;
  height: 0.5px;
  background-color: #cdcdcd;
`;

const InformChooseContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Information = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: #3e8bc3;
  padding-top: 10px;
`;

const Choose = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 19px;
  font-weight: 500;
  color: #000000;
  padding: 15px;
`;

function SelectDepart() {
  const navigate = useNavigate();

  function toNextPage() {
    navigate("/selectdepartdetail");
  }

  return (
    <PageContainer>
      <MobileScreen>
        <ServiceHeader />
        <ReservationHeader />
        <OneWayHeader />
        <Container>
          <DepartArriveContainer>
            <Depart>출발</Depart>
            <img src={roundtriparrow} width="52" height="24" alt="왕복 화살표" />
            <Arrive>도착</Arrive>
          </DepartArriveContainer>

          <DepartArriveButtonContainer>
            <DepartDesButton
              style={{ backgroundColor: "red", color: "white" }}
              type="button"
              onClick={toNextPage}
            >
              용산
            </DepartDesButton>
            <img src={arrowleft} width="11" alt="화살표" />
            <ArriveDes>강릉</ArriveDes>
          </DepartArriveButtonContainer>

          <Map>KTX역 선택 지도</Map>

          <InformChooseContainer>
            <Information>출발일</Information>
            <Choose>2023년 7월 23일 (일) 21:43</Choose>
            <img src={bottomchevron} width="14" height="4" alt="icon" />
          </InformChooseContainer>

          <Divider></Divider>

          <InformChooseContainer>
            <Information>승객 연령 및 좌석수</Information>
            <Choose>총 1명</Choose>
            <img src={bottomchevron} width="14" height="4" alt="icon" />
          </InformChooseContainer>

          <Divider></Divider>

          <InformChooseContainer>
            <Information>상세옵션</Information>
            <Choose>인접역 표출, SR 연계 표출</Choose>
            <img src={bottomchevron} width="14" height="4" alt="icon" />
          </InformChooseContainer>

          <Divider></Divider>
        </Container>
        <InstructionFooter />
      </MobileScreen>
    </PageContainer>
  );
}
export default SelectDepart;
