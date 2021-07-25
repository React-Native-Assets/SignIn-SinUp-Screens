import React from 'react';
import { View,StyleSheet,TouchableOpacity,Dimensions ,Text, DeviceEventEmitter} from 'react-native';
const screen = Dimensions.get('window')
function SignUpButton(props) {

    const handelCreateAccountClickEvent = ()=>{
        alert("Replace it with your api code")
    }

    return (
        <TouchableOpacity onPress={handelCreateAccountClickEvent}>
             <View style={styles.sinUpButton}><Text style={styles.sinUpBtnText}>Create Account</Text></View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    sinUpButton:{
        backgroundColor:"blue",
        width:screen.width*0.45,
        height:screen.height*0.06,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center'
      } ,
      sinUpBtnText:{
          fontSize:14,
          color:'white',
      }
})
export default SignUpButton;