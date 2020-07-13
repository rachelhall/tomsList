import React, { useState, useEffect } from "react";
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Dimensions,
} from "react-native";

const Favorites = ({ navigation, houses }) => {
  return (
    <FlatList
      data={houses}
      extraData={houses}
      keyExtractor={(item) =>
        item.ListingId + item.ListingKey + item.PreviousListPrice
      }
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
    width: Dimensions.get("window").width - 16,
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

export default Favorites;
