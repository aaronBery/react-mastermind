import { Button } from "@mui/material";

function Rules() {
    return (
       <>
        <p>The aim of the game is to guess the hidden sequence (note colours can be duplicated). 
          After each guess you are scored with black and white markers. 
          Black markers indicate the correct colour in the correct position. 
          White markers indicate a correct colour in the wrong position. 
          You must guess the correct combination in 6 attempts.
        </p>
        <p className="mt-5">
          <Button href="https://en.wikipedia.org/wiki/Mastermind_(board_game)#Gameplay_and_rules" target="_blank">Rules</Button> 
        </p>
       </>
    )
}

export default Rules;