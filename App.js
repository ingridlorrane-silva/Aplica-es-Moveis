import React from 'react';
import{View, Text, StyleSheet,Image} from 'react-native'

const App = () => {
  const nome= "Paulo";
  const idade = 40;

return(
<View style={styles.content}>
<Text style={{fontSize: '50', color: 'orange'}}>Aplicações!</Text>
<Text> Seja Bem vindo {nome}. Sua idade é {idade}</Text>
<Image style = {style.tinyLogo} source={require('./src/img/pensador.jpg')}/>
</View>
);

}

const styles = StyleSheet.create({
  content:{
    flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow'
  }
})

const style = StyleSheet.create({
  tinyLogo:{
   width: 250, height: 250, backgroundColor: 'red'}
  })

export default App;