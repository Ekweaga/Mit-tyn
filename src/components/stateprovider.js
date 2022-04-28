import React, {createContext,useState} from 'react'

export const Statecontext = createContext();
export const Stateprovider = ({children}) =>{
    const [activeTag, setActiveTag] = useState(0)
    const [progress, setProgress] = useState(10)
    const [time, settime] = useState(600);
  const [isactive,setactive] = useState(false);

    return <Statecontext.Provider value={{activeTag,setActiveTag,progress,setProgress,time,settime,isactive,setactive}}>{children}</Statecontext.Provider>
}

export default Stateprovider