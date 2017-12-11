import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ioniccons';

const PlaceDetails = props => {
  let modalContent = null;
  if (props.selectedPlace){
    modalContent=(
      <View>
        <Image source={props.selectedPlace.image} style={styles.image}/>
        <Text style={styles.name}>{props.selectedPlace.name}</Text>
      </View>
    )
  }
  return (
    <Modal visible={props.selectedPlace !==null} animationType="slide" onRequestClose={props.onModalClose}>
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <TouchableOpacity>
            <Icon size={32} name="ios-trash" color="red"/>
          </TouchableOpacity>
          <Button title="Close It" onPress={props.onModalClose}/>
        </View>
      </View>
    </Modal>
  )
}
const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  image:{
    width:"100%",
    height:200
  },
  name:{
    fontWeight:"bold",
    textAlign:'center',
    fontSize:28,
    marginBottom:5
  }
})
export default PlaceDetails;
