import React, { useRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import HomeScreen from ".";
import { router } from "expo-router";
import { ResponsiveText } from "@/components/responsive-text";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Bookmark() {
  return (
    <GestureHandlerRootView className="flex-1 bg-white">
      <View className="flex-1">
        <View className="py-4 relative items-center justify-center border-b border-gray-200 bg-white">
          <TouchableOpacity
            onPress={() => router.back()}
            activeOpacity={0.7}
            className="absolute left-4 w-10 h-10 items-center justify-center"
          >
            <FontAwesome6 name="chevron-left" size={18} color="#737373" />
          </TouchableOpacity>
          <ResponsiveText variant="subheading" weight="bold">
            Bookmarks
          </ResponsiveText>
        </View>

        <ScrollView className=" flex-1">
          <View className="px-6 bg-white">
            <TouchableOpacity
              className="flex-row items-center gap-4 px-4 py-6"
              onPress={() => router.push("/screens/(pages)/new-address")}
            >
              <Feather name="home" size={18} />
              <ResponsiveText weight="medium">Home</ResponsiveText>
            </TouchableOpacity>

            <View className="border-b border-gray-200" />

            <TouchableOpacity
              className="flex-row items-center gap-4 px-4 py-6"
              onPress={() => router.push("/screens/(pages)/new-address")}
            >
              <MaterialIcons name="work-outline" size={18} />
              <ResponsiveText weight="medium">Work</ResponsiveText>
            </TouchableOpacity>

            <View className="border-b border-gray-200" />

            <TouchableOpacity
              className="flex-row items-center gap-4 px-4 py-6"
              onPress={() => router.push("/screens/(pages)/new-address")}
            >
              <FontAwesome6 name="plus" size={16} />
              <ResponsiveText weight="medium">
                Save your favorite place
              </ResponsiveText>
            </TouchableOpacity>

            <View className="border-b border-gray-200" />
          </View>
        </ScrollView>
      </View>
    </GestureHandlerRootView>
  );
}
