import React from 'react'
import styled from 'styled-components'
import paintStore from '../stores/paintStore';

const Window = styled.div`
  width:800px;
  height:40px;
  background:Lightgrey;
  display: flex;
  align-items:center;

  >button{
    margin-left:5px;
    height:25px;
  }
`;

const handlePen = () => {
  paintStore.changePaintTool('pen')
}
const handleBox = () => {
  paintStore.changePaintTool('box')
}
const handleRefresh = () => {
    paintStore.changePaintTool('refresh')
}

export default function Header() {

  return (
    <Window>
      <button onClick={handlePen}> 펜으로 그리기 </button>
      <button onClick={handleBox}> 네모 박스 </button>
      <button onClick={handleRefresh}> 새로 고침 </button>
    </Window>
  )
}
