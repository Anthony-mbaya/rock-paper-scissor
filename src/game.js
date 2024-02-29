import React from 'react';
import './game.css'
class Game extends React.Component{
    constructor(props){
        super();
        this.state = {
            playerValue:null,
            compValue:null,
            playerScore:0,
            compScore:0
        };
    }
    brainFun(playerValue,compValue){
        if(playerValue === compValue){
            return 0;
        }else if((playerValue === 'ROCK' && compValue === 'SCISSOR') || 
                 (playerValue === 'SCISSOR' && compValue === 'PAPER') ||
                 (playerValue === 'PAPER' && compValue === 'ROCK')){
            return 1;
        }else{
            return -1;
        }
    }
    selectFun(playerChoice){
        const choices = ['ROCK','PAPER','SCISSOR'];
        const compChoice = choices[Math.floor(Math.random() * choices.length)];
        const value = this.brainFun(playerChoice,compChoice);
        if(value === 1){
            this.setState({
                playerValue:playerChoice,
                compValue:compChoice,
                playerScore:this.state.playerScore + 1
            })
        }else if(value === -1){
            this.setState({
                playerValue:playerChoice,
                compValue:compChoice,
                compScore:this.state.compScore + 1
            })
        }else{
            this.setState({
                compValue:compChoice,
                playerValue:playerChoice
            })
        }
    }


    render(){
        const {playerValue,compValue,playerScore,compScore} = this.state;
        return(
            <div className="container">
              <h1>Rock Paper Scissor - Woo Hoo</h1>
              <div> 
                <button onClick={() => this.selectFun('ROCK')}> <i className={`fas fa-hand-rock`} /> </button>
                <button onClick={() => this.selectFun('PAPER')}> <i className={`fas fa-hand-paper`} /> </button>
                <button onClick={() => this.selectFun('SCISSOR')}> <i className={`fas fa-hand-scissors`} /> </button>
              </div>
              <div className='outputs'>
                <div className='output1'>
                    <h2>YOU</h2>
                <h2><span>{playerValue}</span></h2>
                <h2><span>{playerScore}</span></h2>
                </div>
                <div className='output2'>
                    <h2>COMPUTER</h2>
                <h2><span>{compValue}</span></h2>
                <h2><span>{compScore}</span></h2>
                </div>
              </div>
            </div>
        )
    }
}

export default Game;
