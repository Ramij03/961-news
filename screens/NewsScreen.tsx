import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TopTabHeader from "../components/TopTabBar";
import { COLORS, SIZES } from "../theme/theme"; // Import the theme

const NewsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <TopTabHeader />
      <View style={styles.content}>
        <Text style={styles.text}>News</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: COLORS.lightgray, 
    alignItems: "center",
    justifyContent: "center",
    padding: SIZES.padding, 
  },
  text: {
    fontSize: SIZES.xxLarge, 
    fontWeight: "bold",
    color: COLORS.black, 
  },
});

export default NewsScreen;
