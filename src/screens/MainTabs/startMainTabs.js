import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons'
const startTabs = () => {
// Get the icons specific way
  Promise.all([
    Icon.getImageSource("md-map", 30),
    Icon.getImageSource("ios-share-alt", 30)
  ]).then(icons => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: 'awesome-places.FindPlaceScreen',
          label:'Find Place',
          title: 'Find Place',
          icon: icons[0]
        },
        {
          screen: 'awesome-places.SharePlaceScreen',
          label:'Share Place',
          title: 'Share Place',
          icon: icons[1]
        }
      ]
    })
  });
}

export default startTabs
