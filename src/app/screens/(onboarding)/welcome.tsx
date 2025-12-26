import { router } from "expo-router";
import { View, TouchableOpacity, Text, Image } from "react-native";

export default function Welcome() {
  return (
    <View className="flex-1 justify-between bg-white p-8">

      <View className="items-center mt-40">
        <Image
          source={require("../../../assets/images/sample.png")}
          className="w-full h-64 p-6"
        />
        <Text className="text-3xl font-sans-bold text-center">
          Find your ride.
        </Text>
        <Text className="text-3xl font-sans-bold text-center">
          Smarter.
        </Text>
        <Text className="text-md font-sans-medium text-center px-6">
          Your guide to navigating Cebu's jeepney routes with ease.
        </Text>
      </View>

      <View className="items-center gap-2">
        <TouchableOpacity
          className="w-full"
          onPress={() => { router.replace("/screens/(tabs)"); console.log("Get Started button pressed");}}
        >
          <View className="bg-blue-500 rounded-xl flex items-center justify-center p-4 mb-2">
            <Text className="text-lg text-white font-sans-medium">
              Get Started
            </Text>
          </View>
        </TouchableOpacity>
        <Text className="underline text-gray-500 font-sans-medium">
          Enable Location for Better Suggestions
        </Text>
      </View>
    </View>
  );
}
