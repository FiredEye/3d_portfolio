import React, { useState } from "react";
import styled from "styled-components";
import Development from "./Development";
import ProductDesign from "./ProductDesign";
import WebDesign from "./WebDesign";
import Illustration from "./Illustration";
import SocialMedia from "./SocialMedia";

const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
`;
const Container = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 720px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 720px) {
    padding: 0px 14px;
    justify-content: center;
  }
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 80px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  @media only screen and (max-width: 720px) {
    font-size: 32px;
    color: white;
    -webkit-text-stroke: 0px;
  }
  @media only screen and (max-width: 500px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }
  -webkit-text-stroke: 1px white;
  position: relative;

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`
  flex: 1;
`;
function Works() {
  const [work, setWork] = useState("Web Design");
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {" "}
          {work === "Web Design" ? (
            <WebDesign />
          ) : work === "Development" ? (
            <Development />
          ) : work === "Illustration" ? (
            <Illustration />
          ) : work === "Product Design" ? (
            <ProductDesign />
          ) : (
            <SocialMedia />
          )}
        </Right>
      </Container>
    </Section>
  );
}

export default Works;
