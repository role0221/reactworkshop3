import Content from "./Components/Content";
import Title from "./Components/Title";
import './App.css'
import { createContext, useState } from "react";

export const ThemeContext = createContext()

function App() {
  const [theme,settheme] = useState("light")
  return (
    
    <ThemeContext.Provider value={{theme,settheme}}>
    <div >
      <Title/>
      <Content/>
    </div>
    </ThemeContext.Provider>
   
    
  );
}

export default App;
