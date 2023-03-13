
import { useState } from 'react';
import AnimalShow from './AnimalShow';
import './App.css';



function getRandomanimal(){
  const animals=['bird', 'cat', 'dog'];
  return animals[Math.floor(Math.random()*animals.length)]
};


function App() {
const [animals, setAnimals]= useState([]);

const handleClick =()=>{
  setAnimals([...animals, getRandomanimal()]);
}

const rerenderAnimals= animals.map((animal,index)=>{
  return  <AnimalShow type={animal} key={index} />
})


  return (
    <div className='app'>
      <button onClick={handleClick}>Add Animal</button>
      <div className='animal-list'>{rerenderAnimals}</div>
     
    </div>
  );
}

export default App;
