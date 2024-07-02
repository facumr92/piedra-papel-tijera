import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  const armas = ['Piedra', 'Papel', 'Tijera'];

  const playGame = (userChoice) => {
    const random = Math.floor(Math.random() * armas.length);
    const computerChoice = armas[random];
    setUserChoice(userChoice);
    setComputerChoice(computerChoice);

    if (userChoice === computerChoice) {
      setResult('Empate');
    } else if (
      (userChoice === 'Piedra' && computerChoice === 'Tijera') ||
      (userChoice === 'Papel' && computerChoice === 'Piedra') ||
      (userChoice === 'Tijera' && computerChoice === 'Papel')
    ) {
      setResult('¡Ganaste!');
    } else {
      setResult('Perdiste');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Piedra, Papel, Tijera</Text>
      <View style={styles.choicesContainer}>
        {armas.map((choice) => (
          <Button key={choice} title={choice} onPress={() => playGame(choice)} />
        ))}
      </View>
      <Text style={styles.result}>Tu elección: {userChoice}</Text>
      <Text style={styles.result}>Elección de la computadora: {computerChoice}</Text>
      <Text style={styles.result}>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  choicesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16, 
    width: '100%',
    marginBottom: 20,
  },
  result: {
    fontSize: 18,
    marginVertical: 10,
  },
});
