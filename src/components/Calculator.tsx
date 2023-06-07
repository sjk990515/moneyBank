import React, { useState } from "react";
import styled from "styled-components";

function Calculator() {
  const [cal, setCal] = useState<string>("0");
  const [calMemory, setCalMemory] = useState<string>("");
  const [calMemoryMath, setCalMemoryMath] = useState<string>("");

  const OnClickAC = (i: string) => {
    setCal(i);
  };

  const OnClickNum = (i: string) => {
    if (cal == "0") {
      setCal(i);
    } else {
      setCal(cal + i);
    }
  };

  const OnClickMath = (i: string) => {
    if (cal != "0") {
      // if (calMemoryMath == "+") {
      //   setCal(String(parseInt(cal) + parseInt(calMemory)));
      // } else if (calMemoryMath == "x") {
      //   setCal(String(parseInt(cal) * parseInt(calMemory)));
      // }
      if (i == "+") {
        setCal("0");
        setCalMemory(cal);
        setCalMemoryMath("+");
      } else if (i == "x") {
        setCal("0");
        setCalMemory(cal);
        setCalMemoryMath("x");
      } else if (i == "=") {
        if (calMemoryMath == "+") {
          setCal(String(parseInt(cal) + parseInt(calMemory)));
        } else if (calMemoryMath == "x") {
          setCal(String(parseInt(cal) * parseInt(calMemory)));
        }
        setCalMemoryMath("=");
        setCalMemory("");
      }
    }
  };

  return (
    <Box>
      <SubScreen>
        {calMemory == "0" ? "" : calMemory}{" "}
        {calMemoryMath == "=" ? "" : calMemoryMath}
      </SubScreen>
      <Screen>{cal}</Screen>
      <FlexBox>
        <Container onClick={() => OnClickAC("0")}>AC</Container>
        <Container>신정근</Container>
        <Container>÷</Container>
        <Container>%</Container>
      </FlexBox>
      <FlexBox>
        <Container onClick={() => OnClickNum("7")}>7</Container>
        <Container onClick={() => OnClickNum("8")}>8</Container>
        <Container onClick={() => OnClickNum("9")}>9</Container>
        <Container onClick={() => OnClickMath("x")}>×</Container>
      </FlexBox>
      <FlexBox>
        <Container onClick={() => OnClickNum("4")}>4</Container>
        <Container onClick={() => OnClickNum("5")}>5</Container>
        <Container onClick={() => OnClickNum("6")}>6</Container>
        <Container>−</Container>
      </FlexBox>
      <FlexBox>
        <Container onClick={() => OnClickNum("1")}>1</Container>
        <Container onClick={() => OnClickNum("2")}>2</Container>
        <Container onClick={() => OnClickNum("3")}>3</Container>
        <Container onClick={() => OnClickMath("+")}>+</Container>
      </FlexBox>
      <FlexBox>
        <ContainerZero onClick={() => OnClickNum("0")}>0</ContainerZero>
        <Container>.</Container>
        <Container onClick={() => OnClickMath("=")}>=</Container>
      </FlexBox>
    </Box>
  );
}

export default Calculator;

const Box = styled.div`
  position: relative;
  z-index: 999;
  margin: 40px 40px 0;
  background-color: #fff;
  height: 400px;
  border-radius: 10px;
`;
const SubScreen = styled.p`
  width: 100%;
  height: 30px;
  text-align: right;
  padding: 10px 20px 0;
  font-size: 16px;
`;
const Screen = styled.div`
  width: 100%;
  height: 100px;
  font-size: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 20px;
  word-break: break-all;
`;
const FlexBox = styled.ul`
  display: flex;
  li:first-child {
    border-left: 0;
  }
`;
const Container = styled.li`
  width: 25%;
  height: 54px;
  display: flex;
  font-size: 20px;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  border-left: 1px solid #000;
  border-top: 1px solid #000;
`;
const ContainerZero = styled.li`
  width: 50%;
  height: 54px;
  font-size: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid #000;
  border-top: 1px solid #000;
`;
