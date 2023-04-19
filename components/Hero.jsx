import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 720px) {
    height: 130vh;
  }
`;
const Container = styled.div`
  height: 100%;
  width: 84%;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 720px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 720px) {
    padding: 200px 0px 0px 0px;
    flex: 1;
    align-items: center;
  }
  @media only screen and (max-width: 340px) {
    padding: 200px 0px 0px 0px;
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
    padding: 20px;
    text-align: center;
  }
`;
const Button = styled.button`
  width: 100px;
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
const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 720px) {
    flex: 1;
    width: 100%;
  }
`;
const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  @media only screen and (max-width: 910px) {
    width: 500px;
    height: 500px;
  }
  @media only screen and (max-width: 750px) {
    width: 450px;
    height: 450px;
  }
  @media only screen and (max-width: 500px) {
    width: 300px;
    height: 300px;
  }
  @keyframes animate {
    to {
      transform: translateY(30px);
    }
  }
`;

function Hero() {
  const [raduis, setRadius] = useState(0);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 450px)");

    const handleViewportChange = (e) => {
      if (e.matches) {
        // Do something when viewport width is at most 720px
        setRadius(1.5);
      } else {
        // Do something when viewport width is greater than 720px
        setRadius(2.4);
      }
    };

    // Add event listener to update state on resize
    mediaQuery.addListener(handleViewportChange);

    // Call the callback function initially to check the current viewport size
    handleViewportChange(mediaQuery);

    // Remove event listener when component unmounts
    return () => mediaQuery.removeListener(handleViewportChange);
  }, []);

  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Think. Make. Solve.</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>What We Do</Subtitle>
          </WhatWeDo>
          <Desc>
            we enjoy creating delightful, human-centered digital experiences.
          </Desc>
          <Button>Learn more</Button>
        </Left>
        <Right>
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 105, 200]} scale={raduis}>
              <MeshDistortMaterial
                color="#3d1c56"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <Img src="./img/moon.png" />
        </Right>
      </Container>
    </Section>
  );
}

export default Hero;
