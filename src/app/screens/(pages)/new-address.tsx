import { router } from "expo-router";
import React from "react";
import { ScrollView, TouchableOpacity, View, Text } from "react-native";
import {
  Gesture,
  GestureHandlerRootView,
  TextInput,
} from "react-native-gesture-handler";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { ResponsiveText } from "@/components/responsive-text";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import Button from "@/components/button";

const NewAddress = () => {
  return (
    <GestureHandlerRootView className="flex-1 bg-white">
      <View className="flex-1 bg-white pb-4">
        <View className="py-4 relative items-center justify-center border-b border-gray-200 bg-white">
          <TouchableOpacity
            onPress={() => router.back()}
            activeOpacity={0.7}
            className="absolute left-4 w-10 h-10 items-center justify-center"
          >
            <FontAwesome6 name="chevron-left" size={18} color="#737373" />
          </TouchableOpacity>
          <ResponsiveText variant="subheading" weight="bold">
            Add to Bookmarks
          </ResponsiveText>
        </View>

        <ScrollView className="flex-1">
          <View className="px-6 bg-white gap-y-4 py-4">
            <View className="flex flex-col gap-2">
              <View>
                <ResponsiveText variant="body" weight="medium" className="mb-1">
                  Name <Text style={{ color: "#ef4444" }}>*</Text>
                </ResponsiveText>
              </View>
              <TextInput
                placeholder="e.g. Home, Office"
                placeholderTextColor="#9ca3af"
                className="rounded-xl border border-gray-200 p-4"
              />
            </View>

            <View className="flex flex-col gap-2">
              <View>
                <ResponsiveText variant="body" weight="medium" className="mb-1">
                  Address <Text style={{ color: "#ef4444" }}>*</Text>
                </ResponsiveText>
              </View>
              <TextInput
                placeholder="e.g. 123 Rizal St., Brgy. Poblacion"
                placeholderTextColor="#9ca3af"
                className="rounded-xl border border-gray-200 p-4"
              />
            </View>

            <View className="flex flex-col gap-2">
              <View>
                <ResponsiveText variant="body" weight="medium" className="mb-1">
                  Address Details <Text style={{ color: "#ef4444" }}>*</Text>
                </ResponsiveText>
              </View>
              <TextInput
                placeholder="e.g. Near public market, blue gate"
                placeholderTextColor="#9ca3af"
                className="rounded-xl border border-gray-200 p-4"
              />
            </View>
          </View>
        </ScrollView>

        <View className="px-6">
          <TouchableOpacity
            className="w-full"
            onPress={() => {
              router.replace("/screens/(tabs)/bookmark");
              console.log("Get Started button pressed");
            }}
          >
            <View className="bg-blue-500 rounded-xl flex items-center justify-center p-4 mb-2">
              <Text className="text-lg text-white font-sans-medium">
                Save Address
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

export default NewAddress;
