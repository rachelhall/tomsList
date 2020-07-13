import * as React from "react";
import { StyleSheet } from "react-native";
import { useState, useCallback } from "react";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import Favorites from "../components/favorites";
import AsyncStorage from "@react-native-community/async-storage";
import { useFocusEffect } from "@react-navigation/native";
export default function TabTwoScreen(props) {
  const [houses, setHouses] = useState([]);

  useFocusEffect(
    useCallback(() => {
      console.log(`tab 2`);
      getData();
    }, [])
  );

  const getData = async () => {
    console.log(`tab 2 screen get data runs`);
    try {
      const JSONdata = await AsyncStorage.getItem("@favoriteHouses");
      const allHouses = JSON.parse(JSONdata);
      console.log({ allHouses });
      setHouses([...allHouses]);
      console.log({ houses });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={styles.container}>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Favorites navigation={props.navigation} houses={houses} />
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
});
