import React from 'react';
import {  StyleSheet, View} from 'react-native';
import { connect } from 'react-redux';

import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/actions/index';

import ListPlaces from './src/components/ListItem/ListPlaces';
import InputPlace from './src/components/InputPlace';
import PlaceDetails from './src/components/PlaceDetails';

class App extends React.Component {

   placeSubmit = (place) => {
     this.props.onAddPlaces(place)
  }

   onItemSelected = (key) => {
     this.props.onSelectPlace(key);
   }
   onModalClose = () => {
     this.props.onDeselectPlace();
   }

   removeItem = () => {
     this.props.onDeletePlace();
   }

  render() {
    return (
      <View style={styles.container}>
          <PlaceDetails
            selectedPlace={this.props.selectedPlace}
            onModalClose={this.onModalClose}
            onDeleteItem={this.removeItem}
          />
          <InputPlace placeSubmit={this.placeSubmit} />
          <ListPlaces
            places={this.props.places}
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

const mapStateToProps = (state) => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPlaces: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
