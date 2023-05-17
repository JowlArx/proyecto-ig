import React from "react";
import {
  
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";

const App = () => {
  return (
    <View style={styles.container}>
    <View style={styles.icons}>
     
      
    <Ionicons name="home" size={30} color="white"/>
     <Ionicons name="search-outline" size={30} color="white"/>
     <Ionicons name="add-circle-outline" size={30} color="white"/>
    <Ionicons name="film-outline" size={30} color="white"/>
   
    <Ionicons name="ellipse-outline" size={32} color="white"/>



      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    flex: 1,
    
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  icons: {
    flexWrap: 'wrap', 
    alignItems: "flex-end",
    flexDirection:'row',
    columnGap: 45,
    marginTop: 100,
    
    position: "relative"
  },
  title: { fontSize: 30, color: "#dc143c" },
  image: { height: 200, width: 200, borderRadius: 100 },
  button: { backgroundColor: "red", padding: 7, marginTop: 10 },
  buttontext: { color: "blue" },
});

export default App;
