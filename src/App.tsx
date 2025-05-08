import Answer from './answer'
import './App.css'
import { AnswerProvider } from './context/Answers/AnswersContext';
import { GameStatusProvider } from './context/GameSatus/GameSatusContext';
import { GuessesProvider } from './context/Guesses/GuessesContext';
import { MarksProvider } from './context/Marks/MarksContext';
import GameSatus from './gameStatus';
import Guesses from './guesses';
import Marks from './marks';
import Rules from './rules';

function App() {
  return (
    <GameStatusProvider>
      <AnswerProvider>
        <MarksProvider>
          <GuessesProvider>
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
                    <Marks />
                  </div>
                  <div className="col-span-2">
                    <Guesses />
                  </div>
                </div>
              </div>
              <div className="w-100 text-center mt-5">
                <div className="mb-5">
                  <GameSatus />
                </div>
                <Rules />
              </div>
            </main>
          </GuessesProvider>
        </MarksProvider>
      </AnswerProvider>
    </GameStatusProvider>
  )
}

export default App
