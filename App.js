import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [selectedNumber, setSelectedNumber] = useState(undefined);
  const [numberOfGuesses, setnumberOfGuesses] = useState(0);

  const gameOverHandler = (rounds) => {
    setnumberOfGuesses(rounds);
  };

  const startGameHandler = (number) => {
    setSelectedNumber(number);
  };

  const restartGame=()=>{
    setnumberOfGuesses(0)
    setSelectedNumber(undifined)
  }

 
  let content = <StartGameScreen 
  onStartGame={startGameHandler} />;

  if (selectedNumber && numberOfGuesses === 0) {
    content = (<GameScreen
        selectedNumber={selectedNumber}
        onGameOver={gameOverHandler}
      />
    );
  }else if(selectedNumber && numberOfGuesses>0){
    content =< GameOverScreen rounds={numberOfGuesses} 
    onGameRestart={restartGame}/>
  }


 

  return (
    <View style={styles.screen}>
      <Header style={styles.screen2} title={"Guess the number"} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },});