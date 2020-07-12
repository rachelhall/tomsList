import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";

const Details = ({ item }) => {
  const pricePerSqFt = (
    parseFloat(item.ListPrice) / parseFloat(item.LivingArea)
  ).toFixed(0);
  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.headingLg}>Key Details</Text>
      <Text style={styles.headingMd}>Price Insights</Text>
      <View style={styles.detailsGrid}>
        <View style={styles.columnLeft}>
          <Text style={styles.categoryText}>List Price</Text>
          <Text style={styles.categoryText}>Price/Sq. Ft.</Text>
        </View>
        <View style={styles.columnRight}>
          <Text style={styles.bold}>${item.ListPrice}</Text>
          <Text style={styles.bold}>${pricePerSqFt}</Text>
        </View>
      </View>
      <Text style={styles.headingMd}>Home Facts</Text>
      <View style={styles.detailsGrid}>
        <View style={styles.columnLeft}>
          <Text style={styles.categoryText}>Lot Size</Text>
          <Text style={styles.categoryText}>Year Built</Text>
          <Text style={styles.categoryText}>List Price</Text>
        </View>
        <View style={styles.columnRight}>
          <Text style={styles.bold}>{item.LotSizeSquareFeet}</Text>
          <Text style={styles.bold}>${item.YearBuilt}</Text>
        </View>
      </View>
      <View style={styles.about}>
        <Text style={styles.headingLg}>About This Home</Text>
        <Text>${item.PublicRemarks}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    marginTop: 40,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: "#999",
  },
  detailsGrid: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-start",
    marginVertical: 24,
  },
  columnLeft: {
    flex: 3,
  },
  columnRight: {
    flex: 5,
  },
  about: {
    marginTop: 24,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: "#999",
  },
  headingLg: {
    fontWeight: "700",
    fontSize: 24,
    marginBottom: 16,
  },
  headingMd: {
    fontWeight: "600",
    fontSize: 16,
  },
  headingSm: {
    fontWeight: "800",
  },
  categoryText: {
    color: "#666",
  },
});
export default Details;
