import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')

  const onButtonPress=(value)=>{
    if(value=== '='){
      try{
        setResult(eval(input));
      }catch(error){
        setResult('error')
      }
    }else if(value === 'C'){
      setInput('');
      setResult('');
    } else{
      setInput(input + value)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto"/>
      <Text style={styles.result}>{result}</Text>
      <TextInput style={styles.input} value={input} editable={false}/>
      <View style={styles.buttonContainer}>
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '=', 'C'].map((buttonValue) => (
          <TouchableOpacity key={buttonValue} style={styles.button} onPress={() => onButtonPress(buttonValue)}>
            <Text style={styles.buttonText}>{buttonValue}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  result: {
    fontSize: 24,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginBottom: 10,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    width: '20%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    margin: 5,
  },
  buttonText: {
    fontSize: 20,
  },
});