import { styled } from "styled-components";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ServiceHeader from "../components/ServiceHeader";
import FromTo from "../components/FromTo";
import CheckRidesHeader from "../components/CheckRidesHeader";
import RideOption from "../components/RideOption";

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
  position: relative;
`;

const Container = styled.div`
  width: 100%;
  height: 0px;
  background-color: #f1f1f1;
  margin-top: 90px;
`;

const CategoriesContainer = styled.div`
  background-color: #d4d4d4;
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
  color: gray;
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const RideContainer = styled.div`
  width: 100%;
  height: 70px;
  border-bottom: 1px solid gray;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const RideText = styled.p`
  font-size: 13px;
  font-weight: 500;
  color: #000;
  line-height: 120%;
  text-align: center;
  width: 14%;
`;

const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 17%;
  height: 40px;
  border: 1px solid #008ecc;
`;

const Price = styled.p`
  display: block;
  font-size: 11px;
  font-weight: 500;
  color: #008ecc;
`;

const Mileage = styled.p`
  display: block;
  font-size: 11px;
  font-weight: 500;
  color: #ff6700;
`;

const Book = styled.div`
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

function SelectRides() {
  const [selected, setSelected] = useState(false);

  const navigate = useNavigate();

  function select() {
    setSelected(true);
  }

  function toNextPage() {
    if (selected === true) {
      navigate("/complete");
    }
  }
  return (
    <PageContainer>
      <MobileScreen>
        <ServiceHeader />
        <CheckRidesHeader />
        <FromTo />
        <RideOption />
        <CategoriesContainer>
          <div>열차</div>
          <div>출발</div>
          <div>도착</div>
          <div>일반실</div>
          <div>특/우등</div>
        </CategoriesContainer>
        <RideContainer>
          <RideText>
            KTX
            <br />
            219
          </RideText>
          <RideText>
            18:02
            <br />
            서울
          </RideText>
          <RideText>
            19:08
            <br />
            대전
          </RideText>
          <PriceBox>
            <Price>23,700원</Price>
            <Mileage>5% 적립</Mileage>
          </PriceBox>
          <PriceBox>
            <Price>33,200원</Price>
            <Mileage>5% 적립</Mileage>
          </PriceBox>
        </RideContainer>
        <RideContainer>
          <RideText>
            무궁화호
            <br />
            1223
          </RideText>
          <RideText>
            18:08
            <br />
            서울
          </RideText>
          <RideText>
            20:09
            <br />
            대전
          </RideText>
          <PriceBox>
            <Price>23,700원</Price>
            <Mileage>5% 적립</Mileage>
          </PriceBox>
          <PriceBox>
            <Price>33,200원</Price>
            <Mileage>5% 적립</Mileage>
          </PriceBox>
        </RideContainer>
        <RideContainer>
          <RideText>
            KTX
            <br />
            055
          </RideText>
          <RideText>
            18:12
            <br />
            서울
          </RideText>
          <RideText>
            19:17
            <br />
            대전
          </RideText>
          <PriceBox>
            <Price>23,700원</Price>
            <Mileage>5% 적립</Mileage>
          </PriceBox>
          <PriceBox>
            <Price>33,200원</Price>
            <Mileage>5% 적립</Mileage>
          </PriceBox>
        </RideContainer>
        <RideContainer>
          <RideText>
            KTX
            <br />
            057
          </RideText>
          <RideText>
            18:27
            <br />
            서울
          </RideText>
          <RideText>
            19:32
            <br />
            대전
          </RideText>
          <PriceBox onClick={select} style={{ backgroundColor: "red" }}>
            <Price style={{ color: "yellow" }}>23,700원</Price>
            <Mileage style={{ color: "white" }}>5% 적립</Mileage>
          </PriceBox>
          <PriceBox>
            <Price>33,200원</Price>
            <Mileage>5% 적립</Mileage>
          </PriceBox>
        </RideContainer>
        <RideContainer>
          <RideText>
            무궁화호
            <br />
            1317
          </RideText>
          <RideText>
            18:35
            <br />
            서울
          </RideText>
          <RideText>
            20:54
            <br />
            대전
          </RideText>
          <PriceBox>
            <Price>23,700원</Price>
            <Mileage>5% 적립</Mileage>
          </PriceBox>
          <PriceBox>
            <Price>33,200원</Price>
            <Mileage>5% 적립</Mileage>
          </PriceBox>
        </RideContainer>
        <RideContainer>
          <RideText>
            KTX
            <br />
            107
          </RideText>
          <RideText>
            18:40
            <br />
            서울
          </RideText>
          <RideText>
            19:50
            <br />
            대전
          </RideText>
          <PriceBox>
            <Price>23,700원</Price>
            <Mileage>5% 적립</Mileage>
          </PriceBox>
          <PriceBox>
            <Price>33,200원</Price>
            <Mileage>5% 적립</Mileage>
          </PriceBox>
        </RideContainer>
        <RideContainer>
          <RideText>
            KTX
            <br />
            121
          </RideText>
          <RideText>
            19:22
            <br />
            서울
          </RideText>
          <RideText>
            19:40
            <br />
            대전
          </RideText>
          <PriceBox>
            <Price>23,700원</Price>
            <Mileage>5% 적립</Mileage>
          </PriceBox>
          <PriceBox>
            <Price>33,200원</Price>
            <Mileage>5% 적립</Mileage>
          </PriceBox>
        </RideContainer>
        <Book onClick={toNextPage}>예매</Book>
      </MobileScreen>
    </PageContainer>
  );
}

export default SelectRides;
