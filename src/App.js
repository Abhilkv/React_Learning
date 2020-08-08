import React from "react"

import ClickButton from './clickButton';
import HoverButton from './hoverButton';

function Main() {
 
   return (
    <div style={{ disply: 'flex', width: '100vw', height: '100vh', justifyContent: 'center', alignItems: 'center'}}>
      {/*this name and initial values will be passed as a props to 
      withCounter HOC we have to redirect the props from there
      to the wrapped components in-order to use them */}
      <ClickButton name="abhil" initialValue={0}/>
      <HoverButton name="ahul" initialValue={100}/>
    </div>
  );
}

export default Main;
{/* the idea of HOC is to group common code (here the state and the 
increment function) in to a common component and use them for different components  */}