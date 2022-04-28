import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import Tags from './components/tags/tags';
import Timer from './components/timer/timer';




function App() {
  const Title = styled.h1`color:#ffff`;
  return (
    <div className="App">
      <header className="App-header">
     <Title>Mittyn</Title><br/>
     <Tags/>
     <Timer/>
      </header>
    </div>
  );
}

export default App;
