import React from 'react'
import styled from 'styled-Components'
import Button from './Button/Button';

function FirstPage({toggle}) {
  return (
    <>
        <MainDiv>
          <img src="/images/dices.png" alt="" />
          <div className='primary_text'>
            <h1>DICE GAME</h1> 
            <Button toggle={toggle} text='Play Now' />
          </div>
        </MainDiv>
    </>
  )
}

export default FirstPage

const MainDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;

  .primary_text {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 10px;
  }

  .primary_text h1{
    font-size: 96px;
    color: black;
}

`;


