import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../theme/theme"; // Import COLORS and SIZES

type IconButtonProps = {
  icon: string;
  label: string;
  onPress?: () => void;
};

const IconButton = ({ icon, label, onPress }: IconButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Ionicons name={icon} size={SIZES.xxLarge+5} color={COLORS.red} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: COLORS.white,
    paddingVertical: SIZES.base * 1.2, // Scaled padding for vertical spacing
    paddingHorizontal: SIZES.base * 1.5, // Scaled padding for horizontal spacing
    borderRadius: SIZES.base, // Rounded corners using theme size
    marginHorizontal: SIZES.base, // Margin between buttons
    justifyContent: "center",
    width: 100,
  },
  label: {
    fontSize: SIZES.font, // Scalable font size
    fontWeight: "bold",
    color: COLORS.black,
    marginTop: SIZES.base / 2, // Small gap between icon and label
  },
});

export default IconButton;
