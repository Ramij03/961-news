import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { setDeals } from "../redux/dealsSlice";
import { RootState } from "../redux/store";
import { COLORS, SIZES } from "../theme/theme"; // Importing COLORS and SIZES from theme
import DealCard from "../components/DealCard";
import IconButton from "../components/IconButton";
import SectionHeader from "../components/SectionHeader";
import Featured from "../components/Featured";

const DealsScreen = () => {
  const dispatch = useDispatch();
  const { popular, featured, doublePoints } = useSelector(
    (state: RootState) => state.deals
  );

  useEffect(() => {
    dispatch(setDeals());
  }, [dispatch]);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image source={require("../assets/images/logo.png")} style={styles.logo} />
          <Text style={styles.headerText}>Deals</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="menu" size={SIZES.font * 1.5} color={COLORS.black} />
        </TouchableOpacity>
      </View>

      {/* Search */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={SIZES.font} color={COLORS.gray} />
        <TextInput
          placeholder="Search"
          style={styles.input}
          placeholderTextColor={COLORS.gray}
        />
      </View>

      {/* Icon Buttons */}
      <View style={styles.iconsRow}>
        <IconButton icon="calendar" label="Bookings" />
        <IconButton icon="location" label="Discover" />
        <IconButton icon="gift-sharp" label="Earn" />
      </View>

      {/* Member Banner */}
      <View style={styles.banner}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Text style={styles.bannertitle}>Become a Member</Text>
            <Text style={styles.bannerSubtitle}>& start saving instantly!</Text>
          </View>
          <View style={styles.imgwrapper}>
            <Image style={styles.img} source={require("../assets/images/gift.png")} />
          </View>

          {/* Stars positioned under the gift image */}
          <View style={styles.starWrapper}>
            {/* Star 1 */}
            <Image
              style={[styles.star, { transform: [{ scale: 1 }, { rotate: "-30deg" }] }]}
              source={require("../assets/images/star.png")}
            />
            {/* Star 2 */}
            <Image
              style={[styles.star, { transform: [{ scale: 0.8 }, { rotate: "-15deg" }] }]}
              source={require("../assets/images/star.png")}
            />
            {/* Star 3 */}
            <Image
              style={[styles.star, { transform: [{ scale: 0.6 }, { rotate: "-8deg" }] }]}
              source={require("../assets/images/star.png")}
            />
          </View>
        </View>
      </View>

      {/* Popular Section */}
      <SectionHeader title="Popular" emoji="🔥" />
      <FlatList
        horizontal
        data={popular}
        renderItem={({ item }) => <DealCard deal={item} />}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: SIZES.base }}
      />

      {/* Featured Section */}
      <SectionHeader title="Featured" emoji="✨" />
      <FlatList
        horizontal
        data={featured}
        renderItem={({ item }) => <Featured deal={item} />}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingLeft: SIZES.base,
          paddingBottom: SIZES.base * 4,
        }}
      />

      {/* Double Points Section */}
      <SectionHeader title="Double Points" emoji="💎" />
      <FlatList
        horizontal
        data={doublePoints}
        renderItem={({ item }) => <DealCard deal={item} />}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingLeft: SIZES.base,
          paddingBottom: SIZES.base * 4,
        }}
      />
    </ScrollView>
  );
};

export default DealsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: SIZES.base,
    marginTop: SIZES.height * 0.05,
    marginHorizontal:SIZES.small-5
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 35,
    height: 35,
    resizeMode: "contain",
  },
  headerText: {
    marginLeft: 6,
    fontSize: SIZES.medium,
    fontWeight: "bold",
    color: COLORS.black,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.lightgray,
    marginHorizontal: SIZES.base,
    borderRadius: SIZES.radius * 5, // Increased border radius for a smoother look
    paddingHorizontal: 10,
    height: SIZES.height * 0.04, // Height adjusted to be more scalable
  },
  input: {
    marginLeft: 8,
    fontSize: SIZES.font,
    color: COLORS.gray,
  },
  iconsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: SIZES.base * 2,
    marginBottom: SIZES.base * 2,
  },
  banner: {
    width: "95%",
    height: SIZES.height * 0.13, // Adjusting the height based on screen size
    borderRadius: SIZES.radius,
    borderWidth: 1.5,
    borderColor: COLORS.red,
    alignSelf: "center",
    marginVertical: SIZES.base * 2,
    backgroundColor: COLORS.lightWhite,
  },
  bannertitle: {
    fontSize: SIZES.xLarge,
    fontWeight: "bold",
    color: COLORS.darkred,
    marginLeft: SIZES.base * 1.5,
    marginTop: SIZES.base,
  },
  bannerSubtitle: {
    fontSize: SIZES.large,
    fontWeight: "bold",
    color: COLORS.black,
    marginLeft: SIZES.base * 1.5,
  },
  img: {
    height: 130,
    width: 130,
  },
  imgwrapper: {
    position: "absolute",
    top: -40,
    right: 10,
  },
  starWrapper: {
    position: "absolute",
    bottom: -40,
    right: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    width: 120,
  },
  star: {
    height: 30,
    width: 30,
  },
});
