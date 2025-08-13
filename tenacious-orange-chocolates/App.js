import React from 'react';
import{View, Text, StyleSheet, Image} from 'react-native'

const App = () => {

return(
<View style={styles.content}>
<Text style={{fontSize: '50', color: 'orange'}}>Hello World!</Text>
  <Image style = {style.tinyLogo} source{require('./src/img/pensador.png)}/>
</View>
);

}

const styles = StyleSheet.create({
  content:{
    flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow'
  }
  
  tinyLogo:{
   flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow'
  }
})

export default App;
