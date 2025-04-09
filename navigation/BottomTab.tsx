import React from "react";
import { createBottomTabNavigator, BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { View, Text, Image, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../theme/theme";
import NewsScreen from "../screens/NewsScreen";
import DealsScreen from "../screens/DealsScreen";
import PulseScreen from "../screens/PulseScreen";
import HomeScreen from "../screens/HomeScreen";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: {
          backgroundColor: COLORS.white,
          height: 70,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          elevation: 10,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="961"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../assets/images/logo.png")}
              resizeMode="contain"
              style={{ width: 78, height: 40, gap: 6, marginTop: 20 }}
            />
          ),
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="News"
        component={NewsScreen}
        options={{
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <MaterialCommunityIcons
              name="newspaper-variant-outline"
              size={24}
              color={focused ? COLORS.red : COLORS.gray}
            />
          ),
          tabBarLabel: ({ focused }: { focused: boolean }) => (
            <Text style={{ color: focused ? COLORS.red : COLORS.gray, fontSize: 12 }}>
              News
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Deals"
        component={DealsScreen}
        options={{
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <MaterialCommunityIcons
              name="tag-outline"
              size={24}
              color={focused ? COLORS.red : COLORS.gray}
            />
          ),
          tabBarLabel: ({ focused }: { focused: boolean }) => (
            <Text style={{ color: focused ? COLORS.red : COLORS.gray, fontSize: 12 }}>
              Deals
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Pulse"
        component={PulseScreen}
        options={{
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <MaterialCommunityIcons
              name="pulse"
              size={24}
              color={focused ? COLORS.red : COLORS.gray}
            />
          ),
          tabBarLabel: ({ focused }: { focused: boolean }) => (
            <Text style={{ color: focused ? COLORS.red : COLORS.gray, fontSize: 12 }}>
              Pulse
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
