import React, { useState } from 'react'
import TotalScore from './TotalScore/TotalScore'
import NumberSelector from './TotalScore/NumberSelector'
import styled from 'styled-Components'
import RoleDice from './RoleDice'
import Rules from './Rules'

function GamePlay() {
  const [score,setScore] = useState(0)
  const [selectedNumber , setSelectedNumber] = useState()
  const [currentDice,setCurrentDice] = useState(1);
  const [error,setError] = useState("")
  const [rule,setRule] = useState(false)

  const ShowRule = () => {
    setRule((prev) => !prev);
  }

  const genrateRandomNumber = (min ,max) =>{
    return Math.floor(Math.random()*(max-min)+min);
};

const roleDice = () => {
  if(!selectedNumber) {
    setError("You have not selected any number")
    return
  };
  
    const randomNumber =  genrateRandomNumber(1,7);
    setCurrentDice((prev) => randomNumber)

    if (selectedNumber==randomNumber) {
      setScore((prev) => prev+2)
    } else {
      if(score>0){
        setScore((prev) => prev-1)
      }
    }
    setSelectedNumber(undefined)
}

const resetScore = () => {
  setScore(0)
}

  return (
    <MainContainer>
      <div className='top_section'>
        <TotalScore score={score} />
        <NumberSelector
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
        error={error}
        setError={setError}
        />
      </div>
      <RoleDice 
      currentDice={currentDice}
      roleDice={roleDice}
      />
      <div className='Btn'>
        <button className='ResstBtn'
        onClick={resetScore}
        >Reset</button>
        <button
        onClick={ShowRule}
        >Show Rule</button>
      </div>
      <div className='RuleContainer'>
      {rule?<Rules/>:false}
      </div>
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.main`
padding-top: 25px;

.top_section{
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding-left:25px ;
  padding-right:25px ;
}
.Btn{
  gap: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
  button{
  width: 220px;
    height: 44px;
    color: white;
    background-color: black;
    border: 0px solid transparent;
    transition: 0.4s background ease-in;
    border-radius: 5px;
    &:hover{
        background-color: #fff;
        color: black;
        border: 1px solid black;
        transition: 0.3s background ease-in;
        border-radius: 5px;
        font-size: 24px;
    }
 }

 .RuleContainer{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 }


`;