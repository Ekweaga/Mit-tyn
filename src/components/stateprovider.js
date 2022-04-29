import React, {createContext,useState,useEffect} from 'react'

export const Statecontext = createContext();
export const Stateprovider = ({children}) =>{
  const [worktime, setworktime] = useState(25 * 60);
  const [shortbreaktime, setshortbreaktime] = useState(5);
  const [longBreaktime,setlongbreaktime] = useState(30 * 60);
  const[inittime,setinittime] = useState(0)
    const [activeTag, setActiveTag] = useState(0)
    const [progress, setProgress] = useState(0)
    const [time, settime] = useState(0);
  const [isactive,setactive] = useState(false);

  useEffect(()=>{
    switch(activeTag){
      case 0:
        settime(worktime);
        setinittime(worktime)
        break;
      case 1:
        settime(shortbreaktime);
        setinittime(shortbreaktime);
        break;
      case 2:
        settime(longBreaktime)
        setinittime(longBreaktime)
        break;
      default:
        break;

    }

  },[activeTag,worktime,shortbreaktime,longBreaktime])

    return <Statecontext.Provider value={{
      activeTag,
      setActiveTag,
      progress,
      setProgress,
      time,
      settime,
      isactive,
      setactive,
      worktime, 
      setworktime,
      shortbreaktime, 
      setshortbreaktime,
      inittime
      ,setinittime}}>{children}</Statecontext.Provider>
}

export default Stateprovider