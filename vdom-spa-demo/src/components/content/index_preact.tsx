/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import { h } from "preact";
import { createElement, render } from 'preact';

export function Content() {
  return (
    <div class="oj-web-applayout-max-width oj-web-applayout-content">
        <h3>Test</h3>
    </div>
  );
};


let vdom = createElement(
  'h3',
  { class: 'someclass' },
  'Hello World!'
);

let vdom2 = <h3 class='someclass'>Hello World!</h3>

let myClass = Math.random() > 0.5 ? 'bigClass' : 'smallClass';
let vdom3 = <h3 class={myClass}>Hello World! {100 + 300}, {myClass}</h3>

let today = new Date();

function App(){
  return(
    <div>
      <h3 class={myClass}>Hello World! {100 + 300}, {myClass}</h3>
      <h3 style="color:red">{today.getDate()}-{today.getMonth()}-{today.getFullYear()}</h3>
    </div>
  )
}


function App2(){

  let i = 0;

  const clicked = () => {
    i += 1;
    console.log('hi ' + i)
  }

  return(
    <div>
      <App />
      <h3>Count: {i} </h3>
      <button onClick={clicked}>Click Me!</button>
    </div>
  )
}

// ----------------------------------------- Creating components


// props -> properties
// <Button></Button>
// Style, ClickAction, children -> default name

function Button(props: any){
  return(
    <div>
      <button style={props.Style} onClick={props.ClickAction}>{props.children}</button>
    </div>
  )
}

function App3(){

  let i = 0;

  const clicked = () => {
    i += 1;
    console.log('hi ' + i)
  }

  return(
    <div>
      <App />
      <h3>Count: {i} </h3>
      <Button Style={{ color: 'green' }} ClickAction={ clicked }>CLICK ME</Button>
    </div>
  )
}


// ----------------------------------------- state of the variable

import { useState } from "preact/hooks";

function App4(){

  const [count, setCount] = useState(0);

  const clicked = () => {
    setCount(count + 1);
    console.log('hi ' + count)
  }

  return(
    <div>
      <App />
      <h3>Count: {count} </h3>
      <Button Style={{ color: 'green' }} ClickAction={ clicked }>CLICK ME</Button>
    </div>
  )
}

render(<App4 />, document.body);