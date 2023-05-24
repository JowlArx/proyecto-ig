import Header from "./Header";
import Stories from './Stories';
import Feed from './Feed'
import { SafeAreaView, StyleSheet, View } from "react-native";
import Bottom from "./Bottom";

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <Header />
      <Stories />
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
