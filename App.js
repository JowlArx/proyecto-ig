import react from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert}  from 'react-native';
import * as ImagePicker from "expo-image-picker";
import {AntDesign } from "react-native-vector-icons/AntDesign";
import { AntDesign} from "react-native-vector-icons";
import Ionicons from '@expo/vector-icons/Ionicons';
import Icon from 'ant-design/icons/lib/components/AntIcon';

const App = ( )=>{

  let openImagePickerAsync = async()=>{
    let permissionresult= await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (permissionresult.granted===false){
    alert("los permisos para acceder a la camara son requeeridos")
    return;
    }
  }
  return(
  <View  style={styles.container}>
      <Ionicons name="md-checkmark-circle" size={32} color="green" />   
   <Text style= {styles.title}>Hello word
   </Text>
   <AntDesign style={styles.container} name= "RightOutlined"  size={30} />
  
   
   <Image
   source={{uri: 'https://picsum.photos/200/200'}}
   style={styles.image}
   />
   <TouchableOpacity
   onPress={openImagePickerAsync}
   style={styles.button}
   >
    <Text style={styles.buttontext} >Tocame</Text>
   </TouchableOpacity>
   </View> 
  );
};
const styles = StyleSheet.create({
  container:{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#292929"},
  title : {fontSize: 30, color:"#dc143c"},
  image:{height:200, width:200, borderRadius:100},
  button:{backgroundColor:"red", padding: 7, marginTop: 10 }, 
  buttontext: {color:  "blue"
},
});

export default App;
