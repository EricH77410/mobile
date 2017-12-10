import React from 'react';
import {  StyleSheet, View} from 'react-native';
import ListPlaces from './src/components/ListItem/ListPlaces';
import InputPlace from './src/components/InputPlace';
import PlaceDetails from './src/components/PlaceDetails';
import Places from './src/dummy';

export default class App extends React.Component {
   state = {
     placeName:'',
     places:Places,
     selectedPlace:null
   }

   placeSubmit = (place) => {
     this.setState(prevState => {
       return {
         places: prevState.places.concat({
           key: Math.random(),
           name:place,
           image: {
             uri:'https://www.photo-paysage.com/albums/userpics/10001/normal_lac-paysage-montagne-pyrenees-14.jpg'
           }
         })
       }
     })
   }
   placeNameChange = (place) => {
     this.setState({placeName:place})
   }

   onItemSelected = (key) => {
     this.setState(prevState => {
       return {
         selectedPlace: prevState.places.find(place=> {
           return place.key === key;
         })
       }
     })
   }
   onModalClose = () => {
     this.setState({selectedPlace:null})
   }
   removeItem = () => {
     this.setState(prevState => {
       return {
         places: prevState.places.filter((place)=>{
           return place.key !== prevState.selectedPlace.key
         }),
         selectedPlace:null
       }
     })
   }

  render() {
    return (
      <View style={styles.container}>
          <PlaceDetails
            selectedPlace={this.state.selectedPlace}
            onModalClose={this.onModalClose}
            onDeleteItem={this.removeItem}
          />
          <InputPlace placeSubmit={this.placeSubmit} />
          <ListPlaces
            places={this.state.places}
            onItemSelected={this.onItemSelected}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:26,
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});
