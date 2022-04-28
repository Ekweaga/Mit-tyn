import React from 'react'
import styled from 'styled-components'
import Circularprogress from './Circularprogress/circularprogress'

const Timer = () => {
    const Timecontainer = styled.div`
    width:30rem;
    height:30rem;
    margin:2rem auto;
    
    border-radius:50%;
    display:grid;
    place-items:center;
    background-color:conic-gradient(#08002b, #220045 150%,#08002b);
    box-shadow:-50px -50px 150px rgba(158,158,158,0.2), 50px -10px 100px rgba(0,0,0,0.5);
    `
  return (
    <Timecontainer>
      <Circularprogress />
    </Timecontainer>
  )
}

export default Timer