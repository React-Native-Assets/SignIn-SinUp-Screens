import React from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native'
function TextInput_Custom({labelValue,handelTextChange,...restOfProperties}) {
    return (
       <View style={styles.container}>
            <TouchableOpacity>
           <View style={styles.lableContainer}>
                <Text style={styles.labelStyle}>{labelValue}</Text>
           </View>
           <View style={styles.lableInputFieldContainer}>
                <TextInput style={styles.inputField}
                onChangeText={(value)=>{
                    handelTextChange(value);
                }}
                {...restOfProperties}
                />
           </View>
            </TouchableOpacity>    
       </View>
    );
}
const styles = StyleSheet.create({
    container:{
        paddingLeft:20,
        paddingRight:20,
        
    },
    labelStyle:{
        fontSize:16
    },
    inputField:{
        flex:1,
        paddingLeft:10,
        paddingRight:10
    },
    lableContainer:{
        alignItems:'flex-start',
        justifyContent:'center',
        width:150,
        paddingBottom:5
    },
    lableInputFieldContainer:{
        width:'100%',
        height:40,
        borderColor:"black",
        borderWidth:1,
        borderRadius:20
    },

})

export default TextInput_Custom;