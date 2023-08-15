import { styled } from "styled-components";

import { useNavigate } from "react-router-dom";

import ServiceHeader from "../components/ServiceHeader";
import ReservationHeader from "../components/ReservationHeader";
import OneWayHeader from "../components/OneWayHeader";
import Passenger from "../components/Passenger";
import DetailOption from "../components/DetailOption";
import InstructionFooter from "../components/InstructionFooter";

import information from "../assets/information.svg";
import { useState } from "react";

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
  height: 295px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
  background-color: #f1f1f1;
`;

const LimitText = styled.p`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #646464;
`;

const SelectContainer = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
`;

const SelectOption = styled.p`
  display: block;
  font-size: 16px;
  font-weight: 500;
  color: #000;
`;

const SelectFunction = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 14px;
`;

const SelectQuantity = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #000;
`;

const SelectButton = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgray;
  color: gray;
  background-color: white;
`;

const CheckRidesContainer = styled.div`
  width: 100%;
  height: 56px;
  padding-bottom: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RegisterPayment = styled.div`
  background-color: #cde0ee;
  font-size: 19px;
  font-weight: 500;
  color: #023d6a;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CheckRides = styled.button`
  border: none;
  background-color: red;
  font-size: 19px;
  font-weight: 500;
  color: white;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function SelectPassengersDetail() {
  const [people, setPeople] = useState(0);

  const navigate = useNavigate();

  function plusOne() {
    setPeople(people + 1);
  }

  function minusOne() {
    people >= 1 ? setPeople(people - 1) : setPeople(0);
  }

  function toNextPage() {
    if (people === 1) {
      navigate("/selectride");
    }
  }

  return (
    <PageContainer>
      <MobileScreen>
        <ServiceHeader />
        <ReservationHeader />
        <OneWayHeader />
        <Passenger />
        <Container>
          <LimitText>최소 1명 - 최대 9명</LimitText>
          <SelectContainer>
            <SelectOption>어른 (만 13세 이상)</SelectOption>
            <SelectFunction>
              <SelectButton>-</SelectButton>
              <SelectQuantity>0</SelectQuantity>
              <SelectButton>+</SelectButton>
            </SelectFunction>
          </SelectContainer>
          <SelectContainer>
            <SelectOption>어린이 (만 6 - 12세)</SelectOption>
            <SelectFunction>
              <SelectButton>-</SelectButton>
              <SelectQuantity>0</SelectQuantity>
              <SelectButton>+</SelectButton>
            </SelectFunction>
          </SelectContainer>
          <SelectContainer>
            <div style={{ display: "flex", gap: "5px" }}>
              <SelectOption>유아 (만 6세 미만)</SelectOption>
              <img src={information} width="14" height="14" alt="icon" />
            </div>
            <SelectFunction>
              <SelectButton>-</SelectButton>
              <SelectQuantity>0</SelectQuantity>
              <SelectButton>+</SelectButton>
            </SelectFunction>
          </SelectContainer>
          <SelectContainer>
            <SelectOption>경로 (만 65세 이상)</SelectOption>
            <SelectFunction>
              <SelectButton onClick={minusOne}>-</SelectButton>
              <SelectQuantity>{people}</SelectQuantity>
              <SelectButton onClick={plusOne} style={{ backgroundColor: "red", color: "white" }}>
                +
              </SelectButton>
            </SelectFunction>
          </SelectContainer>
          <SelectContainer>
            <div style={{ display: "flex", gap: "5px" }}>
              <SelectOption>중증 장애인</SelectOption>
              <img src={information} width="14" height="14" alt="icon" />
            </div>
            <SelectFunction>
              <SelectButton>-</SelectButton>
              <SelectQuantity>0</SelectQuantity>
              <SelectButton>+</SelectButton>
            </SelectFunction>
          </SelectContainer>
          <SelectContainer>
            <div style={{ display: "flex", gap: "5px" }}>
              <SelectOption>경증 장애인</SelectOption>
              <img src={information} width="14" height="14" alt="icon" />
            </div>
            <SelectFunction>
              <SelectButton>-</SelectButton>
              <SelectQuantity>0</SelectQuantity>
              <SelectButton>+</SelectButton>
            </SelectFunction>
          </SelectContainer>
        </Container>
        <DetailOption />
        <CheckRidesContainer>
          <RegisterPayment>간편구매 등록</RegisterPayment>
          <CheckRides onClick={toNextPage}>열차 조회하기</CheckRides>
        </CheckRidesContainer>
        <InstructionFooter />
      </MobileScreen>
    </PageContainer>
  );
}

export default SelectPassengersDetail;
