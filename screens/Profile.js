import React from 'react';
import { StyleSheet, Text, View,Image,Linking,Platform} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {Title,Card,Button} from 'react-native-paper'
import { MaterialIcons,Entypo} from '@expo/vector-icons'

const Profile=(props)=>{



      const {_id,Name,picture,phone,salary,email,position}=props.route.params.item
    const openDial=()=>{
        if(Platform.OS==="android"){
             Linking.openURL("tel:9719057015")
        }
        else {
            Linking.openURL("telprompt:123456")
        }
    }
 return (
     <View style={styles.root}>
    <LinearGradient
       colors={["#0033ff","#6bc1ff"]}
       style={{height:"20%"}}
      />
      <View style={{alignItems:"center"}}>
        <Image
        style={{width:140,height:140,borderRadius:70,marginTop:-50}}
        source={{uri:picture}}
        />
    </View>
    <View style={{alignItems:"center",margin:15}}>
 <Title>{Name}</Title>
 <Text style={{fontSize:15}}>{position}</Text>
     </View>
     <Card  style={styles.myCard} onPress={()=>{
         Linking.openURL("mailto:rk.jindal03@gmail.com")
     }}>
        <View style={styles.cardcontent}>
        <MaterialIcons name="email" size={32} color="#006aff" />
    <Text style={styles.mytext}>{email}</Text>
        </View>

     </Card>
     <Card  style={styles.myCard} onPress={()=>openDial()}>
        <View style={styles.cardcontent}>
        <Entypo name="phone" size={32} color="#006aff" />
    <Text style={styles.mytext}>{phone}</Text>
        </View>

     </Card>
     <Card  style={styles.myCard}>
        <View style={styles.cardcontent}>
        <MaterialIcons name="attach-money" size={32} color="#006aff" />
    <Text style={styles.mytext}>{salary}</Text>
        </View>
    <View style={{flexDirection:"row",justifyContent:"space-around",padding:10}}>
          <Button 
           icon="account-edit" 
           mode="contained" 
           theme={theme}
           onPress={() => console.log('Pressed')}>
            Edit
         </Button> 
          <Button 
           icon="delete" 
           mode="contained" 
           theme={theme}
           onPress={() => console.log('Pressed')}>
                Fire Employee
        </Button> 
    </View>
 </Card>
     </View>
 )
}
const theme ={
    colors:{
        primary:"#006aff"
    }
}
const styles=StyleSheet.create({
    root:{
        flex:1
    },
    myCard:{
        margin:3
    },
    cardcontent:{
        flexDirection:"row",
        padding:8
    },
    mytext:{
        fontSize:18,
        marginTop:3,
        marginLeft:5,
    }
})
export default Profile