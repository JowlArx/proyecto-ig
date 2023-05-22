import React from "react";
import { View, StyleSheet } from "react-native";
import Octicons from "react-native-vector-icons/Octicons";

const Bottom = () => {
  return (
    <View style={styles.container}>
      <View style={styles.icons}>
        <Octicons name="home" size={23} color="white" />
        <Octicons name="search" size={23} color="white" />
        <Octicons name="diff-added" size={23} color="white" />
        <Octicons name="play" size={23} color="white" />
        <Octicons name="person" size={23} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "black",
  },
  icons: {
    alignContent:"center",
    flexDirection: "row",
    columnGap: 60,
    marginTop: 12,
    position: "absolute",
  }
});

export default Bottom;
