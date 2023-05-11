import React, { useCallback, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import AntDesign from "react-native-vector-icons/AntDesign";
import LikeButton from "./LikeButton";

SplashScreen.preventAutoHideAsync();

const Header = () => {
  {
    /*En esta constante se guardan las tipografias*/
  }
  const [fontsLoaded] = useFonts({
    "Lobster-Regular": require("./assets/fonts/Lobster-Regular.ttf"),
  });

  {
    /* Esta funcion previene que la splashscreen, es decir la pantalla de carga, se quite */
  }
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  {
    /* Cuando terminen de cargar las fuentes, esta funcion va a ocultar la splashscreen */
  }
  const onLayout = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.initial_header}>
      <View style={styles.instagram_box} onLayout={onLayout}>
        <Text style={styles.font}>Instagram 2</Text>
      </View>
      <View style={styles.icons}>
        <LikeButton/>
        <AntDesign name="message1" color={"white"} size={25} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  initial_header: {
    paddingBottom: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  font: {
    color: "#ffffff",
    fontFamily: "Lobster-Regular",
    fontSize: 30,
  },
  instagram_box: {
    marginTop: 60,
    marginHorizontal: 20,
  },
  icons: {
    flexWrap: 'wrap', 
    alignItems: 'flex-start',
    flexDirection:'row',
    columnGap: 20,
    marginTop: 70,
    marginLeft: 340,
    position: "absolute"
  },
});

export default Header;
