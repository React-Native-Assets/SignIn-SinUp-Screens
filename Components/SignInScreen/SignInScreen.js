import React,{useState} from 'react';
import {View,Image,StyleSheet,StatusBar,Dimensions,Text, TouchableOpacity,ScrollView} from 'react-native';
import TextInput_Custom from '../TextInput/TextInput_Custom';
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons';
import SinInButton from './SignInButton';
const screen = Dimensions.get('window')

function SignInScreen({navigation}) {
  
    const[userName,setUserName]=useState('')
    const[password,setPassword]=useState('')

    const handelSinUpClickEvent = ()=>{
        navigation.push('Creat New Account')
    }

    return (
        <ScrollView>
       <View style={styles.container}>

            <StatusBar barStyle="light-content" />
            <View style={styles.logoContainer}>
            <Image  
                source={require('../IconsAndLogos/logo.png')}
                style={styles.logoImage}
                resizeMode='contain'
            /> 
            </View>
            <View style={styles.titleStyle}>
                    <Text style={styles.titleTextStyle}>Sin In</Text>
            </View>
            <View style={styles.inputContainer}> 
                  <TextInput_Custom
                   labelValue="User Name"
                   handelTextChange={(value)=>{setUserName(value)}}
                  />
                  <TextInput_Custom
                  labelValue="Password"
                  handelTextChange={(value)=>{setPassword(value)}}
                  secureTextEntry={true}
                />
            </View>
            <View style={styles.footerStyle}>

                        {/* Sin in button */}
                    <SinInButton userName={userName} password={password}/>
                    <TouchableOpacity onPress={handelSinUpClickEvent}>
                        <View style={styles.sinUpBtn}>
                            {/* Sin in button */}
                            <Text style={styles.sinUpBtnText}>Create New Account</Text>
                        </View>
                    </TouchableOpacity>
                    
                    <Text style={styles.sinupTextStyle}>Or continue with</Text>
                    {/* Social Media Icons */}
                    <View style={styles.socialMediaIconContainer}>
                       <SocialMediaIcons/>
                    </View>
                   
            </View>
       </View>
       </ScrollView>
    );
}

// ------------------ STYLES ----------------

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        height:screen.height,
        width:screen.width
    },
    logoImage:{
        width:screen.width*0.60,
        height:screen.height*0.30,
    },
    logoContainer:{
        alignItems:'center',
    },
    inputContainer:{
        
    },
    titleStyle:{
        paddingLeft:10
    },
    titleTextStyle:{
        fontSize:25,
        fontWeight:'bold',
        paddingBottom:15
    },
    sinupTextStyle:{
        fontSize:12,
        color:'blue',
        marginTop:screen.height*0.02
    },
    footerStyle:{
        paddingTop:10,
        alignItems:'center'
    }
    ,
    sinInBtn:{
       backgroundColor:"blue",
       width:screen.width*0.35,
       height:screen.height*0.06,
       borderRadius:18,
       justifyContent:'center',
       alignItems:'center',
       marginTop:screen.height*0.02  
    },
    sinInBtnText:{
        fontSize:17,
        color:"white"
    },
    sinUpBtn:{
        width:screen.width*0.4,
        borderRadius:18,
        justifyContent:'center',
        alignItems:'center',
        marginTop:screen.height*0.02  
    },
    sinUpBtnText:{
        fontSize:13,
        color:"black",
        textDecorationLine: 'underline'
    },
    socialMediaIconContainer:{
      flexDirection:'row',
      marginTop:10,
      width:'70%'
    }
})
export default SignInScreen;