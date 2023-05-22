
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';


const stori = [
  {
    id: "1",
    uri:"https://cloudfront-us-east-1.images.arcpublishing.com/infobae/TCQNKZUNYFCHVCVAU4U4ZYSRNA.jpg"
  },
  {
    id:"2",
    uri: "https://okdiario.com/img/2022/10/18/los-gatos-pueden-ver-en-color-1-655x368.jpg"
  },
  {
    id:"3",
    uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3u1gl1kZXm9XHcTaMJ1vHlyZgGuhilYPgtXqu3g6PbQakh0ksJMfk6oF-zFopGh4Utpw&usqp=CAU"
  },
  {
    id:"4",
    uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKVOfYLWFou90u9Dasu4ZONx65rNfXULLmX4b8ls9RQwbeQadjdLQQJEFuemo-RMo--DM&usqp=CAU"
  },
  {
    id:"5",
    uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6VNtMEdZullcihq9xgwFZ8oeTWE_xm_x3XA&usqp=CAU"
  },
  {
    id:"6",
    uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfn-rAzyCXgBufsFD3tgP8MDsW9W3wKQY1IgfhzV-DPgo8f9caU6FKs7eoVwA4vQOOz04&usqp=CAU"
  }
]
const storiM =[
  {
    id: "1",
    uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnQdxvZdMY8K-aENOSgegrxccNOSmKIHflyyAUPhZQCeJ_q77TOti1weAmhDjrkn9zVw8&usqp=CAU"
  },
  {
    id:"2",
    uri: "https://img.a.transfermarkt.technology/portrait/big/45320-1663576797.jpg?lm=1"
  },
  {
    id:"3",
    uri:"https://media.tycsports.com/files/2021/10/21/348867/julian-alvarez-river_1440x810_wmk.jpg"
  },
]


const Stories = () => {
  return (

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container}>
        <View style={styles.StoriContainer}>
          <View style={{position:"relative"}}>
          <ProfileHead uri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZvbTdQOuonUuMAe3CrCvM3IuPEO_RAsAXiw&usqp=CAU"/>
             <View style={{
               position:"absolute",
               bottom:2,
               right:10,
               backgroundColor:"#00A6FF",
               borderRadius: 20,
              padding: 1,
              borderColor:"black",
              borderWidth:2,
              alignItems:"center",
              justifyContent:"center"
          }}>
          <Entypo name="plus" size={14}  color="white"/>
          </View>
          </View>
          {storiM.map(({ id, uri })=> (
         <ProfileHeadM key={id} uri={uri}/> ))}
         {stori.map(({ id, uri })=> (
         <ProfileHead key={id} uri={uri}/> ))}
        </View>
      </ScrollView>

      
  )
};

const ProfileHead = ({uri}) => {
  return <View style={styles.storyProfile}>
  <Image source={{
    uri,
  }}
    style={styles.storyImagen} />
    </View>
}
const ProfileHeadM = ({uri}) => {
  return <View style={styles.storyProfileM}>
  <Image source={{
    uri,
  }}
    style={styles.storyImagen}/>
    </View>
}
const styles = StyleSheet.create({
  StoriContainer:{
    flexDirection:"row",
    backgroundColor:"black",
    borderWidth:12,
   
    

  },
  storyProfile: {
    width: 80,
    height: 80,
    borderRadius: 80/2,
    borderWidth:3,
    borderColor:"#F07616",
    marginRight:10,
    alignItems:"center",
    justifyContent:"center"
  },
  storyProfileM: {
    width: 80,
    height: 80,
    borderRadius: 80/2,
    borderWidth:3,
    borderColor:"#4FD717",
    marginRight:10,
    alignItems:"center",
    justifyContent:"center"
  },
  storyImagen:{
    width:"96%",
    height:"96%",
    borderRadius: 80/2,
  },
  container: {
    
  },
})

export default Stories;