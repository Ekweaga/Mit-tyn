import React, {useContext, useEffect,useState} from 'react'
import styled from 'styled-components'
import { Statecontext } from '../../../stateprovider';

function Clock() {
  const {time, settime} = useContext(Statecontext)
  const {isactive,setactive} = useContext(Statecontext)

  useEffect(()=>{
    if( isactive && time > 0){
      const interval = setInterval(()=>{
        settime((time)=> time - 1);
      },1000);
      return ()=>clearInterval(interval)
    }
  }, [time, isactive]);
  const toggleclock = ()=>{
    setactive(!isactive)
  }

  const gettime = (time)=>{
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return `${min < 10 ? "0" + min : min} : ${sec < 10 ? "0" + sec : sec}`
  }
    const ClockContainer = styled.div`
color:white;
display:grid;
place-items:center;
    `;
    const TimerText = styled.h3`
    color:white;
    font-size:3rem;
    `;
    const StartPauseButton = styled.button`
    color:white;
    all:unset;
    text-align:center;
    cursor:pointer;
    letter-spacing:0.5rem;
    text-transform:uppercase;
    `
  return (
    <ClockContainer>
        <TimerText>{gettime(time)}</TimerText>
            <StartPauseButton onClick={toggleclock}>{isactive ? "PAUSE":"START"}</StartPauseButton>

    </ClockContainer>
  )
}

export default Clock;