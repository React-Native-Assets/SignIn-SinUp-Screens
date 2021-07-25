import React from 'react';
import {View,Text,StyleSheet,Dimensions,TouchableOpacity} from 'react-native'
const screen = Dimensions.get('window')
function SignInButton({userName,password}) {
    const handelSinInClickEvent = ()=>{
        alert("Username is :"+userName+" and password is  "+password)
    }
    return (
        <TouchableOpacity onPress={handelSinInClickEvent}>
            <View style={styles.sinInBtn} >
                {/* Sin in button */}
                <Text style={styles.sinInBtnText} >Sin in</Text>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
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
     }
})
export default SignInButton;