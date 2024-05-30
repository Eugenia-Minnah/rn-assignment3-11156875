import { View, Text, StyleSheet,Image} from 'react-native'

import React from 'react'

export default function Categories({name,task,image}) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.task}>{task}</Text>
      <Image source={image} style={styles.categoryImg}/>
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
    marginRight:10,
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
    marginLeft:15,
  },

})
