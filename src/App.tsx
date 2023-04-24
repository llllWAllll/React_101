import React, { useState } from 'react'
import My_component from './components/My_component';

type Props = {}

export default function App({}: Props) {
  let var1:number=0;
  let var2:string="lek";
  let var3:boolean=false;

  const [state1, setstate1] = React.useState(0);

  const handleUpdate =()=>{
    setstate1(state1 + 1);
  }

  return (
    <div>App
      <button onClick={handleUpdate}>Update</button>
      <div>var1 = {var1}</div>
      <div>var1 = {var2}</div>
      <div>var1 = {var3 ? "lek" : "kan"}</div>
      <div>state = {state1}</div>
      <My_component   label = "Password"/>
      <My_component   label = "รหัส"/>
      <My_component   label = "Test GIT"/>
    </div>
  );
  
}