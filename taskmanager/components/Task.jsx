import { View, Text,StyleSheet} from 'react-native'
import React from 'react'

export default function Task({title}) {
  return (
    <View style={styles.card}>
      <Text style={styles.taskTitle}>{title}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  card:{
    marginTop:10,
    padding:35,
    backgroundColor:'#ffffff',
    borderRadius:10,
  },
  taskTitle:{
    fontSize:16,
    fontWeight:400,
  }
})