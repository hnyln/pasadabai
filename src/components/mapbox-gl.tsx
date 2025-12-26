import * as React from 'react';
import { Text, View, ViewProps } from 'react-native';
import Constants from 'expo-constants';

let MapView: React.FC<ViewProps>;
let MapboxGL: any;

if (Constants.appOwnership === 'expo') {
  MapView = (props) => (
    <View
      style={[
        {
          backgroundColor: 'lightblue',
          alignItems: 'center',
          justifyContent: 'center',
        },
        props.style,
      ]}
    >
      <Text>🗺 (Mapbox not available)</Text>
    </View>
  );
} else {
  const Mapbox = require('@react-native-mapbox-gl/maps').default;
  Mapbox.setAccessToken(
    'pk.eyJ1IjoiZGV4dHJvMSIsImEiOiJjbWNuZmk2dDUwcThqMnFzZHBlem5ka2FhIn0.R1U8OBi1G3u86iudwWEP_w'
  );
  MapboxGL = Mapbox;
  MapView = Mapbox.MapView;
}

export { MapView };
export default MapboxGL;