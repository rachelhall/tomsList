import React, { useState, useEffect } from "react";
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import NumberFormat from "react-number-format";
// import { Text, View } from "../components/Themed";

const Feed = ({ navigation, favorites, setFavorites }) => {
  const [houses, setHouses] = useState();

  useEffect(() => {
    fetchHouseData();
  }, []);

  const access_token = `aa22b49503c2931f1d963774210d0155`;
  const fetchHouseData = async (query) => {
    const res = await fetch(
      `https://api.bridgedataoutput.com/api/v2/OData/test/Property?access_token=${access_token}`,
      {
        method: "GET",
      }
    );
    const data = await res.json();
    const allHouses = data.value;

    setHouses(allHouses);
  };
  return (
    <FlatList
      data={houses}
      keyExtractor={(item) => item.ListingId}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Single", {
              item: item,
            })
          }
        >
          <ImageBackground
            source={{ uri: item.Media[0].MediaURL }}
            style={styles.backgroundImage}
            key={item.ListingKey}
          >
            <View style={styles.listing}>
              <Text style={styles.price}>${item.ListPrice}</Text>
              <View style={styles.street}>
                <Text style={styles.headingSm}>{item.StreetNumber} </Text>
                <Text style={styles.headingSm}>{item.StreetName}</Text>
              </View>
              <View style={styles.cityState}>
                <Text style={styles.textStyle}>{item.City}, </Text>
                <Text style={styles.textStyle}>{item.StateOrProvince}</Text>
              </View>
              <Text style={styles.textStyle}>{item.PostalCode}</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      )}
    />
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
  backgroundImage: {
    resizeMode: "cover",
    justifyContent: "center",
    marginVertical: 8,
    justifyContent: "flex-end",
    height: 200,
    width: 300,
  },
  listing: {
    padding: 10,
    flex: 1,
    backgroundColor: '"rgba(66, 66, 66, 0.5)"',
    justifyContent: "flex-end",
  },
  street: {
    flexDirection: "row",
    marginBottom: 5,
    color: "white",
  },
  cityState: {
    flexDirection: "row",
  },
  headingSm: {
    color: "white",
    textTransform: "uppercase",
    fontWeight: "600",
  },
  textStyle: {
    color: "white",
    textTransform: "uppercase",
  },
  price: {
    color: "white",
    fontWeight: "800",
    fontSize: 20,
  },
});

export default Feed;
