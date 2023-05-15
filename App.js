//inicio libreria
import React from 'react';
import { StyleSheet, ScrollView, View, Text, Image } from 'react-native';
import { Card } from 'react-native-elements';
//fin libreria

// start feed
function Feed() {
  return (
    <ScrollView>
      <Card>
        <View style={styles.flexcards}>
        <Image source={require('./assets/momo.png')} style={styles.imgperfeed}/>
          <Text style={styles.txtfeed}>GeroMomo</Text>
        </View>
        <Card.Divider style={{ padding: 2 }}/>
          <View style={styles.postContent}>
            <Image source={{uri: 'https://i.pinimg.com/564x/b8/99/45/b899452fc5c36e0d2fb1cc1fe780ecc2.jpg'}} style={styles.postImage} />
            <Text style={styles.postDescription}>Una imagen de pinteres</Text>
          </View>
      </Card>
      <Card>
        <View style={styles.flexcards}>
        <Image source={require('./assets/momo.png')} style={styles.imgperfeed}/>
          <Text style={styles.txtfeed}>GeroMomo</Text>
        </View>
        <Card.Divider style={{ padding: 2 }}/>
          <View style={styles.postContent}>
            <Image source={{uri: 'https://i.pinimg.com/564x/ae/87/97/ae879770271177c32ea326a6183ffc0c.jpg'}} style={styles.postImage} />
            <Text style={styles.postDescription}>Messi mi dios todo poderoso antinflacionario</Text>
          </View>
      </Card>
      <Card>
        <View style={styles.flexcards}>
        <Image source={require('./assets/momo.png')} style={styles.imgperfeed}/>
          <Text style={styles.txtfeed}>GeroMomo</Text>
        </View>
        <Card.Divider style={{ padding: 2 }}/>
          <View style={styles.postContent}>
            <Image source={{uri: 'https://i.pinimg.com/564x/20/59/27/2059274d6e757699c3be921bb99c99b3.jpg'}} style={styles.postImage} />
            <Text style={styles.postDescription}>gengar, gastly y hunter o como se escriba no se</Text>
          </View>
      </Card>
    </ScrollView>
  );
}
//end feed

//start feed styles
const styles = StyleSheet.create({
  txtfeed: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    alignItems: 'center',
    padding: 7,
  },
  flexcards: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      textAlign: 'center',
      alignContent: 'center',
    },
  postContent: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 16,
  },
  postImage: {
    alignContent: 'center',
    width: '100%',
    height: 410,
  },
  postDescription: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    alignItems: 'center',
    padding: 7,
  },
  imgperfeed: {
      width: 32,
      height: 32,
      borderRadius: 16,
    },
});
//end feed styles

//export
export default Feed;
//end export
