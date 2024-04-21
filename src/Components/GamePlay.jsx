import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import { RoleDice } from './RoleDice'
import styled from 'styled-components'

const GamePlay = () => {


  const [score,setScore]=useState(0);

  const [selecteNumber, setSelectedNumber]=useState();
  const [currentDice,setCurrentDice]=useState(1);
  const [error,setError]=useState("");

   

    const generateRandomNumber=(min,max)=>{
        console.log(Math.floor(Math.random()*(max-min) +min));
    return Math.floor(Math.random()*(max-min) +min);
};


const roleDice=()=>{
  if(!selecteNumber) {

    setError("you have not selected any number");
    return ;
  };
  setError("");

    const randomNumber =generateRandomNumber(1,7);
    setCurrentDice((prev)=>randomNumber);


    if(selecteNumber === randomNumber)
    {
      setScore((prev)=>prev+randomNumber);
    }
    else{
      setScore((prev)=>prev-2);

    }
    setSelectedNumber(undefined);

};

const resetScore=()=>{
setScore(0);
}

  return (
    <main>
    <div className='top_section'>
        <TotalScore  score={score}/>
        <NumberSelector error={error}  setError={setError} selecteNumber={selecteNumber} setSelectedNumber={setSelectedNumber} />
    </div>
    <RoleDice  currentDice={currentDice} roleDice={roleDice}/>
    <btn>
     <Button  className="btn" onClick={resetScore}>Reset</Button>
   </btn>


    </main>
  )
}

export default GamePlay;

const Button=styled.button`
color: white;
  padding: 10px 18px;
  background: #000000;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.4s background ease-in;
  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }

  
`;


const main = styled.div`

.btn{
  margin-top: 40px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

`;