import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MyMap = ({ location }) => {
  const [coordinates, setCoordinates] = React.useState(null);

  React.useEffect(() => {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=YOUR_API_KEY`
    )
      .then((response) => response.json())
      .then((data) => {
        const { lat, lng } = data.results[0].geometry.location;
        setCoordinates({ latitude: lat, longitude: lng });
      });
  }, []);

  return (
    <View style={styles.container}>
      {coordinates && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker coordinate={coordinates} title={location} />
        </MapView>
      )}
    </View>
  );
  const styles = StyleSheet.create({
    container: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      height: 400,
      width: 400,
      justifyContent: "flex-end",
      alignItems: "center",
    },
    map: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
  });
};
export default MyMap;
