import React from "react";
import Card from "./card";
import styled from "styled-components";

const Container = styled.div`
  
  display: flex;
  flex-direction: row;  
  flex-wrap: wrap;
`;

function Sesions() {
  return (
    <Container>
      <Card
        user="@nathanf"
        count="1987"
        icon="/img/icon-facebook.svg"
        color="hsl(203, 89%, 53%)"
        numbers="12"
      />
      <Card
        user="@nathanf"
        count="1044"
        icon="/img/icon-twitter.svg"
        color="hsl(195, 100%, 50%)" 
        numbers="99"
      />
      <Card
        user="@realnathanf"
        count="11k"
        icon="/img/icon-instagram.svg"
        color="linear-gradient  hsl(37, 97%, 70%) to hsl(329, 70%, 58%)"
        numbers="1099"
      />
      <Card
        user="Nathan F."
        count="8239"
        icon="/img/icon-youtube.svg"
        color="hsl(348, 97%, 39%)"
        numbers="-144"
      />
    </Container>
  );
}
export default Sesions;
