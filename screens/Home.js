import React from 'react';
import { StyleSheet, Text, View ,Image,FlatList} from 'react-native';
import {Card,FAB} from 'react-native-paper'
const Home=({navigation})=>{
     const data=[
        {id:"1",name:"kshitij",email:"rk.jindal03@gmail.com",salary:"5 lpa",phone:"9719057015",picture:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",position:"gareeb aadmi"},
        {id:"2",name:"kshitij",email:"ra.jindal03@gmail.com",salary:"5 lpa",phone:"9719057015",picture:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",position:"gareeb aadmi"},
        {id:"3",name:"kshitij",email:"ka.jindal03@gmail.com",salary:"5 lpa",phone:"9719057015",picture:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",position:"gareeb aadmi"},
        {id:"4",name:"kshitij",email:"pa.jindal03@gmail.com",salary:"5 lpa",phone:"9719057015",picture:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",position:"gareeb aadmi"}
        
        
     ]
     const renderList = ((item)=>{
          return(
            <Card style={styles.mycard} key={item.id}
            
            onPress={()=>navigation.navigate("Profile",{item})}
            
            >
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
        <View style={{flex:1}}> 
            <FlatList
            data={data}
            renderItem={({item})=>{
                // console.log(item)
                return  renderList(item)
            }}
                keyExtractor={item=>item.id}
            />   
             <FAB 
             
             onPress={()=>navigation.navigate("Create")}
              style={styles.fab}
              small={false}
              icon="plus"
              theme={{colors:{accent:"#006aff"}}}
              //onPress={()=>console.log('Pressed')}
             
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