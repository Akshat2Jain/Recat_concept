import React,{useState} from "react";
import Callback from "./callback";
import "./App.css"
//This is a parent component
const App = () => {
  const [uicolor,setColor]=useState(null);
  const getColor=(color)=>{
    setColor(color);
  }
  return (
    <div className="App">
      <div className="color_container" style={{ backgroundColor: `${uicolor}` }}>
        <h2>Your color will appear here</h2>
      </div>
      <Callback getColor={getColor}/>
    </div>
  );
};

export default App;
