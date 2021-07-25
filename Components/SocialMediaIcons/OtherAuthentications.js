import React from 'react';
import {View,Text,StyleSheet, Image,Dimensions,TouchableOpacity} from 'react-native'
const screen = Dimensions.get('window')

function OtherAuthentications(props) {
    const handelFacebookIconClick=()=>{
        alert('Sining in with facebook')
    }
    return (
       <TouchableOpacity>

           <TouchableOpacity  onPress={handelFacebookIconClick}>
                    <View style={styles.iconOneStyle}>
                         {/* Facebook icon 1 */}
                         <Image resizeMode='contain' style={styles.iconOneImageStyle} source={require('../IconsAndLogos/facebookIcon.png')}/>
                    </View>
           </TouchableOpacity>
       </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    iconOneStyle:{
       
        borderRadius:30,
        alignItems:'center'
    },
    iconOneImageStyle:{
        width:screen.width*0.2,
        height:screen.height*0.06,
    },
})

export default OtherAuthentications;