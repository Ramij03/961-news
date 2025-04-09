import React from "react";
import { View, ScrollView, Text, StyleSheet, Image } from "react-native";
import { COLORS, SIZES } from "../theme/theme"; // Import the theme

const tabs = ["Politics", "Business", "Sports", "Technology", "More"];

const TopTabHeader = () => {
  return (
    <View style={styles.maincontainer}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={require("../assets/images/logo1.png")}
          resizeMode="contain"
          style={{ width: 28, height: 15, marginLeft: SIZES.base }} // Use base from theme
        />
        <Text style={styles.logo}>News</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.container}
        contentContainerStyle={{ alignItems: "center", paddingHorizontal: SIZES.base }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.redDot}></View>
          <Text style={styles.liveText}>Live</Text>
        </View>

        {tabs.map((tab, index) => (
          <Text key={index} style={styles.tabText}>
            {tab}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    marginTop: SIZES.base * 6, // Adjust marginTop with theme base size for scalability
    backgroundColor: COLORS.black,
    paddingVertical: SIZES.base * 1.25, // Adjust padding with base for scalability
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    backgroundColor: COLORS.black,
    paddingVertical: SIZES.base * 1.25,
    flexDirection: "row",
  },
  logo: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: SIZES.medium, // Use medium font size from theme
    marginRight: SIZES.base * 2, // Adjust margin using base size for consistency
    marginLeft: SIZES.base, // Adjust margin using base size
  },
  tabText: {
    color: COLORS.white,
    marginRight: SIZES.base * 2, // Adjust margin using base size
    fontSize: SIZES.medium, // Use medium font size from theme
  },
  liveText: {
    color: COLORS.red,
    marginRight: SIZES.base * 2, // Adjust margin using base size
    fontSize: SIZES.medium, // Use medium font size from theme
    marginLeft: SIZES.base, // Adjust margin using base size
  },
  redDot: {
    height: SIZES.base * 1.5, // Adjust red dot size using base size
    width: SIZES.base * 1.5, // Adjust red dot size using base size
    backgroundColor: COLORS.red,
    borderRadius: 100, // Keep the circular shape
  },
});

export default TopTabHeader;
