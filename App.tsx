import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {

const [age, setAge] = useState<string>("")

const ageAsNumber: number = !isNaN(Number(age))===true ? Number(age) : 0
const low: number =(220 - ageAsNumber) * 0.65
const high: number = (220 - ageAsNumber) * 0.85

const lowWithDecimals = low.toFixed(2);
const highWithDecimals = high.toFixed(2);


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Heart Rate Limits Calculator</Text>
      <Text>Enter your age:</Text>
      <TextInput
      style={styles.inputField}
      keyboardType='number-pad'
      value={age}
      onChangeText={setAge}
      placeholder="Enter age"
      />
      <StatusBar style="auto" />
      <Text>Lower limit: {lowWithDecimals} bpm</Text>
      <Text>Upper limit: {highWithDecimals} bpm</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 100,
    paddingLeft: 20
  },

  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24
  },

  inputField: {
  minWidth:100,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: '#1d1d1d'
}
});
