import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../theme/theme"; // Import the theme

type DealCardProps = {
  deal: {
    id: string;
    title: string;
    category: string;
    rating: number;
    type: string;
    image: string;
    location: string;
    points: number;
    tags: string[];
  };
};

const DealCard = ({ deal }: DealCardProps) => {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: deal.image }} style={styles.image} />

        {/* Points and Heart Icon Row */}
        <View style={styles.pointsContainer}>
          {/* Points Container */}
          <View style={styles.ptWrapper}>
            <Ionicons name="flame" size={SIZES.font} color={COLORS.red} />
            <Text style={styles.points}>{deal.points}pts</Text>
          </View>

          {/* Heart Container */}
          <TouchableOpacity style={styles.heartWrapper}>
            <Ionicons name="heart-outline" size={SIZES.font * 1.5} color={COLORS.gray} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.info}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{deal.title}</Text>
          <View style={styles.rating}>
            <Ionicons name="star" size={SIZES.font} color={COLORS.red} />
            <Text style={styles.ratingText}>{deal.rating}</Text>
          </View>
        </View>

        {/* Type and Category */}
        <View style={styles.typeCategoryContainer}>
          <View style={styles.typeCategoryRow}>
            <Text style={styles.type}>{deal.type}</Text>
            <Text style={styles.cat}>{deal.category}</Text>
          </View>

          {/* Location */}
          <View style={styles.locationContainer}>
            <Ionicons name="location" size={SIZES.font * 0.85} color={COLORS.gray} />
            <Text style={styles.loco}>{deal.location}</Text>
          </View>
        </View>

        {/* Tags Section */}
        <View style={styles.tagsContainer}>
          {deal.tags.map((tag, index) => (
            <View style={styles.tagwrapper} key={index}>
              <Text style={styles.tag}>{tag}</Text>
            </View>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    height: SIZES.height * 0.3, // Adjust height based on screen height
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    marginRight: SIZES.base * 2, // Adjust margin using base size
    overflow: "hidden",
    borderWidth: 1,
    borderColor: COLORS.lightgray,
    width: SIZES.width * 0.85, // Use 85% of screen width
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  pointsContainer: {
    position: "absolute",
    top: SIZES.base,
    left: SIZES.base,
    right: SIZES.base,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ptWrapper: {
    height: SIZES.base * 3, // Adjust based on the theme size
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.base * 1.25, // Adjust padding
    borderRadius: 20,
  },
  points: {
    fontSize: SIZES.small,
    fontWeight: "bold",
    color: COLORS.gray,
    marginLeft: SIZES.base, // Adjust spacing
  },
  heartWrapper: {
    backgroundColor: COLORS.white,
    borderRadius: 50,
    height: SIZES.base * 5, // Adjust the size for the heart icon button
    width: SIZES.base * 5,
    justifyContent: "center",
    alignItems: "center",
  },
  info: {
    padding: SIZES.base * 2, // Adjust padding
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: SIZES.base, // Margin between sections
  },
  title: {
    fontSize: SIZES.medium,
    fontWeight: "bold",
    color: COLORS.black,
  },
  rating: {
    flexDirection: "row",
    alignItems:'center',
    gap: SIZES.base * 0.5, // Adjust the space between the star icon and rating number
  },
  ratingText: {
    fontSize: SIZES.medium,
    color: COLORS.black,
  },
  typeCategoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: SIZES.base, // Margin between sections
  },
  typeCategoryRow: {
    flexDirection: "row",
    gap: SIZES.base * 1.5, // Adjust the gap between type and category
  },
  type: {
    fontSize: SIZES.small,
    fontWeight: "bold",
    color: COLORS.gray,
  },
  cat: {
    fontSize: SIZES.small,
    fontWeight: "bold",
    color: COLORS.gray,
    alignSelf: "center",
  },
  locationContainer: {
    flexDirection: "row",
    gap: SIZES.base,
  },
  loco: {
    fontSize: SIZES.small,
    fontWeight: "bold",
    color: COLORS.gray,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: SIZES.base * 2, // Adjust the gap between tags
    marginVertical: SIZES.base,
  },
  tag: {
    fontSize: SIZES.small,
    fontWeight: "bold",
    color: COLORS.white,
  },
  tagwrapper: {
    backgroundColor: COLORS.red,
    borderRadius: SIZES.base,
    paddingHorizontal: SIZES.base * 1.25,
    paddingVertical: SIZES.base * 0.75,
    marginTop: SIZES.base * 0.75, // Margin between tags
  },
});

export default DealCard;
