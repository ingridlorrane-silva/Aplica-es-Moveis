import React from 'react';
import{View, Text, StyleSheet} from 'react-native'

const App = () => {

return(
<View style={styles.content}>
<Text style={{fontSize: '50', color: 'orange'}}>Hello World!</Text>
</View>
);

}

const styles = StyleSheet.create({
  content:{
    flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow'
  }
})
export default App;