import styles from '../styles/components/Profile.module.css';

import { useContext } from 'react';

import { ChallengesContext } from '../contexts/ChallengesContext';

export function Profile() {
    const { textoInput, level } = useContext(ChallengesContext);

  return (
      <div className={styles.profileContainer}>
          <img src="https://avatars.githubusercontent.com/u/65673086?s=460&u=294758b4048ab20da44999208010830275171d56&v=4" alt="Márcio Alves"/>
          <div>
              <strong>{textoInput}</strong>
              <p>
                  <img src="icons/level.svg" alt="Level"/>
                  Level {level}
              </p>
          </div>
      </div>
  )
}