import { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker, Heatmap } from 'react-native-maps';

export default function LocationScreen() {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  // Mock data for safe locations
  const safeLocations = [
    { id: 1, latitude: 37.78825, longitude: -122.4324, title: 'Police Station' },
    { id: 2, latitude: 37.78925, longitude: -122.4344, title: 'Safe House' },
    { id: 3, latitude: 37.78725, longitude: -122.4304, title: 'Volunteer Center' },
  ];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={region}
        onRegionChangeComplete={setRegion}>
        {safeLocations.map((location) => (
          <Marker
            key={location.id}
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title={location.title}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});