import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

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
          <Button title="Delete" color="red" onPress={props.onDeleteItem}/>
          <Button title="Close" onPress={props.onModalClose}/>
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
