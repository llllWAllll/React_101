import React from 'react'

export default function My_component(props:any) {
  return (
    <div>
      <form>
        <label>
          {props.label}:
        </label>
        <br />
        <input type="text" name="your_message"
        id="your_message" />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
