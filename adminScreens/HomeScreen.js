import React from 'react'
import { StyleSheet, Text, View,ImageBackground,TouchableOpacity,Button } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';
import meshBg from "../assets/mesh-bg.png";
import {FontAwesome5} from "@expo/vector-icons"; 

const HomeScreen = (props) => {
    return (
        <ImageBackground source={meshBg} style={globalStyles.backgroundImage}>
        <View style={{...globalStyles.container}}>
          <View style={{width:"100%",height:"100%",alignItems:"center",justifyContent:"center"}}>
              <View>
        <TouchableOpacity onPress={()=>props.navigation.navigate("homeScreen")} style={{backgroundColor:"rgba(242,145,152,1)",height:40,width:180,alignItems:"center",justifyContent:"center",borderRadius:15,elevation:6,marginVertical:10}} >
              <Text style={{fontWeight:"bold"}} >Back to home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>props.navigation.navigate("adminPriScreen")} style={{backgroundColor:"rgba(242,145,152,1)",height:40,width:180,alignItems:"center",justifyContent:"center",borderRadius:15,elevation:6,marginVertical:10}} >
              <Text style={{fontWeight:"bold"}} >Pricing</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>props.navigation.navigate("usersScreen")}  style={{backgroundColor:"rgba(242,145,152,1)",height:40,width:180,alignItems:"center",justifyContent:"center",borderRadius:15,elevation:6,marginVertical:10}} >
              <Text style={{fontWeight:"bold"}} >Users</Text>
          </TouchableOpacity>
              </View>
          </View>
          </View>
        </ImageBackground>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
