import { View, Text,StyleSheet} from 'react-native'
import React from 'react'

export default function Task() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Mobile App Development</Text>
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
  title:{
    fontSize:16,
    fontWeight:400,
  }
})