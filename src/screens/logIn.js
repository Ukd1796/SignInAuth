import React,{useState} from "react";
import {View,Text,StyleSheet,TextInput,Button,Image,TouchableOpacity,Pressable} from 'react-native';
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import AntDesign from "@expo/vector-icons/AntDesign"
import * as Facebook from 'expo-facebook';
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

    
    async function facebookLogIn() {
        try {
          await Facebook.initializeAsync({
            appId: '1917027175149292',
          });
          const { type, token, expirationDate, permissions, declinedPermissions } =
            await Facebook.logInWithReadPermissionsAsync({
              permissions: ['public_profile'],
            });
          if (type === 'success') {
            // Get the user's name using Facebook's Graph API
            const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
            Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
          } else {
            // type === 'cancel'
          }
        } catch ({ message }) {
          alert(`Facebook Login Error: ${message}`);
        }
      }

   return( <View style= {styles.upperContainer}>
   <Text style = {styles.signInText}>Sign-In Through</Text>
   <Pressable><MaterialIcons onPress={facebookLogIn} name="facebook" size={80} style={styles.facebookIcon}></MaterialIcons></Pressable>
   <Pressable><AntDesign name="google" size={70} style={styles.googleIcon}></AntDesign></Pressable>
   <Pressable><AntDesign name="github" size ={70} style={styles.githubIcon}></AntDesign></Pressable>
    </View>
   );
   }

export default LogIn;