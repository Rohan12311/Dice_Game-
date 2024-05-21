import { useState } from "react";
import styled from "styled-Components"

function NumberSelector({selectedNumber,setSelectedNumber,error, setError}) {
  const arrNumber = [1,2,3,4,5,6];
  
  const numberSelectorHandeler = (value) => {
    setSelectedNumber(value)
    setError("")
  }

  return (
    <NumberSelectorContainer>
        <p className="para">{error}</p>
      <div className="flex">
        {
          arrNumber.map((value,i) => (
            <Box 
            isSelected ={ value === selectedNumber}
            key={i} onClick={ () => numberSelectorHandeler(value)}>
              {value}
            </Box>
          ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector

const NumberSelectorContainer = styled.main`
.flex{
  display: flex;
  gap: 24px;
}
.para{
  color: red;
}
p{
  font-size: 24px;
  font-weight: 700;
  text-align: end;
  margin-top: 10px;
  padding-bottom: 20px;
}
`;

const Box = styled.div`
  height:72px;
  width:72px;
  border: 1px solid black;
  display: grid;
  place-items:center;
  font-size:24px;
  font-weight:700;
  background-color: ${(props)=> (props.isSelected? "black": "white")};
  color:${(props)=> (props.isSelected? "white": "black")}
`