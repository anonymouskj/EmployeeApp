import React from 'react';
import { StyleSheet, Text, View ,Image,FlatList} from 'react-native';
import {Card,FAB} from 'react-native-paper'
const Home=()=>{
     const data=[
         {id:1,name:"kshitij",position:"gareeb aadmi"},
         {id:2,name:"Adarsh",position:"Tesla"},
         {id:3,name:"Mantavya",position:"Power grid"},
         {id:3,name:"Adarsh",position:"Tesla"},
         {id:4,name:"Adarsh",position:"Tesla"},
         {id:5,name:"Adarsh",position:"Tesla"},
         {id:6,name:"Adarsh",position:"Tesla"},
         {id:7,name:"Adarsh",position:"Tesla"},
         {id:8,name:"Devang",position:"Power Grid"},
         {id:9,name:"Abhishek",position:"Zarurat hi nhi hai isko kaam ki"},
     ]
     const renderList = ((item)=>{
          return(
            <Card style={styles.mycard} key={item.id}>
            <View style={styles.cardView}>
            <Image
                style ={{width:60,height:60,borderRadius:30}}
            source={{uri:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"}}
            />
            <View style={{marginLeft:10}}>
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.text}>{item.position}</Text>
            </View>

     </View>
        </Card>
          )
     })
    return (
        <View>
            <FlatList
            data={data}
            renderItem={({item})=>{
                // console.log(item)
                return  renderList(item)
            }}
                keyExtractor={item=>'${item.id}'}
            />   
             <FAB
             style={styles.fab}
             small={false}
             icon="plus"
             theme={{colors:{accent:"#006aff"}}}
             onPress={()=>console.log('Pressed')}
             
             /> 
        </View>
 
         
        
    )
}
const styles = ({
    mycard:{
        margin:5,
        
    },
    cardView:{
        flexDirection:"row",
        padding:6
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
      },
    text:{
        fontSize:18,
     }
})
export default Home
//export { Home}