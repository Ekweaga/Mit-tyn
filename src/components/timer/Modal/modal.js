import React from 'react'
import Backdrop from './backdrop'
import Modalcontainer from './modalcontainer'
import { motion,AnimatePresence } from 'framer-motion'

function Modal({isopen, close}) {
  return (
   <>
   <AnimatePresence>
   
   {isopen &&(
     <><Backdrop/>
   <Modalcontainer isopen={isopen} close={close}/></>)
   }
</AnimatePresence>
   </>
  )
}

export default Modal