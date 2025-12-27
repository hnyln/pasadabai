import React, { useRef } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import HomeScreen from "../../(tabs)";
import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { View, Text, TouchableOpacity } from "react-native";
import { ResponsiveText } from "@/components/responsive-text";
import { router, useLocalSearchParams } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";

export default function Recent() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const { recent, color } = useLocalSearchParams();
  const recentRoutes = recent ? JSON.parse(recent as string) : [];
  const colors = color ? JSON.parse(color as string) : [];

  return (
    <GestureHandlerRootView className="flex-1 bg-white">
      {/* main content */}
      <HomeScreen />

      {/* drawer */}
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={["10%", "50%"]}
        index={2}
        enableOverDrag={false}
        topInset={90}
      >
        <View className="relative flex-row items-center p-4 py-2">
          <ResponsiveText variant="heading" weight="bold" className="text-2xl">
            Your Routes
          </ResponsiveText>

          {/* go back */}
          <TouchableOpacity
            onPress={() => router.replace("/screens/(tabs)/bookmark")}
            activeOpacity={0.7}
            className="absolute right-4 w-10 h-10 items-center justify-center"
          >
            <Entypo name="cross" size={22} color="black" />
          </TouchableOpacity>
        </View>

        <BottomSheetScrollView
          nestedScrollEnabled={true}
        >
          <View className="flex-1 p-4">
            {recentRoutes.map((item) => {
              const randomColor =
                colors[Math.floor(Math.random() * colors.length)];

              return (
                <TouchableOpacity
                  key={item.code}
                  className="flex-row items-center gap-4 pb-6 px-2"
                >
                  <View
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${randomColor.bg}`}
                  >
                    <Text
                      className={`font-sans-bold text-lg ${randomColor.text}`}
                    >
                      {item.code}
                    </Text>
                  </View>
                  <View className="flex-1 flex-row items-center justify-between">
                    <View>
                      <ResponsiveText weight="bold">{item.name}</ResponsiveText>
                      <ResponsiveText weight="regular">
                        Viewed. {item.distance}
                      </ResponsiveText>
                    </View>

                    {/* to bookmark */}
                    <TouchableOpacity className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-50">
                      <MaterialIcons
                        name="bookmark-border"
                        size={24}
                        color="black"
                      />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </BottomSheetScrollView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}
