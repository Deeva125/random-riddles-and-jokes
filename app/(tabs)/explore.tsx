import { Image, StyleSheet, Platform, Button } from 'react-native';
import { useState } from 'react';
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
export default function HomeScreen() {
  async function getRiddle(){
    let riddle=await fetch("https://riddles-api.vercel.app/random")
    let data= await riddle.json()
    setRiddle(data.riddle)
    setAnswer(data.answer)
  }
  const [riddle, setRiddle] = useState("")
  const [answer, setAnswer] = useState("")
  return (
<SafeAreaView style={{backgroundColor:"#b5e2fa", flex:1, justifyContent:'space-around', padding:20
}}>
  <Text style={{color:"#023e8a", fontSize:50, fontWeight:"bold", fontFamily:"monospace"}}>Random Riddles</Text>
  <Text style={{color:"#023e8a", fontSize:30, fontFamily:"monospace"}}>{riddle}</Text>
  <Text style={{color:"#023e8a", fontSize:30, fontFamily:"monospace"}}>{answer}</Text>
  <Button title="Get Riddle" onPress={getRiddle}/>
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
