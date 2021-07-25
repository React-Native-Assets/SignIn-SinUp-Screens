import React from 'react';
import {View,Text,StyleSheet, Image,Dimensions,TouchableOpacity} from 'react-native'
const screen = Dimensions.get('window')
function SocialMediaIcons(props) {
    const handelFacebookIconClick=()=>{
        alert('Sining in with facebook')
    }
    const handelGoogleIconClick=()=>{
        alert('Sining in with Google')
    }
    const handelTweeterIconClick=()=>{
        alert('Sining in with Tweeter')
    }
    const handelGithubIconClick=()=>{
        alert('Sining in with github')
    }
    return (
       <View style={styles.container}>
           <TouchableOpacity onPress={handelFacebookIconClick}> 
                    <View style={styles.iconOneStyle}>
                         {/* Facebook icon 1 */}
                         <Image resizeMode='contain' style={styles.iconOneImageStyle} source={require('../IconsAndLogos/facebookIcon.png')}/>
                    </View>
           </TouchableOpacity>
           <TouchableOpacity onPress={handelGoogleIconClick}>
                    <View style={styles.iconTwoStyle}>
                         {/*  Google icon 2 */}
                         <Image resizeMode='contain' style={styles.iconTwoImageStyle} source={require('../IconsAndLogos/googleIcon.png')}/>
                    </View>
           </TouchableOpacity>
           <TouchableOpacity onPress={handelTweeterIconClick}>
                    <View style={styles.iconThreeStyle}>
                         {/*  Tweeter icon 3 */}
                         <Image resizeMode='contain' style={styles.iconThreeImageStyle} source={require('../IconsAndLogos/tweeterIcon.png')}/>
                    </View>
           </TouchableOpacity>
           <TouchableOpacity onPress={handelGithubIconClick}>
                    <View style={styles.iconFourStyle}>
                         {/*  Github icon 1 */}
                         <Image resizeMode='contain' style={styles.iconFourImageStyle} source={require('../IconsAndLogos/githubIcon.png')}/>
                    </View>
           </TouchableOpacity>
       </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center'
    }
    ,
    iconOneStyle:{
      
        borderRadius:30,
        alignItems:'center'
    },
    iconOneImageStyle:{
        width:screen.width*0.2,
        height:screen.height*0.06,
    },
    iconTwoStyle:{
        flex:1
    },
    iconTwoImageStyle:{
        width:screen.width*0.2,
        height:screen.height*0.06,
    },
    iconThreeStyle:{
        flex:1
    },
    iconThreeImageStyle:{
        width:screen.width*0.2,
        height:screen.height*0.06,
    },
    iconFourStyle:{
        flex:1
    },
    iconFourImageStyle:{
        width:screen.width*0.2,
        height:screen.height*0.06,
    },

})
export default SocialMediaIcons;