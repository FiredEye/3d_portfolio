import React from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 720px) {
    height: 150vh;
  }
`;
const Container = styled.div`
  height: 100%;
  width: 84%;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 720px) {
    flex-direction: column-reverse;
  }
`;
const Left = styled.div`
  flex: 1;
  @media only screen and (max-width: 720px) {
    width: 100%;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 720px) {
    padding: 80px 0px 0px 0px;
    align-items: center;
  }
  @media only screen and (max-width: 500px) {
    padding: 80px 0px 0px 0px;
  }
  @media only screen and (max-width: 900px) {
    flex: 2;
  }
`;
const Title = styled.h1`
  font-size: 60px;
  @media only screen and (max-width: 720px) {
    align-text: center;
  }
`;
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Line = styled.img`
  height: 5px;
`;
const Subtitle = styled.h2`
  color: #da4ea2;
`;
const Desc = styled.p`
  font-size: 18px;
  color: lightgray;
  @media only screen and (max-width: 720px) {
    align-text: center;
  }
`;
const Button = styled.button`
  width: 120px;
  font-weight: 500;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: #b63783;
  }
`;

function Who() {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
            <OrbitControls enableZoom={false} autoRotate />
          </Canvas>
        </Left>
        <Right>
          <Title>Think outside the Box</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Who We Are</Subtitle>
          </WhatWeDo>
          <Desc>
            a creative group of designers and developers with a passion for the
            arts.
          </Desc>
          <Button>See our works</Button>
        </Right>
      </Container>
    </Section>
  );
}

export default Who;
