import React from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

export default class InputPlace extends React.Component{
  state = {
    placeName:''
  }
  placeNameChange = (val)=>{
    this.setState({placeName:val})
  }
  placeSubmit = () => {
    if (this.state.placeName.trim() === ""){
      return;
    }

    this.props.placeSubmit(this.state.placeName)
    this.setState({placeName:''})
  }
  render(){
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.placeInput}
          value={this.state.placeName}
          onChangeText={this.placeNameChange}
          placeholder="an awsome place"/>
        <Button
          style={styles.placeButton}
          onPress={this.placeSubmit}
          title="Add"
        />
      </View>
  )}
}

const styles = StyleSheet.create({
  inputContainer: {
    width:'100%',
    flexDirection:'row',
    justifyContent: "space-between",
    alignItems:'center'
  },
  placeInput:{
    width:'70%'
  },
  placeButton: {
    width:'30%'
  }
})
