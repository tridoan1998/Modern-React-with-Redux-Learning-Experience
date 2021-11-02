// Import the React and ReactDOM liraries
import React from'react';
import ReactDOM from 'react-dom';

function getButtonText() {
    return 'Click on me!';
}

// Create a react component, JSX 
const App = () => {
    //const buttonText = 'Click me!'; //javascript variable
    //const buttonText1 = 123456; 
    //const buttonText2 = ['Hi', 'There']; 
    const buttonText = {text: 'Click me!'};
    return (
    <div>

        <label className = "label" for="name"> Enter Name: </label>
        <input id="name" type="text" />
        <button style = {{backgroundColor: 'blue', color: 'white'}}>
        {buttonText}
        </button>
   
  </div>
    );
};
//Take the react componenet and show it on the screen 
ReactDOM.render(
    < App/>,
    document.querySelector('#root')

);
