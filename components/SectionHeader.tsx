import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../theme/theme";

type SectionHeaderProps = {
  title: string;
  emoji?: string;
};

const SectionHeader = ({ title, emoji }: SectionHeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
      <Text style={styles.title}>{title }</Text>
        {emoji && <Text style={styles.emoji}>{emoji}</Text>} 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    marginLeft: 16,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  emoji: {
    fontSize: 20,
    marginRight: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.black,
    marginRight:6
  },

});

export default SectionHeader;
