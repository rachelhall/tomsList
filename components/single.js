import React, { useState, useEffect } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";

import AsyncStorage from "@react-native-community/async-storage";

import { Text, View } from "../components/Themed";

// components
import Map from "./map";
import Details from "./details";

const Single = ({ route, navigation }) => {
  const [favorites, setFavorites] = useState([]);
  const { item } = route.params;

  _storeData = async () => {
    try {
      await AsyncStorage.setItem("@FavoriteHouses", item);
    } catch (error) {
      // Error saving data
    }
  };

  const ListingImage = ({ item }) => {
    return (
      <Image
        source={{ uri: `${item.MediaURL}` }}
        style={styles.image}
        key={item.ListingKey}
      />
    );
  };

  const renderGallery = ({ item }) => <ListingImage item={item} />;

  return (
    <ScrollView style={styles.listing}>
      <FlatList
        data={item.Media}
        renderItem={renderGallery}
        keyExtractor={(item) => item.MediaObjectID}
        horizontal={true}
        snapToAlignment={"start"}
        snapToInterval={Dimensions.get("window").width}
        decelerationRate={"fast"}
        pagingEnabled
      />
      <View style={styles.row}>
        <View>
          <Text style={styles.bold}>${item.ListPrice}</Text>
          <Text style={styles.grayText}>Price</Text>
        </View>
        <View>
          <Text style={styles.bold}>{item.BedroomsTotal}</Text>
          <Text style={styles.grayText}>Bedrooms</Text>
        </View>
        <View>
          <Text style={styles.bold}>{item.BathroomsFull}</Text>
          <Text style={styles.grayText}>Baths</Text>
        </View>
        <View>
          <Text style={styles.bold}>{item.LivingArea}</Text>
          <Text style={styles.grayText}>Sq. Ft.</Text>
        </View>
      </View>
      <View style={styles.street}>
        <Text style={styles.headingSm}>{item.StreetNumber} </Text>
        <Text style={styles.headingSm}>{item.StreetName}</Text>
      </View>
      <View style={styles.cityState}>
        <Text style={styles.textStyle}>{item.City}, </Text>
        <Text style={styles.textStyle}>{item.StateOrProvince} </Text>
        <Text style={styles.textStyle}>{item.PostalCode}</Text>
      </View>
      <Text
        style={{
          borderBottomColor: "#222",
          borderBottomWidth: 2,
          marginTop: 20,
          marginBottom: 40,
          color: "#999",
        }}
      >
        Listing provided by Harbin Houses, Inc. ®{" "}
      </Text>
      <TouchableOpacity
        style={styles.iconsContainer}
        onPress={() => {
          setFavorites(item);
        }}
      >
        <Text> ♥️</Text>
        <Text>Add to Favorite</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Map", { item: item })}
      >
        <View style={styles.mapContainer}>
          <Map latitude={item.Latitude} longitude={item.Longitude} />
        </View>
      </TouchableOpacity>
      <Details item={item} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
  },
  image: {
    resizeMode: "cover",
    justifyContent: "center",
    marginVertical: 8,
    justifyContent: "flex-end",
    width: Dimensions.get("window").width,
    height: 200,
  },
  listing: {
    padding: 10,
  },
  street: {
    flexDirection: "row",
    marginBottom: 5,
  },
  cityState: {
    flexDirection: "row",
  },
  headingLg: {
    textTransform: "uppercase",
    fontWeight: "600",
    fontSize: 32,
  },
  headingSm: {
    textTransform: "uppercase",
    fontWeight: "600",
  },
  textStyle: {
    textTransform: "uppercase",
  },
  bold: {
    fontWeight: "800",
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  iconsContainer: {
    marginVertical: 20,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: "#999",
    borderBottomWidth: 1,
    borderBottomColor: "#999",
    justifyContent: "center",
    alignItems: "center",
  },
  mapContainer: {
    alignItems: "center",
  },
  grayText: {
    color: "#666",
  },
});

export default Single;
