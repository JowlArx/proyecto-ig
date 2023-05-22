import Header from "./Header";
import Feed from './Feed'
import { SafeAreaView, StyleSheet, View } from "react-native";
import Bottom from "./Bottom";

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <Header />
      <Feed></Feed>
      <Bottom/>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fondo:{
    flex: 1,
    backgroundColor: `#121212`
  }
})


export default App;
