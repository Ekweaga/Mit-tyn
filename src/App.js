import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import Tags from './components/tags/tags';
import Timer from './components/timer/timer';
import Modal from './components/timer/Modal/modal';
import {useState} from 'react'
import { FaCog } from 'react-icons/fa'




function App() {
  const [isopen,setisopen] = useState(false);
  const close = ()=>{
    setisopen(false);
  }
  const open = ()=>{
    setisopen(true);
  }
  const Title = styled.h1`color:#ffff`;
  const Cogicon = styled.div`
display:flex;
justify-content:center;
font-size:2rem`
  return (
    <div className="App">
      <Modal close={close} isopen={isopen}/>
      <header className="App-header">
     <Title>Mittyn</Title><br/>
     <Tags/>
     <Timer/>
     <Cogicon onClick={open}>
     <FaCog />
     </Cogicon>
    
      </header>
    </div>
  );
}

export default App;
