import { router } from "expo-router";
import { View, TouchableOpacity, Text } from "react-native";

export default function Welcome() {
  return (
    <View className="flex-1 items-center justify-center">
      <View className=" bg-blue-500 rounded-md flex items-center justify-center p-4">
        <TouchableOpacity
          className="bg-blue-500 "
          onPress={() => router.replace("/screens/(tabs)")}
        >
          <Text className="text-lg text-white font-sans-medium">
            Get Started uwu
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
