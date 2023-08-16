import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react"

function App() {
  const [number, setCard] = useState(0);
  const [deck, setDeck] = useState([]);
  let card;

  useEffect(()=>{ 
    card = [["Ace", 1, 4], ["Two", 2, 4], ["Three", 3, 4], ["Four", 4, 4], ["Five", 5, 4], ["Six", 6, 4], ["Seven", 7, 4], ["Eight", 8, 4], ["Nine", 9, 4], ["Ten", 10, 4], ["Jack", 10, 4], ["Queen", 10, 4], ["King", 10, 4]];
    let deckProto = [];
    while(card.length > 0){ // get a random value, reduce that value from array, check if reduced to 0 then remove it.
      let max = 12;
      var rand = getRandomInt(0, max);
      var num = card[rand];
      var suit;

      if (num && num[2] > 0)
      {
        switch (num[2])
        {
          case 4: suit = `${num[0]} of Hearts`;
            break;
          case 3: suit = `${num[0]} of Spades`;
            break;
          case 2: suit = `${num[0]} of Diamonds`;
            break;  
          case 1: suit = `${num[0]} of Clubs`;
            break;
        }
        deckProto.push([suit, num[1]]);
        num[2]--;
      }

      else if (num)
      {
        card = card.filter(item => item !== num);
        console.log(card);
        max--;
      }
    }
    console.log(deckProto); 
    setDeck(deckProto);
  },[])
  
  function getCard(){
    console.log(deck);
    var c = deck[getRandomInt(0, 51)];
    setCard(c[0]);
  }

  //const [number, setRandomInt] = useState(0)
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  return (
    
    <div className="App">
      <header className="App-header">
        <p>
          <div>
            <button type="button" onClick={()=>getCard()}>Hit!</button> 
          </div>
          <div>
            {number}
          </div>
          {/* <button type="button" onClick={()=>getCard()}>Stand.</button> 
          {number} */}
        </p>
      </header>
    </div>
  );
}

export default App;

/* 
1. make balckjack
2. make hit and stand buttons that work
3. deal 2 random cards to dealer and player
4. make 1 card of dealer face down
5. make it so if a A is dealt can choose between 11 and 1
6. make it so if dealer is less than 17, has to hit
7. make it so if hit 21 confetti rains down 

*/