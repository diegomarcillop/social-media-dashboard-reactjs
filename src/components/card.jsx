import React from "react";
import { Card, Row, Col, Count, SubTitle, User } from "../styled";

function CardS({ count, icon, color, user, numbers }) {

  const card = React.createRef();

 


  return (
    <>
      <Card ref={card}  
        style={{
          borderTopColor: `${color} `,
          textAlign: 'center'
        }}
      >
        <Row>
          <Col>
            <img src={icon} alt="social" />
          </Col>
          <Col>
            <User>{user}</User>
          </Col>
        </Row>

        <Row>
          <Col>
            <Count>{count}</Count>
            <SubTitle>F O L L O W E R S</SubTitle>
          </Col>
        </Row>

        <Row
          style={{
            paddingTop: "10px",
          }}
        >
          {parseInt(numbers) > 0 ? (
            <>
              <img src="/img/icon-up.svg" width="12" alt="social" />
              <User
                style={{
                  color: "hsl(163, 72%, 41%)",
                }}
              >
                {numbers} Today
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
                {Math.abs(parseInt(numbers))} Today
              </User>
            </>
          )}
        </Row>
      </Card>
    </>
  );
}

export default CardS;
