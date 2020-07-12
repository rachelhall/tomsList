import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

import Flag from "./flag";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

const Map = ({ latitude, longitude }) => {
  console.log(latitude);
  return (
    <View>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude,
          }}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width - 20,
    height: 200,
    justifyContent: "center",
  },
});
export default Map;
