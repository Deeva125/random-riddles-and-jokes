import { Image, StyleSheet, Platform, Button } from 'react-native';
import { useState } from 'react';
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
export default function HomeScreen() {
  async function getJoke(){
    let joke=await fetch("https://official-joke-api.appspot.com/jokes/random")
    let data= await joke.json()
    setSetup(data.setup)
    setPunchline(data.punchline)
  }
  const [setup, setSetup] = useState("")
  const [punchline, setPunchline] = useState("")
  return (
<SafeAreaView style={{backgroundColor:"#b5e2fa", flex:1, justifyContent:'space-around', padding:20
}}>
  <Text style={{color:"#023e8a", fontSize:50, fontWeight:"bold", fontFamily:"monospace"}}>Random Jokes</Text>
  <Text style={{color:"#023e8a", fontSize:30, fontFamily:"monospace"}}>{setup}</Text>
  <Text style={{color:"#023e8a", fontSize:30, fontFamily:"monospace"}}>{punchline}</Text>
  <Button title="Get Joke" onPress={getJoke}/>
</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
