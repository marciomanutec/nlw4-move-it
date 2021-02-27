import React from 'react';
import {Component, useState } from 'react';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

export function Input() {

  const  {textoInput, pegaTexto  } = useContext(ChallengesContext);

  const [nome, setNome] = useState('')
 
    return (
      <div>
         <input
         type="text"
         name="texto"
        // value={textoInput}
         onChange={event => pegaTexto(event.target.value)} 
       /* onChange={Event => setNome(Event.target.value)} PRECISA DO ONCLICK DO BUTTON   */
         /> 
       
        </div>
       
    );
 
}