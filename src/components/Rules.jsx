import React from 'react'
import styled from 'styled-Components'


export default function Rules() {
  return (
    <RuleContainer>
      <h1>How to play dice game</h1>
      <p>Select any number</p>
      <p>Click on dice image</p>
      <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
      <p>if you get wrong guess then  2 point will be dedcuted </p>
    </RuleContainer>
  )
}

const RuleContainer = styled.div`
 width: 794px;
 height: 100px;
 background-color: #FBF1F1;
 margin-top:25px ;
 display: flex;
 flex-direction: column;
 gap: 10px;
 justify-content: center;
 text-align: start;
 padding: 50px;

 p{
    font-size: 16px;
 }
 h1{
    font-size: 24px;
 }
`;
