import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <Wrap>
      <TitleDiv>
        <TitleH1>
          MoneyBank <BankMoneyp>현재 은행 잔고 : 102938109898</BankMoneyp>
        </TitleH1>
        <Logout>Logout</Logout>
      </TitleDiv>

      <BoxDiv>
        <UserBox>
          <BackgroundTitle>
            Money
            <br />
            Bank
          </BackgroundTitle>
          <UserBoxDiv>
            <UserTitleH2>안녕하세요 ***님</UserTitleH2>

            <BoxTitleh2>보유자산</BoxTitleh2>

            <UserMoneyDiv>
              <UserMoneyP>내 잔고 : 120398109 $</UserMoneyP>
              <UserMoneyP>120398109 $</UserMoneyP>
            </UserMoneyDiv>

            <Calculator>계산기</Calculator>
          </UserBoxDiv>
          <UserBoxDiv>
            <BoxTitleh2>거래내역</BoxTitleh2>
            <History>내역</History>
            <History>내역</History>
            <History>내역</History>
            <History>내역</History>
            <History>내역</History>
            <History>내역</History>
          </UserBoxDiv>
        </UserBox>
        <SideBox></SideBox>
      </BoxDiv>
    </Wrap>
  );
}

export default Home;
const Wrap = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const TitleDiv = styled.div`
  margin: 30px 50px 50px 50px;
  display: flex;
  justify-content: space-between;
`;
const TitleH1 = styled.h1`
  font-size: 60px;
  font-weight: 500;
`;
const BankMoneyp = styled.p`
  font-size: 16px;
  margin-top: 15px;
  color: #000;
  font-weight: 300;
`;
const Logout = styled.button`
  font-size: 18px;
`;
const BoxDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 50px;
  flex-grow: 1;
`;
const UserBox = styled.div`
  position: relative;
  display: flex;
  width: 63%;
  background-color: #7874ff;
  border-radius: 20px;
  height: 100%;
  /* opacity: 0.8; */
  transition: 0.5s ease;
  box-shadow: 4px 5px 20px 0px #727272;
  overflow: hidden;
  /* &:hover {
    box-shadow: 4px 5px 20px 0px #727272;
    opacity: 1;
  } */
`;
const UserBoxDiv = styled.div`
  width: 100%;
  height: 100px;
`;
const UserTitleH2 = styled.h2`
  font-size: 18px;
  font-weight: 500;
  margin: 40px 0 40px 40px;
`;
const BoxTitleh2 = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin: 40px 0 20px 50px;
`;
const UserMoneyDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 40px;
  background-color: #fff;
  height: 100px;
  border-radius: 10px;
  font-size: 20px;
`;
const UserMoneyP = styled.div`
  margin: 5px 0 0 10px;
`;
const Calculator = styled.div`
  position: relative;
  z-index: 999;
  margin: 40px 40px 0;
  background-color: #fff;
  height: 400px;
  border-radius: 10px;
`;
const History = styled.div`
  margin: 20px 40px 0;
  background-color: #fff;
  height: 70px;
  border-radius: 10px;
`;
const BackgroundTitle = styled.h1`
  z-index: 99;
  font-size: 150px;
  position: absolute;
  opacity: 0.2;
  left: -30px;
  bottom: -30px;
  font-weight: 500;
`;
const SideBox = styled.div`
  width: 33%;
  background-color: #7874ff;
  border-radius: 20px;
  transition: 0.5s ease;
  /* opacity: 0.5; */
  box-shadow: 4px 5px 20px 0px #727272;
  /* &:hover {
    box-shadow: 4px 5px 20px 0px #727272;
    opacity: 1;
  } */
`;
