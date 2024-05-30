import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import Categories from './components/Categories';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <View>
        <Text style={styles.heading}>Hello Devs,</Text>
        <Text style={styles.subheading}>14 Tasks</Text>
        </View>
        <Image source={require('./assets/user.png')} style={styles.profile}/>
      </View>
      <View style={styles.searchContainer}>
        <Image source={require('./assets/search.png')} style={styles.searchIcon}/>
        <TextInput style={styles.searchbox} placeholder='Search'/>
      </View>

      {/*Categories*/}
      <Text style={styles.section}>Categories</Text>
      <Categories/>
       {/*Ongoing tasks*/}
       <Text style={styles.section}>Ongoing Tasks</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding: 10,
    marginTop:30,
    backgroundColor:'#f0f78f'
  },
  title:{
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center',
    marginBottom:20,
  },
  heading:{
    fontSize:20,
    fontWeight:'bold',
  },
  profile:{
    width:30,
    height:40,
  },
  searchContainer:{
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:10,
    backgroundColor:'#f4f4f5',
    paddingHorizontal:10,
    width:320,
    borderRadius:10,
    backgroundColor:'#ffffff',
    marginBottom:15,
  },
  searchbox:{
    flex:1,
    paddingHorizontal:10,
    paddingVertical:10,
    fontSize:18,
    fontWeight:'semibold',
  },
  searchIcon:{
    width:20,
    height:20,
  },
  section:{
    fontSize:22,
    fontWeight:'500',
  },

});
