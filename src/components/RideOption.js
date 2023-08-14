import { styled } from "styled-components";

const Container = styled.div`
  background-color: #ececec;
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
`;

const DateContainer = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DateButton = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: navy;
  background-color: #ececec;
  border: 1px solid navy;
  border-radius: 10px;
  height: 20px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const CategoryOption = styled.div`
  display: flex;
  border: 1.5px solid gray;
  font-size: 15px;
  font-weight: 600;
  width: 33%;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 13px;
`;

const SeatOption = styled.div`
  display: flex;
  border: 1.5px solid gray;
  font-size: 15px;
  font-weight: 600;
  width: 33%;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LayoverOption = styled.div`
  display: flex;
  border: 1.5px solid gray;
  font-size: 15px;
  font-weight: 600;
  width: 20%;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 13px;
`;

function RideOption() {
  return (
    <Container>
      <DateContainer>
        <DateButton style={{ marginLeft: "13px" }}>이전날</DateButton>
        2023년 7월 24일 (월)
        <DateButton style={{ marginRight: "13px" }}>다음날</DateButton>
      </DateContainer>
      <OptionContainer>
        <CategoryOption>전체</CategoryOption>
        <SeatOption>일반석</SeatOption>
        <LayoverOption>직통</LayoverOption>
      </OptionContainer>
    </Container>
  );
}

export default RideOption;
