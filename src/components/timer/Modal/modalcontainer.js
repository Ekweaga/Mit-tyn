import React from 'react'
import styled from 'styled-components'

function Modalcontainer() {
    const Container = styled.div`
        position:absolute;
        display:grid;
        place-items:center;
        height:100vh;
        width:100vw;
        z-index:200;
    `
    const ModalContent= styled.div`

    width:60rem;
    height:40rem;
    background-color:white;
    `
    const ModalHeader = styled.div`
    `
    const ModalTitle = styled.h1`
    `
    const Modalclose = styled.button``
    const ModalBody = styled.div``
  return (
    <Container>
        <ModalContent>
            <ModalHeader>
                <ModalTitle>
                    Modal Title
                </ModalTitle>
                <Modalclose>X</Modalclose>
            </ModalHeader>
            <ModalBody>

            </ModalBody>
        </ModalContent>
    </Container>
  )
}

export default Modalcontainer