import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS, SIZES } from "../constants";

const Tab = createBottomTabNavigator();

import { HomeScreen, ProfileScreen, SettingsScreen } from "../screens";

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          elevation: 0,
          height: 100,
          backgroundColor: COLORS.black,
          borderTopColor: "transparent",
          //   borderRadius: 25,
          //   backgroundColor: "pink",
          //   ...styles.shadow,
        },
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name="movie"
              color={COLORS.primary}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name="account"
              color={COLORS.primary}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name="cog"
              color={COLORS.primary}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "red",
    shadowOffset: { widht: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
});
