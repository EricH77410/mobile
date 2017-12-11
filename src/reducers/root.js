
import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from '../actions/actionTypes';
const initialState = {
  places: [],
  selectedPlace:null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
    console.log('Add place')
      return {
        ...state,
        places: state.places.concat({
          key: Math.random(),
          name:action.placeName,
          image: {
            uri:'https://www.photo-paysage.com/albums/userpics/10001/normal_lac-paysage-montagne-pyrenees-14.jpg'
          }
        })
      };
    case DELETE_PLACE:
    console.log('Delete place')
    if (state.selectedPlace) {
      return {
        ...state,
        places: state.places.filter((place)=>{
          return place.key !== state.selectedPlace.key
        }),
        selectedPlace:null
      }
    }
    case SELECT_PLACE:
    console.log('Select place')
      return {
        ...state,
        selectedPlace: state.places.find((place)=>{
          return place.key === action.placeKey;
        })
      }
    case DESELECT_PLACE:
    console.log('deselect place')
      return {
        ...state,
        selectedPlace:null
      }
    default:
      return state;
  }
}

export default reducer
