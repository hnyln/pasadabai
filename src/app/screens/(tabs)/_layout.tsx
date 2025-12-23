import { Tabs } from "expo-router";
import React from "react";
import { Dimensions, Platform, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Octicons from "@expo/vector-icons/Octicons";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  const { height } = Dimensions.get("window");
  const insets = useSafeAreaInsets();

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#3b82f6",
          tabBarInactiveTintColor: "#6B7280",
          tabBarStyle: Platform.select({
            ios: {
              position: "absolute",
              height: height * 0.1,
              backgroundColor: "#FFFFFF",
              paddingBottom: insets.bottom > 0 ? 20 : 10,
              borderTopWidth: 1,
              borderTopColor: "#E5E7EB",
            },
            default: {
              height: height * 0.1,
              backgroundColor: "#FEFEFE",
              paddingBottom: 10,
              borderTopWidth: 1,
              borderTopColor: "#E5E7EB",
            },
          }),
          tabBarItemStyle: {
            paddingTop: 12,
          },
          tabBarLabelStyle: {
            fontSize: 12,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <Octicons
                name={focused ? "home-fill" : "home"}
                size={24}
                color={color}
                filled={focused}
              />
            ),
            tabBarLabelStyle: {
              fontSize: 12,
              fontFamily: "Poppins-Medium",
            },
          }}
        />
        <Tabs.Screen
          name="fare"
          options={{
            title: "Fare Guide",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "cash" : "cash-outline"}
                size={24}
                color={color}
              />
            ),
            tabBarLabelStyle: {
              fontSize: 12,
              fontFamily: "Poppins-Medium",
            },
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            title: "Bookmarks",
            tabBarIcon: ({ color, focused }) => (
              <Octicons
                name={focused ? "bookmark-filled" : "bookmark"}
                size={24}
                color={color}
              />
            ),
            tabBarLabelStyle: {
              fontSize: 12,
              fontFamily: "Poppins-Medium",
            },
          }}
        />
      </Tabs>
    </>
  );
}
