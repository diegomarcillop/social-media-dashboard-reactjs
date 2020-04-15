import React from "react";
import styled from "styled-components";
import { Row, Col, Count, User } from "../styled";

const Card = styled.div`
  width: 13em;
  height: 7em;
  background-color: hsl(227, 47%, 96%);
  border-radius: 8px;
  margin: 15px !important;
`;

function Social({ numbers, icon, title, count }) {
  return (
    <Card>
      <Row>
        <Col
          style={{
            width: "80%",
            textAlign: "left",
          }}
        >
          <User>{title}</User>
        </Col>
        <Col>
          <img src={icon} alt="social" />
        </Col>
      </Row>

      <Row>
        <Col
          style={{
            paddingLeft: "2px",
            width: "65%",
          }}
        >
          <Count
            style={{
              fontSize: "28px",
            }}
          >
            {count}
          </Count>
        </Col>

        <Col
           
        >
          <Row>
            {parseInt(numbers) > 0 ? (
              <>
                <Col>
                  <img
                    src="/img/icon-up.svg"
                    width="12"
                    height="12"
                    alt="social_"
                  />
                </Col>
                <User
                  style={{
                    color: "hsl(163, 72%, 41%)",
                  }}
                >
                  {numbers}%
                </User>
              </>
            ) : (
              <>
                <img src="/img/icon-down.svg" width="12" alt="social" />

                <User
                  style={{
                    color: "hsl(356, 69%, 56%)",
                  }}
                >
                  {Math.abs(parseInt(numbers))} %
                </User>
              </>
            )}
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
export default Social;
