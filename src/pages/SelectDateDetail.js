import { styled } from "styled-components";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ServiceHeader from "../components/ServiceHeader";

import topchevron from "../assets/topchevron.svg";
import bottomchevron from "../assets/bottomchevron.svg";
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
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-x: hidden;
`;

const DepartDateContainer = styled.div`
  background-color: #e0e7ed;
  width: 100%;
  height: 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 14px;
  font-weight: 500;
  color: #3e8bc3;
`;

const Number = styled.p`
  display: block;
  font-size: 19px;
  font-weight: 500;
  color: #000;
`;

const DepartDateChooseContainer = styled.div`
  width: 100%;
  height: 207px;
  display: flex;
  background-color: #f1f1f1;
  padding: 0px;
  justify-content: center;
  position: relative;
`;

const TellText = styled.div`
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
  position: absolute;
  top: 15px;
`;

const DayContainer = styled.div`
  display: flex;
  justify-content: space-around;
  position: absolute;
  top: 56px;
  gap: 30px;
`;

const Day = styled.div`
  display: flex;
  color: #3e8bc3;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
`;

const DateContainer = styled.div`
  display: flex;
  justify-content: space-around;
  position: absolute;
  top: 81px;
  overflow: hidden;
`;

const Date = styled.div`
  width: 45px;
  height: 44px;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 1px;
  }
`;

const TimeContainer = styled.div`
  width: 100%;
  height: 40px;
  background-color: #e3e3e3;
  display: flex;
  position: absolute;
  top: 140px;
  justify-content: space-around;
  align-items: center;
`;

const Time = styled.div`
  width: 37px;
  align-items: center;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  padding: 8.5px;
  span {
    font-size: 12px;
  }
`;

const Divider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0.3px;
  background-color: #cdcdcd;
`;

const InformChooseContainer = styled.div`
  background-color: #f8f8f8;
  width: 100%;
  height: 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Information = styled.h1`
  font-size: 14px;
  font-weight: 500;
  color: #3e8bc3;
`;

const Choose = styled.p`
  display: block;
  font-size: 19px;
  font-weight: 500;
  color: #000;
`;

const NextButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cde0ee;
  width: 100%;
  height: 57px;
  color: #234b67;
  font-size: 22px;
  font-weight: 500;
  margin-top: 10px;
`;

function SelectDateDetail() {
  const [selectDay, setSelectDay] = useState(false);

  const [selectTime, setSelectTime] = useState(false);

  const navigate = useNavigate();

  function daySelected() {
    setSelectDay(true);
  }

  function timeSelected() {
    setSelectTime(true);
  }

  function toNextPage() {
    if (selectDay && selectTime) {
      navigate("/");
    }
  }

  return (
    <PageContainer>
      <MobileScreen>
        <ServiceHeader />
        <ReservationHeader />
        <OneWayHeader />
        <Container>
          <DepartDateContainer>
            <Title>출발일</Title>
            <Number>2023년 7월 23일 (일) 22:03</Number>
            <img src={topchevron} width="14" height="5" alt="icon" />
          </DepartDateContainer>
          <DepartDateChooseContainer>
            <TellText>달력에서 날짜 선택</TellText>
            <DayContainer>
              <Day style={{ color: "#0066B4", paddingRight: "0px" }}>오늘</Day>
              <Day style={{ marginLeft: "0px", paddingRight: "0px" }}>월</Day>
              <Day>화</Day>
              <Day>수</Day>
              <Day>목</Day>
              <Day>금</Day>
              <Day style={{ color: "#1799F9" }}>토</Day>
              <Day style={{ color: "#DF4834" }}>일</Day>
            </DayContainer>

            <DateContainer>
              <Date>23</Date>
              <Date onClick={daySelected} style={{ color: "white", backgroundColor: "red" }}>
                24
                <span>출발일</span>
              </Date>
              <Date>25</Date>
              <Date>26</Date>
              <Date>27</Date>
              <Date>28</Date>
              <Date style={{ color: "#1799F9" }}>29</Date>
              <Date style={{ color: "#DF4834" }}>30</Date>
            </DateContainer>

            <TimeContainer>
              <Time>
                16<span>시</span>
              </Time>
              <Time>
                17<span>시</span>
              </Time>
              <Time onClick={timeSelected} style={{ color: "white", backgroundColor: "red" }}>
                18<span>시</span>
              </Time>
              <Time>
                19<span>시</span>
              </Time>
              <Time>
                20<span>시</span>
              </Time>
              <Time>
                21<span>시</span>
              </Time>
              <Time>
                22<span>시</span>
              </Time>
            </TimeContainer>
          </DepartDateChooseContainer>

          <Divider></Divider>

          <InformChooseContainer>
            <Information>승객 연령 및 좌석수</Information>
            <Choose>경로 총 1명</Choose>
            <img src={bottomchevron} width="14" height="5" alt="icon" />
          </InformChooseContainer>

          <Divider></Divider>

          <InformChooseContainer>
            <Information>상세옵션</Information>
            <Choose>인접역 표출, SR 연계 표출</Choose>
            <img src={bottomchevron} width="14" height="4" alt="icon" />
          </InformChooseContainer>

          <Divider></Divider>
        </Container>
        <NextButton onClick={toNextPage}>다음</NextButton>
      </MobileScreen>
    </PageContainer>
  );
}

export default SelectDateDetail;
