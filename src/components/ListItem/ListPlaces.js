import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ListItem from './ListItem';

const ListPlaces = (props) => {
  return (
    <FlatList style={styles.listContainer}
      data={props.places}
      renderItem={(place)=>(
        <ListItem
         placeName={place.item.name}
         placeImage={place.item.image}
         onItemPressed={()=>props.onItemSelected(place.item.key)}
         />)}
    />
  )
}

const styles = StyleSheet.create({
  listContainer: {
    width:"100%"
  }
})

export default ListPlaces;
