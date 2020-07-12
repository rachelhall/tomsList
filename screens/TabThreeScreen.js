import * as React from "react";
import { StyleSheet, Dimensions } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

import MapFullScreen from "../components/mapFullscreen";

export default function TabTwoScreen(props) {
  return (
    <View style={styles.container}>
      <MapFullScreen navigation={props.navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  mapStyle: {
    width: Dimensions.get("window").width - 20,
    height: Dimensions.get("window").height - 20,
    justifyContent: "center",
  },
});
