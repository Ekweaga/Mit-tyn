import React, { useContext } from 'react'
import styled from 'styled-components'
import { motion,AnimatePresence } from 'framer-motion'
import {Formik,Form,Field} from 'formik'
import {FaWindowClose} from 'react-icons/fa'
import { Statecontext } from '../../stateprovider'

function Modalcontainer({close, open}) {
    const {
        worktime, 
      setworktime,
      shortbreaktime, 
      setshortbreaktime,
      longBreaktime,setlongbreaktime
    } = useContext(Statecontext);
    const Container = styled.div`
        position:absolute;
        display:grid;
        place-items:center;
        height:100%;
        width:100vw;
        z-index:200;
    `
    const ModalContent= styled(motion.div)`

    width:40rem;
    height:25rem;
    background-color:white;
    display:flex;
    flex-direction:column;
    padding-bottom:10px;
    align-items:center;
    position:relative;
    `
    const ModalHeader = styled.div`
    `
    const ModalTitle = styled.h1`
    font-size:20px;
    text-align:center;
    `
    const Modalclose = styled.button`
    all:unset;
    font-size:2rem;
    position:absolute;
    top:10px;
    right:10px;
    
    `
    const ModalBody = styled.div`
  

    `
    const InputWrapper = styled.div` 
     display:flex;
     flex-direction:column;
    `
    const FormControl = styled.div
    `  display:flex;
    flex-direction:column;
    label{
        font-size:10px;
        font-weight:bold;
        margin:6px;
        
    }
    input{
        background-color:#ead8fc;
        border:none;
        padding:3px;
    }
    input:focus{
        outline:none;
    }
    `
  return (
    <Container>
        <ModalContent 
        initial={{y:"-100vh",scale:0}}
        animate={{y:0,scale:1}}
        exit={{y:"-100vh",scale:0}}>
            <ModalHeader>
                <ModalTitle>
                   Timer settings
                </ModalTitle>
                <Modalclose onClick={close}>
                <FaWindowClose />
                </Modalclose>
            </ModalHeader>
            <ModalBody>
                <Formik initialValues={{work:worktime / 60,short:shortbreaktime / 60,long:longBreaktime / 60}} onSubmit={(values)=>{
                        setworktime(values.work * 60)
                        setshortbreaktime(values.short * 60)
                        setlongbreaktime(values.long * 60);
                        close();
                }}>
                    <Form>
                        <InputWrapper>
                        <FormControl>
                            <label htmlFor='work'>Work</label>
                            <Field name='work' min="1" max="60"/>
                            </FormControl>
                            <FormControl>
                            <label htmlFor='work'>Short Break</label>
                            <Field name='short' min="1" max="60"/>
                            </FormControl>
                            <FormControl>
                            <label htmlFor='work'>Long Break</label>
                            <Field name='long' min="1" max="60"/>
                            </FormControl>
                            </InputWrapper>
                            <button type="submit" style={{background:'purple',color:'white',padding:'6px',border:'none',width:'150px',margin:'15px'}}>SET</button>
                    </Form>
                    </Formik>
            </ModalBody>
        </ModalContent>
    </Container>
  )
}

export default Modalcontainer