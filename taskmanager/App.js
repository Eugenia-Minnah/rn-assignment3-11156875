import { StyleSheet, Text, View, Image, TextInput, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import Categories from './components/Categories';
import Task from './components/Task';
import {taskInfo} from './Data/taskInfo'
import { categoryInfo } from './Data/categoryInfo';

export default function App() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.title}>
        <View>
        <Text style={styles.heading}>Hello, Devs</Text>
        <Text style={styles.subheading}>14 tasks today</Text>
        </View>
        <TouchableOpacity>
           <Image source={require('./assets/woman.png')} style={styles.profile}/>
        </TouchableOpacity>
       
      </View>
      <View style={styles.searchContainer}>
        <View>
        <Image source={require('./assets/search.png')} style={styles.searchIcon}/>
        <TextInput style={styles.searchbox} placeholder={'Search'}/>
        </View>
        <Image source={require('./assets/menu.png')} style={styles.menu}/>
      </View>

      {/*Categories*/}
      <Text style={styles.section}>Categories</Text>
      <FlatList
       data={categoryInfo}
       renderItem={({item})=> 
       <Categories name={item.name} task={item.task} image={item.image}/>}
       keyExtractor={item => item.id}
       horizontal={true}
       showsHorizontalScrollIndicator={false}
        />
      
       {/*Ongoing tasks*/}
       <Text style={styles.section}>Ongoing Tasks</Text>
       <FlatList
       data={taskInfo}
       renderItem={({item})=> 
       <Task title={item.title}/>}
       keyExtractor={item=>item.id}/>
       </ScrollView>
      
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding: 20,
    marginTop:30,
    backgroundColor:'#F7F0E8',
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
  subheading:{
    color:'black',
  },
  profile:{
    width:25,
    height:25,
    borderRadius:20,
    padding:20,
    backgroundColor:'#ffffff',
  },
  searchContainer:{
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:10,
    backgroundColor:'#f4f4f5',
    paddingHorizontal:10,
    width:320,
    borderRadius:10,
    marginBottom:15,
    
  },
  searchbox:{
    flex:1,
    paddingHorizontal:10,
    paddingVertical:10,
    fontSize:18,
    fontWeight:'semibold',
    marginLeft:15,
    bottom:6,
    position:'relative',
    
  },
  searchIcon:{
    width:20,
    height:20,
    top:25,
  },
  TextInput:{
    textcolor: 'black'

  },
  menu:{
    height:35,
    width:35,
    position:'absolute',
    marginLeft:330,
  },
  section:{
    fontSize:22,
    fontWeight:'500',
  },
  main:{
    flex:1,
  }

});
