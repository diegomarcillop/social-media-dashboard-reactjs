import React from "react";
import styled from "styled-components";
import { Row, Col, Count, User } from "../styled";

const Card = styled.div`
  width: 15em;
  height: 7em;
  background-color: hsl(227, 47%, 96%);
  border-radius: 8px;
  margin: 15px !important;
`;

function Social({ numbers, icon, title, count}) {
  return (
    <Card>
      <Row>
        <Col
          style={{
            width: "40%",
            textAlign: "left",
          }}
        >
          <User>{title}</User>
        </Col>
        <Col
          style={{
            paddingLeft: "30%",
          }}
        >
          <img src={icon} alt="social" />
        </Col>
      </Row>

      <Row>
        <Col
          style={{
            width: "25%",
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
          style={{
            paddingLeft: "30%",
          }}
        >
          <Row>
            {parseInt(numbers) > 0 ? (
              <>
                <img src="/img/icon-up.svg" width="12" alt="social" />
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
