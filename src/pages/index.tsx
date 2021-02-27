import Head from 'next/head'
import { GetServerSideProps } from 'next';
import { ExperienceBar } from "../components/ExperienceBar";
import { Input } from '../components/Texto';
import { Profile} from "../components/Profile";
import styles  from '../styles/pages/Home.module.css';
import { CompletedChallenges } from '../components/CompleteChallenges';
import { Countdown } from '../components/Countdown';
import { ChallengeBox } from '../components/ChallengeBox';
import { Button } from '../components/Button';
import { CountdownProvider } from '../contexts/CountdownContext';
import React from 'react';
import { ChallengesProvider } from '../contexts/ChallengesContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
     level={props.level}
     currentExperience={props.currentExperience}
     challengesCompleted={props.challengesCompleted}    
    >
    <div className={styles.container}>
        <Head>
          <title>Inicio | move.it</title>
        </Head>
      {/* <h1>Criando Botão</h1>
      <Button color="red">Botão 1</Button>
      <Button color="blue">Botão 2 </Button>
      <Button color="green">Botão 3</Button>*/}
   
      <ExperienceBar />
      <CountdownProvider>
      <section>
          <div>
           <Profile />
           <CompletedChallenges />
           <Countdown />
          </div>

          <div>
           <ChallengeBox />
          </div>

      </section>
      </CountdownProvider>
      {/* <Input/>  
       <Button color="blue">Botão 2 </Button>*/}
   </div> 
   </ChallengesProvider>
  )
}

// Acessa o back-end
export const getServerSideProps: GetServerSideProps = async (ctx) => {
//Chamada API
  const {level, currentExperience, challengesCompleted} = ctx.req.cookies;

  return {
    props: {
     level: Number(level) ,
     currentExperience: Number(currentExperience),
     challengesCompleted: Number(challengesCompleted)
    }
  }
}
