import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import Tags from './components/tags/tags';
import Timer from './components/timer/timer';
import Modal from './components/timer/Modal/modal';




function App() {
  const Title = styled.h1`color:#ffff`;
  return (
    <div className="App">
      <Modal/>
      <header className="App-header">
     <Title>Mittyn</Title><br/>
     <Tags/>
     <Timer/>
      </header>
    </div>
  );
}

export default App;
