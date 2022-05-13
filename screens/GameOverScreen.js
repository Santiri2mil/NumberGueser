import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-web";

function GameOverScreen({ rounds }) {
  return (
    <View style={styles.screen}>
      <Text>The game is over</Text>
      <Text>Took me {rounds} rounds</Text>
      <Button title='Restart Game' onPress={onGameRestart}></>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
});

export default GameOverScreen;