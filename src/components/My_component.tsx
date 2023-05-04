import React, { useState } from 'react'

// type Props = {
//     label:string;
//     btnLabel ?: string;
// };

export default function My_component(props:any) {
  let message = "";

  return (
    <div>
      <form onSubmit={() => alert(message)}>
        <label> {props.label}: </label>
        <br/>
        <input type="text" name="your_message" id="your_message" onChange={(event => {message =  event.target.value})} />
        <br />
        <button>{props.btnLabel ? props.btnLabel : "OK"}</button>
      </form>
    </div>
  );
}
