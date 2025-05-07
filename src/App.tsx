import Answer from './answer'
import './App.css'
import { AnswerProvider } from './context/Answers/AnswersContext';
import { GuessesProvider } from './context/Guesses/GuessesContext';
import Guesses from './guesses';
import Rules from './rules';

function App() {
  const gameStatus = 'IN_PROGRESS';

  return (
    <GuessesProvider>
      <AnswerProvider>
        <main className="w-full grid justify-items-center p-5">
          <h1 className="text-2xl mb-5">Mastermind</h1>
          <div className="w-100 text-center mt-5">
            <div className="grid grid-cols-3">
              <div className="col-span-1"></div>
              <div className="col-span-2">
                <Answer />
              </div>
            </div>
            <div className="grid grid-cols-3">
              <div className="col-span-1">
                
              </div>
              <div className="col-span-2">
                <Guesses />
              </div>
            </div>
          </div>
          <div className="w-100 text-center mt-5">
            { gameStatus === 'FAILED' &&  <p>GAME OVER</p>}
            { gameStatus === 'SUCCESS' &&  <p>WINNER!</p> }
            { gameStatus === 'IN_PROGRESS' &&  <p>Keep going!</p> }

            <Rules />
          </div>
        </main>
      </AnswerProvider>
    </GuessesProvider>
  )
}

export default App
