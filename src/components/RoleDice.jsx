import React, { useState } from 'react'
import styled from 'styled-Components'

function RoleDice({currentDice,roleDice}) {

    


  return (
    <DiceContainer>
        
    <div className='dice'
    onClick={roleDice}>
        <img src={`/images/Dice/dice_${currentDice}.jpg`} alt="dice 1" />
    </div>
    <p>Click on Dice to roll</p>

    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
p{
    font-size: 24px;
    padding: 15px;
}
.dice{
    cursor: pointer;
}
`;