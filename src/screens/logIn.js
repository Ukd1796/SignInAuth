import React from "react";
import {View,Text,StyleSheet,TextInput,Button,Image,TouchableOpacity} from 'react-native';
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import AntDesign from "@expo/vector-icons/AntDesign"
const styles = StyleSheet.create({

    upperContainer:{
        backgroundColor:'#ffed59',
        height:250,
        width:395,
    },
    signInText:{
        fontSize:30,
        marginTop:50,
        textAlign:"center",
        color:'#000000',
    },
    facebookIcon:{
        marginTop:50,
        marginLeft:20,
        color:'#3b5998',

    },
    googleIcon:{
          
        marginLeft:300,
        marginTop:-70,

       

    },
    githubIcon:{
    
        color:'#161614',
        marginLeft:160,
        marginTop:-75,
    }

})


const LogIn = ()=>{
   return( <View style= {styles.upperContainer}>
   <Text style = {styles.signInText}>Sign-In Through</Text>
   <MaterialIcons name="facebook" size={80} style={styles.facebookIcon}></MaterialIcons>
   <AntDesign name="google" size={70} style={styles.googleIcon}></AntDesign>
   <AntDesign name="github" size ={70} style={styles.githubIcon}></AntDesign>
    </View>
   );
}

export default LogIn;