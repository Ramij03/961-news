import React from "react";
import { View, Text, StyleSheet,Image } from "react-native";
import { COLORS } from "../theme";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
 
      <View style={styles.content}>
        <Image
              source={require("../assets/images/logo.png")}
              resizeMode="contain"
              style={{ width: 150, height: 150, marginLeft:10}}
                          />
        <Text style={styles.text}>The Fastest Growing News Channel</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    alignSelf:'center'
  },
});

export default HomeScreen;
