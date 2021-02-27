import {useState } from 'react';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

interface ButtonProps {
    color:string;
    children:string;
}

export function Button(props: ButtonProps){
    const [counter, setCounter] = useState(1)
    const  { pegaTexto  } = useContext(ChallengesContext);

    

    
    function increment() {
        setCounter(counter +1);        
    } 

   
    return (
        
        <button
        type="button"
        style={{backgroundColor:props.color}}
        onClick={increment}
       
         >
        {props.children} <strong>{counter}</strong>   
      
     
        </button>
    );
}