import React from 'react'
import styled from 'styled-components'
import Contents from '../components/Contents'
import Header from '../components/Header'

const Wrapper = styled.div`
    display:flex;
    align-items:center;
    height:800px;
    width:100%;
    
    `
const LayoutContents = styled.div`
    display:flex;
    flex-direction:column;
    margin: 0 auto;
    border: 1px solid grey;
`

export default function Layout() {
  return (
    <Wrapper>
        <LayoutContents>
            <Header></Header>
            <Contents></Contents>  
        </LayoutContents>
    </Wrapper>
  )
}
