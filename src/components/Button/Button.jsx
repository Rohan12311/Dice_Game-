import React from 'react'
import styled from 'styled-Components'

function Button({text,toggle}) {
  return (
    <Button_box>
      <button onClick={toggle}>
        {text}
      </button>
    </Button_box>
  )
}

export default Button
 const Button_box = styled.button`
 border: transparent;
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
    }
 }
 `;