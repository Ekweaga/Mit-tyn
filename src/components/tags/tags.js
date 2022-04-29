import React from 'react'
import styled, {css} from 'styled-components'
import { useState ,useContext} from 'react'
import { Statecontext } from '../stateprovider'

const Tags = () => {
  const {activeTag,setActiveTag } = useContext(Statecontext)
    
    const Tagcontainer = styled.div`
    background:#08002b;
    height:5rem;
    width:36rem;
    margin:0 auto;
    border-radius:5rem;
    color:black;
    display:flex;
    gap:2.5rem;
    align-items:center;
    justify-content:center;
   
    `
    const Tag = styled.button`
    all:unset;
  text-align:center;
    padding:5px;
    color:white;
   border-radius:5rem;
   flex:1;
    font-size:1.5rem;
    ${({activeTag})=> activeTag && css`

    background-color:#b85600;
    `}
  
    `;
    const handletag = (index)=>{
      setActiveTag(index)
    }
   
  return (
    <Tagcontainer>{
        ["work","Short Break", "Long Break"].map((tag,i)=>{
          return  <div><Tag activeTag={activeTag == i} onClick={()=>handletag(i)}>{tag}</Tag></div>
        })
        
        }</Tagcontainer>
  )
}

export default Tags