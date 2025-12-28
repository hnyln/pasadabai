import { ResponsiveText } from "@/components/responsive-text";
import React from "react";
import { StatusBar, TextInput, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Entypo from "@expo/vector-icons/Entypo";
import { FontAwesome6 } from "@expo/vector-icons";

export default function Address() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="light-content" backgroundColor="#f9fafb" />
      <View className="px-6 bg-white h-full">
        <View className="py-4 relative items-center justify-center">
          <TouchableOpacity
            onPress={() => router.replace("/screens/(tabs)/bookmark")}
            activeOpacity={0.7}
            className="absolute left-0 w-10 h-10 items-center justify-center"
          >
            <FontAwesome6 name="chevron-left" size={18} color="black" />
          </TouchableOpacity>
          <ResponsiveText variant="heading" weight="bold">
            Set home address
          </ResponsiveText>
        </View>

        <View className="flex flex-col gap-2">
          {/* searh address here - mapbox */}
          <TextInput
            placeholder="Enter home address"
            placeholderTextColor="#9ca3af"
            className="rounded-full border border-gray-200 p-4 text-xl font-sans-medium"
          />
          <TouchableOpacity className="rounded-full p-4 items-center flex flex-row gap-6">
            <Entypo name="location-pin" size={24} color="black" />
            <ResponsiveText variant="subheading" weight="medium">
              Use your current location
            </ResponsiveText>
          </TouchableOpacity>
          <TouchableOpacity className="rounded-full p-4 items-center flex flex-row gap-6">
            <Entypo name="map" size={24} color="black" />
            <ResponsiveText variant="subheading" weight="medium">
              Choose on map
            </ResponsiveText>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
