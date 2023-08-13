import { styled } from "styled-components";

import whitedownarrow from "../images/whitedownarrow.svg";
import arrowleft from "../images/Arrow 1.svg";
import roundtriparrow from "../images/destinationarrowimg.svg";
import searchicon from "../images/searchicon.svg";
import searchfirsta from "../images/가나다라.svg";

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
  height: 100%;
  width: 100%;
  padding: 0px 34px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  color: #999999;
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

const DownArrow = styled.div``;

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
  padding: px;
  font-size: 14px;
  color: #999999;
  width: 100%;
  outline: none;
`;

const SortStationBox = styled.div`
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
  font-size: 11px;
  font-weight: 900;
  align-items: center;
  justify-content: center;
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
  align-items: center;
`;

const SearchFirstText = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
`;

function SearchDestination() {
  return (
    <PageContainer>
      <MobileScreen>
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
          <SearchContainer>
            <DownArrow></DownArrow>
            <SearchBox>
              <SearchIcon src="src\images\searchicon.svg"></SearchIcon>
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
            <StationName>
              <StationNameText>서울</StationNameText>
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
          <StationNameContainer>
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
          //이미지 오른쪽 사이드에 넣기
        </Container>
      </MobileScreen>
    </PageContainer>
  );
}

export default SearchDestination;
