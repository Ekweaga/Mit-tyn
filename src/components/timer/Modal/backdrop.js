import React from 'react'
import styled from 'styled-components'

function Backdrop() {
    const KBackdrop = styled.div`
    width:100%;
    height:100%;
    position:fixed;
    left:0;
    z-index:100;
    top:0;
    background-color:rgba(0,0,0,0.5);

    `
  return (
    <KBackdrop/>
  )
}

export default Backdrop;