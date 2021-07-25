import React,{useState} from 'react';
import {View,ScrollView,StyleSheet,Dimensions,Button} from 'react-native'
import TextInput_Custom from '../TextInput/TextInput_Custom'
import DateTimePicker from '@react-native-community/datetimepicker';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
const screen = Dimensions.get('window');
const radio_props = [
    {label: 'Male', value: 0 },
    {label: 'Female', value: 1 }
  ];
function SignUpScreen(props) {
    const [firstName,setFirstName]=useState();
    const [lastName,setLastName]=useState();
    const [userName,setUserName]=useState();
    const [passwrod,setPassword]=useState();
    const [email,setEmail]=useState();
    const [phoneNumber,setPhoneNumber]=useState();
    const [address,setAddress]=useState();
    const [gender,setGender]=useState();
    const [dateOfBirth,setDateOfBirth]=useState();
    const [monthOfBirth,setMonthOfBirth]=useState();
    const [yearOfBirth,setYearOfBirth]=useState();
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    };
  
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
    };

    return (

       <View style={styles.container}>
           <ScrollView>

                       {/* Row 1 */}
           <View style={styles.row1}>

           <View style={styles.firstName}>
                 {/* First Name */}
                 <TextInput_Custom
                   labelValue="First Name"
                   handelTextChange={(value)=>{setFirstName(value)}}
                  />
            </View>

            <View style={styles.lastName}>
                 {/* Last Name */}
                 <TextInput_Custom
                   labelValue="Last Name"
                   handelTextChange={(value)=>{setLastName(value)}}
                  />
            </View>

           </View>
           
                          {/* Row 2 */}
            <View style={styles.row2}>

               <View style={styles.Email}>
                     {/* First Name */}
                     <TextInput_Custom
                       labelValue="Email"
                       handelTextChange={(value)=>{setFirstName(value)}}
                      />
                </View>
            </View>

                          {/* Row 3 */}
            <View style={styles.row3}>
            <View style={styles.phoneNumber}>
                {/* First Name */}
                <TextInput_Custom
                 labelValue="Mobile Number"
                 handelTextChange={(value)=>{setPhoneNumber(value)}}
                 />            
            </View>

            </View>

            {/* Row 5 */}
            <View style={styles.row5}> 

            <View style={styles.userName}>
                 {/* UserName*/}
                 <TextInput_Custom
                   labelValue="User Name"
                   handelTextChange={(value)=>{setUserName(value)}}
                  />
            </View>

            <View style={styles.passwrod}>
                 {/* Password*/}
                 <TextInput_Custom
                   labelValue="Password"
                   handelTextChange={(value)=>{setPassword(value)}}
                 />
            </View>
            
            </View>

          
            
            {/* Row 4 */}
            <View style={styles.row4}> 
                <RadioForm
                     radio_props={radio_props}
                     initial={0}
                     formHorizontal={true}
                     labelHorizontal={false}
                     buttonColor={'#2196f3'}
                     animation={true}
                     onPress={(value) => {console.log(value)}}
                />

                <View>
                    <Button onPress={showDatepicker} title="Date of birth" />
                </View>
                {/* <View>
                 <Button onPress={showTimepicker} title="Show time picker!" />
                </View> */}
                 {show && (
                 <DateTimePicker
                   testID="dateTimePicker"
                   value={date}
                   mode={mode}
                   is24Hour={true}
                   display="default"
                   onChange={onChange}
                 />
                )}


            </View>
           
           </ScrollView>

       </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    row1:{
        flexDirection:'row',
        marginTop:screen.height*0.04
    },
    firstName:{
        width:screen.width*0.5
    }
    ,
    lastName:{
        width:screen.width*0.5
    },
    row2:{
        flexDirection:'row',
        marginTop:screen.height*0.01
    },
    Email:{
        width:screen.width*1
    },
    row3:{
        flexDirection:'row',
        marginTop:screen.height*0.01
    },
    phoneNumber:{
        width:screen.width*1
    },
    row4:{
        marginTop:screen.height*0.02,
        borderWidth:0.5,
        padding:10,
        width:screen.width*0.65,
        alignItems:'center',
        marginLeft:screen.width*0.15,
        borderRadius:15,
       
    },
    row5:{
        flexDirection:'row',
        marginTop:screen.height*0.01
    }
    ,
    userName:{
        width:screen.width*0.5
    }
    ,
    passwrod:{
        width:screen.width*0.5
    },
})

export default SignUpScreen;