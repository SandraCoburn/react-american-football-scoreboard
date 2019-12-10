//TODO: STEP 1 - Import the useState hook.
import React, { useEffect, useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0); 
  const [downValue, setDownValue] = useState(0);
  const [ballOnValue, setBallOnValue] = useState(0);
  const [seconds, setSeconds] = useState(50);
  const [minutes, setMinutes] = useState(0);
  
 useEffect(() => {
  const interval = setInterval(() => {
      setSeconds(seconds + 1);
   }, 1000);
   //after seconds was updated
   //TODO: 
   if(seconds === 60){
     setMinutes(minutes + 1);
     setSeconds(0);
   }
   
   return () => clearInterval(interval);
  }, [seconds]);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">{minutes}:{seconds}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow downValue={downValue} ballOnValue={ballOnValue}/>
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => setHomeScore(homeScore + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={()=> setHomeScore(homeScore + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setAwayScore(awayScore + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => setAwayScore(awayScore + 3)}>Away Field Goal</button>
        </div>
        <div className="quarterButtons">
          <button className="quarterButtons_down" onClick={() => setDownValue(downValue + 1)}>Down Value</button>
          <button className="quarterButtons_ballOn" onClick={() => setBallOnValue(ballOnValue + 3)}>Ball On Value </button>
        </div>
      </section>
    </div>
  );
}

export default App;
