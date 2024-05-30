import { View, Text, StyleSheet,Image} from 'react-native'
import React from 'react'

export default function Categories() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Exercise</Text>
      <Text style={styles.task}>12 Tasks</Text>
      <Image source={require('../assets/exercise.png')} style={styles.categoryImg}/>
    </View>
  )
}


const styles = StyleSheet.create({
  card:{
    marginTop:10,
    padding:10,
    backgroundColor:'#ffffff',
    borderRadius:10,
    //alignItems:'center',
    width:170,
    height:170,
    marginBottom:20,
  },
  title:{
    fontSize:16,
    fontWeight:'bold',
  },
  task:{
    fontSize:14,
    color:'gray',
  },
  categoryImg:{
    width: 120,
    height:120,
  },

})
