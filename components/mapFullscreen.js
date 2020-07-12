import React from "react";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

const MapFullScreen = ({ navigation }) => {
  const [houses, setHouses] = useState();
  const getData = async () => {
    try {
      const JSONdata = await AsyncStorage.getItem("@allHouses");
      const allHouses = JSON.parse(JSONdata);
      setHouses(allHouses);
      console.log({ allHouses });
    } catch (e) {
      // error reading value
      console.log(e);
    }
  };

  useEffect(() => {
    getData(setHouses);
    console.log({ houses });
  }, []);

  return (
    <View>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: 34,
          longitude: -118,
          latitudeDelta: 5,
          longitudeDelta: 5,
        }}
      >
        {houses &&
          houses.map((house) => (
            <Marker
              key={house.ListingKey}
              coordinate={{
                latitude: house.Latitude,
                longitude: house.Longitude,
              }}
              onPress={() =>
                navigation.navigate("Single", {
                  item: house,
                })
              }
            />
          ))}
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
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 50,
    justifyContent: "center",
  },
});
export default MapFullScreen;
