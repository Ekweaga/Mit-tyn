import styled from 'styled-components'
import React, { useContext } from 'react'
import {useState} from 'react'
import Clock from './Clock/clock';
import { Statecontext } from '../../stateprovider';


function Circularprogress() {
    const {progress, setProgress} = useContext(Statecontext)
    const OuterCircle = styled.div`
    width:21rem;
    height:21rem;
  
    background:red;
    border-radius:50%;
    display:grid;
    place-items:center;
    background:conic-gradient(red ${({progress})=>progress}%, transparent ${({progress})=>progress}%)
    
    `;
    const InnerCircle = styled.div`
    width:20rem;
    height:20rem;
  
    background:black;
    border-radius:50%;
    display:grid;
    place-items:center;
    `
  return (
    <OuterCircle progress={progress}>
        <InnerCircle ><Clock/></InnerCircle>
    </OuterCircle>
  )
}

export default Circularprogress