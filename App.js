import React, { useState } from "react";
import { Text, View, StyleSheet, Image, Button, Alert, TouchableOpacity, Platform, } from 'react-native';
import Nashe from './assets/nashe.png';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import uploadAnonymousFilesAsync from "anonymous-files";

const App = () => {


  const [SelectedImg, SetSelectedImg] = useState(null)

  const openShareDialog = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert("No podes compartir en esta plataforma");
      return;
    }

    await Sharing.shareAsync(SelectedImg.localUri);

  }

  let OpenImagePicker = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (permissionResult.granted === false) {
      alert('necesitamos permisos para acceder a la galeria');
      return;
    }
    const PickerResult = await ImagePicker.launchImageLibraryAsync()
    console.log(PickerResult)
    if (PickerResult.canceled === true) {
      return;
    }


    if (Platform.OS === "web") {
      let remoteUri = await uploadAnonymousFilesAsync(PickerResult.uri);
      setSelectedImage({ localUri: PickerResult.uri, remoteUri });
    } else {
      setSelectedImage({ localUri: PickerResult.uri });
    }
  }
  return (
    <View style={styles.ViewHello}>
      <Text>Hello World</Text>
      <Image
        source={Nashe}
        style={styles.Image}
      />
      <TouchableOpacity onPress={OpenImagePicker}>
        <Image
          source={{
            uri: SelectedImg !== null
              ? SelectedImg.localUri
              : "https://picsum.photos/200/2020",
          }}
          style={styles.Imagenashe}
        />
      </TouchableOpacity>

      <Button
        color="black"
        title="botonaso"
        onPress={() => console.log('Helow')}
      />
      <Text>separao por botonaso</Text>
      <Button
        color="black"
        title="botonaso con alerta"
        onPress={() => Alert.alert('Helow')}
      />
      <Text>separao por botonasoide</Text>

      <TouchableOpacity onPress={() => Alert.alert('Holaaaa')} style={styles.Botonasoide}>
        <Text style={styles.Botonasoidetxt}>botonasoide</Text>
      </TouchableOpacity>
      <Text>Otro botonaso</Text>

      {
        SelectedImg ? (
          <TouchableOpacity onPress={openShareDialog} style={styles.Botonasoideimg}>
            <Text style={styles.Botonasoidetxt}>botonaso pero pa compartir</Text>
          </TouchableOpacity>
          ) : (
          <View />
      )}

    </View>
  );
};

const styles = StyleSheet.create({
  ViewHello: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#757575"
  },
  Image: {
    width: 200,
    height: 200,
  },
  Imagenashe: {
    width: 300,
    height: 300,
    borderRadius: 100,

  },
  Botonasoide: {
    width: 110,
    height: 30,
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: 15,
  },
  Botonasoidetxt: {
    flex: 1,
    fontStyle: "italic",
    textAlign: "center",
    fontSize: 17,
    color: "white"
  },
  Botonasoideimg: {
    width: 230,
    height: 30,
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: 15,
  },
});

export default App;