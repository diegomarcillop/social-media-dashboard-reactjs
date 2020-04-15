import styled from "styled-components";

export const Card = styled.div`
width: 13em;
height: 12em;
background-color: hsl(227, 47%, 96%);
border-radius: 8px;
margin: 15px !important;
border-top: 4px solid;
`;

export  const Row = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`;

export  const Col = styled.div`
display: flex;
flex-direction: column;
margin: 1px;
 padding-bottom: 0px;
`;

export  const User = styled.h5`
font-family: "Inter", sans-serif;
padding-left: 4px;
font-size: 12px;
color: hsl(228, 12%, 44%);
`;

export  const Count = styled.h1`
font-family: "Inter", sans-serif;
color: hsl(230, 17%, 14%);
font-size: 42px;
flex-wrap: no-wrap;
margin: 0px !important;
`;

export const SubTitle = styled.h2`
font-family: "Inter", sans-serif;
font-weight: 200;
font-size: 14px;
margin: 0px !important;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center; 
  flex-wrap: wrap;
`;