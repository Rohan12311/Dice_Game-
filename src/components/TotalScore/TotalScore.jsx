import React from 'react'
import styled from 'styled-Components'
function TotalScore({score}) {
  return (
    <Score>
        <h1>{score}</h1>
        <p>Total Score</p>
    </Score>
  )
}

export default TotalScore

const Score = styled.div`
text-align: center;
max-width: 200px;
h1{
  font-size: 100px;
  line-height: 100px;
}
p{
  font-size: 24px;
  font-weight: 500px;
}
`;