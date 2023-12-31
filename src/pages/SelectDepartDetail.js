import { styled } from "styled-components";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ServiceHeader from "../components/ServiceHeader";
import InstructionFooter from "../components/InstructionFooter";

import whitedownarrow from "../images/whitedownarrow.svg";
import arrowleft from "../images/Arrow 1.svg";
import roundtriparrow from "../images/destinationarrowimg.svg";
import searchicon from "../images/searchicon.svg";
import searchfirsta from "../images/가나다라.svg";
import ReservationHeader from "../components/ReservationHeader";

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  overflow-y: scroll;
  height: 100vh;
`;

const MobileScreen = styled.div`
  background-color: #f8f8f8;
  width: 360px;
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DepartArriveContainer = styled.div`
  width: 100%;
  height: 27px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
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
  color: #999999;
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

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  height: 69px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #9eb1bf;
  border-radius: 20px 20px 0 0;
`;

const WhiteDownArrow = styled.img`
  margin-top: 0;
`;

const SearchIcon = styled.img`
  padding: 8px 10px 8px 10px;
`;

const SearchBox = styled.div`
  position: absolute;
  top: 25px;
  width: 100%;
  height: 33px;
  display: flex;
  background-color: #ffffff;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  font-size: 14px;
  color: #999999;
  width: 100%;
  outline: none;
`;

const SortStationBox = styled.div`
  position: relative;
  width: 100%;
  height: 24px;
  background-color: #e5e5e5;
  display: flex;
  align-items: center;
`;

const SortStation = styled.div`
  position: absolute;
  left: 10px;
  color: #185f93;
  font-size: 13px;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const StationNameContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StationName = styled.div`
  position: relative;
  width: 180px;
  height: 41px;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  border: 1px solid #cdcdcd;
`;

const StationPath = styled.div`
  position: relative;
  width: 100%;
  height: 41px;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  border: 1px solid #cdcdcd;
`;

const StationNameText = styled.div`
  position: absolute;
  left: 15px;
  top: 12px;
  display: flex;
  color: #000000;
  font-size: 16px;
  font-weight: 500;
  align-items: center;
`;

const SearchFirstText = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
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

function SelectDepartDetail() {
  const [selected, setSelected] = useState(false);

  const [text, setText] = useState("서울");

  const [departText, setDepartText] = useState("용산");

  const navigate = useNavigate();

  function select(event) {
    setSelected((previous) => !previous);
    setText(!selected ? "서울 선택 완료" : "서울");
    setDepartText(!selected ? "서울" : "용산");
  }

  function toNextPage() {
    if (selected === true) {
      navigate("/selectarriveinfo");
    }
  }

  function wrongClick(event) {
    if (event.target.id !== "required" && event.target.parentElement.id !== "required") {
      alert("이 버튼이 아니에요!");
    }
  }

  return (
    <PageContainer>
      <MobileScreen onClick={wrongClick}>
        <ServiceHeader />
        <ReservationHeader />
        <Container>
          <DepartArriveContainer>
            <Depart>출발</Depart>
            <img src={roundtriparrow} width="52" height="24" alt="왕복 화살표" />
            <Arrive>도착</Arrive>
          </DepartArriveContainer>

          <DepartArriveButtonContainer>
            <DepartDesButton type="button">{departText}</DepartDesButton>
            <img src={arrowleft} width="11" alt="화살표" />
            <ArriveDes>강릉</ArriveDes>
          </DepartArriveButtonContainer>

          <SearchContainer>
            <WhiteDownArrow src={whitedownarrow} width="14px" height="4px" alt="icon" />
            <SearchBox>
              <SearchIcon src={searchicon} width="20" height="20" />
              <SearchInput
                type="text"
                placeholder="역 명의 초성 또는 전체를 입력해주세요."
              ></SearchInput>
            </SearchBox>
          </SearchContainer>

          <SortStationBox>
            <SortStation>가까운역</SortStation>
          </SortStationBox>

          <StationNameContainer>
            <StationName>
              <StationNameText>광명</StationNameText>
            </StationName>
            <StationName>
              <StationNameText>영등포</StationNameText>
            </StationName>
          </StationNameContainer>

          <SortStationBox>
            <SortStation>최근검색구간</SortStation>
          </SortStationBox>
          <StationPath>
            <StationNameText>용산-대전</StationNameText>
          </StationPath>
          <StationPath>
            <StationNameText>서울-강릉</StationNameText>
          </StationPath>

          <SortStationBox>
            <SortStation>주요역</SortStation>
          </SortStationBox>

          <StationNameContainer>
            <StationName style={{ backgroundColor: "red" }} onClick={select} id="required">
              <StationNameText id="required" style={{ color: "white" }}>{text}</StationNameText>
            </StationName>
            <StationName>
              <StationNameText>용산</StationNameText>
            </StationName>
          </StationNameContainer>

          <StationNameContainer>
            <StationName>
              <StationNameText>광명</StationNameText>
            </StationName>
            <StationName>
              <StationNameText>영등포</StationNameText>
            </StationName>
          </StationNameContainer>

          <StationNameContainer>
            <StationName>
              <StationNameText>수원</StationNameText>
            </StationName>
            <StationName>
              <StationNameText>평택</StationNameText>
            </StationName>
          </StationNameContainer>

          <StationNameContainer onClick={select}>
            <StationName>
              <StationNameText>대전</StationNameText>
            </StationName>
            <StationName>
              <StationNameText>천안</StationNameText>
            </StationName>
          </StationNameContainer>

          <StationNameContainer>
            <StationName>
              <StationNameText>오송</StationNameText>
            </StationName>
            <StationName>
              <StationNameText>조치원</StationNameText>
            </StationName>
          </StationNameContainer>
          <SearchFirstText src={searchfirsta} width="24" height="462" alt="검색" />
        </Container>
        <div style={{ paddingBottom: "90px" }}>
          <NextButton onClick={toNextPage} id="required">
            다음
          </NextButton>
        </div>
        <InstructionFooter />
      </MobileScreen>
    </PageContainer>
  );
}

export default SelectDepartDetail;
