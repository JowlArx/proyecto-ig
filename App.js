import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Stories from "./Stories";
import Constants from "expo-constants"
export default function App() {
  return (
    <View style={styles.container}>
    <Stories/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
});
