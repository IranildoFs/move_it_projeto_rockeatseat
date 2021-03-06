import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import { useContext} from 'react';
import styles from '../styles/components/ChallengeBox.module.css';


export function ChallengeBox() {
  const {activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengesContext);
  const {resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceed(){
    completeChallenge();
    resetCountdown();
  }
  function handleChallengeFailed(){
    resetChallenge();
    resetCountdown();
  }
  

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
          <div className={styles.challengeActive}>
            <header>Ganhe {activeChallenge.amount} xp</header>
            <main>
              <img src={`icons/${activeChallenge.type}.svg`}/>
              <strong>Novos desafios</strong>
              <p>{activeChallenge.description}</p>
            </main>
            <footer>
              <button type="button" 
              className={styles.challengeFailedButton}
              onClick={handleChallengeFailed}>Falhei</button>
              
              <button type="button" className={styles.challengeSucceededButton} onClick ={handleChallengeSucceed}>Completei</button>
            </footer>
          </div>
      )
      :
      (
        <div className={styles.challengeNotActive}>
            <strong>Finalize um ciclo para receber desafios</strong>
            <p>
              <img src="icons/level-up.svg" alt="Level Up"/>
              Avance de level completando desafios.
            </p>
        </div>
      )}
    </div>
           
);
}