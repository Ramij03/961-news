import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { COLORS, SIZES } from "../theme/theme"; // Importing COLORS and SIZES from theme

type FeaturedProps = {
  deal: {
    id: string;
    title: string;
    category: string;
    image: string;
  };
};

const Featured = ({ deal }: FeaturedProps) => {
  return (
    <TouchableOpacity style={styles.card}>
      {/* Image on the left with border-radius only on the left side */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: deal.image }} style={styles.image} />
      </View>

      {/* Info section to the right of the image */}
      <View style={styles.info}>
        {/* Title and Category */}
        <Text style={styles.title}>{deal.title}</Text>
        <Text style={styles.category}>{deal.category}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    height: SIZES.height * 0.14, // Adjust height based on screen size
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    marginRight: SIZES.base * 2, // Adjust margin based on base size
    overflow: "hidden",
    borderWidth: 1,
    borderColor: COLORS.lightgray,
    flexDirection: "row", // Place image and text in a row
    width: SIZES.width * 0.9, // Use 90% of the screen width
  },
  imageContainer: {
    width: SIZES.width * 0.3, // Adjust width to 30% of screen width
    height: SIZES.height * 0.12, // Adjust height to 12% of screen height
    marginHorizontal: SIZES.base, // Margin between image and text
    marginVertical: SIZES.base, // Vertical margin
    borderTopLeftRadius: SIZES.radius, // Border radius on the left side
    borderBottomLeftRadius: SIZES.radius,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  info: {
    flex: 1, // Take the remaining space next to the image
    justifyContent: "center",
    padding: SIZES.base, // Padding based on the base size from the theme
  },
  title: {
    fontSize: SIZES.medium, // Font size from theme
    fontWeight: "bold",
    color: COLORS.black,
  },
  category: {
    fontSize: SIZES.small, // Font size for category
    color: COLORS.gray,
  },
});

export default Featured;
