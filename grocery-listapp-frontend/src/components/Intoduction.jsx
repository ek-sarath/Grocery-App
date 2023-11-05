import React from 'react';
import Logo from '../assets/GroceryList.svg';

const Introduction = ({onStart}) => {
  return (
    <div className='Introduction'>
        <div className='Head'>
         <img src={Logo} alt='Logo' className='Logo'/>
        <h1>Grocery List App</h1>
      </div>
      <p>Create a shopping list to add and manage groceries to buy at the store.</p>
      <button onClick={onStart} className="StartButton">Start</button>
    </div>
  );
};

export default Introduction;
