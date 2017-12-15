import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
// UI
import DefaulInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';

import startMainTabs from '../MainTabs/startMainTabs';

class AuthScreen extends Component {
  loginHandler = () => {
    startMainTabs();
  }
  render(){
    return(
      <View style={styles.container}>
        <MainText>
          <HeadingText style={styles.textHeading}>Please Log In</HeadingText>
        </MainText>
        <Button title="Switch to Login" onPress={()=>alert('press')}/>
        <View style={styles.inputContainer}>
          <DefaulInput placeholder="Email address" style={styles.input}/>
          <DefaulInput placeholder="Password" style={styles.input}/>
          <DefaulInput placeholder="Confirm Password" style={styles.input}/>
        </View>

        <Button title="Submit" onPress={this.loginHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  inputContainer: {
    width:"80%"
  },
  input: {
    backgroundColor:"#eee",
    borderColor:"#bbb"
  },
  textHeading:{
    marginBottom:25
  }
})

export default AuthScreen;
