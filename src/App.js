import React from "react";
import "./App.css";
import styled from "styled-components";
import Sesions from "./components/Sesions";
import OverView from "./components/OverView";
import Togle from "./components/togle";
import { Row, Col } from "./styled";

function App() {
  const Container = styled.div`
    width: 100%;
    overflow-x: hidden;
    width: 100%;
    overflow-y: scroll !important;
    padding-top: 5px;
    padding-left: 12.5%;
    padding-right: 12.5%;
    z-index: 100;
  `;

  const Title = styled.h1`
    font-family: "Inter", sans-serif;
    font-size: 150%;
    color: hsl(230, 17%, 14%);
    margin: 0px !important;
    margin-bottom: 5px !important;
  `;

  const Title2 = styled.h2`
    font-family: "Inter", sans-serif;
    font-size: 20px;
    color: hsl(228, 12%, 44%);
    margin: 0px !important;
    padding-left: 14px;
    padding-top: 16px;
    padding-bottom: 16px;
  `;

  const SubTitle = styled.h3`
    font-family: "Inter", sans-serif;
    font-size: 70%;
    color: hsl(228, 12%, 44%);
    margin: 0px !important;
  `;

  return (
    <div className="App">
      <Container>
        <div
          style={{
            paddingLeft: "12px",
            paddingBottom: "20px",
          }}
        >
          <Row>
            <Col style={{
              paddingRight: '35%',
            }}>
              <Title>Social Media Dashboard</Title>
              <SubTitle>Total Followers: 23, 004</SubTitle>
            </Col>
            <Col>
            <Togle/>
            </Col>
          </Row>
        </div>

        <Sesions />
        <Title2>Overview - Today</Title2>
        <OverView />
      </Container>
    </div>
  );
}

export default App;
