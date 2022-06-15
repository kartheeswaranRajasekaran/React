import logo from './logo.svg';
import './App.css';
import ComponentA from './ComponentA';
import React from 'react';
import UseReducer from './UseReducer';
import UseRef from './UseRef';
import UseCallBack from './UseCallBack';

export const userContext = React.createContext();

function App() {

  return (
    <div className="App">
      {/* <userContext.Provider value={"salman"}>
      <ComponentA />
      </userContext.Provider> */}
     {/* <UseReducer/>
     <UseRef/> */}
     <UseCallBack/>
    </div>
  );
}

export default App;
