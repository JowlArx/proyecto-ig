import Header from "./Header";
import { SafeAreaView, StyleSheet, View } from "react-native";

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <Header />
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
